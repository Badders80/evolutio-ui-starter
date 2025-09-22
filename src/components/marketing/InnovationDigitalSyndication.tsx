import * as React from "react";

export default function InnovationDigitalSyndication() {
  return (
    <div>
      <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl">Innovation: Digital-Syndication</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-surface-2 p-6 shadow-2">
          <h3 className="font-heading text-xl text-accent">For Owners</h3>
          <p className="mt-3 text-muted">
            Generate reliable income while keeping full control over your horse’s future. Tailor lease or syndication terms to
            fit your model, creating stability and long-term value.
          </p>
        </article>
        <article className="rounded-2xl bg-surface-2 p-6 shadow-2">
          <h3 className="font-heading text-xl text-accent">For Investors</h3>
          <p className="mt-3 text-muted">
            Enjoy the thrill of ownership with flexible involvement. Transparent terms, performance sharing, and community —
            without traditional barriers.
          </p>
        </article>
        <article className="rounded-2xl bg-surface-2 p-6 shadow-2">
          <h3 className="font-heading text-xl text-accent">For the Industry</h3>
          <p className="mt-3 text-muted">
            Open the doors to new participants. More owners, more energy, and more investment build a stronger, sustainable
            future for racing.
          </p>
        </article>
      </div>
      <div className="mt-8 text-center">
        <a
          href="/digital-ownership"
          className="inline-flex rounded-xl bg-accent px-5 py-2.5 font-medium text-black shadow-2 transition hover:opacity-90"
        >
          Explore Digital Ownership
        </a>
      </div>
    </div>
  );
}

