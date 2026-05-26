import type { NextConfig } from 'next';

/**
 * GitHub Pages serves project sites from a sub-path
 * (e.g. https://lior88844.github.io/graphic-design-portfolio/).
 * We need `basePath` set in production so Next emits asset/route URLs
 * under that sub-path. In dev, we want `''` so `localhost:3000/...` works.
 *
 * The same value is re-exported via `env.NEXT_PUBLIC_BASE_PATH` so client
 * code (see `src/lib/asset.ts`) can prefix raw asset references that Next
 * does NOT auto-prefix (raw <a href>, <video src>, CSS url(...), etc.).
 */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/graphic-design-portfolio' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
