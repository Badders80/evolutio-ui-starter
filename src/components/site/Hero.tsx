import Link from "next/link";
import { ImageContainer } from "@/components/layout/ImageContainer";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="typo-h1">
            Build UI fast. Wire logic later.
          </h1>
          <p className="typo-lead mt-3 max-w-prose text-zinc-600 dark:text-zinc-400">
            A lean Next.js template with flags, mocks, and a dev bar—so you can iterate at the speed of thought.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/mystable" className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              Get Started
            </Link>
            <Link href="/about" className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900">
              Learn More
            </Link>
          </div>
        </div>
        <ImageContainer
          src="/hero.svg"
          alt="Evolution hero"
          ratio="4:3"
          mode="cover"
          allowZoom
        />
      </div>
    </section>
  );
}