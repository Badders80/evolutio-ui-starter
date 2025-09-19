# Downloads

Place downloadable files here:

- `brochure.pdf`
- `whitepaper.pdf`
- `app-installer.exe`
- `dataset.csv`

## Usage

Simple download links:

```tsx
<a 
  href="/downloads/brochure.pdf" 
  download="company-brochure.pdf"
  className="text-blue-600 hover:underline"
>
  Download Brochure (PDF)
</a>
```

Or with a download component:

```tsx
<Button asChild>
  <a href="/downloads/whitepaper.pdf" download>
    Download Whitepaper
  </a>
</Button>
```

## Best Practices

- Use descriptive filenames
- Consider file size (compress when possible)
- Add file type and size info in UI
- Version files when updating (brochure-v2.pdf)