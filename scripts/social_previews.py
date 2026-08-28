#!/usr/bin/env python3
"""Keep every Brooks Photonics post's social-preview metadata consistent.

Usage:
  python scripts/social_previews.py --fix
  python scripts/social_previews.py --check

posts/posts.json is the source of truth. Each post may define:
  "social_image": "/assets/images/example-social.png"
  "social_alt": "Description of the preview image"

If social_image is omitted, /assets/images/social-default.png is used.
All social images must be 1200x630 PNG files.
"""

from __future__ import annotations

import argparse
import html as html_lib
import json
import re
import struct
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
POSTS_JSON = ROOT / "posts" / "posts.json"
SITE = "https://brooks-photonics.com"
DEFAULT_IMAGE = "/assets/images/social-default.png"

NAME_KEYS = (
    "robots",
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image",
    "twitter:image:alt",
)

PROPERTY_KEYS = (
    "og:type",
    "og:site_name",
    "og:title",
    "og:description",
    "og:url",
    "og:image",
    "og:image:type",
    "og:image:width",
    "og:image:height",
    "og:image:alt",
    "article:section",
    "article:published_time",
)

MANAGED_START = "<!-- SOCIAL_PREVIEW_START: managed by scripts/social_previews.py -->"
MANAGED_END = "<!-- SOCIAL_PREVIEW_END -->"


def load_posts() -> list[dict]:
    data = json.loads(POSTS_JSON.read_text(encoding="utf-8"))
    posts = data.get("posts")
    if not isinstance(posts, list):
        raise SystemExit("posts/posts.json must contain a top-level 'posts' array")
    return posts


def canonical_url(post: dict) -> str:
    file_value = str(post.get("file", "")).strip()
    if not file_value:
        raise ValueError("missing post file")
    path = "/" + file_value.strip("/") + "/"
    return SITE + path


def html_path(post: dict) -> Path:
    return ROOT / str(post["file"]).strip("/") / "index.html"


def social_image_rel(post: dict) -> str:
    value = str(post.get("social_image") or DEFAULT_IMAGE).strip()
    if not value.startswith("/"):
        value = "/" + value
    return value


def social_image_url(post: dict) -> str:
    return SITE + social_image_rel(post)


def social_alt(post: dict) -> str:
    value = str(post.get("social_alt") or "").strip()
    if value:
        return value
    return f"{post.get('title', 'Brooks Photonics technical article')} | Brooks Photonics"


def esc(value: object) -> str:
    return html_lib.escape(str(value), quote=True)


def managed_block(post: dict) -> str:
    title = str(post.get("title", "")).strip()
    summary = str(post.get("summary", "")).strip()
    subject = str(post.get("subject", "Technical article")).strip()
    date = str(post.get("date", "")).strip()
    canonical = canonical_url(post)
    image = social_image_url(post)
    alt = social_alt(post)

    return "\n".join(
        [
            MANAGED_START,
            '<meta name="robots" content="index,follow,max-image-preview:large"/>',
            f'<link rel="canonical" href="{esc(canonical)}"/>',
            '<meta property="og:type" content="article"/>',
            '<meta property="og:site_name" content="Brooks Photonics"/>',
            f'<meta property="og:title" content="{esc(title)}"/>',
            f'<meta property="og:description" content="{esc(summary)}"/>',
            f'<meta property="og:url" content="{esc(canonical)}"/>',
            f'<meta property="og:image" content="{esc(image)}"/>',
            '<meta property="og:image:type" content="image/png"/>',
            '<meta property="og:image:width" content="1200"/>',
            '<meta property="og:image:height" content="630"/>',
            f'<meta property="og:image:alt" content="{esc(alt)}"/>',
            f'<meta property="article:section" content="{esc(subject)}"/>',
            f'<meta property="article:published_time" content="{esc(date)}"/>',
            '<meta name="twitter:card" content="summary_large_image"/>',
            f'<meta name="twitter:title" content="{esc(title)}"/>',
            f'<meta name="twitter:description" content="{esc(summary)}"/>',
            f'<meta name="twitter:image" content="{esc(image)}"/>',
            f'<meta name="twitter:image:alt" content="{esc(alt)}"/>',
            MANAGED_END,
        ]
    )


