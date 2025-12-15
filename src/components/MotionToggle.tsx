'use client';

import { motion } from 'framer-motion';
import { useMotionPreference } from '@/lib/reduced-motion';

export function MotionToggle() {
  const { motionPreference, setMotionPreference, shouldReduceMotion } = useMotionPreference();

  const toggleMotion = () => {
    setMotionPreference(motionPreference === 'full' ? 'reduced' : 'full');
  };

  return (
    <button
      onClick={toggleMotion}
      className="fixed bottom-6 right-6 z-40 bg-foreground backdrop-blur-sm text-background px-4 py-2 rounded-full text-sm hover:bg-foreground/95 transition-colors shadow-lg"
      aria-label={`Switch to ${motionPreference === 'full' ? 'reduced' : 'full'} motion`}
    >
      <motion.span
        key={motionPreference}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {shouldReduceMotion ? '⚡ Enable Motion' : '🌙 Reduce Motion'}
      </motion.span>
    </button>
  );
}

