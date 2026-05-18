'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface Category {
  id: string;
  index: number;
  label: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  color: string;
  images: { leftTop: string; leftBottom: string; right: string };
}

const CATEGORIES: Category[] = [
  {
    id: 'festivals',
    index: 0,
    label: 'Visual Identity',
    title: 'Festivals',
    description: 'From concept to stage — identity systems built for the energy of live music.',
    href: '/work/raanana-jazz-festival',
    cta: 'View Festival',
    color: '#FF6B35',
    images: {
      leftTop: '/images/raanana-jazz/image-1.png',
      leftBottom: '/images/raanana-jazz/image-2.jpg',
      right: '/images/raanana-jazz/hero.png',
    },
  },
  {
    id: 'posters',
    index: 1,
    label: 'Print Design',
    title: 'Posters',
    description: 'Concert posters rooted in typographic experimentation and high contrast.',
    href: '/work/posters-for-jazz-performances',
    cta: 'View Posters',
    color: '#F7B731',
    images: {
      leftTop: '/images/jazz-posters/1.png',
      leftBottom: '/images/jazz-posters/2.png',
      right: '/images/jazz-posters/hero.png',
    },
  },
  {
    id: 'websites',
    index: 2,
    label: 'Web Design',
    title: 'Websites',
    description: 'Digital presence for musicians — each with its own visual voice.',
    href: '/work/websites-for-jazz-musicians',
    cta: 'View Websites',
    color: '#4ECDC4',
    images: {
      leftTop: '/images/jazz-websites/amit-1.png',
      leftBottom: '/images/jazz-websites/gil-1.png',
      right: '/images/jazz-websites/alon-1.png',
    },
  },
];

const TOTAL = CATEGORIES.length;

function StickyCard({ cat }: Readonly<{ cat: Category }>) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  /**
   * Track the WRAPPER scrolling out of the viewport (not into it).
   * offset: ['start start', 'end start']
   *  — progress 0 when wrapper-top == viewport-top
   *  — progress 1 when wrapper-bottom == viewport-top (wrapper fully scrolled away)
   * This gives us the full h-screen of travel to animate the scale down.
   */
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start'],
  });

  // Earlier cards compress more; last card never compresses (targetScale === 1)
  const targetScale = 1 - (TOTAL - 1 - cat.index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    /* Full-screen wrapper — provides the scroll travel for the scale animation */
    <div ref={wrapperRef} className="h-screen">
      <motion.div
        className="sticky h-[85vh] rounded-[2.5rem] border border-white/[0.07] bg-surface overflow-hidden will-change-transform mx-2 md:mx-4"
        style={{
          scale,
          top: `calc(6rem + ${cat.index * 28}px)`,
          zIndex: cat.index + 1,
        }}
      >
        <div className="flex flex-col h-full p-6 sm:p-8 md:p-10 lg:p-12">

          {/* ── Top row ── */}
          <div className="flex items-start justify-between gap-4 mb-5 md:mb-7 shrink-0">
            <div className="flex items-baseline gap-5">
              {/* Faint index number */}
              <span
                className="font-mono font-bold leading-none text-white/[0.07] select-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                aria-hidden="true"
              >
                {String(cat.index + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-col gap-1">
                <span
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
                <h2
                  className="font-normal leading-none text-white"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
                >
                  {cat.title}
                </h2>
              </div>
            </div>

            {/* Ghost CTA — desktop */}
            <Link
              href={cat.href}
              className="shrink-0 hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-[11px] uppercase tracking-[0.18em] text-white/60 hover:bg-white/5 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              {cat.cta}
              <span className="text-[10px]" aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* ── Description ── */}
          <p className="text-sm text-white/35 max-w-xs leading-relaxed mb-5 shrink-0">
            {cat.description}
          </p>

          {/* ── Asymmetric image grid — fills remaining height ── */}
          <div className="grid grid-cols-5 gap-2.5 flex-1 min-h-0">

            {/* Left 40% — two stacked images */}
            <div className="col-span-2 grid grid-rows-2 gap-2.5">
              <div className="relative rounded-xl overflow-hidden group">
                <Image
                  src={cat.images.leftTop}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="20vw"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden group">
                <Image
                  src={cat.images.leftBottom}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="20vw"
                />
              </div>
            </div>

            {/* Right 60% — single tall feature image */}
            <div className="col-span-3 relative rounded-xl overflow-hidden group">
              <Image
                src={cat.images.right}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="35vw"
              />
              {/* Per-category accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ backgroundColor: cat.color }}
                aria-hidden="true"
              />
            </div>

          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden pt-4 shrink-0">
            <Link
              href={cat.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-[11px] uppercase tracking-[0.18em] text-white/60"
            >
              {cat.cta} ↗
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="[overflow-x:clip]">

      {/* ── Oversized gradient heading ── */}
      <section className="px-5 md:px-10 lg:px-16 pt-16 pb-12 md:pb-20">
        <motion.h1
          className="font-normal leading-[0.92] select-none text-foreground"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(4.5rem, 14vw, 14rem)',
            letterSpacing: '-0.04em',
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          My{' '}
          <em className="not-italic text-foreground/70">Work</em>
        </motion.h1>

        <motion.p
          className="mt-5 text-sm text-foreground/60 max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Identity, web, and print — approached with the same structure and care as building
          software.
        </motion.p>
      </section>

      {/* ── Sticky stacking cards ── */}
      <section>
        {CATEGORIES.map((cat) => (
          <StickyCard key={cat.id} cat={cat} />
        ))}
      </section>

      {/* ── Footer CTA ── */}
      <section className="px-5 md:px-10 lg:px-16 py-24 md:py-36 border-t border-white/[0.06]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2
            className="font-normal leading-tight max-w-xs text-white"
            style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)' }}
          >
            Have a project in mind?
          </h2>
          <Link
            href="/contact"
            className="pressable inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors duration-200 min-h-[44px]"
          >
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
