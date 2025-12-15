'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useMotionPreference } from '@/lib/reduced-motion';

export function AnimatedBackground() {
  const { shouldReduceMotion } = useMotionPreference();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const x1 = useSpring(useTransform(mouseX, [0, 1], [0, 30]), springConfig);
  const y1 = useSpring(useTransform(mouseY, [0, 1], [0, 30]), springConfig);
  const x2 = useSpring(useTransform(mouseX, [0, 1], [0, -20]), springConfig);
  const y2 = useSpring(useTransform(mouseY, [0, 1], [0, -20]), springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent-secondary/5" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
        style={{
          x: x1,
          y: y1,
          background: 'radial-gradient(circle, rgba(139,21,56,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          x: x2,
          y: y2,
          background: 'radial-gradient(circle, rgba(193,127,89,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-background to-accent-secondary/3 animate-gradient" />
    </div>
  );
}

