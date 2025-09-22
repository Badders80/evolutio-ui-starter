// ======================================================================
// /src/components/layout/NavFadeIn.tsx
// Wrap your existing nav to delay-fade it after the hero.
// ======================================================================
'use client';

import * as React from 'react';
import { m } from 'framer-motion';
import { springSoft } from '@/lib/motion';

export default function NavFadeIn({ children, delay = 1.0, className }: { children: React.ReactNode; delay?: number; className?: string; }) {
  return (
    <m.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springSoft, delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}