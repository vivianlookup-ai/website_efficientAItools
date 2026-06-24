# Google Analytics Setup

Tracking ID: **G-0V1FYBX0J9**

## Where the tag lives

`src/layouts/BaseLayout.astro` — the root layout used by every page. All pages inherit it automatically.

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0V1FYBX0J9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-0V1FYBX0J9');
</script>
```

## Critical: build output path

The `@astrojs/cloudflare` adapter outputs the static site to `dist/client/`, but Cloudflare Pages deploys from `dist/` by default. The `package.json` build script includes a post-build step to fix this:

```json
"build": "astro build && cp -r dist/client/. dist/"
```

This copies all files into `dist/` while keeping `dist/client/` intact, so the site works regardless of whether Cloudflare Pages is configured to deploy from `dist/` or `dist/client/`.

If you change the build tooling or adapter, verify that `dist/index.html` exists at the root of `dist/` after running `npm run build`.

## Changing the tracking ID

Edit `src/layouts/BaseLayout.astro` — it's the single source of truth. The change propagates to every page on the site automatically.

## Verifying GA is live

1. Open the site in an **incognito / private window** (avoids cached pages)
2. Right-click → **View Page Source**, search for `G-0V1FYBX0J9`
3. Or open DevTools (F12) → **Network** tab, refresh, and look for a request to `googletagmanager.com`
4. In Google Analytics admin → **Reports** → **Real time**, you should see your own visit within seconds

If the tag is in the source but GA still shows no data, purge the Cloudflare cache (Dashboard → Caching → Configuration → Purge Everything).

## Adding new pages

No extra work needed — as long as the page uses `BaseLayout`, the GA tag is injected automatically. If you create a page with a different layout or no layout, add the tag manually or extend `BaseLayout`.
