/**
 * Resolves a public-folder asset path to its correctly-prefixed URL.
 *
 * Next's `basePath` is auto-applied to `<Link>`, `<Image>`, `<Script>` (next/script),
 * and `metadata` icons — but NOT to:
 *   - raw `<a href>`, `<video><source src>`, `<img src>` on plain elements
 *   - CSS `url(...)` references
 *   - manual `fetch()` calls
 *
 * Anywhere you'd otherwise hardcode a path like `/lior-doron-cv.pdf`,
 * use `asset('/lior-doron-cv.pdf')` instead so it resolves correctly under
 * GitHub Pages' project sub-path (e.g. `/graphic-design-portfolio/...`).
 *
 * The base path is injected at build time via `next.config.ts` -> `env.NEXT_PUBLIC_BASE_PATH`,
 * so this stays in sync with the framework's own basePath without a second source of truth.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  if (!path) return base || '/';

  if (/^(https?:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }

  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
