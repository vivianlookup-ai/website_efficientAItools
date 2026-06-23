# MathPractice K5

Free printable math worksheets for K-5, built with Astro.

## Google Analytics

This site uses Google Analytics (GA4) with tag ID: **G-S6KW9HQZXL**

### How it's applied

The GA tag is in `src/layouts/BaseLayout.astro` — the root layout used by every page.

**If you add new pages**, make sure they use `BaseLayout` (or extend it). The gtag code is injected automatically via the `<head>` in that layout. As long as new pages import and use `BaseLayout`, no extra GA setup is needed.

### The code

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S6KW9HQZXL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-S6KW9HQZXL');
</script>
```

### If you need to change the tag ID

Edit only `src/layouts/BaseLayout.astro` — it's the single source of truth for every page on the site.
