from __future__ import annotations

from pathlib import Path
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "images" / "mct-noise-social-preview.png"

W, H = 1200, 630
PURPLE = "#7135b0"
PURPLE_DARK = "#4f217d"
INK = "#17131d"
SOFT = "#645e6c"
BLUE = "#1736d1"
MAGENTA = "#c300ff"
WHITE = "#ffffff"
LINE = "#e4dfe8"
BACKGROUND = "#f5f3f7"


def font_path(bold: bool = False) -> str:
    candidates = (
        [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
            "/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf",
        ]
        if bold
        else [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            "/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf",
        ]
    )
    for candidate in candidates:
        if os.path.exists(candidate):
            return candidate
    raise FileNotFoundError("No supported system font found")


def main() -> None:
    image = Image.new("RGB", (W, H), BACKGROUND)
    draw = ImageDraw.Draw(image)

    regular = font_path(False)
    bold = font_path(True)
    font_small = ImageFont.truetype(bold, 26)
    font_title = ImageFont.truetype(bold, 58)
    font_subtitle = ImageFont.truetype(regular, 28)
    font_brand = ImageFont.truetype(bold, 24)
    font_axis = ImageFont.truetype(regular, 18)
    font_label = ImageFont.truetype(bold, 20)

    draw.rectangle([0, 0, W, 18], fill=PURPLE)
    draw.text((72, 55), "BROOKS PHOTONICS", font=font_brand, fill=PURPLE_DARK)
    draw.text((72, 110), "How to Read an", font=font_title, fill=INK)
    draw.text((72, 175), "HgCdTe Noise Spectrum", font=font_title, fill=INK)
    draw.text(
        (76, 255),
        "1/f noise • GR rolloff • Johnson floor • measurement-chain limits",
        font=font_subtitle,
        fill=SOFT,
    )

    panel = (72, 330, 1128, 570)
    draw.rounded_rectangle(panel, radius=18, fill=WHITE, outline=LINE, width=2)
    left, top, right, bottom = 134, 354, 1098, 528

    for index in range(6):
        x = left + (right - left) * index / 5
        draw.line([x, top, x, bottom], fill="#eceef2", width=1)
    for index in range(4):
        y = top + (bottom - top) * index / 3
        draw.line([left, y, right, y], fill="#eceef2", width=1)
    draw.line([left, bottom, right, bottom], fill=INK, width=2)
    draw.line([left, top, left, bottom], fill=INK, width=2)

    x_norm = np.linspace(0.0, 1.0, 500)
    measured = 0.18 + 0.22 * (1.0 - np.exp(-x_norm * 10.0))
    measured += 0.34 / (1.0 + np.exp(-(x_norm - 0.55) * 17.0))
    ideal = 0.19 + 0.20 * (1.0 - np.exp(-x_norm * 9.0))
    ideal += 0.32 / (1.0 + np.exp(-(x_norm - 0.56) * 18.0))

    x_pixels = left + x_norm * (right - left)
    measured_y = top + measured * (bottom - top)
    ideal_y = top + ideal * (bottom - top)
    draw.line(list(zip(x_pixels, measured_y)), fill=BLUE, width=5, joint="curve")
    for start in range(0, len(x_norm) - 1, 12):
        end = min(start + 7, len(x_norm) - 1)
        draw.line(
            list(zip(x_pixels[start : end + 1], ideal_y[start : end + 1])),
            fill=MAGENTA,
            width=4,
        )

    draw.text((left + 35, top + 10), "1/f", font=font_label, fill=PURPLE_DARK)
    draw.text((left + (right - left) * 0.42, top + 58), "GR", font=font_label, fill=PURPLE_DARK)
    draw.text((right - 145, bottom - 38), "Johnson", font=font_label, fill=PURPLE_DARK)
    draw.text((right - 90, bottom + 10), "f", font=font_axis, fill=SOFT)
    draw.text(
        (72, 594),
        "Practical infrared-detector noise interpretation",
        font=font_small,
        fill=PURPLE_DARK,
    )

    OUT.parent.mkdir(parents=True, exist_ok=True)
    image.save(OUT, format="PNG", optimize=True)


if __name__ == "__main__":
    main()
