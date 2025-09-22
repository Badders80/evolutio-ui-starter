// ======================================================================
// /src/components/marketing/MissionCombo.tsx
// Animated mission + two support cards (fade+rise, stagger, CTA micro-interaction).
// ======================================================================
'use client';

import * as React from 'react';
import { m, useInView, useReducedMotion } from 'framer-motion';

type CTA = { label: string; href: string; ariaLabel?: string };
type Mission = { eyebrow?: string; title: string; body: string; cta?: CTA };
type SupportItem = { heading: string; body: string };

export type MissionComboProps = {
  mission: Mission;
  support: [SupportItem, SupportItem];
  className?: string;
};

export default function MissionCombo({ mission, support, className }: MissionComboProps) {
  const [s1, s2] = support;
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: '-10% 0% -10% 0%', once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: reduced ? 0 : 16 },
    shown: {
      opacity: 1,
      y: 0,
      transition: reduced ? { duration: 0 } : { duration: 0.45, ease: 'easeOut' },
    },
  };
  const parentStagger = reduced ? { shown: { transition: { duration: 0 } } } : { shown: { transition: { staggerChildren: 0.1 } } };

  return (
    <section ref={ref} className={className}>
      <div className="relative overflow-hidden rounded-2xl bg-surface-2 p-8 shadow-2xl">
        <div className="absolute inset-y-0 left-0 w-1 bg-accent" aria-hidden="true" />
        {mission.eyebrow ? (
          <m.p
            initial="hidden"
            animate={inView ? 'shown' : 'hidden'}
            variants={fadeUp}
            className="mb-2 text-sm tracking-wide text-accent"
          >
            {mission.eyebrow}
          </m.p>
        ) : null}

        <m.h2
          initial="hidden"
          animate={inView ? 'shown' : 'hidden'}
          variants={fadeUp}
          className="font-heading text-5xl font-bold leading-tight"
        >
          {mission.title}
        </m.h2>

        <m.p
          initial="hidden"
          animate={inView ? 'shown' : 'hidden'}
          variants={fadeUp}
          className="mt-4 max-w-3xl text-lg text-muted"
        >
          {mission.body}
        </m.p>

        {mission.cta ? (
          <m.a
            href={mission.cta.href}
            aria-label={mission.cta.ariaLabel ?? mission.cta.label}
            whileHover={reduced ? undefined : { scale: 1.02 }}
            whileTap={reduced ? undefined : { scale: 0.98 }}
            className="mt-6 inline-flex rounded-xl bg-accent px-5 py-2.5 font-medium text-black shadow-xl"
          >
            {mission.cta.label}
          </m.a>
        ) : null}
      </div>

      <m.div
        initial="hidden"
        animate={inView ? 'shown' : 'hidden'}
        variants={parentStagger}
        className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {[s1, s2].map((s) => (
          <m.article
            key={s.heading}
            variants={fadeUp}
            className="rounded-2xl bg-surface-2 p-6 shadow-xl"
          >
            <h3 className="font-heading text-xl text-accent">{s.heading}</h3>
            <p className="mt-3 text-muted">{s.body}</p>
          </m.article>
        ))}
      </m.div>
    </section>
  );
}
