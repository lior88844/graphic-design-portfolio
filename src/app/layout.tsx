import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import 'react-photo-album/styles.css';
import { Navigation } from '@/components/Navigation';
import { MotionToggle } from '@/components/MotionToggle';
import { GrainOverlay } from '@/components/GrainOverlay';
import { CursorFollower } from '@/components/CursorFollower';
import { MotionProvider } from '@/lib/reduced-motion';
import { SmoothScroll } from '@/components/SmoothScroll';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const greatsby = localFont({
  src: '../../public/fonts/Greatsby-Regular.ttf',
  variable: '--font-greatsby',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lior Doron — Graphic Designer',
  description: 'Graphic designer working with jazz musicians and cultural projects.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Lior Doron — Graphic Designer',
    description: 'Graphic designer working with jazz musicians and cultural projects.',
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${greatsby.variable} font-sans antialiased bg-background text-foreground`}
      >
        <MotionProvider>
          <SmoothScroll>
            <GrainOverlay />
            <CursorFollower />
            <Navigation />
            <main className="pt-20 md:pt-24">
              {children}
            </main>
            <MotionToggle />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}

