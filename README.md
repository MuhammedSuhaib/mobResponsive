
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

Update the workflow in `.github/workflows/nextjs.yml` with the following changes:

1. **Move pnpm setup above node setup**: Place `pnpm/action-setup@v4` before `actions/setup-node@v4`.

2. **Enable pnpm caching**: Add `cache: pnpm` to the node setup step.

3. **Add Next.js build caching**: Include a cache step for `.next/cache` to speed up builds and resolve cache issues.

### Key Changes Made:

1. **Order Fix**: Moved `pnpm/action-setup@v4` before `actions/setup-node@v4` to ensure pnpm is available when setting up Node.js with caching.

2. **Caching Added**:
   - Added `cache: pnpm` to the node setup step to cache pnpm dependencies
   - Added Next.js build cache for `.next/cache` directory to speed up builds and resolve cache-related issues.
   - Note: Caching is not available for the first build since there's nothing to cache yet, but will be available from the second build onwards, significantly speeding up subsequent builds.

For the complete workflow file, see `.github/workflows/nextjs.yml`.