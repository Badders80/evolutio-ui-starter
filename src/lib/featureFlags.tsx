"use client";

import { createContext, useContext, useMemo, ReactNode } from "react";

export type Flags = {
  apiMode: "mock" | "real";
  enableHeavy: boolean;
};

const FlagsCtx = createContext<Flags | null>(null);

/** Why: central seam for perf + progressive enablement */
export function FeatureFlagProvider({ children }: { children: ReactNode }) {
  const isBrowser = typeof window !== "undefined";
  const params = isBrowser ? new URLSearchParams(window.location.search) : null;

  const flags = useMemo<Flags>(() => {
    const read = (k: string, def = "") =>
      (params?.get(k) ?? process.env[`NEXT_PUBLIC_${k.toUpperCase()}`] ?? def).toString();

    return {
      apiMode: (read("apiMode", "mock") as Flags["apiMode"]) || "mock",
      enableHeavy: read("enableHeavy", "false") === "true"
    };
  }, [params]);

  return <FlagsCtx.Provider value={flags}>{children}</FlagsCtx.Provider>;
}

export function useFeatureFlags(): Flags {
  const ctx = useContext(FlagsCtx);
  if (!ctx) throw new Error("useFeatureFlags must be used within FeatureFlagProvider");
  return ctx;
}