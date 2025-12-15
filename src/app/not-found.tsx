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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl md:text-[12rem] font-bold mb-4">
            <span className="gradient-text">404</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-foreground hover:bg-foreground/90 text-background font-bold text-lg transition-colors rounded-full"
            >
              Go Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
