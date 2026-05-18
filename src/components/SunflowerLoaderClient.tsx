'use client';

// No dynamic/ssr:false — the server renders the initial overlay HTML so it
// covers the page from the very first paint, preventing any flash of content.
import SunflowerLoader from './SunflowerLoader';

export function SunflowerLoaderClient() {
  return <SunflowerLoader />;
}
