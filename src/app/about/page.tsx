import { Footer } from "@/components/site/Footer";

export const metadata = { title: "About – Evolution" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Evolution is a UI-first Next.js template focused on fast feedback. Start with mocks, add functionality when ready.
      </p>
      <Footer />
    </div>
  );
}