import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-2xl border p-6 text-center shadow-sm md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Prototype today. Flip to "real" tomorrow.</h2>
        <p className="mx-auto mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Use mocks by default, then enable real APIs with a toggle. Keep momentum without teardown.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <Link href="/own" className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
            Claim Your Space
          </Link>
          <a href="/debug" className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900">
            Open Debug
          </a>
        </div>
      </div>
    </section>
  );
}