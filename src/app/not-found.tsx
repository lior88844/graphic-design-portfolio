'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMotionPreference } from '@/lib/reduced-motion';

export default function NotFound() {
  const { shouldReduceMotion } = useMotionPreference();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="text-9xl md:text-[12rem] font-normal mb-4 font-headline tracking-tight text-accent">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-normal mb-6">Page Not Found</h2>
          <p className="text-xl text-muted mb-12 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          >
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-foreground hover:bg-foreground/90 text-background font-semibold text-lg transition-colors duration-200 rounded-full"
            >
              Go Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
