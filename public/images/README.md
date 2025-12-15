# Image Assets

Add your project images to the appropriate directories.

## Directory Structure

```
images/
├── raanana-jazz/
│   ├── hero.jpg
│   ├── website-1.jpg
│   ├── website-2.jpg
│   ├── merch-1.jpg
│   ├── merch-2.jpg
│   ├── social-1.jpg
│   └── social-2.jpg
├── jazz-websites/
│   ├── hero.jpg
│   ├── overview.jpg
│   ├── amit-1.jpg
│   ├── amit-2.jpg
│   ├── amit-3.jpg
│   ├── alon-1.jpg
│   ├── alon-2.jpg
│   ├── alon-3.jpg
│   ├── gil-1.jpg
│   ├── gil-2.jpg
│   └── gil-3.jpg
└── jazz-posters/
    ├── hero.jpg
    ├── roni-eytan.jpg
    ├── alon-near.jpg
    ├── david-sirkis.jpg
    ├── aybie-drori.jpg
    └── itai-eliezri.jpg
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
