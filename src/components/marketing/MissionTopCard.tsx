// ==========================================
// /src/components/marketing/MissionTopCard.tsx
// Visual: like your top mission card. Copy: bottom section's text.
// ==========================================
import * as React from 'react';

export default function MissionTopCard() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-surface-1 p-8 shadow-2">
        {/* Why: brand accent stripe like top visual */}
        <div className="absolute inset-y-0 left-0 w-1 bg-accent" aria-hidden="true" />

        <p className="mb-2 text-sm tracking-wide text-accent">Our Mission</p>

        {/* Keep bottom copy casing; size matches top feel */}
        <h2 className="font-heading text-5xl font-bold leading-tight">
          Ownership Re-Imagined
        </h2>

        <p className="mt-4 max-w-3xl text-lg text-muted">
          Traditional racehorse ownership has been restrictive, complex, and closed to most.
          Evolution Stables breaks down the barriers with an accessible, transparent, and flexible
          model designed for everyone — whether you&apos;re a seasoned owner or just starting out.
        </p>

        <a
          href="/join"
          aria-label="Join the Revolution"
          className="mt-6 inline-flex rounded-xl bg-accent px-5 py-2.5 font-medium text-black shadow-2"
        >
          Join the Revolution
        </a>
      </div>
    </section>
  );
}