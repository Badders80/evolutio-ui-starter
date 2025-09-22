// ======================================================================
// /src/components/media/ImageBand.tsx
// Parallax image band between sections.
// ======================================================================
'use client';

import * as React from 'react';
import { m, useScroll, useTransform, useReducedMotion } from 'framer-motion';

type BandProps = {
  src: string;
  alt?: string;
  height?: number;
  speed?: number;
  overlay?: boolean;
  className?: string;
};

export default function ImageBand({ src, alt, height = 360, speed = 36, overlay = true, className }: BandProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const reduced = useReducedMotion();
  const yTransform = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const y = reduced ? 0 : yTransform;

  return (
    <div
      ref={ref}
      className={['container mx-auto max-w-6xl px-0 sm:px-0 overflow-hidden rounded-2xl shadow-2', className].filter(Boolean).join(' ')}
      style={{ height }}
      aria-label={alt}
    >
      <div className="relative size-full">
        <m.img src={src} alt={alt ?? ''} className="absolute left-0 top-0 h-[120%] w-full object-cover" style={{ y }} />
        {overlay ? <div className="pointer-events-none absolute inset-0 bg-black/35" /> : null}
      </div>
    </div>
  );
}