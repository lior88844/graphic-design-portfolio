'use client';

import { motion } from 'framer-motion';
import { kineticText, kineticChar } from '@/lib/motion';
import { useMotionPreference } from '@/lib/reduced-motion';

interface KineticHeadlineProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function KineticHeadline({ text, className = '', as = 'h1' }: KineticHeadlineProps) {
  const { shouldReduceMotion } = useMotionPreference();
  const words = text.split(' ');

  const Component = motion[as];
  const headlineClass = `font-headline ${className}`;

  if (shouldReduceMotion) {
    return <Component className={headlineClass}>{text}</Component>;
  }

  return (
    <Component className={headlineClass} variants={kineticText} initial="initial" animate="animate">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              className="inline-block"
              variants={kineticChar}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Component>
  );
}

