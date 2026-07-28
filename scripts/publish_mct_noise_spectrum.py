from __future__ import annotations

from pathlib import Path
import json
import re
import subprocess
import sys

import cairosvg
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ARTICLE = ROOT / "posts" / "how-to-read-photodetector-noise-spectrum.html"
POSTS_HTML = ROOT / "posts.html"
POSTS_JSON = ROOT / "posts" / "posts.json"
SITEMAP = ROOT / "sitemap.xml"
GENERATOR = ROOT / "scripts" / "generate_standalone_noise_component_plots.py"
IMAGES = ROOT / "assets" / "images"
DATE_ISO = "2026-07-28"
DATE_DISPLAY = "July 28, 2026"


def replace_once(text: str, old: str, new: str, label: str) -> str:
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"Expected one {label} anchor, found {count}")
    return text.replace(old, new, 1)


def publish_article() -> None:
    text = ARTICLE.read_text(encoding="utf-8")
    text = replace_once(
        text,
        '<meta name="robots" content="noindex,nofollow,noarchive"/>',
        '<meta name="robots" content="index,follow,max-image-preview:large"/>',
        "robots",
    )
    description = '<meta content="A practical HgCdTe (MCT) guide to reading noise amplitude spectral density: the 1/f region, generation-recombination plateau and rolloff, Johnson region, and measurement-system limits." name="description"/>'
    text = replace_once(text, description, description + '\n<meta name="author" content="Brooks Photonics"/>', "description")

    og_url = '<meta property="og:url" content="https://brooks-photonics.com/posts/how-to-read-photodetector-noise-spectrum.html"/>'
    og_metadata = '''<meta property="og:url" content="https://brooks-photonics.com/posts/how-to-read-photodetector-noise-spectrum.html"/>
<meta property="og:image" content="https://brooks-photonics.com/assets/images/mct-noise-spectrum-social.png"/>
<meta property="og:image:type" content="image/png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="HgCdTe noise spectrum showing 1/f, generation-recombination, and Johnson-noise regions"/>
<meta property="article:section" content="Noise and bandwidth"/>
<meta property="article:published_time" content="2026-07-28"/>
<meta property="article:modified_time" content="2026-07-28"/>'''
    text = replace_once(text, og_url, og_metadata, "Open Graph URL")
    text = replace_once(text, '<meta name="twitter:card" content="summary"/>', '<meta name="twitter:card" content="summary_large_image"/>', "Twitter card")
    twitter_description = '<meta name="twitter:description" content="A practical guide to 1/f, generation-recombination, and Johnson regions in HgCdTe photodetectors."/>'
    text = replace_once(
        text,
        twitter_description,
        twitter_description + '\n<meta name="twitter:image" content="https://brooks-photonics.com/assets/images/mct-noise-spectrum-social.png"/>',
        "Twitter description",
    )

    json_ld = '''<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Read an HgCdTe (MCT) Noise Spectrum",
  "description": "A practical MCT noise-spectrum guide covering 1/f noise, generation-recombination structure, the Johnson region, and measurement-chain limits.",
  "datePublished": "2026-07-28",
  "dateModified": "2026-07-28",
  "author": {
    "@type": "Organization",
    "name": "Brooks Photonics",
    "url": "https://brooks-photonics.com/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Brooks Photonics",
    "url": "https://brooks-photonics.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://brooks-photonics.com/assets/images/Brooks_Photonics_Logo.png"
    }
  },
  "image": "https://brooks-photonics.com/assets/images/mct-noise-spectrum-social.png",
  "mainEntityOfPage": "https://brooks-photonics.com/posts/how-to-read-photodetector-noise-spectrum.html"
}
</script>
'''
    text = replace_once(text, '<style>\n.article-hero .eyebrow{color:#fff!important}\n', json_ld + '<style>\n', "eyebrow override")
    text, removed = re.subn(r'\.draft-banner\{[^}]+\}\n', '', text, count=1)
    if removed != 1:
        raise RuntimeError("Draft-banner CSS was not found")
    text = replace_once(
        text,
        '<div class="article-meta"><span>Unlisted draft</span><span>12-minute read</span></div>',
        f'<div class="article-meta"><span><time datetime="{DATE_ISO}">{DATE_DISPLAY}</time></span><span>12-minute read</span></div>',
        "article metadata",
    )
    text = replace_once(
        text,
        '<div class="draft-banner">Unlisted draft — excluded from the Posts page and marked no-index for search engines.</div>\n',
        '',
        "draft banner",
    )
    ARTICLE.write_text(text, encoding="utf-8")


