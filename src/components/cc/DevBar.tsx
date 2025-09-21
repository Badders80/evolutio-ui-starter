"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useFeatureFlags } from "@/lib/featureFlags";

function useShowDevBar() {
  const sp = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const fromQs = sp?.get("devbar") === "1";
  const fromEnv = process.env.NEXT_PUBLIC_DEVBAR === "true";
  const isDev = process.env.NODE_ENV !== "production";
  return isDev || fromEnv || fromQs;
}

function useQueryWriter() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  return (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(search?.toString());
    Object.entries(patch).forEach(([k, v]) => {
      if (v === null) next.delete(k);
      else next.set(k, v);
    });
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };
}

function useTheme() {
  const get = () => document.documentElement.classList.contains("dark");
  const set = (on: boolean) => {
    document.documentElement.classList.toggle("dark", on);
    // sync prefers-color-scheme for convenience
    document.documentElement.style.colorScheme = on ? "dark" : "light";
  };
  const getPalette = () => typeof document !== "undefined" ? (document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark") : "dark";
  const togglePalette = () => {
    if (typeof document === "undefined") return;
    const html = document.documentElement;
    const now = html.getAttribute("data-theme") === "light" ? "dark" : "light";
    if (now === "light") html.setAttribute("data-theme", "light"); else html.removeAttribute("data-theme");
  };
  return { get, set, getPalette, togglePalette };
}

function GridOverlay({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] bg-[repeating-linear-gradient(to_right,transparent,transparent_11px,rgba(0,0,0,.08)_12px)] dark:bg-[repeating-linear-gradient(to_right,transparent,transparent_11px,rgba(255,255,255,.1)_12px)]"
    />
  );
}

export default function DevBar() {
  const showBar = useShowDevBar();
  const { apiMode, enableHeavy } = useFeatureFlags();
  const write = useQueryWriter();
  const [open, setOpen] = useState(true);
  const [grid, setGrid] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      switch (e.key) {
        case ".": setOpen((v) => !v); break;
        case "r": location.reload(); break;
        case "d": location.assign("/debug"); break;
        case "h": write({ enableHeavy: (!enableHeavy).toString() }); break;
        case "m": write({ apiMode: apiMode === "mock" ? "real" : "mock" }); break;
        case "g": setGrid((v) => !v); break;
        case "t": theme.set(!theme.get()); break;
        case "p": theme.togglePalette(); break; // Palette (dark tokens ↔ light tokens)
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [apiMode, enableHeavy, write, theme]);

  if (!showBar) return null;

  const pill = "rounded-xl border px-3 py-1 text-sm";
  const btn = "rounded-lg border px-2.5 py-1 text-xs hover:bg-zinc-50 dark:hover:bg-zinc-900";

  return (
    <>
      <GridOverlay show={grid} />
      <div className="flex w-full justify-center">
        <div className="flex items-center gap-2 rounded-2xl border bg-white/80 px-2 py-1 shadow-sm backdrop-blur dark:bg-zinc-950/70">
          <button className={btn} onClick={() => setOpen((v) => !v)} aria-label="Toggle Dev Bar">
            Dev
          </button>
          {open && (
            <>
              <a className={btn} href="/debug">
                Debug
              </a>
              <button className={btn} onClick={() => location.reload()}>
                Reload
              </button>
              <button className={btn} onClick={() => write({ enableHeavy: (!enableHeavy).toString() })} title="h">
                Heavy: {enableHeavy ? "on" : "off"}
              </button>
              <button className={btn} onClick={() => write({ apiMode: apiMode === "mock" ? "real" : "mock" })} title="m">
                API: {apiMode}
              </button>
              <button className={btn} onClick={() => setGrid((v) => !v)} title="g">
                Grid {grid ? "on" : "off"}
              </button>
              <button className={btn} onClick={() => theme.set(!theme.get())} title="t">
                Theme
              </button>
              <button className={btn} onClick={() => theme.togglePalette()} title="p">
                Palette: {theme.getPalette()}
              </button>
              <span className={`${pill} text-xs opacity-70`}>
                devbar shortcuts: . r d h m g t p
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
