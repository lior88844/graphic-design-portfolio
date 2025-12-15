'use client';

import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { scrollReveal } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className = '', delay = 0 }: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { shouldReduceMotion } = useMotionPreference();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={scrollReveal}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

