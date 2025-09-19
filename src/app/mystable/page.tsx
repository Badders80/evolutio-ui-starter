import { Footer } from "@/components/site/Footer";

export const metadata = { title: "MyStable – Evolution" };

export default function MyStablePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">MyStable</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Your personal workspace. Plug in real data sources later; the UI is already wired for it.
      </p>
      <Footer />
    </div>
  );
}