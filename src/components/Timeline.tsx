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
 * Scroll-driven vertical timeline. A single gold spine runs down the left
 * edge and fills as the reader scrolls; each milestone reveals on entry.
 * Built to scale to many chronological entries and to act as the primary
 * layout of a page rather than a boxed widget.
 */
export function Timeline({ entries, className = '' }: Readonly<TimelineProps>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { shouldReduceMotion } = useMotionPreference();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const fillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Base spine */}
      <span
        aria-hidden
        className="absolute left-[7px] top-2 bottom-2 w-px bg-foreground/15"
      />
      {/* Progress fill */}
      {!shouldReduceMotion && (
        <motion.span
          aria-hidden
          style={{ scaleY: fillScale }}
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-accent"
        />
      )}

      <ol className="space-y-14 sm:space-y-20">
        {entries.map((entry) => (
          <li key={entry.period + entry.title} className="relative pl-10 sm:pl-14">
            {/* Node */}
            <span
              aria-hidden
              className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center"
            >
              <span className="h-[9px] w-[9px] rounded-full bg-accent ring-4 ring-background" />
            </span>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display italic leading-none text-accent text-2xl sm:text-3xl">
                  {entry.period}
                </span>
                {entry.age && (
                  <span className="font-sans text-xs sm:text-sm text-muted">{entry.age}</span>
                )}
              </div>

              <h3 className="mb-3 font-display text-xl leading-snug text-foreground sm:mb-4 sm:text-2xl">
                {entry.title}
              </h3>

              <ul className="space-y-1.5 sm:space-y-2">
                {entry.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/75 sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55em] h-1 w-1 flex-shrink-0 rounded-full bg-accent/70"
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
  );
}
