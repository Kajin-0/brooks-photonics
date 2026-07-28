from __future__ import annotations

import argparse
from datetime import datetime, timezone
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ARTICLE = ROOT / "posts" / "how-to-read-photodetector-noise-spectrum.html"
POSTS_JSON = ROOT / "posts" / "posts.json"
POSTS_PAGE = ROOT / "posts.html"
SITEMAP = ROOT / "sitemap.xml"

PUBLISHED_DATE = "2026-07-29"
DISPLAY_DATE = "July 29, 2026"
PUBLISHED_TIME = "2026-07-29T08:45:00-05:00"
TARGET_UTC_DATE = datetime(2026, 7, 29, tzinfo=timezone.utc).date()
ARTICLE_URL = "https://brooks-photonics.com/posts/how-to-read-photodetector-noise-spectrum.html"
IMAGE_URL = "https://brooks-photonics.com/assets/images/mct-noise-social-preview.png"
TITLE = "How to Read an HgCdTe (MCT) Noise Spectrum"
SUMMARY = (
    "A practical guide to separating 1/f noise, generation-recombination structure, "
    "Johnson noise, and measurement-chain limits in HgCdTe photodetectors."
)


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if new in text:
        return text
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"Expected one {label} anchor, found {count}")
    return text.replace(old, new, 1)


def publish_article() -> bool:
    original = ARTICLE.read_text(encoding="utf-8")
    text = original

    text = text.replace(
        '<meta name="robots" content="noindex,nofollow,noarchive"/>\n',
        "",
        1,
    )
    text = text.replace(
        '<meta name="twitter:card" content="summary"/>',
        '<meta name="twitter:card" content="summary_large_image"/>',
        1,
    )
    text = text.replace('.article-hero .eyebrow{color:#fff!important}\n', "", 1)

    social_anchor = (
        f'<meta property="og:url" content="{ARTICLE_URL}"/>'
    )
    social_metadata = f'''{social_anchor}
<meta property="og:image" content="{IMAGE_URL}"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="Brooks Photonics guide to reading an HgCdTe noise spectrum"/>
<meta property="article:published_time" content="{PUBLISHED_TIME}"/>
<meta property="article:modified_time" content="{PUBLISHED_TIME}"/>
<meta property="article:author" content="Terence Fisher"/>
<meta property="article:section" content="Noise and bandwidth"/>
<meta name="author" content="Terence Fisher"/>
<meta name="twitter:image" content="{IMAGE_URL}"/>
<meta name="twitter:image:alt" content="Brooks Photonics guide to reading an HgCdTe noise spectrum"/>'''
    text = replace_once(text, social_anchor, social_metadata, "social metadata")

    json_ld_anchor = "<style>"
    json_ld = f'''<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "{TITLE}",
  "description": "{SUMMARY}",
  "image": "{IMAGE_URL}",
  "datePublished": "{PUBLISHED_TIME}",
  "dateModified": "{PUBLISHED_TIME}",
  "mainEntityOfPage": {{
    "@type": "WebPage",
    "@id": "{ARTICLE_URL}"
  }},
  "author": {{
    "@type": "Person",
    "name": "Terence Fisher"
  }},
  "publisher": {{
    "@type": "Organization",
    "name": "Brooks Photonics",
    "url": "https://brooks-photonics.com/"
  }},
  "about": [
    "HgCdTe photodetectors",
    "noise amplitude spectral density",
    "generation-recombination noise",
    "Johnson-Nyquist noise"
  ]
}}
</script>
<style>'''
    text = replace_once(text, json_ld_anchor, json_ld, "JSON-LD")

    draft_meta = (
        '<div class="article-meta"><span>Unlisted draft</span>'
        '<span>12-minute read</span></div>'
    )
    published_meta = (
        f'<div class="article-meta"><time datetime="{PUBLISHED_DATE}">{DISPLAY_DATE}</time>'
        '<span>Terence Fisher</span><span>12-minute read</span></div>'
    )
    text = replace_once(text, draft_meta, published_meta, "article metadata")
    text = text.replace(
        '<div class="draft-banner">Unlisted draft — excluded from the Posts page and marked no-index for search engines.</div>\n',
        "",
        1,
    )

    if text != original:
        ARTICLE.write_text(text, encoding="utf-8")
        return True
    return False


def publish_posts_json() -> bool:
    data = json.loads(POSTS_JSON.read_text(encoding="utf-8"))
    posts = data.setdefault("posts", [])
    file_path = "posts/how-to-read-photodetector-noise-spectrum.html"
    if any(post.get("file") == file_path for post in posts):
        return False

    posts.append(
        {
            "subject": "Noise and bandwidth",
            "title": TITLE,
            "file": file_path,
            "date": PUBLISHED_DATE,
            "reading_time": "12-minute read",
            "summary": SUMMARY,
        }
    )
    POSTS_JSON.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    return True


def publish_fallback_card() -> bool:
    original = POSTS_PAGE.read_text(encoding="utf-8")
    if 'href="posts/how-to-read-photodetector-noise-spectrum.html"' in original:
        return False

    anchor = '<article class="post-card">\n<p class="post-card__meta"><time datetime="2026-07-28">'
    card = f'''<article class="post-card">
<p class="post-card__meta"><time datetime="{PUBLISHED_DATE}">{DISPLAY_DATE}</time><span>12-minute read</span></p>
<h3><a href="posts/how-to-read-photodetector-noise-spectrum.html">{TITLE}</a></h3>
<p>{SUMMARY}</p>
<a class="post-card__link" href="posts/how-to-read-photodetector-noise-spectrum.html">Read article</a>
</article>
'''
    updated = replace_once(original, anchor, card + anchor, "fallback post card")
    POSTS_PAGE.write_text(updated, encoding="utf-8")
    return True


def publish_sitemap() -> bool:
    original = SITEMAP.read_text(encoding="utf-8")
    text = original.replace(
        '<url><loc>https://brooks-photonics.com/posts.html</loc><lastmod>2026-07-28</lastmod></url>',
        f'<url><loc>https://brooks-photonics.com/posts.html</loc><lastmod>{PUBLISHED_DATE}</lastmod></url>',
        1,
    )
    if ARTICLE_URL not in text:
        anchor = (
            '  <url><loc>https://brooks-photonics.com/posts/lock-in-noise-enbw.html</loc>'
            '<lastmod>2026-07-28</lastmod></url>'
        )
        entry = f'  <url><loc>{ARTICLE_URL}</loc><lastmod>{PUBLISHED_DATE}</lastmod></url>\n'
        text = replace_once(text, anchor, entry + anchor, "sitemap article")

    if text != original:
        SITEMAP.write_text(text, encoding="utf-8")
        return True
    return False


def main() -> None:
    parser = argparse.ArgumentParser(description="Publish the scheduled MCT noise article.")
    parser.add_argument(
        "--force",
        action="store_true",
        help="Publish immediately instead of enforcing the scheduled UTC date.",
    )
    args = parser.parse_args()

    today_utc = datetime.now(timezone.utc).date()
    if not args.force and today_utc != TARGET_UTC_DATE:
        print(f"No publication changes: UTC date is {today_utc}, target is {TARGET_UTC_DATE}.")
        return

    changed = {
        "article": publish_article(),
        "posts_json": publish_posts_json(),
        "fallback_card": publish_fallback_card(),
        "sitemap": publish_sitemap(),
    }
    print(json.dumps(changed, indent=2))


if __name__ == "__main__":
    main()
