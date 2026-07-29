from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OLD_WORDMARK = "<strong>Brooks Photonics</strong>"
NEW_WORDMARK = (
    '<strong class="brand-name">'
    '<span class="brand-name-brooks">BROOKS</span>'
    '<span class="brand-name-photonics">PHOTONICS</span>'
    "</strong>"
)


def update_html() -> int:
    replacements = 0
    targets = sorted(ROOT.glob("*.html")) + sorted((ROOT / "posts").glob("*.html"))
    for path in targets:
        text = path.read_text(encoding="utf-8")
        count = text.count(OLD_WORDMARK)
        if count:
            path.write_text(text.replace(OLD_WORDMARK, NEW_WORDMARK), encoding="utf-8")
            replacements += count
    if replacements < 20:
        raise RuntimeError(f"Expected at least 20 wordmark replacements, found {replacements}")
    return replacements


def update_style_css() -> None:
    path = ROOT / "assets" / "css" / "style.css"
    text = path.read_text(encoding="utf-8")
    anchors = {
        ".brand-copy span {": ".brand-copy > span {",
        ".brand-footer .brand-copy span {": ".brand-footer .brand-copy > span {",
    }
    for old, new in anchors.items():
        if text.count(old) != 1:
            raise RuntimeError(f"Expected one style.css selector: {old}")
        text = text.replace(old, new, 1)
    path.write_text(text, encoding="utf-8")


def update_refinement_css() -> None:
    path = ROOT / "assets" / "css" / "refinement.css"
    text = path.read_text(encoding="utf-8")
    old_import = "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');"
    new_import = "@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Montserrat:wght@300;800&display=swap');"
    if text.count(old_import) != 1:
        raise RuntimeError("IBM Plex Sans import anchor was not unique")
    text = text.replace(old_import, new_import, 1)

    old_block = '''.brand-copy span {
  color: #6d6771;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .055em;
}
'''
    new_block = '''.brand-copy > span {
  color: #6d6771;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .055em;
}

/* Banner-derived wordmark: strong BROOKS, light PHOTONICS. */
.brand-copy strong.brand-name {
  display: inline-flex;
  align-items: baseline;
  gap: .42em;
  font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0;
  white-space: nowrap;
}

.brand-name-brooks {
  font-weight: 800;
  letter-spacing: .075em;
}

.brand-name-photonics {
  font-weight: 300;
  letter-spacing: .095em;
}

@media (max-width: 420px) {
  .brand-copy strong.brand-name {
    gap: .34em;
    font-size: 14px;
  }

  .brand-name-brooks { letter-spacing: .055em; }
  .brand-name-photonics { letter-spacing: .07em; }
}
'''
    if text.count(old_block) != 1:
        raise RuntimeError("Brand-copy block was not unique")
    text = text.replace(old_block, new_block, 1)
    path.write_text(text, encoding="utf-8")


def validate() -> None:
    for path in sorted(ROOT.glob("*.html")) + sorted((ROOT / "posts").glob("*.html")):
        text = path.read_text(encoding="utf-8")
        if OLD_WORDMARK in text:
            raise RuntimeError(f"Legacy wordmark remains in {path.relative_to(ROOT)}")
    refinement = (ROOT / "assets" / "css" / "refinement.css").read_text(encoding="utf-8")
    required = ["family=Montserrat:wght@300;800", ".brand-name-brooks", ".brand-name-photonics"]
    for marker in required:
        if marker not in refinement:
            raise RuntimeError(f"Missing wordmark marker: {marker}")


def main() -> None:
    count = update_html()
    update_style_css()
    update_refinement_css()
    validate()
    print(f"Updated {count} Brooks Photonics wordmarks")


if __name__ == "__main__":
    main()
