#!/usr/bin/env python3
"""Read-only product image URL audit. No rehosting or publication of brand assets."""
import concurrent.futures,io,json,re
from pathlib import Path
import requests
from PIL import Image

ROOT=Path(__file__).resolve().parents[1]
js=(ROOT/"media.js").read_text("utf8")
section=js.split("export const OFFICIAL_PRODUCT_PHOTOS=",1)[1].split("export const IMAGE_AUDIT=",1)[0]
links={k:u for k,u in re.findall(r'(\w+)\s*:\s*"(https?://[^"]+)"',section)}
links["p03-NV-candidate"]="https://webshop.montbell.jp/common/images/product/prod_k/k_1133394_nv.jpg"
links["p03-NV-alt"]="https://webshop.montbell.jp/common/images/product/prod_c/c_1133394_nv.jpg"

def probe(item):
    key,url=item
    try:
        r=requests.get(url,timeout=18,headers={"User-Agent":"Mozilla/5.0 (compatible; Okinawa-Travel-2026-media-audit/1.0)","Accept":"image/webp,image/jpeg,image/png,image/*;q=0.8"},allow_redirects=True)
        media=r.headers.get("content-type","")
        good=r.ok and media.startswith("image/") and len(r.content)>3500
        dims=None
        if good:
            with Image.open(io.BytesIO(r.content)) as im:
                dims=list(im.size)
                good=min(dims)>=130
        return {"product":key,"status":r.status_code,"content_type":media,"bytes":len(r.content),"dimensions":dims,"reachable":good,"host":r.url.split("/")[2]}
    except Exception as ex:
        return {"product":key,"reachable":False,"error":str(ex)[:120]}

with concurrent.futures.ThreadPoolExecutor(max_workers=7) as pool:
    results=list(pool.map(probe,links.items()))
print(json.dumps(results,ensure_ascii=False,indent=2))
target=ROOT/"artifacts"
target.mkdir(parents=True,exist_ok=True)
(target/"product-image-audit.json").write_text(json.dumps(results,ensure_ascii=False,indent=2)+"\n","utf8")
print("Reachable images:",sum(x["reachable"] for x in results),"/",len(results))
