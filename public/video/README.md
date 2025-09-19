# Video Assets

Place video files here:

- `promo.webm` - WebM format (modern browsers)
- `promo.mp4` - MP4 fallback
- `background-loop.webm` - Background videos

## Usage

```tsx
<video 
  autoPlay 
  muted 
  loop 
  playsInline
  className="w-full h-auto"
>
  <source src="/video/promo.webm" type="video/webm" />
  <source src="/video/promo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Best Practices

- Use .webm for smaller file sizes
- Always include .mp4 fallback
- Compress videos before uploading
- Consider lazy loading for non-critical videos