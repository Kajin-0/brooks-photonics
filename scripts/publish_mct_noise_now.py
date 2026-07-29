from __future__ import annotations

from pathlib import Path
import json


ROOT = Path(__file__).resolve().parents[1]
ARTICLE = ROOT / "posts" / "how-to-read-photodetector-noise-spectrum.html"
POSTS_HTML = ROOT / "posts.html"
POSTS_JSON = ROOT / "posts" / "posts.json"
SITEMAP = ROOT / "sitemap.xml"
WORKFLOW = ROOT / ".github" / "workflows" / "publish-mct-noise-spectrum.yml"


def replace_date(text: str) -> str:
    return text.replace("2026-07-28", "2026-07-29").replace("July 28, 2026", "July 29, 2026")


def main() -> None:
    article = replace_date(ARTICLE.read_text(encoding="utf-8"))
    ARTICLE.write_text(article, encoding="utf-8")

    data = json.loads(POSTS_JSON.read_text(encoding="utf-8"))
    target = "posts/how-to-read-photodetector-noise-spectrum.html"
    matches = [post for post in data.get("posts", []) if post.get("file") == target]
    if len(matches) != 1:
        raise RuntimeError(f"Expected one target post, found {len(matches)}")
    matches[0]["date"] = "2026-07-29"
    POSTS_JSON.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")

    posts_html = replace_date(POSTS_HTML.read_text(encoding="utf-8"))
    POSTS_HTML.write_text(posts_html, encoding="utf-8")

    sitemap = replace_date(SITEMAP.read_text(encoding="utf-8"))
    SITEMAP.write_text(sitemap, encoding="utf-8")

    if WORKFLOW.exists():
        WORKFLOW.unlink()

    checks = {
        ARTICLE: [
            'index,follow,max-image-preview:large',
            '<time datetime="2026-07-29">July 29, 2026</time>',
            'How to Read an HgCdTe (MCT) Noise Spectrum',
        ],
        POSTS_HTML: [target, 'datetime="2026-07-29"'],
        POSTS_JSON: [target, '"date": "2026-07-29"'],
        SITEMAP: [target, '<lastmod>2026-07-29</lastmod>'],
    }
    for path, markers in checks.items():
        text = path.read_text(encoding="utf-8")
        for marker in markers:
            if marker not in text:
                raise RuntimeError(f"Missing {marker!r} in {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
