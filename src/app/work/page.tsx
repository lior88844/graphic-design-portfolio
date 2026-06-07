'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import type { CSSProperties } from 'react';

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
    id: 'websites',
    index: 0,
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
    id: 'festivals',
    index: 2,
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
    id: 'apps',
    index: 3,
    label: 'Product Design',
    title: 'Apps',
    description: 'Interface and product design — brand systems translated into usable digital products.',
    href: '/work/apps',
    cta: 'View Apps',
    color: '#6C5CE7',
    images: {
      leftTop: '/images/apps/1.png',
      leftBottom: '/images/apps/2.png',
      right: '/images/apps/hero.PNG',
    },
  },
];

/** Each card steps down below the nav so they stack on scroll */
const STICKY_TOP_STEP = 28;

function StickyCard({ cat }: Readonly<{ cat: Category }>) {
  const topOffsetPx = cat.index * STICKY_TOP_STEP;

  const cardStyle: CSSProperties = {
    '--card-top': `calc(var(--nav-height) + ${topOffsetPx}px)`,
    zIndex: cat.index + 1,
  } as CSSProperties;

  return (
    <article
      id={cat.id}
      className="glass-card sticky top-[var(--card-top)] mx-2 md:mx-4 h-[60dvh] min-h-0 rounded-[2.5rem] overflow-hidden"
      style={cardStyle}
    >
      <motion.div
        className="flex flex-col h-full min-h-[inherit] p-6 sm:p-8 md:p-10 lg:p-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* ── Top row ── */}
        <div className="flex items-end justify-between gap-4 mb-5 md:mb-7 shrink-0">
          <div className="flex items-end gap-5">
            <span
              className="font-mono font-bold leading-none text-white/25 select-none"
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

          <Link
            href={cat.href}
            className="group/cta shrink-0 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/85 hover:text-white transition-colors duration-200"
          >
            {cat.cta}
            <span
              className="text-[12px] transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              style={{ color: cat.color }}
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </div>

        <p className="text-sm text-white/75 max-w-xs leading-relaxed mb-5 shrink-0">
          {cat.description}
        </p>

        <div className="grid grid-cols-5 gap-2.5 flex-1 min-h-0">
          <div className="col-span-2 grid grid-rows-2 gap-2.5">
            <div className="relative rounded-xl overflow-hidden group min-h-[120px]">
              <Image
                src={cat.images.leftTop}
                alt=""
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                sizes="20vw"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden group min-h-[120px]">
              <Image
                src={cat.images.leftBottom}
                alt=""
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                sizes="20vw"
              />
            </div>
          </div>

          <div className="col-span-3 relative rounded-xl overflow-hidden group min-h-[200px]">
            <Image
              src={cat.images.right}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="35vw"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px]"
              style={{ backgroundColor: cat.color }}
              aria-hidden="true"
            />
          </div>
        </div>

      </motion.div>
    </article>
  );
}

export default function WorkPage() {
  return (
    <div>
      <motion.div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16 pt-16">
          <header className="lg:sticky lg:top-[var(--nav-height)] z-30 shrink-0 self-start w-full lg:w-[min(320px,36%)] pb-4 lg:pb-0">
            <motion.h1
              className="font-normal leading-[0.92] select-none text-foreground"
              style={{
                fontFamily: 'var(--font-display), Georgia, serif',
                fontSize: 'clamp(3.5rem, 12vw, 8rem)',
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
          </header>

          <section className="flex-1 min-w-0 flex flex-col gap-12 pb-[60dvh]">
            {CATEGORIES.map((cat) => (
              <StickyCard key={cat.id} cat={cat} />
            ))}
          </section>
        </div>
      </motion.div>
    </div>
  );
}
