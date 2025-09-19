import { Footer } from "@/components/site/Footer";

export const metadata = { title: "Own – Evolution" };

export default function OwnPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Own</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Set your brand, colors, and content. Drop a <code>/public/logo.svg</code> to personalize instantly.
      </p>
      <Footer />
    </div>
  );
}