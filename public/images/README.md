# Image Assets

Add your project images to the appropriate directories.

## Directory Structure

```
images/
├── apps/
├── festivals/
├── photography/
├── posters/
└── websites/
```

## Image Specifications

### Hero Images
- **Dimensions:** 1920×1080px minimum (16:9 aspect ratio)
- **Format:** JPG, PNG, or WebP
- **File Size:** Under 500KB (will be optimized by Next.js)

### Project Images
- **Dimensions:** 1600×1000px minimum (16:10 aspect ratio)
- **Format:** JPG, PNG, or WebP
- **File Size:** Under 500KB each

### Posters
- **Dimensions:** Variable (maintain original aspect ratio)
- **Format:** JPG, PNG, or WebP
- **File Size:** Under 800KB

## Tips

- Use descriptive filenames (e.g., `website-detail-1.jpg` instead of `IMG_1234.jpg`)
- Optimize images before uploading using tools like:
  - [TinyPNG](https://tinypng.com)
  - [Squoosh](https://squoosh.app)
  - ImageOptim (Mac)
- Next.js will automatically serve images in AVIF/WebP format when supported
- For high-DPI displays, provide 2× resolution images
