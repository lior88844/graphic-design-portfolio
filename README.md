# Lior Doron — Portfolio Website

An artsy, highly animated portfolio website for graphic designer Lior Doron, built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- 🎨 **Bold, Experimental Design** — Kinetic typography, animated layouts, and expressive visual language
- ⚡ **High-Performance Animations** — 60fps animations using Framer Motion and optimized motion systems
- ♿ **Accessible** — Full keyboard navigation, focus states, and reduced motion support
- 📱 **Responsive** — Works beautifully on all screen sizes
- 🎭 **Motion Toggle** — Respects `prefers-reduced-motion` with manual override option
- 🖱️ **Custom Cursor** — Interactive cursor that responds to hoverable elements (desktop only)
- 🌊 **Smooth Scrolling** — Lenis smooth scroll for enhanced user experience
- 📸 **Image Lightbox** — Interactive gallery with keyboard support

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Advanced Animations:** GSAP
- **Smooth Scroll:** Lenis
- **Fonts:** Geist Sans & Geist Mono

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Homepage with kinetic headline
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page with microinteractions
│   ├── work/
│   │   ├── page.tsx         # Work index
│   │   └── [slug]/page.tsx  # Individual project pages
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── not-found.tsx        # 404 page
├── components/              # React components
│   ├── AnimatedLink.tsx     # Links with hover animations
│   ├── AnimatedBackground.tsx # Cursor-reactive background
│   ├── CursorFollower.tsx   # Custom cursor
│   ├── GrainOverlay.tsx     # Subtle noise texture
│   ├── KineticHeadline.tsx  # Animated text reveal
│   ├── LightboxModal.tsx    # Image modal with animations
│   ├── MotionToggle.tsx     # Reduced motion toggle
│   ├── Navigation.tsx       # Main navigation
│   ├── NextProject.tsx      # Next project CTA
│   ├── PageTransition.tsx   # Route transition wrapper
│   ├── ProjectCard.tsx      # Project preview card
│   ├── ProjectContent.tsx   # Project page content sections
│   ├── ProjectHero.tsx      # Project hero with parallax
│   ├── SectionReveal.tsx    # Scroll-driven reveal
│   └── SmoothScroll.tsx     # Lenis wrapper
├── content/
│   └── projects.ts          # Project data and metadata
└── lib/
    ├── motion.ts            # Animation presets and variants
    └── reduced-motion.ts    # Motion preference context
```

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd graphic-design-portfilio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Add placeholder images** (see [Content Management](#content-management) below)

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Content Management

### Adding/Editing Projects

Edit `src/content/projects.ts` to add or modify projects. Each project has the following structure:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  slug: 'project-slug',  // Used in URL
  category: 'Category',
  year: '2024',
  description: 'Full project description...',
  services: ['Service 1', 'Service 2'],
  heroImage: '/images/project-slug/hero.jpg',
  images: [
    '/images/project-slug/image-1.jpg',
    '/images/project-slug/image-2.jpg',
  ],
  color: '#FF6B35',  // Optional accent color
  subsections: [      // Optional subsections
    {
      title: 'Subsection Title',
      description: 'Description...',
      images: ['image1.jpg', 'image2.jpg'],
    },
  ],
}
```

### Adding Images

Create directories in `public/images/` for each project and add your images:

```
public/
└── images/
    ├── festivals/
    │   ├── hero.jpg
    │   ├── website-1.jpg
    │   ├── website-2.jpg
    │   └── ...
    ├── websites/
    │   ├── hero.jpg
    │   ├── amit-1.jpg
    │   └── ...
    └── posters/
        ├── hero.jpg
        ├── roni-eytan.jpg
        └── ...
```

**Image Guidelines:**
- Hero images: 1920x1080px or larger (16:9 aspect ratio)
- Project images: 1600x1000px or larger (16:10 aspect ratio)
- Format: JPG or WebP (will be auto-optimized by Next.js)
- File size: Keep under 500KB for fast loading

### Editing Copy

- **Homepage:** `src/app/page.tsx`
- **About page:** `src/app/about/page.tsx`
- **Contact page:** `src/app/contact/page.tsx` (update email and social links)
- **Navigation:** `src/components/Navigation.tsx`

### Customizing Colors

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #faf8f5;       /* Warm off-white */
  --foreground: #1a1a1a;       /* Near black */
  --accent: #8B1538;           /* Burgundy */
  --accent-secondary: #C17F59; /* Warm copper/bronze */
}
```

## Animation System

### Motion Presets

The project uses a centralized motion system in `src/lib/motion.ts`:

- **Easing curves:** `ease.smooth`, `ease.bounce`, `ease.expressive`
- **Durations:** `duration.fast`, `duration.normal`, `duration.slow`
- **Variants:** `fadeInUp`, `scaleIn`, `scrollReveal`, `maskReveal`, etc.

### Using Animations

```tsx
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motion';

<motion.div variants={fadeInUp} initial="initial" animate="animate">
  Content
</motion.div>
```

### Reduced Motion

The site respects user motion preferences:

1. System preference via `prefers-reduced-motion`
2. Manual toggle (bottom-right corner)
3. Preference saved to `localStorage`

All animations check `shouldReduceMotion` before applying motion.

## Accessibility Features

- ✅ Keyboard navigation throughout
- ✅ Focus indicators on all interactive elements
- ✅ Semantic HTML structure
- ✅ ARIA labels where appropriate
- ✅ Reduced motion support
- ✅ Alt text on all images
- ✅ High contrast text
- ✅ Scalable typography

## Performance Optimizations

- **Image Optimization:** Next.js Image component with AVIF/WebP
- **Code Splitting:** Automatic route-based splitting
- **Font Optimization:** Local Geist fonts with preloading
- **Lazy Loading:** Images load as they enter viewport
- **Animation Performance:**
  - GPU-accelerated transforms
  - `requestAnimationFrame` for scroll listeners
  - Throttled pointer events
  - Conditional animation rendering

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy (auto-configured for Next.js)

### Other Platforms

```bash
npm run build
```

Output in `.next/` directory. Requires Node.js runtime.

## Troubleshooting

**Animations not working:**
- Check if reduced motion is enabled (toggle in bottom-right)
- Clear browser cache
- Check console for errors

**Images not loading:**
- Verify image paths match `public/images/` structure
- Check file extensions (.jpg, .png, .webp)
- Ensure images are under 5MB

**Build errors:**
- Clear `.next/` directory: `rm -rf .next`
- Delete `node_modules/` and reinstall
- Check TypeScript errors: `npm run build`

## License

This project is private and proprietary.

## Credits

- **Design & Development:** Built for Lior Doron
- **Fonts:** Geist by Vercel
- **Animations:** Framer Motion
- **Framework:** Next.js

---

**Built with ❤️ for Lior Doron**
