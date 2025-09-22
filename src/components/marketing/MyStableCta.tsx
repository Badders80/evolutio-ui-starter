import * as React from "react";

export default function MyStableCta() {
  return (
    <div className="text-center">
      <h2 className="font-heading text-3xl font-bold sm:text-4xl">
        MyStable: Everything You Need, In One <span className="text-accent">Stable</span> Place
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-lg text-muted">
        Manage your ownership, monitor your assets, stay connected. Simple, secure, and all in one spot.
      </p>
      <div className="mt-6 inline-flex gap-3">
        <a href="/login" className="rounded-xl bg-surface-2 px-5 py-2.5 shadow-2 transition hover:bg-surface-3">
          Log In
        </a>
        <a
          href="/digital-ownership"
          className="rounded-xl bg-accent px-5 py-2.5 font-medium text-black shadow-2 transition hover:opacity-90"
        >
          Explore Digital Ownership
        </a>
      </div>
    </div>
  );
}

