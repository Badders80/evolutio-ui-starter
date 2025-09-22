import * as React from "react";

export default function MissionSimple() {
  return (
    <div className="rounded-2xl shadow-2 bg-surface-2 p-8">
      <p className="kicker mb-2 text-accent">Our Mission</p>
      <h2 className="font-heading text-4xl font-bold sm:text-5xl">Ownership Re-Imagined</h2>
      <p className="mt-4 max-w-3xl text-lg text-muted">
        Traditional racehorse ownership has been restrictive, complex, and closed to most. Evolution Stables breaks down the
        barriers with an accessible, transparent, and flexible model designed for everyone &mdash; whether you're a seasoned owner
        or just starting out.
      </p>
      <a
        href="/join"
        className="mt-6 inline-flex rounded-xl bg-accent px-5 py-2.5 font-medium text-black shadow-2 transition hover:opacity-90"
        aria-label="Join the Revolution"
      >
        Join the Revolution
      </a>
    </div>
  );
}



