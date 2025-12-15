/**
 * Motion system: global animation presets, easings, and variants
 */

import { Variants, Transition } from 'framer-motion';

// Custom easing curves
export const ease = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  bounce: [0.68, -0.55, 0.265, 1.55],
  sharp: [0.4, 0.0, 0.2, 1],
  expressive: [0.87, 0, 0.13, 1],
};

// Duration presets
export const duration = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
};

// Stagger presets
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

// Common transition configs
export const transition = {
  smooth: {
    duration: duration.normal,
    ease: ease.smooth,
  } as Transition,
  expressive: {
    duration: duration.slow,
    ease: ease.expressive,
  } as Transition,
  bounce: {
    duration: duration.normal,
    ease: ease.bounce,
  } as Transition,
};

// Shared animation variants
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: transition.smooth,
  },
  exit: {
    opacity: 0,
    y: -60,
    transition: transition.smooth,
  },
};

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: transition.smooth,
  },
  exit: {
    opacity: 0,
    transition: { duration: duration.fast },
  },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: transition.expressive,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: duration.fast },
  },
};

export const slideInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: transition.smooth,
  },
};

export const slideInRight: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: transition.smooth,
  },
};

// Kinetic text animation
export const kineticText: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: stagger.normal,
    },
  },
};

export const kineticChar: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)',
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: {
      duration: duration.slow,
      ease: ease.expressive,
    },
  },
};

// Page transition variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: duration.normal,
      ease: ease.smooth,
    },
  },
};

// Scroll-driven reveal
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transition.expressive,
  },
};

// Mask reveal
export const maskReveal: Variants = {
  hidden: {
    clipPath: 'inset(0 0 100% 0)',
  },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: duration.verySlow,
      ease: ease.expressive,
    },
  },
};

// Hover/tap interactions
export const hoverScale = {
  scale: 1.02,
  transition: transition.bounce,
};

export const tapScale = {
  scale: 0.98,
};

export const hoverLift = {
  y: -4,
  transition: transition.smooth,
};

// Utility: get staggered container props
export const staggerContainer = (delayChildren = 0, staggerValue = stagger.normal) => ({
  animate: {
    transition: {
      delayChildren,
      staggerChildren: staggerValue,
    },
  },
});

