'use client';

import { motion } from 'framer-motion';

interface ProjectHeaderProps {
  title: string;
  category: string;
  year: string;
  color?: string;
}

/**
 * Text-only project header that matches the rest of the site (no full-bleed
 * hero photo). Used for projects whose imagery reads better in the grid below
 * than as a cropped background — e.g. tall app screenshots.
 */
export function ProjectHeader({ title, category, year, color }: Readonly<ProjectHeaderProps>) {
  return (
    <header className="px-4 sm:px-6 pt-[calc(var(--nav-height)+3rem)] pb-8 sm:pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto">
        {color && (
          <motion.div
            className="h-1 mb-5 sm:mb-7"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          />
        )}

        <motion.h1
          className="font-normal leading-[0.92] text-foreground"
          style={{
            fontFamily: 'var(--font-display), Georgia, serif',
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            letterSpacing: '-0.04em',
          }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl text-foreground/60"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span>{category}</span>
          <span aria-hidden="true">•</span>
          <span className="tabular-nums">{year}</span>
        </motion.div>
      </div>
    </header>
  );
}
