export default function FontCheck() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 px-6 py-12">
      <section className="space-y-2">
        <h1 className="font-heading text-4xl font-bold">Bw Gradual Bold 700</h1>
        <p className="font-heading text-2xl font-medium">Bw Gradual Medium 500</p>
      </section>

      <p className="text-sm text-muted">
        The headings above should render with the same family. Medium appears lighter. If you see a fallback font, double-check
        the files listed below exist in <code>public/fonts/bwgradual</code> and deploy with lowercase paths.
      </p>

      <pre className="rounded-lg bg-surface-2/80 p-4 text-xs">
        <code>
{`/public/fonts/bwgradual/BwGradual-Bold.woff2
/public/fonts/bwgradual/BwGradual-Medium.woff2`}
        </code>
      </pre>

      <p className="text-xs text-muted">
        Missing weights (400/900) fall back to the system stack; use <code>font-medium</code> and <code>font-bold</code> until more files ship.
      </p>
    </main>
  );
}

