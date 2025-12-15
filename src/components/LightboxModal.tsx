'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { fadeIn, scaleIn } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

interface LightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export function LightboxModal({ isOpen, imageSrc, imageAlt, onClose }: LightboxModalProps) {
  const { shouldReduceMotion } = useMotionPreference();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={shouldReduceMotion ? {} : fadeIn}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Image */}
          <motion.div
            className="relative w-full h-full max-w-6xl max-h-full"
            variants={shouldReduceMotion ? {} : scaleIn}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </motion.div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center text-foreground hover:text-accent transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

