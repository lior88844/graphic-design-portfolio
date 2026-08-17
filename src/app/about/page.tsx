'use client';

import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/SectionReveal';
import { Timeline } from '@/components/Timeline';
import { useMotionPreference } from '@/lib/reduced-motion';
import timelineData from '@/content/timeline.json';

export default function AboutPage() {
  const { shouldReduceMotion } = useMotionPreference();

  return (
    <div className="min-h-screen py-12 sm:py-20">
      {/* Semi-headline (constrained) */}
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <SectionReveal>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted sm:mb-4 sm:text-sm">
              About
            </p>
            <h1 className="mb-14 max-w-2xl font-display text-2xl leading-snug text-foreground sm:mb-20 sm:text-3xl md:text-4xl">
              I&apos;m a UX engineer and designer. I come from a psychology background,
              spent years teaching, and have lived and worked in a few different places along the way.
            </h1>
          </SectionReveal>
        </div>
      </div>

      {/* Full-bleed timeline — line spans the whole page, starting at the very left */}
      <Timeline entries={timelineData} />

      {/* Contact CTA (constrained) */}
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mt-24 text-center sm:mt-32">
            <h2 className="mb-6 font-display text-2xl font-normal sm:mb-8 sm:text-3xl md:text-4xl">
              Let&apos;s work together
            </h2>
            <motion.a
              href="/contact"
              className="inline-block min-h-[44px] rounded-full bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90 sm:px-8 sm:py-4 sm:text-lg"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