def update_library() -> None:
    data = json.loads(POSTS_JSON.read_text(encoding="utf-8"))
    post = {
        "subject": "Noise and bandwidth",
        "title": "How to Read an HgCdTe (MCT) Noise Spectrum",
        "file": "posts/how-to-read-photodetector-noise-spectrum.html",
        "date": DATE_ISO,
        "reading_time": "12-minute read",
        "summary": "A practical guide to separating 1/f, generation-recombination, Johnson, and measurement-chain contributions in HgCdTe detector noise spectra.",
    }
    data["posts"] = [item for item in data.get("posts", []) if item.get("file") != post["file"]]
    data["posts"].insert(0, post)
    POSTS_JSON.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")

    html = POSTS_HTML.read_text(encoding="utf-8")
    if 'href="posts/how-to-read-photodetector-noise-spectrum.html"' not in html:
        card = '''<article class="post-card">
<p class="post-card__meta"><time datetime="2026-07-28">July 28, 2026</time><span>12-minute read</span></p>
<h3><a href="posts/how-to-read-photodetector-noise-spectrum.html">How to Read an HgCdTe (MCT) Noise Spectrum</a></h3>
<p>A practical guide to separating 1/f, generation-recombination, Johnson, and measurement-chain contributions in HgCdTe detector noise spectra.</p>
<a class="post-card__link" href="posts/how-to-read-photodetector-noise-spectrum.html">Read article</a>
</article>
'''
        html = replace_once(html, '<div class="post-grid">\n', '<div class="post-grid">\n' + card, "fallback post grid")
        POSTS_HTML.write_text(html, encoding="utf-8")

    sitemap = SITEMAP.read_text(encoding="utf-8")
    entry = '  <url><loc>https://brooks-photonics.com/posts/how-to-read-photodetector-noise-spectrum.html</loc><lastmod>2026-07-28</lastmod></url>\n'
    if entry not in sitemap:
        sitemap = replace_once(
            sitemap,
            '  <url><loc>https://brooks-photonics.com/posts/lock-in-noise-enbw.html</loc><lastmod>2026-07-28</lastmod></url>\n',
            entry + '  <url><loc>https://brooks-photonics.com/posts/lock-in-noise-enbw.html</loc><lastmod>2026-07-28</lastmod></url>\n',
            "sitemap article",
        )
        SITEMAP.write_text(sitemap, encoding="utf-8")


