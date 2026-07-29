from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
ARTICLE = ROOT / "posts" / "how-to-read-photodetector-noise-spectrum.html"
PURPLE = "Brooks_Photonics_Logo.png"
WHITE = "Brooks_Photonics_Logo_Wht.png"

text = ARTICLE.read_text(encoding="utf-8")
footer_pattern = re.compile(r"(<footer\b[^>]*>)(.*?)(</footer>)", re.IGNORECASE | re.DOTALL)
replacements = 0


def update_footer(match: re.Match[str]) -> str:
    global replacements
    opening, body, closing = match.groups()
    body, count = re.subn(re.escape(PURPLE), WHITE, body, flags=re.IGNORECASE)
    replacements += count
    return opening + body + closing

updated = footer_pattern.sub(update_footer, text)
if replacements == 0:
    raise RuntimeError("No purple footer logo reference was found in the release article")
if WHITE in footer_pattern.sub("", updated):
    raise RuntimeError("White logo reference appeared outside the article footer")
ARTICLE.write_text(updated, encoding="utf-8")
print(f"Updated {ARTICLE.relative_to(ROOT)}")
