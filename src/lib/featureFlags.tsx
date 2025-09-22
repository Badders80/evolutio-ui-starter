"use client";

import { createContext, useContext, ReactNode } from "react";

export type Flags = {
  apiMode: "mock" | "real";
  enableHeavy: boolean;
};

const FlagsCtx = createContext<Flags | null>(null);

/** Why: central seam for perf + progressive enablement */
export function FeatureFlagProvider({ children }: { children: ReactNode }) {
  const isBrowser = typeof window !== "undefined";
  const params = isBrowser ? new URLSearchParams(window.location.search) : null;

  const read = (key: string, fallback = "") =>
    (params?.get(key) ?? process.env[`NEXT_PUBLIC_${key.toUpperCase()}`] ?? fallback).toString();

  const flags: Flags = {
    apiMode: (read("apiMode", "mock") as Flags["apiMode"]) || "mock",
    enableHeavy: read("enableHeavy", "false") === "true"
  };

  return <FlagsCtx.Provider value={flags}>{children}</FlagsCtx.Provider>;
}

export function useFeatureFlags(): Flags {
  const ctx = useContext(FlagsCtx);
  if (!ctx) throw new Error("useFeatureFlags must be used within FeatureFlagProvider");
  return ctx;
}
