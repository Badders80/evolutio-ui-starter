# Asset Organization Guide

This project follows a clear asset organization pattern for optimal performance and maintainability.

## 📁 Directory Structure

```
.
├─ public/                    # Static assets served by URL
│  ├─ brand/                  # Brand assets
│  │  ├─ logo.svg            # Main logo (used by BrandMark)
│  │  ├─ favicon.ico         # Browser tab icon
│  │  └─ og-default.png      # Default social share image
│  ├─ images/
│  │  ├─ marketing/          # Hero, section backgrounds
│  │  └─ content/            # Article illustrations
│  ├─ video/                 # Video files (.webm, .mp4)
│  ├─ lottie/                # Lottie animation JSON files
│  └─ downloads/             # PDFs, files for download
└─ src/
   └─ assets/
      ├─ fonts/              # Font files (loaded via next/font)
      │  └─ bwgradual/
      └─ icons/              # SVG icons imported into components
```

## 🎯 Usage Patterns

### Brand Assets
```tsx
// BrandMark automatically uses /brand/logo.svg
<BrandMark />

// Favicon in layout.tsx
<link rel="icon" href="/brand/favicon.ico" />

// OG image in metadata
export const metadata = {
  openGraph: { images: ["/brand/og-default.png"] }
};
```

### Marketing Images
```tsx
// Full-bleed hero with ratio control
<ImageContainer
  src="/images/marketing/hero.jpg"
  alt="Hero"
  ratio="16:9"
  bleed
  allowZoom
  priority
/>
```

### Content Images
```tsx
// Article images
<Image 
  src="/images/content/article-header.jpg"
  alt="Article header"
  width={800}
  height={400}
/>
```

### Icons
```tsx
// Inline SVG (recommended)
export function IconCheck() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
    </svg>
  );
}

// Or import from /src/assets/icons/ (if SVGR configured)
import Check from "@/assets/icons/check.svg";
```

### Videos
```tsx
<video autoPlay muted loop playsInline>
  <source src="/video/promo.webm" type="video/webm" />
  <source src="/video/promo.mp4" type="video/mp4" />
</video>
```

### Downloads
```tsx
<a href="/downloads/brochure.pdf" download="company-brochure.pdf">
  Download Brochure
</a>
```

## ⚡ Performance Benefits

- **CDN-friendly**: /public assets are cacheable
- **Bundle optimization**: Only imported assets affect JS bundle size
- **Lazy loading**: Images can be lazy-loaded without bundle impact
- **Format optimization**: Use .webp/.avif for better compression

## 🛠 Best Practices

1. **Prefer .webp/.avif** for photos (better compression)
2. **Version assets** when updating (hero-v2.jpg)
3. **Optimize before upload** (compress images/videos)
4. **Use descriptive names** (not img1.jpg)
5. **Keep originals elsewhere** for future editing

## 🔧 Cache Strategy

- Static assets in /public get automatic caching
- Use versioned filenames for cache busting
- Consider /public/v1/, /public/v2/ folders for major updates

This structure ensures your assets are organized, performant, and maintainable! 🚀