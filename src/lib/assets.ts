// ============================================================================
// Central asset registry using your real files.
// ============================================================================
type Path = `/${string}`;
const asPath = (x: string): Path => (x.startsWith("/") ? (x as Path) : (`/${x}` as Path));

/**
 * ENV OVERRIDES (optional):
 *  - NEXT_PUBLIC_BRAND_LOGO=/brand/Logo-Black.png
 *  - NEXT_PUBLIC_BRAND_LOGO_DARK=/brand/Evolution-Stables-Logo-White.png
 */
const ENV_LOGO = (process.env.NEXT_PUBLIC_BRAND_LOGO || "").trim();
const ENV_LOGO_DARK = (process.env.NEXT_PUBLIC_BRAND_LOGO_DARK || "").trim();

export const BRAND = {
  favicon: asPath("brand/favicon.svg"),
  // Exact files from your /public/brand folder:
  candidates: {
    light: [
      ENV_LOGO, // explicit override
      "/brand/Logo-Black.png",
      "/brand/EvolutionStables Mono-Black.png",
      "/brand/Evolution-Stables-Logo-Black.png",
      "/brand/Evolution-Stables-Logo-Black.jpg",
      "/brand/EvolutionStables Mono-Black.svg"
    ].filter(Boolean) as Path[],
    dark: [
      ENV_LOGO_DARK, // explicit override
      "/brand/Logo-Gold.png",
      "/brand/EvolutionStables Mono-Gold.png",
      "/brand/Evolution-Stables-Logo-White.png",
      "/brand/EvolutionStables Mono-White.png",
      "/brand/EvolutionStables Mono-White.svg"
    ].filter(Boolean) as Path[]
  }
} as const;

// Marketing/content imagery (your /public/images/content files):
export const MARKETING = {
  // Hero: dark/close-up horses — good for poster overlay
  hero: asPath("images/content/Horse-Double-Black.png"),
  // Band images (section separators)
  "band-1": asPath("images/content/Hooves-on-grass.png"),
  "band-2": asPath("images/content/Landscape-digitaloverlay.jpg"),
  "band-3": asPath("images/content/Horse-and-foal.jpg"),
  // Legacy mapping
  band1: asPath("images/content/Hooves-on-grass.png"),
  band2: asPath("images/content/Landscape-digitaloverlay.jpg"),
  // Alternates you can swap to any time:
  alt: {
    backgroundHoovesBW: asPath("images/content/Background-hooves-back-and-white.jpg"),
    horseAndFoal: asPath("images/content/Horse-and-foal.jpg")
  }
} as const;

// Helper for getting marketing images with metadata
export function getMarketingImage(imageName: string) {
  const images: Record<string, { src: Path; alt: string }> = {
    "band-1": {
      src: MARKETING["band-1"],
      alt: "Horse hooves on grass, close-up detail shot",
    },
    "band-2": {
      src: MARKETING["band-2"],
      alt: "Digital landscape overlay with racing imagery",
    },
    "band-3": {
      src: MARKETING["band-3"],
      alt: "Horse and foal together in pastoral setting",
    },
    hero: {
      src: MARKETING.hero,
      alt: "Dramatic silhouette of two horses",
    },
  };

  return images[imageName] || null;
}

// Helper if you want to version/cache-bust assets later
export function v(path: Path, version = "v1"): Path {
  // Why: easy switch to /v2/... without hunting references
  return path.replace(/^\/(.*)$/, `/${version}/$1`) as Path;
}