#!/usr/bin/env python3
"""Safely localize openly licensed Okinawa scene photos, never shopping reference images.

Queries Wikimedia Commons for authoritative copyright metadata, downloads only CC0,
public-domain, CC BY, or CC BY-SA images, compresses WebP, preserves per-file credits.
Unverified/absent photos are left at existing links rather than substituted with
unrelated pictures. No original traveler screenshots or copyrighted brand packshots.
"""
from __future__ import annotations
import html
import io
import json
import re
import time
from pathlib import Path
from urllib.parse import quote
import requests
from PIL import Image, ImageOps

ROOT=Path(__file__).resolve().parents[1]
MEDIA=ROOT/"media.js"
PHOTO_DIR=ROOT/"assets/photos"
SESSION=requests.Session()
SESSION.headers.update({"User-Agent":"OkinawaTrip2026TravelGuide/1.2 (attribution: https://github.com/squallorc-dot/okinawa-trip-2026)","Accept":"application/json,image/avif,image/webp,image/jpeg,image/png,image/*;q=0.8"})
API="https://commons.wikimedia.org/w/api.php"
ALLOWED=("cc0","public domain","cc by","cc-by","pd-old","pd-self","pd-author")
VERSION_OLD="2026.11.05-06"
VERSION_NEW="2026.11.05-07"
CACHE_OLD="20261105-06"
CACHE_NEW="20261105-07"

def get(url,*,params=None):
    last=None
    for i in range(3):
        try:
            r=SESSION.get(url,params=params,timeout=30)
            r.raise_for_status()
            return r
        except requests.RequestException as e:
            last=e
            print(f"  retry {i+1} {type(e).__name__}: {str(e)[:140]}",flush=True)
            time.sleep(2+i*2)
    raise RuntimeError("HTTP request failed: "+str(last))

def commons_info(filename):
    data=get(API,params={
        "action":"query","format":"json","prop":"imageinfo",
        "iiprop":"url|extmetadata|size","iiurlwidth":"1280",
        "titles":"File:"+filename,
        "formatversion":"2",
    }).json()
    pages=data.get("query",{}).get("pages",[])
    if not pages or "missing" in pages[0]:raise ValueError("Commons file not found: "+filename)
    img=pages[0].get("imageinfo",[None])[0]
    if not img:raise ValueError("Commons imageinfo unavailable")
    meta=img.get("extmetadata",{})
    license_label=html.unescape(meta.get("LicenseShortName",{}).get("value","")).strip()
    low=license_label.casefold().replace("-"," ")
    if not any(low.startswith(a.replace("-"," ")) for a in ALLOWED):
        raise PermissionError("Unsupported or unclear rehosting license: "+license_label)
    if any(x in low for x in (" nc"," nd","noncommercial","no derivatives")):
        raise PermissionError("Noncommercial or no-derivatives license: "+license_label)
    author=html.unescape(re.sub(r"<[^>]*>"," ",meta.get("Artist",{}).get("value","Unknown"))).strip()
    author=re.sub(r"\s+"," ",author)[:350]
    return {
        "url":img.get("thumburl") or img.get("url"),"license":license_label,
        "license_url":meta.get("LicenseUrl",{}).get("value",""),
        "author":author,
        "page":"https://commons.wikimedia.org/wiki/File:"+quote(filename.replace(" ","_"),safe="-_.()"),
        "dimensions":[img.get("width"),img.get("height")],
    }

def parse_photos(js):
    section1=js.split("export const SCENE_PHOTOS=",1)[1].split("export const DAY_PHOTOS=",1)[0]
    section2=js.split("export const DAY_PHOTOS=",1)[1].split("export const OFFICIAL_PRODUCT_PHOTOS=",1)[0]
    pattern=r'([\w]+)\s*:\s*commons\("([^"]+)"\)'
    return [("scene",key,filename) for key,filename in re.findall(pattern,section1)]+[("cover",key,filename) for key,filename in re.findall(pattern,section2)]

