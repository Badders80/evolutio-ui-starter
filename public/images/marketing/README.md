# Marketing Images

Place hero images, section backgrounds, and marketing visuals here:

- `hero.jpg` - Main hero image
- `section-1.jpg` - First section background
- `section-2.webp` - Second section (prefer .webp for better compression)

## Usage with ImageContainer

```tsx
import { ImageContainer } from "@/components/layout/ImageContainer";

<ImageContainer
  src="/images/marketing/hero.jpg"
  alt="Hero"
  ratio="16:9"
  bleed
  allowZoom
  priority
/>
```

## Best Practices

- Use .webp or .avif for photos (better compression)
- Keep originals elsewhere for editing
- Use versioned names (hero-v2.jpg) when updating
- Optimize images before uploading