# Brand Assets

Place your brand files here:

- `logo.svg` - Main logo used in navigation (referenced by BrandMark component)
- `favicon.ico` - Browser tab icon
- `og-default.png` - Default Open Graph image for social sharing
- `wordmark.svg` - Text-only brand mark (if needed)

## Usage

The BrandMark component automatically looks for `/public/brand/logo.svg`:

```tsx
<BrandMark /> // Uses logo.svg if available, falls back to text
```

For favicon, reference in your layout.tsx:
```tsx
<link rel="icon" href="/brand/favicon.ico" />
```