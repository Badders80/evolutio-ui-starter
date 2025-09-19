// ─────────────────────────────────────────────────────────────────────────────
// Centralized brand assets with env override + safe fallbacks
// ─────────────────────────────────────────────────────────────────────────────

type Path = `/${string}`;
const p = (x: string): Path => (x.startsWith("/") ? (x as Path) : (`/${x}` as Path));

// Env overrides (exact filenames, including extension)
const ENV_LOGO = process.env.NEXT_PUBLIC_BRAND_LOGO?.trim() || "";
const ENV_LOGO_DARK = process.env.NEXT_PUBLIC_BRAND_LOGO_DARK?.trim() || "";

/** Fallback candidates if envs are not provided or file missing.
 *  Order matters. Add any filenames you actually keep in /public/brand/. */
const FALLBACKS = {
  light: [
    "/brand/logo.svg",
    "/brand/logo.png",
    "/brand/Logo-Black.png",
    "/brand/EvolutionStables Mono-Black.png",   // supports files with spaces
    "/brand/Evolution-Stables-Logo-Black.png",
    "/brand/Evolution-Stables-Logo-Black.svg"
  ],
  dark: [
    "/brand/logo-dark.svg",
    "/brand/logo-white.svg",
    "/brand/Logo-White.png",
    "/brand/EvolutionStables Mono-White.png",
    "/brand/Evolution-Stables-Logo-White.png",
    "/brand/Evolution-Stables-Logo-White.svg"
  ]
} as const;

export function brandCandidates(isDark: boolean): Path[] {
  const first = (isDark ? ENV_LOGO_DARK : ENV_LOGO) as Path | "";
  const pool = isDark ? FALLBACKS.dark : FALLBACKS.light;
  return (first ? [first as Path] : []).concat([...pool]);
}

export const BRAND = {
  favicon: p("brand/favicon.svg"),
  ogDefault: p("brand/og-default.png")
} as const;

/** Marketing images */
export const MARKETING = {
  hero: p("images/marketing/hero.jpg"),
  section1: p("images/marketing/section-1.jpg"),
  section2: p("images/marketing/section-2.webp")
} as const;

/** Helper if you want to version/cache-bust assets later */
export function v(path: Path, version = "v1"): Path {
  // Why: easy switch to /v2/... without hunting references
  return path.replace(/^\/(.*)$/, `/${version}/$1`) as Path;
}