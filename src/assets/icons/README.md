# UI Icons

Place SVG icons that you import into React components:

- `star.svg`
- `arrow-right.svg` 
- `check.svg`

## Usage

### Option 1: Direct import (if you have SVGR configured)
```tsx
import Star from "@/assets/icons/star.svg";

export function IconStar() {
  return <Star aria-hidden className="h-4 w-4" />;
}
```

### Option 2: Inline SVG (recommended if no SVGR)
```tsx
export function IconStar() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}
```

Keep icons here separate from /public/images to avoid JS bundle bloat.