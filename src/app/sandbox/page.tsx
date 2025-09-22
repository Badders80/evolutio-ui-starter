// ================================================
// FILE: src/app/sandbox/page.tsx
// Purpose: Single, canonical sandbox page for all WIP experiments.
// Behavior: Hidden in production unless NEXT_PUBLIC_SANDBOX_ENABLED="true".
// ================================================
import { notFound } from "next/navigation";

export const metadata = {
  title: "Sandbox",
  description: "Work-in-progress playground for UI experiments.",
};

export default function SandboxPage() {
  const enabled =
    process.env.NODE_ENV !== "production" ||
    process.env.NEXT_PUBLIC_SANDBOX_ENABLED === "true";

  if (!enabled) {
    // Why: avoid leaking WIP to prod.
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-6">
      <h1 className="text-3xl font-semibold">Sandbox</h1>
      <p className="opacity-80">
        This area is for experiments and rough work. It can be enabled in prod
        by setting <code>NEXT_PUBLIC_SANDBOX_ENABLED=&quot;true&quot;</code>.
      </p>

      {/* Add your experimental sections below */}
      <section className="rounded-2xl border p-4">
        <h2 className="text-xl font-medium">Example area</h2>
        <p className="opacity-80">
          Put WIP pages, flows, and prototypes here. Use Storybook for component-level work.
        </p>
      </section>
    </main>
  );
}