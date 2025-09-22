// ======================================================================
// /src/components/media/ImageBand.tsx
// Static image band between sections (no motion; upgradeable later).
// ======================================================================
/* eslint-disable @next/next/no-img-element */
'use client';

import * as React from 'react';

type BandProps = {
  src: string;
  alt?: string;
  height?: number;
  overlay?: boolean;
  className?: string;
};

export default function ImageBand({ src, alt, height = 360, overlay = true, className }: BandProps) {
  return (
    <div
      className={['container mx-auto max-w-6xl overflow-hidden rounded-2xl px-0 shadow-2', className]
        .filter(Boolean)
        .join(' ')}
      style={{ height }}
      aria-label={alt}
    >
      <div className="relative size-full">
        <img src={src} alt={alt ?? ''} className="absolute inset-0 size-full object-cover" />
        {overlay ? <div className="pointer-events-none absolute inset-0 bg-black/35" /> : null}
      </div>
    </div>
  );
}

