# Content Images

Place article illustrations, content graphics, and blog images here:

- `article-1-header.jpg`
- `infographic.svg`
- `diagram.png`

## Usage

```tsx
<Image 
  src="/images/content/article-1-header.jpg" 
  alt="Article header" 
  width={800} 
  height={400}
/>
```

Or with ImageContainer for ratio control:

```tsx
<ImageContainer
  src="/images/content/infographic.svg"
  alt="Process infographic"
  ratio="4:3"
/>
```