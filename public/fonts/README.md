# Fonts

This directory contains custom fonts used in the project.

## Greatsby-Regular.ttf

Custom font used for all headlines throughout the site.

**Usage:**
- Configured in `src/app/layout.tsx` using Next.js's `localFont` loader
- Available as CSS variable: `--font-greatsby`
- Applied via Tailwind class: `font-headline`
- Used on all h1, h2, h3 elements and the KineticHeadline component

**Technical Implementation:**
- Font is loaded with `display: swap` for optimal performance
- Tailwind config includes fallback fonts: Geist Sans and system fonts
- Font variable is applied to the body element for global availability
