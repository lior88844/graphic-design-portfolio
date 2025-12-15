'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { maskReveal } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

interface ProjectHeroProps {
  title: string;
  category: string;
  year: string;
  imageSrc: string;
  color?: string;
}

export function ProjectHero({ title, category, year, imageSrc, color }: ProjectHeroProps) {
  const ref = useRef(null);
  const { shouldReduceMotion } = useMotionPreference();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Image */}
      <motion.div
        className="absolute inset-0"
        style={shouldReduceMotion ? {} : { y }}
      >
        <motion.div
          className="relative w-full h-[120%]"
          initial="hidden"
          animate="visible"
          variants={shouldReduceMotion ? {} : maskReveal}
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-end pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6"
        style={shouldReduceMotion ? {} : { opacity }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
          >
            {color && (
              <motion.div
                className="w-16 sm:w-20 md:w-24 h-1 mb-4 sm:mb-6"
                style={{ backgroundColor: color }}
                initial={{ width: 0 }}
                animate={{ width: typeof window !== 'undefined' && window.innerWidth < 640 ? 64 : 96 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            )}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 text-white drop-shadow-2xl">
              {title}
            </h1>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow-lg">
              <span>{category}</span>
              <span>•</span>
              <span>{year}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

