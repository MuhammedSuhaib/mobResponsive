
## Deploying Next.js to GitHub Pages

### Step 1: Update `next.config.js`

Enable static export and disable image optimization:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

---

### Step 2: Use Relative Image Paths

Change all image paths from absolute to relative:

```html
<!-- ❌ -->
<img src="/images/logo.png" />

<!-- ✅ -->
<img src="./images/logo.png" />
```

This is required for GitHub Pages.

---

### Step 3: GitHub Actions Deployment

GitHub automatically detected Next.js and generated a deployment `.yml` workflow.
After pushing to `main`, the site was built and deployed to **GitHub Pages**.

---

That’s it.

## Note:

This setup supports only static pages.
No server-side rendering (SSR), API routes, or dynamic runtime features are used.