'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';
import { hoverScale, tapScale } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  underline?: boolean;
}

export function AnimatedLink({ 
  href, 
  children, 
  className = '', 
  underline = true 
}: AnimatedLinkProps) {
  const { shouldReduceMotion } = useMotionPreference();

  return (
    <Link href={href} className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        whileHover={!shouldReduceMotion ? hoverScale : undefined}
        whileTap={!shouldReduceMotion ? tapScale : undefined}
      >
        {children}
      </motion.span>
      {underline && (
        <motion.span
          className="absolute bottom-0 left-0 h-[2px] bg-current"
          initial={{ width: 0 }}
          whileHover={!shouldReduceMotion ? { width: '100%' } : undefined}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
}

