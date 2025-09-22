// ======================================================================
// /src/lib/motion.tsx
// Reusable Framer Motion helpers (why: consistent motion + reduced-motion support).
// ======================================================================
'use client';

import * as React from 'react';
import { LazyMotion, domAnimation, Variants, useReducedMotion } from 'framer-motion';

export const MotionFeatures = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);

export const springSoft = { type: 'spring', stiffness: 360, damping: 34, mass: 1 };

export function fadeUp(reduced: boolean): Variants {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    shown: {
      opacity: 1, y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.5, ease: 'easeOut' }
    }
  };
}

export function useReduced() { return useReducedMotion(); }