
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


## Problem (pnpm error)

GitHub Actions failed with:
```
Dependencies lock file is not found
Supported file patterns: package-lock.json, yarn.lock
```

### Reason:

The auto-generated GitHub Pages workflow supports npm/yarn only, not pnpm.

### Solution (pnpm fix)

Replace the default workflow with a pnpm-based workflow instead of npm/yarn in `.github/workflows/deploy.yml `and ensure pnpm-lock.yaml is committed.

```
- uses: actions/setup-node@v4
  with:
    node-version: 20
    cache: pnpm

- uses: pnpm/action-setup@v4
  with:
    version: latest

- run: pnpm install
- run: pnpm next build
```