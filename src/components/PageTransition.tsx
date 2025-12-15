'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { pageTransition } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { shouldReduceMotion } = useMotionPreference();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={shouldReduceMotion ? {} : pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

