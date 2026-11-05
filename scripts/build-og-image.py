#!/usr/bin/env python3
"""Build the official Okinawa Trip social share card from a locally licensed scene.

Photo: Wikimedia Commons original, attribution is recorded in assets/photos/credits.json.
Output is a new raster image (JPEG) so Facebook/LINE/Twitter preview can display it.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import json

ROOT=Path(__file__).resolve().parents[1]
PHOTO=ROOT/"assets/photos/kouri-bridge-202006-jpg.webp"
OUT=ROOT/"assets/okinawa-og-2026-v2.jpg"
W,H=1200,630
if not PHOTO.exists():
    raise SystemExit("Missing licensed source image: "+str(PHOTO))
with open(ROOT/"assets/photos/credits.json",encoding="utf8") as f:
    credits=json.load(f)
if not any(x.get("image")==PHOTO.name for x in credits.get("photos",[])):
    raise SystemExit("Source photo missing from license record")

original=Image.open(PHOTO).convert("RGB")
ratio=max(W/original.width,H/original.height)
nw,nh=round(original.width*ratio),round(original.height*ratio)
im=original.resize((nw,nh),Image.Resampling.LANCZOS)
# Keep the landmark toward the center/right where the contrast over image stays clear.
crop_x=max(0,(nw-W)//2)
crop_y=max(0,(nh-H)//2)
im=im.crop((crop_x,crop_y,crop_x+W,crop_y+H))
layer=Image.new("RGBA",(W,H),(0,0,0,0))
px=layer.load()
# Controlled ocean-teal fade: dark left for readable headline; sea photo visible right.
for x in range(W):
    opacity=round(224*max(0,1-x/(W*.93))**1.4)
    for y in range(H):
        px[x,y]=(6,47,62,opacity)
im=Image.alpha_composite(im.convert("RGBA"),layer)
draw=ImageDraw.Draw(im)
# Soft ivory badge
draw.rounded_rectangle((72,66,309,107),radius=20,fill=(235,245,235,230))
font_latin="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
font_cjk="/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"
font_cjk_regular="/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"
for path in (font_latin,font_cjk,font_cjk_regular):
    if not Path(path).exists():raise SystemExit("Missing font "+path)
draw.text((90,73),"OKINAWA  ·  2026",font=ImageFont.truetype(font_latin,18),fill=(18,94,102,255))
draw.text((72,171),"沖繩，慢慢走。",font=ImageFont.truetype(font_cjk,76),fill=(255,255,255,255),stroke_width=1,stroke_fill=(25,72,78,70))
draw.line((75,295,377,295),fill=(246,221,174,230),width=5)
draw.text((74,330),"2026 沖繩之旅",font=ImageFont.truetype(font_cjk,37),fill=(255,255,255,255))
draw.text((76,407),"六天五夜・海景、美食與購物時光",font=ImageFont.truetype(font_cjk_regular,25),fill=(232,245,242,255))
draw.rounded_rectangle((74,524,383,578),radius=26,fill=(239,242,223,230))
draw.text((97,536),"2026.11.11 — 11.16",font=ImageFont.truetype(font_latin,22),fill=(21,85,94,255))
im.convert("RGB").save(OUT,quality=85,optimize=True,subsampling=0)
with Image.open(OUT) as check:
    assert check.size==(1200,630)
print(f"Created {OUT.name} {OUT.stat().st_size:,} bytes, 1200x630")
