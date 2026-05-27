import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import 'react-photo-album/styles.css';
import { Navigation } from '@/components/Navigation';
import { GrainOverlay } from '@/components/GrainOverlay';
import { MotionProvider } from '@/lib/reduced-motion';
import { SmoothScroll } from '@/components/SmoothScroll';
import { SunflowerLoaderClient } from '@/components/SunflowerLoaderClient';
import { asset } from '@/lib/asset';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
});

const greatsby = localFont({
  src: '../../public/fonts/Greatsby-Regular.ttf',
  variable: '--font-greatsby',
  display: 'swap',
});

/** Canonical site origin for OG/Twitter absolute URLs (see metadataBase in Next.js docs). */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://liordoron.com');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lior Doron — Software Engineer & Graphic Designer',
  description:
    'Software engineer and graphic designer building digital products, interfaces, and visual identity for jazz, culture, and live music.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Lior Doron — Software Engineer & Graphic Designer',
    description:
      'Software engineer and graphic designer building digital products, interfaces, and visual identity for jazz, culture, and live music.',
    images: ['/logo.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyStyle = {
    ['--bg-image' as string]: `url('${asset('/images/bg.png')}')`,
  } as React.CSSProperties;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatsby.variable} ${instrumentSerif.variable} font-sans antialiased bg-background text-foreground`}
        style={bodyStyle}
      >
        <MotionProvider>
          <SunflowerLoaderClient />
          <SmoothScroll>
            <GrainOverlay />
            <Navigation />
            <main className="[overflow-x:clip] pt-[var(--nav-height)]">
              {children}
            </main>
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}

