type Path = `/${string}`;
const asset = (p: string): Path => (p.startsWith("/") ? (p as Path) : (`/${p}` as Path));

/** Public brand assets (serve from /public). Replace filenames as you add them. */
export const BRAND = {
  logo: asset("brand/logo.svg"),
  favicon: asset("favicon.svg"),
  ogDefault: asset("brand/og-default.png")
} as const;

/** Marketing images */
export const MARKETING = {
  hero: asset("images/marketing/hero.jpg"),
  section1: asset("images/marketing/section-1.jpg"),
  section2: asset("images/marketing/section-2.webp")
} as const;

/** Helper if you want to version/cache-bust assets later */
export function v(path: Path, version = "v1"): Path {
  // Why: easy switch to /v2/... without hunting references
  return path.replace(/^\/(.*)$/, `/${version}/$1`) as Path;
}