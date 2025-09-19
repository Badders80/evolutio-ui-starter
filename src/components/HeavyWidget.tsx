"use client";

import { useEffect, useState } from "react";

/** Why: placeholder simulating a heavy widget without pulling extra deps */
export default function HeavyWidget() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setReady(true), 600);
    return () => clearTimeout(id);
  }, []);
  if (!ready) return <div className="text-sm opacity-70">Initializing…</div>;
  return (
    <div className="h-40 w-full rounded-xl border p-4">
      <p className="text-sm">Heavy widget loaded (split via dynamic import).</p>
      <div className="mt-2 grid h-20 grid-cols-12 items-end gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-zinc-300 dark:bg-zinc-700" style={{ height: `${10 + i * 6}%` }} />
        ))}
      </div>
    </div>
  );
}