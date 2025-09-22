import * as React from "react";

export default function EvolutionWay() {
  return (
    <div className="rounded-2xl bg-surface-2 p-8 shadow-2">
      <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ownership, the Evolution Way</h2>
      <div className="mt-6 space-y-6">
        <section>
          <h3 className="font-heading text-xl text-accent">Accessible Ownership</h3>
          <p className="mt-2 text-muted">
            Ownership made simple, inclusive, and engaging. Flexible options lower the barriers while keeping the joy and
            prestige of racing intact.
          </p>
        </section>
        <section>
          <h3 className="font-heading text-xl text-accent">Transparency in Our DNA</h3>
          <p className="mt-2 text-muted">Clear costs, open updates, and no surprises. Stay in control with every decision.</p>
        </section>
        <section>
          <h3 className="font-heading text-xl text-accent">Your Hub</h3>
          <p className="mt-2 text-muted">
            Manage documents, financials, transactions, and updates — buy, sell, or trade shares securely in one place.
          </p>
        </section>
        <section>
          <h3 className="font-heading text-xl text-accent">Global Racing, Made Local</h3>
          <p className="mt-2 text-muted">Connect to racing’s global community without borders.</p>
        </section>
      </div>
    </div>
  );
}

