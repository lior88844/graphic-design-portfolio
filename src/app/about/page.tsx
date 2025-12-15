'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { KineticHeadline } from '@/components/KineticHeadline';
import { SectionReveal } from '@/components/SectionReveal';
import { useMotionPreference } from '@/lib/reduced-motion';

export default function AboutPage() {
  const ref = useRef(null);
  const { shouldReduceMotion } = useMotionPreference();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rhythmX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rhythmRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <KineticHeadline
            text="About"
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12"
            as="h1"
          />
        </div>

        {/* Main Content */}
        <SectionReveal>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Photo */}
            <motion.div
              className="w-full md:w-1/3 lg:w-2/5 flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/Shani -1.PNG"
                  alt="Lior Shani"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 prose prose-invert prose-lg md:prose-xl max-w-none">
              <motion.p
                className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Lior's connection to jazz began behind the scenes. She started as a waitress at Beit HaAmudim, 
                a jazz club in Tel Aviv, where long nights around live performances gradually turned into an 
                entry point into the music itself. During that time, she began photographing concerts, learning 
                how to observe rhythm, atmosphere, and presence through a lens.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Later, she moved into front-end software engineering, where she was exposed to the visual 
                side of technology — working closely with interfaces, layout, and tools such as Photoshop 
                and the Adobe suite. This period shaped her understanding of structure, systems, and how 
                design lives within technology.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Design entered naturally through her surroundings. She began creating posters and visuals 
                for friends' gigs and shows, which grew into website design and visual identities for jazz 
                musicians. What started as informal collaborations evolved into a focused practice centered 
                on music and culture.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Her largest project to date is the Raanana Jazz Festival, taking place from December 18–20, 
                2025, for which she created the visual identity, website, merchandise, and digital presence.
              </motion.p>

              <motion.p
                className="text-lg sm:text-xl leading-relaxed text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                Today, Lior's work sits at the intersection of design, technology, and photography. Alongside 
                visual identity and web design, she continues to photograph live performances. Her visual 
                language is consistent, timeless, and elegant, while actively embracing contemporary tools and 
                emerging technologies. She is not hesitant to work with AI, new software, or unconventional 
                mediums, choosing whatever best serves the artist, venue, or event.
              </motion.p>
            </div>
          </div>
        </SectionReveal>

        {/* Rhythm motif */}
        <div ref={ref} className="my-20 sm:my-32 flex justify-center overflow-hidden">
          <motion.div
            className="relative w-48 h-48 sm:w-64 sm:h-64"
            style={
              shouldReduceMotion
                ? {}
                : {
                    x: rhythmX,
                    rotate: rhythmRotate,
                  }
            }
          >
            {/* Abstract rhythm visualization */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="var(--accent-secondary)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.2, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="100"
                cy="100"
                r="40"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.4, ease: 'easeInOut' }}
              />
              {/* Animated lines */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.line
                  key={angle}
                  x1="100"
                  y1="100"
                  x2={100 + 80 * Math.cos((angle * Math.PI) / 180)}
                  y2={100 + 80 * Math.sin((angle * Math.PI) / 180)}
                  stroke="var(--accent)"
                  strokeWidth="1"
                  opacity="0.2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 * i }}
                />
              ))}
            </svg>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <SectionReveal>
          <div className="mt-20 sm:mt-32 text-center">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              Let's work together
            </h2>
            <motion.a
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-foreground hover:bg-foreground/90 text-background font-bold text-base sm:text-lg transition-colors rounded-full min-h-[44px]"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

