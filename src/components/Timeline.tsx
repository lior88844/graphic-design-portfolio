'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMotionPreference } from '@/lib/reduced-motion';

export interface TimelineEntry {
  /** The era label, e.g. "2024–2025" or "September 2024". */
  period: string;
  /** Optional secondary label such as an age range. */
  age?: string;
  title: string;
  points: string[];
}

interface TimelineProps {
  entries: TimelineEntry[];
  className?: string;
}

/**
 * Horizontal, scroll-snapping timeline. A gold spine runs left-to-right and
 * fills with horizontal scroll progress; each milestone sits as a column with
 * its node on the spine and content beneath. `data-lenis-prevent` lets the
 * container scroll natively despite the site's vertical smooth-scroll.
 */
export function Timeline({ entries, className = '' }: Readonly<TimelineProps>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { shouldReduceMotion } = useMotionPreference();
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const fillScaleX = useTransform(scrollXProgress, [0, 1], [0, 1]);

  return (
    <div className={`relative ${className}`}>
      <p className="mb-4 pl-[max(1rem,calc((100%_-_64rem)/2))] font-sans text-xs uppercase tracking-[0.2em] text-muted sm:pl-[max(1.5rem,calc((100%_-_64rem)/2))]">
        Scroll horizontally →
      </p>

      <div
        ref={scrollRef}
        data-lenis-prevent
        className="overflow-x-auto overflow-y-hidden pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <ol className="relative flex min-w-max pl-[max(1rem,calc((100%_-_64rem)/2))] pr-8 sm:pl-[max(1.5rem,calc((100%_-_64rem)/2))]">
          {/* Base spine — runs full-bleed from the very left page edge */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-14 h-px bg-foreground/15"
          />
          {/* Progress fill */}
          {!shouldReduceMotion && (
            <motion.span
              aria-hidden
              style={{ scaleX: fillScaleX }}
              className="pointer-events-none absolute inset-x-0 top-14 h-px origin-left bg-accent"
            />
          )}

          {entries.map((entry) => (
            <li
              key={entry.period + entry.title}
              className="relative flex w-[16.5rem] flex-shrink-0 flex-col pr-8 sm:w-[18rem]"
            >
              {/* Period (above the spine) */}
              <div className="flex h-11 items-end">
                <span className="font-display italic leading-none text-accent text-xl sm:text-2xl">
                  {entry.period}
                </span>
                {entry.age && (
                  <span className="ml-2 font-sans text-xs text-muted">{entry.age}</span>
                )}
              </div>

              {/* Node (on the spine) */}
              <div className="relative flex h-6 items-center">
                <span className="h-[11px] w-[11px] rounded-full bg-accent ring-4 ring-background" />
              </div>

              {/* Content (below the spine) */}
              <motion.div
                className="pt-3"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                <h3 className="mb-3 font-display text-lg leading-snug text-foreground sm:text-xl">
                  {entry.title}
                </h3>
                <ul className="space-y-1.5">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-foreground/75"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.5em] h-1 w-1 flex-shrink-0 rounded-full bg-accent/70"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
