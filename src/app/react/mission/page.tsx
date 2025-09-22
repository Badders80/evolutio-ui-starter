"use client";
import MissionSection from "@/components/sections/MissionSection";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

const initialState = {
  kicker: "OUR MISSION",
  titleTop: "OWNERSHIP",
  titleBottom: "RE-IMAGINED",
  body1:
    "Traditional racehorse ownership - expensive, restrictive, and opaque - has historically excluded those who dream of experiencing the thrill firsthand.",
  body2:
    "Evolution Stables removes these barriers, delivering ownership that's genuinely accessible, fully transparent, and uniquely liquid.",
  ctaLabel: "Join the revolution",
  ctaHref: "/own",
};

function MissionPrototypeContent() {
  const sp = useSearchParams();
  const [state, setState] = useState(initialState);

  // Preload from query if provided
  useEffect(() => {
    const get = (k: string, d: string) => sp?.get(k) ?? d;
    setState((s) => ({
      kicker: get("kicker", s.kicker),
      titleTop: get("top", s.titleTop),
      titleBottom: get("bottom", s.titleBottom),
      body1: get("b1", s.body1),
      body2: get("b2", s.body2),
      ctaLabel: get("cta", s.ctaLabel),
      ctaHref: get("href", s.ctaHref),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-page grid gap-6 py-8 md:grid-cols-[minmax(0,1fr)_360px]">
      <div className="rounded-2xl border border-border bg-surface-1">
        <MissionSection {...state} asContent />
      </div>

      <MissionControls state={state} setState={setState} />
    </div>
  );
}

export default function MissionPrototypePage() {
  return (
    <Suspense fallback={null}>
      <MissionPrototypeContent />
    </Suspense>
  );
}

function MissionControls({
  state,
  setState,
}: {
  state: typeof initialState;
  setState: React.Dispatch<React.SetStateAction<typeof initialState>>;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const Field = ({
    label,
    k,
    multiline,
  }: {
    label: string;
    k: keyof typeof state;
    multiline?: boolean;
  }) => (
    <label className="block">
      <div className="mb-1 text-xs text-subtle">{label}</div>
      {multiline ? (
        <textarea
          className="w-full rounded-xl border border-border bg-surface-1 p-2 text-sm"
          rows={4}
          value={state[k]}
          onChange={(e) => setState((s) => ({ ...s, [k]: e.target.value }))}
        />
      ) : (
        <input
          className="w-full rounded-xl border border-border bg-surface-1 p-2 text-sm"
          value={state[k]}
          onChange={(e) => setState((s) => ({ ...s, [k]: e.target.value }))}
        />
      )}
    </label>
  );

  const updateUrl = () => {
    const q = new URLSearchParams(sp?.toString());
    q.set("kicker", state.kicker);
    q.set("top", state.titleTop);
    q.set("bottom", state.titleBottom);
    q.set("b1", state.body1);
    q.set("b2", state.body2);
    q.set("cta", state.ctaLabel);
    q.set("href", state.ctaHref);
    router.replace(`${pathname}?${q.toString()}`, { scroll: false });
  };

  return (
    <aside className="rounded-2xl border border-border bg-surface-1 p-4">
      <div className="mb-3 text-sm font-semibold">Mission - Prototype Controls</div>
      <Field label="Kicker" k="kicker" />
      <Field label="Title (Top)" k="titleTop" />
      <Field label="Title (Bottom)" k="titleBottom" />
      <Field label="Paragraph 1" k="body1" multiline />
      <Field label="Paragraph 2" k="body2" multiline />
      <Field label="CTA Label" k="ctaLabel" />
      <Field label="CTA Href" k="ctaHref" />
      <div className="mt-4 flex gap-2">
        <button
          className="rounded-xl border border-border px-3 py-1 text-xs hover:bg-white/5"
          onClick={updateUrl}
        >
          Copy state to URL
        </button>
      </div>
      <p className="mt-3 text-xs text-subtle">
        Share this page with the query params to review this exact copy.
      </p>
    </aside>
  );
}