def remove_tag(text: str, attr_name: str, key: str) -> str:
    pattern = re.compile(
        rf'^[ \t]*<meta\b(?=[^>]*\b{attr_name}\s*=\s*["\']{re.escape(key)}["\'])[^>]*?/?>[ \t]*(?:\r?\n)?',
        re.IGNORECASE | re.MULTILINE,
    )
    return pattern.sub("", text)


def strip_existing_social_metadata(text: str) -> str:
    text = re.sub(
        rf'{re.escape(MANAGED_START)}.*?{re.escape(MANAGED_END)}\s*',
        "",
        text,
        flags=re.DOTALL,
    )
    text = re.sub(
        r'^[ \t]*<link\b(?=[^>]*\brel\s*=\s*["\']canonical["\'])[^>]*?/?>[ \t]*(?:\r?\n)?',
        "",
        text,
        flags=re.IGNORECASE | re.MULTILINE,
    )
    for key in NAME_KEYS:
        text = remove_tag(text, "name", key)
    for key in PROPERTY_KEYS:
        text = remove_tag(text, "property", key)
    return text


def sync_html(text: str, post: dict) -> str:
    text = strip_existing_social_metadata(text)
    block = managed_block(post)

    title_match = re.search(r"</title\s*>", text, flags=re.IGNORECASE)
    if not title_match:
        raise ValueError("missing </title> in HTML head")

    pos = title_match.end()
    return text[:pos] + "\n" + block + text[pos:]


def get_meta_values(text: str, attr_name: str, key: str) -> list[str]:
    tag_pattern = re.compile(
        rf'<meta\b(?=[^>]*\b{attr_name}\s*=\s*["\']{re.escape(key)}["\'])[^>]*>',
        re.IGNORECASE,
    )
    values: list[str] = []
    for tag in tag_pattern.findall(text):
        content = re.search(r'\bcontent\s*=\s*["\']([^"\']*)["\']', tag, re.IGNORECASE)
        if content:
            values.append(html_lib.unescape(content.group(1)))
        else:
            values.append("")
    return values


def get_canonical_values(text: str) -> list[str]:
    tag_pattern = re.compile(
        r'<link\b(?=[^>]*\brel\s*=\s*["\']canonical["\'])[^>]*>',
        re.IGNORECASE,
    )
    values: list[str] = []
    for tag in tag_pattern.findall(text):
        href = re.search(r'\bhref\s*=\s*["\']([^"\']*)["\']', tag, re.IGNORECASE)
        values.append(html_lib.unescape(href.group(1)) if href else "")
    return values