def improve_plot_sampling() -> None:
    text = GENERATOR.read_text(encoding="utf-8")
    points_anchor = '''def points(xs: np.ndarray, ys: np.ndarray) -> str:
    return " ".join(f"{x:.1f},{y:.1f}" for x, y in zip(xs, ys))
'''
    envelope = points_anchor + '''

def pixel_envelope(
    frequency: np.ndarray,
    values: np.ndarray,
    ymin: float,
    ymax: float,
) -> tuple[np.ndarray, np.ndarray]:
    """Retain the visible min/max envelope in each SVG pixel column."""
    xs = np.asarray(xpix(frequency))
    ys = np.asarray(ypix(values, ymin, ymax))
    columns = np.clip(np.floor(xs).astype(int), LEFT, RIGHT)
    starts = np.flatnonzero(np.r_[True, columns[1:] != columns[:-1]])
    stops = np.r_[starts[1:], len(columns)]
    selected: list[int] = []
    for start, stop in zip(starts, stops):
        segment = ys[start:stop]
        candidates = {
            start,
            stop - 1,
            start + int(np.argmin(segment)),
            start + int(np.argmax(segment)),
        }
        selected.extend(sorted(candidates))
    index = np.asarray(selected, dtype=int)
    return xs[index], ys[index]
'''
    text = replace_once(text, points_anchor, envelope, "pixel-envelope insertion")
    old_setup = '''    frequency = np.linspace(FMIN, FMAX, ideal.size)
    xs = xpix(frequency)
    ideal_y = ypix(ideal, ymin, ymax)
    trace_y = ypix(trace, ymin, ymax)
'''
    new_setup = '''    frequency = np.linspace(FMIN, FMAX, ideal.size)
    trace_x, trace_y = pixel_envelope(frequency, trace, ymin, ymax)
    ideal_frequency = np.geomspace(FMIN, FMAX, 1200)
    ideal_display = np.interp(ideal_frequency, frequency, ideal)
    ideal_x = np.asarray(xpix(ideal_frequency))
    ideal_y = np.asarray(ypix(ideal_display, ymin, ymax))
'''
    text = replace_once(text, old_setup, new_setup, "render sampling")
    text = replace_once(text, 'points="{points(xs, trace_y)}"', 'points="{points(trace_x, trace_y)}"', "trace vertices")
    text = replace_once(text, 'points="{points(xs, ideal_y)}"', 'points="{points(ideal_x, ideal_y)}"', "ideal vertices")
    text = replace_once(text, '    count = 2400\n', '    # 50 Hz linear bins preserve low-frequency detail and increase bin density on log-x.\n    count = 200_000\n', "linear sample count")
    text = text.replace('x = np.linspace(-3.0, 3.0, 61)', 'x = np.linspace(-3.0, 3.0, 121)')
    text = text.replace('np.array([0.16, 0.68, 0.16])', 'np.array([0.12, 0.76, 0.12])')
    text = text.replace('0.38 * sigma * high_density_texture', '0.34 * sigma * high_density_texture')
    GENERATOR.write_text(text, encoding="utf-8")
    subprocess.run([sys.executable, str(GENERATOR)], cwd=ROOT, check=True)


def font(paths: list[str], size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in paths:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def create_social_preview() -> None:
    temporary = IMAGES / "_mct-noise-spectrum-social-source.png"
    output = IMAGES / "mct-noise-spectrum-social.png"
    cairosvg.svg2png(
        bytestring=(IMAGES / "mct-noise-spectrum.svg").read_bytes(),
        write_to=str(temporary),
        output_width=1080,
    )
    canvas = Image.new("RGB", (1200, 630), "#f7f4fa")
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, 1200, 14), fill="#6f2c91")
    draw.rectangle((70, 54, 78, 166), fill="#6f2c91")
    regular = ["/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"]
    bold = ["/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"]
    title = font(bold, 46)
    subtitle = font(regular, 23)
    brand = font(bold, 20)
    draw.text((96, 54), "How to Read an HgCdTe (MCT)", font=title, fill="#241e29")
    draw.text((96, 108), "Noise Spectrum", font=title, fill="#241e29")
    draw.text((96, 174), "1/f noise  •  GR rolloff  •  Johnson floor  •  measurement-chain limits", font=subtitle, fill="#5d5664")
    draw.text((96, 214), "Brooks Photonics", font=brand, fill="#6f2c91")
    plot = Image.open(temporary).convert("RGB")
    plot.thumbnail((1060, 350), Image.Resampling.LANCZOS)
    draw.rounded_rectangle((55, 245, 1145, 610), radius=12, fill="white", outline="#d8d2dc", width=2)
    x = (1200 - plot.width) // 2
    y = 260 + (350 - plot.height) // 2
    canvas.paste(plot, (x, y))
    canvas.save(output, optimize=True)
    temporary.unlink()


def validate() -> None:
    article = ARTICLE.read_text(encoding="utf-8")
    required = [
        'index,follow,max-image-preview:large',
        'mct-noise-spectrum-social.png',
        'application/ld+json',
        '<time datetime="2026-07-28">July 28, 2026</time>',
    ]
    for item in required:
        if item not in article:
            raise RuntimeError(f"Missing publication marker: {item}")
    if "Unlisted draft" in article or '.article-hero .eyebrow{color:#fff!important}' in article:
        raise RuntimeError("Draft or invisible-eyebrow state remains")
    if not (IMAGES / "mct-noise-spectrum-social.png").exists():
        raise RuntimeError("Social preview was not created")


def main() -> None:
    publish_article()
    update_library()
    improve_plot_sampling()
    create_social_preview()
    validate()


if __name__ == "__main__":
    main()
