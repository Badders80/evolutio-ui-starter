// ======================================================================
// /src/components/marketing/HeroIntro.tsx
// Black start → BG fades in → brand band lags in → CTA optional.
// ======================================================================
'use client';

import * as React from 'react';
import { m } from 'framer-motion';
import { MotionFeatures, fadeUp, springSoft, useReduced } from '@/lib/motion';

type HeroProps = {
  bgSrc: string;                 // background hero image
  brandSrc?: string;             // banded naming image (optional)
  brandAlt?: string;
  title?: string;                // fallback text title if no brandSrc
  tagline?: string;              // optional supporting line
  cta?: { label: string; href: string };
  height?: number;               // min-height in px
  overlay?: number;              // 0..1 additional dark overlay
  className?: string;
  navDelay?: number;             // export a recommended delay for NavFadeIn
};

export default function HeroIntro({
  bgSrc,
  brandSrc,
  brandAlt,
  title,
  tagline,
  cta,
  height = 640,
  overlay = 0.4,
  className,
}: HeroProps) {
  const reduced = useReduced();

  return (
    <MotionFeatures>
      <section className={['container mx-auto max-w-6xl px-0 sm:px-0'].join(' ')}>
        <div className={['relative overflow-hidden rounded-2xl shadow-2 bg-black', className].filter(Boolean).join(' ')} style={{ minHeight: height }}>
          {/* Start black; BG fades/settles */}
          <m.img
            src={bgSrc}
            alt=""
            className="absolute left-0 top-0 size-full object-cover"
            initial={{ opacity: 0, scale: reduced ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduced ? { duration: 0 } : { duration: 0.9, ease: 'easeOut' }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${overlay})` }} />

          {/* Brand band (lags in) */}
          <div className="relative z-10 flex h-full items-center justify-center px-8 py-12">
            {brandSrc ? (
              <m.img
                src={brandSrc}
                alt={brandAlt ?? ''}
                initial={{ opacity: 0, y: reduced ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={reduced ? { duration: 0 } : { delay: 0.35, duration: 0.6, ease: 'easeOut' }}
                className="max-w-[78%] select-none sm:max-w-[70%] md:max-w-[62%] lg:max-w-[54%]"
              />
            ) : (
              <div className="text-center">
                <m.h1
                  initial="hidden"
                  animate="shown"
                  variants={fadeUp(reduced ?? false)}
                  transition={{ ...springSoft, delay: 0.35 }}
                  className="font-heading text-5xl font-bold text-accent sm:text-6xl md:text-7xl"
                >
                  {title}
                </m.h1>
                {tagline ? (
                  <m.p
                    initial="hidden"
                    animate="shown"
                    variants={fadeUp(reduced ?? false)}
                    transition={{ ...springSoft, delay: 0.5 }}
                    className="mt-4 text-lg text-muted"
                  >
                    {tagline}
                  </m.p>
                ) : null}
              </div>
            )}
          </div>

          {/* Optional CTA, lagging slightly behind the brand */}
          {cta ? (
            <m.a
              href={cta.href}
              className="absolute bottom-6 left-6 inline-flex rounded-xl bg-accent px-5 py-2.5 font-medium text-black shadow-2"
              initial={{ opacity: 0, y: reduced ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springSoft, delay: 0.75 }}
              whileHover={reduced ? undefined : { scale: 1.02 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
            >
              {cta.label}
            </m.a>
          ) : null}
        </div>
      </section>
    </MotionFeatures>
  );
}