from __future__ import annotations

from pathlib import Path
import re

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
IMAGES = ROOT / "assets" / "images"
PURPLE_NAME = "Brooks_Photonics_Logo.png"
WHITE_NAME = "Brooks_Photonics_Logo_Wht.png"


def create_white_logo() -> None:
    source_path = IMAGES / PURPLE_NAME
    output_path = IMAGES / WHITE_NAME
    if not source_path.exists():
        raise FileNotFoundError(f"Missing source logo: {source_path.relative_to(ROOT)}")

    source = Image.open(source_path).convert("RGBA")
    alpha = source.getchannel("A")

    # Preserve the source transparency and antialiased edge coverage while
    # replacing every visible logo pixel with solid white.
    white = Image.new("RGBA", source.size, (255, 255, 255, 255))
    white.putalpha(alpha)
    white.save(output_path, optimize=True)


def replace_footer_references() -> list[Path]:
    footer_pattern = re.compile(r"(<footer\b[^>]*>)(.*?)(</footer>)", re.IGNORECASE | re.DOTALL)
    changed: list[Path] = []

    for path in sorted(ROOT.rglob("*.html")):
        if ".git" in path.parts:
            continue

        original = path.read_text(encoding="utf-8")
        replacements = 0

        def update_footer(match: re.Match[str]) -> str:
            nonlocal replacements
            opening, body, closing = match.groups()
            updated_body, count = re.subn(
                rf"(?i){re.escape(PURPLE_NAME)}",
                WHITE_NAME,
                body,
            )
            replacements += count
            return opening + updated_body + closing

        updated = footer_pattern.sub(update_footer, original)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed.append(path)

        # The white asset must never replace a header or other non-footer logo.
        outside_footers = footer_pattern.sub("", updated)
        if WHITE_NAME in outside_footers:
            raise RuntimeError(
                f"White logo reference found outside a footer in {path.relative_to(ROOT)}"
            )

    if not changed:
        raise RuntimeError("No footer logo references were changed")
    return changed


def validate(changed: list[Path]) -> None:
    output_path = IMAGES / WHITE_NAME
    with Image.open(output_path) as image:
        if image.mode != "RGBA":
            raise RuntimeError("White footer logo is not RGBA")
        alpha = image.getchannel("A")
        if alpha.getextrema() == (255, 255):
            raise RuntimeError("White footer logo has no transparent pixels")
        rgb = image.convert("RGBA")
        visible = [pixel[:3] for pixel in rgb.getdata() if pixel[3] > 0]
        if not visible or any(pixel != (255, 255, 255) for pixel in visible):
            raise RuntimeError("Visible logo pixels are not all white")

    print(f"Created {output_path.relative_to(ROOT)}")
    for path in changed:
        print(f"Updated footer in {path.relative_to(ROOT)}")


def main() -> None:
    create_white_logo()
    changed = replace_footer_references()
    validate(changed)


if __name__ == "__main__":
    main()
