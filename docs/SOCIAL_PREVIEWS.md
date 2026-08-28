# Social previews

Brooks Photonics posts use one consistent Open Graph / Twitter-card pattern so LinkedIn and other platforms receive a large thumbnail reliably.

## Source of truth

Each public article is listed in `posts/posts.json`.

Add these fields to the post entry:

```json
"social_image": "/assets/images/example-social.png",
"social_alt": "Concise description of the preview image"
```

The image must be a **1200 x 630 PNG**. If `social_image` is omitted, the site-wide fallback `/assets/images/social-default.png` is used.

## Publish workflow

After adding or changing a post:

```bash
python scripts/social_previews.py --fix
python scripts/social_previews.py --check
```

`--fix` rewrites the canonical URL, robots directive, Open Graph tags, and Twitter-card tags from `posts/posts.json`.

`--check` fails if any listed article has inconsistent metadata, a missing image, a non-PNG image, or an image that is not 1200 x 630.

GitHub Actions runs the same check automatically for post/image changes and on pull requests.

## LinkedIn caching

LinkedIn can retain an old failed preview even after the page is fixed. The canonical article URL remains unchanged, but a fresh share can use a harmless cache-busting query parameter:

```
https://brooks-photonics.com/posts/article-slug/?li=20260828-1
```

The page still declares the clean canonical URL, so the query parameter is only for forcing a fresh social scrape. Increment the final number if the LinkedIn composer has already cached that exact share URL.

The normal clean article URL should be used everywhere else.