def png_dimensions(path: Path) -> tuple[int, int]:
    header = path.read_bytes()[:24]
    if len(header) < 24 or header[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError("not a valid PNG")
    if header[12:16] != b"IHDR":
        raise ValueError("PNG is missing IHDR header")
    return struct.unpack(">II", header[16:24])


def require_single(errors: list[str], label: str, values: list[str], expected: str) -> None:
    if len(values) != 1:
        errors.append(f"{label}: expected exactly one tag, found {len(values)}")
        return
    if values[0] != expected:
        errors.append(f"{label}: expected {expected!r}, found {values[0]!r}")


def validate_post(post: dict) -> list[str]:
    errors: list[str] = []
    title = str(post.get("title", "")).strip()
    summary = str(post.get("summary", "")).strip()
    date = str(post.get("date", "")).strip()

    try:
        path = html_path(post)
        canonical = canonical_url(post)
        image_rel = social_image_rel(post)
        image_url = social_image_url(post)
    except Exception as exc:
        return [str(exc)]

    if not title:
        errors.append("posts.json: missing title")
    if not summary:
        errors.append("posts.json: missing summary")
    if not date:
        errors.append("posts.json: missing date")

    if not path.exists():
        errors.append(f"missing article HTML: {path.relative_to(ROOT)}")
        return errors

    image_path = ROOT / image_rel.lstrip("/")
    if not image_rel.lower().endswith(".png"):
        errors.append(f"social image must be PNG, not {image_rel}")
    elif not image_path.exists():
        errors.append(f"missing social image: {image_path.relative_to(ROOT)}")
    else:
        try:
            width, height = png_dimensions(image_path)
            if (width, height) != (1200, 630):
                errors.append(
                    f"social image must be 1200x630; {image_path.relative_to(ROOT)} is {width}x{height}"
                )
        except ValueError as exc:
            errors.append(f"{image_path.relative_to(ROOT)}: {exc}")

    text = path.read_text(encoding="utf-8")

    require_single(errors, "canonical", get_canonical_values(text), canonical)
    require_single(errors, "robots", get_meta_values(text, "name", "robots"), "index,follow,max-image-preview:large")
    require_single(errors, "og:type", get_meta_values(text, "property", "og:type"), "article")
    require_single(errors, "og:site_name", get_meta_values(text, "property", "og:site_name"), "Brooks Photonics")
    require_single(errors, "og:title", get_meta_values(text, "property", "og:title"), title)
    require_single(errors, "og:description", get_meta_values(text, "property", "og:description"), summary)
    require_single(errors, "og:url", get_meta_values(text, "property", "og:url"), canonical)
    require_single(errors, "og:image", get_meta_values(text, "property", "og:image"), image_url)
    require_single(errors, "og:image:type", get_meta_values(text, "property", "og:image:type"), "image/png")
    require_single(errors, "og:image:width", get_meta_values(text, "property", "og:image:width"), "1200")
    require_single(errors, "og:image:height", get_meta_values(text, "property", "og:image:height"), "630")
    require_single(errors, "og:image:alt", get_meta_values(text, "property", "og:image:alt"), social_alt(post))
    require_single(errors, "article:section", get_meta_values(text, "property", "article:section"), str(post.get("subject", "Technical article")).strip())
    require_single(errors, "article:published_time", get_meta_values(text, "property", "article:published_time"), date)
    require_single(errors, "twitter:card", get_meta_values(text, "name", "twitter:card"), "summary_large_image")
    require_single(errors, "twitter:title", get_meta_values(text, "name", "twitter:title"), title)
    require_single(errors, "twitter:description", get_meta_values(text, "name", "twitter:description"), summary)
    require_single(errors, "twitter:image", get_meta_values(text, "name", "twitter:image"), image_url)
    require_single(errors, "twitter:image:alt", get_meta_values(text, "name", "twitter:image:alt"), social_alt(post))

    return errors


def fix_posts(posts: list[dict]) -> int:
    changed = 0
    for post in posts:
        path = html_path(post)
        if not path.exists():
            print(f"ERROR: cannot fix missing {path.relative_to(ROOT)}", file=sys.stderr)
            continue
        original = path.read_text(encoding="utf-8")
        updated = sync_html(original, post)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            changed += 1
            print(f"updated {path.relative_to(ROOT)}")
    print(f"social preview sync complete: {changed} file(s) changed")
    return changed


def check_posts(posts: list[dict]) -> int:
    failures = 0
    for post in posts:
        label = str(post.get("file", post.get("title", "<unknown>")))
        errors = validate_post(post)
        if errors:
            failures += 1
            print(f"FAIL {label}")
            for error in errors:
                print(f"  - {error}")
        else:
            print(f"PASS {label}")
    if failures:
        print(f"\n{failures} post(s) failed social-preview validation.", file=sys.stderr)
        return 1
    print(f"\nAll {len(posts)} post(s) have valid 1200x630 PNG social previews.")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--fix", action="store_true", help="rewrite social-preview metadata from posts/posts.json")
    mode.add_argument("--check", action="store_true", help="validate social-preview metadata and image files")
    args = parser.parse_args()

    posts = load_posts()
    if args.fix:
        fix_posts(posts)
    return check_posts(posts)


if __name__ == "__main__":
    raise SystemExit(main())
