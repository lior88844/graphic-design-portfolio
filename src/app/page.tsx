'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { asset } from '@/lib/asset';

const HeroVideo = dynamic(() => import('@/components/HeroVideo'), { ssr: false });
const HeroCursor = dynamic(() => import('@/components/HeroCursor'), { ssr: false });

const HERO_VIDEO = asset('/videos/hero-video.mp4');

export default function HomePage() {
  return (
    <div className="relative">
      <HeroCursor />

      <section
        id="hero-section"
        className="relative -mt-[var(--nav-height)] min-h-[100dvh] flex flex-col overflow-hidden bg-background [&_*]:cursor-none cursor-none"
      >
        <HeroVideo src={HERO_VIDEO} />

        <div className="absolute inset-0 bg-black/30 z-[1]" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center flex-1 text-center px-6 py-[90px]">
          <div className="h-20 md:h-24 shrink-0" aria-hidden="true" />

          <h1
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] max-w-7xl text-white"
            style={{ fontFamily: 'var(--font-display), serif', letterSpacing: '-2.46px' }}
          >
            Code, design,{' '}
            <em className="not-italic text-white/60">and the space</em>{' '}
            between.
          </h1>

          <p className="animate-fade-rise-delay text-white/60 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
            Lior is a creative developer and designer shaping digital products and identities for music, culture, and independent brands.
          </p>

          <div className="animate-fade-rise-delay-2 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              id="hero-cta"
              href="/work"
              className="liquid-glass rounded-full px-14 py-5 text-base text-white hover:scale-[1.03] transition-transform duration-200 inline-block cursor-none"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
