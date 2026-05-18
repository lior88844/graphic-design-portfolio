'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';

export default function HeroCursor() {
  const [visible, setVisible] = useState(false);
  const [onCTA, setOnCTA] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  useEffect(() => {
    // Only activate on true pointer devices (not touch)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cta = document.getElementById('hero-cta');

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    // Hide when the pointer leaves the browser window entirely
    const onLeaveWindow = () => {
      setVisible(false);
      setOnCTA(false);
    };

    const onEnterCTA = () => setOnCTA(true);
    const onLeaveCTA = () => setOnCTA(false);

    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeaveWindow);
    cta?.addEventListener('mouseenter', onEnterCTA);
    cta?.addEventListener('mouseleave', onLeaveCTA);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow);
      cta?.removeEventListener('mouseenter', onEnterCTA);
      cta?.removeEventListener('mouseleave', onLeaveCTA);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
    >
      <AnimatePresence>
        {visible && (
          <>
            {/* Core dot — expands on CTA hover */}
            <motion.div
              key="dot"
              className="rounded-full bg-white"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{
                opacity: 1,
                scale: 1,
                width: onCTA ? 20 : 8,
                height: onCTA ? 20 : 8,
              }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              style={{
                boxShadow: onCTA
                  ? '0 0 0 2px rgba(255,255,255,0.25), 0 0 18px 8px rgba(255,255,255,0.45)'
                  : '0 0 6px 3px rgba(255,255,255,0.55)',
              }}
            />

            {/* Outer pulse ring — only visible on CTA hover */}
            {onCTA && (
              <motion.div
                key="ring"
                className="absolute rounded-full border border-white/30 animate-cursor-twinkle"
                style={{ inset: '-10px' }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
