/**
 * Reduced motion utilities and context
 */

'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type MotionPreference = 'full' | 'reduced';

interface MotionContextValue {
  motionPreference: MotionPreference;
  setMotionPreference: (pref: MotionPreference) => void;
  shouldReduceMotion: boolean;
}

const MotionContext = createContext<MotionContextValue | undefined>(undefined);

export function MotionProvider({ children }: { children: ReactNode }) {
  const [motionPreference, setMotionPreferenceState] = useState<MotionPreference>('full');
  const [systemPreference, setSystemPreference] = useState<MotionPreference>('full');

  // Check system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSystemPreference(mediaQuery.matches ? 'reduced' : 'full');

    const listener = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? 'reduced' : 'full');
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem('motion-preference') as MotionPreference | null;
    if (saved) {
      setMotionPreferenceState(saved);
    }
  }, []);

  const setMotionPreference = (pref: MotionPreference) => {
    setMotionPreferenceState(pref);
    localStorage.setItem('motion-preference', pref);
  };

  const shouldReduceMotion = motionPreference === 'reduced' || systemPreference === 'reduced';

  return (
    <MotionContext.Provider
      value={{
        motionPreference,
        setMotionPreference,
        shouldReduceMotion,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function useMotionPreference() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotionPreference must be used within MotionProvider');
  }
  return context;
}

// Utility hook to conditionally disable animations
export function useReducedMotionVariants<T>(fullVariants: T, reducedVariants?: Partial<T>): T {
  const { shouldReduceMotion } = useMotionPreference();
  
  if (shouldReduceMotion && reducedVariants) {
    return { ...fullVariants, ...reducedVariants } as T;
  }
  
  if (shouldReduceMotion) {
    // Default: remove all motion
    return {} as T;
  }
  
  return fullVariants;
}