def build():
    raw=MEDIA.read_text("utf8")
    items=parse_photos(raw)
    if len(items)<10:raise RuntimeError("Source list unexpectedly short; no changes made")
    successes={}
    errors=[]
    credits=[]
    for _,_,filename in items:
        if filename in successes:continue
        try:
            meta=commons_info(filename)
            image_bytes=get(meta["url"]).content
            if not 6000<len(image_bytes)<35_000_000:raise ValueError("Unusual image byte count")
            with Image.open(io.BytesIO(image_bytes)) as im:
                im=ImageOps.exif_transpose(im).convert("RGB")
                if min(im.size)<360:raise ValueError("Image too small for destination")
                dims=list(im.size)
                im.thumbnail((1500,1500),Image.Resampling.LANCZOS)
                output=io.BytesIO()
                im.save(output,"WEBP",quality=79,method=6)
                webp=output.getvalue()
            if len(webp)<5000:raise ValueError("Converted file suspiciously small")
            stem=re.sub(r"[^a-z0-9]+","-",filename.lower()).strip("-")[:52]
            image_name=f"{stem}.webp"
            successes[filename]=(image_name,webp)
            credits.append({
                "image":image_name,"subject":filename,"source_page":meta["page"],
                "author":meta["author"],"license":meta["license"],
                "license_url":meta["license_url"],"original_dimensions":dims,
                "modification":"Resized and converted to WebP for use on a travel guide",
                "file_bytes":len(webp)
            })
            print(f"OK {filename} -> {image_name} {len(webp):,} bytes [{meta['license']}]",flush=True)
        except Exception as err:
            errors.append({"file":filename,"reason":str(err)[:320]})
            print("SKIPPED",filename,str(err)[:220],flush=True)
    if len(successes)<3:
        raise RuntimeError("Fewer than 3 eligible scenes localized; aborting without changing files")
    PHOTO_DIR.mkdir(parents=True,exist_ok=True)
    for image_name,webp in successes.values():
        (PHOTO_DIR/image_name).write_bytes(webp)
    (PHOTO_DIR/"credits.json").write_text(json.dumps({
        "purpose":"Open-licensed scenes; brand product photos and traveler reference images are intentionally excluded",
        "photos":credits,"skipped":errors
    },ensure_ascii=False,indent=2)+"\n","utf8")
    updated=raw
    for kind,key,filename in items:
        if filename not in successes:continue
        out=successes[filename][0]
        expression=f'{key}:commons("{filename}")'
        target=f'{key}:"./assets/photos/{out}"'
        if updated.count(expression)!=1:
            raise RuntimeError(f"Unexpected mapping ambiguity for {key}: {updated.count(expression)}")
        updated=updated.replace(expression,target)
    MEDIA.write_text(updated,"utf8")
    sw=ROOT/"sw.js"
    cache=sw.read_text("utf8")
    if VERSION_OLD not in cache:raise RuntimeError("Unexpected service-worker version")
    photo_lines=",".join("'./assets/photos/"+v[0]+"'" for v in successes.values())
    marker="'./manifest.webmanifest','./refresh.html'"
    if marker not in cache:raise RuntimeError("Unexpected offline assets list")
    cache=cache.replace(marker,marker+","+photo_lines)
    cache=cache.replace(VERSION_OLD,VERSION_NEW).replace(CACHE_OLD,CACHE_NEW)
    sw.write_text(cache,"utf8")
    for name in ("data.js","app.js","index.html"):
        p=ROOT/name
        s=p.read_text("utf8")
        if VERSION_OLD not in s and CACHE_OLD not in s:raise RuntimeError(name+" has a different version")
        p.write_text(s.replace(VERSION_OLD,VERSION_NEW).replace(CACHE_OLD,CACHE_NEW),"utf8")
    version=ROOT/"version.json"
    v=json.loads(version.read_text("utf8"))
    if v["version"]!=VERSION_OLD:raise RuntimeError("Version mismatch")
    v.update(version=VERSION_NEW,status="licensed-scenes-localized")
    version.write_text(json.dumps(v,ensure_ascii=False,indent=2)+"\n","utf8")
    print(json.dumps({"localized_photos":len(successes),"mapped_scene_roles":len(items)-len(errors),"not_localized":errors},ensure_ascii=False,indent=2),flush=True)

if __name__=="__main__":
    build()
