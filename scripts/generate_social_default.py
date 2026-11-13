#!/usr/bin/env python3
"""Render Brooks Photonics homepage and radiometry Open Graph cards (1200x630 PNG).

Dependency: Pillow (pip install Pillow)
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import math

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/images/social-default.png"
W, H, SCALE = 1200, 630, 2
PURPLE = (123, 63, 178)
INK = (17, 24, 39)
GRAY = (74, 85, 104)
BG = (252, 253, 255)


def font(size, bold=False):
    paths = ([
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
    ] if bold else [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
    ])
    for path in paths:
        if Path(path).is_file():
            return ImageFont.truetype(path, size * SCALE)
    raise RuntimeError("Required sans-serif TrueType font unavailable")


def render(out=OUT, heading="Infrared Detector", emphasis="Analysis", detail="I–V  •  Noise  •  Spectral Response", heading_size=63, emphasis_size=88):
    image = Image.new("RGB", (W * SCALE, H * SCALE), BG)
    draw = ImageDraw.Draw(image)

    def rectangle(x0, y0, x1, y1, fill):
        draw.rectangle(tuple(round(v * SCALE) for v in (x0, y0, x1, y1)), fill=fill)

    def line(points, color, width=1):
        draw.line([(round(x * SCALE), round(y * SCALE)) for x, y in points],
                  fill=color, width=round(width * SCALE), joint="curve")

    def text(x, y, value, color, size, bold=False):
        draw.text((x * SCALE, y * SCALE), value, fill=color, font=font(size, bold))

    # The curves are decorative illustrations, not measured device data.
    for x in range(770, W + 60, 62):
        line([(x, 80), (x, 575)], (237, 239, 246))
    for y in range(100, 576, 62):
        line([(760, y), (W, y)], (237, 239, 246))

    colors = [(106, 43, 179), (145, 96, 203), (177, 142, 228),
              (198, 176, 238), (217, 202, 246)]
    for idx, color in enumerate(colors):
        peak, spread, amp = 1010 + 11 * idx, 64 + 19 * idx, 325 - 42 * idx
        points = [
            (x, 543 - amp * math.exp(-0.5 * ((x - peak) / spread)**2))
            for x in range(695, W + 12, 3)
        ]
        line(points, color, 4 if idx == 0 else 2)

    rectangle(0, 0, 768, 630, BG)
    rectangle(67, 77, 77, 123, PURPLE)
    text(101, 75, "BROOKS PHOTONICS", INK, 30, True)
    text(65, 200, heading, INK, heading_size, True)
    text(65, 296, emphasis, PURPLE, emphasis_size, True)
    text(68, 437, detail, GRAY, 26)
    rectangle(68, 528, 433, 531, PURPLE)
    text(68, 544, "brooks-photonics.com", INK, 29)

    image = image.resize((W, H), Image.Resampling.LANCZOS)
    out.parent.mkdir(parents=True, exist_ok=True)
    image.save(out, "PNG", optimize=True)
    print(f"Rendered {out.relative_to(ROOT)}: {W}x{H}, {out.stat().st_size} bytes")


if __name__ == "__main__":
    render()
    render(ROOT / "assets/images/radiometry-source-to-detector-social.png",
           heading="Source Radiance", emphasis="Detector Signal",
           detail="Radiometry  •  Optics  •  Responsivity",
           heading_size=61, emphasis_size=75)
