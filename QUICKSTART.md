# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

Create image directories and add your project photos:

```bash
# Directory structure is already created at:
public/images/festivals/
public/images/websites/
public/images/posters/
```

See `public/images/README.md` for image specifications.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📝 Quick Customizations

### Update Contact Email

Edit `src/app/contact/page.tsx`:
```tsx
const [email] = useState('your-email@domain.com');
```

### Change Colors

Edit `src/app/globals.css`:
```css
:root {
  --accent: #ff6b35;           /* Your primary color */
  --accent-secondary: #4ecdc4;  /* Your secondary color */
}
```

### Edit Project Content

Edit `src/content/projects.ts` to update project descriptions, add new projects, or modify existing ones.

### Change Copy/Text

- **Homepage:** `src/app/page.tsx`
- **About:** `src/app/about/page.tsx`
- **Contact:** `src/app/contact/page.tsx`

---

## 🎨 Animation Controls

### Reduce Motion Toggle
- Bottom-right corner of the site
- Respects system `prefers-reduced-motion` preference
- Saved to localStorage

### Performance Tips
- All animations target 60fps
- GPU-accelerated transforms
- Optimized scroll listeners
- Conditional rendering based on motion preference

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 📦 Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy (auto-configured)

---

## ✅ What's Included

- ✨ Kinetic typography with staggered animations
- 🖱️ Custom cursor follower (desktop)
- 🌊 Smooth scrolling (Lenis)
- 📸 Lightbox for images
- ♿ Full accessibility support
- 📱 Fully responsive
- ⚡ 60fps animations
- 🎭 Reduced motion support
- 🔍 SEO ready

---

## 🐛 Troubleshooting

**Animations not working?**
- Check motion toggle (bottom-right)
- Check browser console for errors

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Images not showing?**
- Verify paths in `src/content/projects.ts`
- Check files exist in `public/images/`
- Clear browser cache

---

## 📚 Full Documentation

See [README.md](./README.md) for complete documentation.

---

**Need help?** Open an issue or contact the developer.
