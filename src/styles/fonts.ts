import localFont from "next/font/local";

/**
 * Why: Only Bold & Medium available; expose CSS var for Tailwind mapping.
 * Add Regular/Black later by appending more src entries.
 */
export const heading = localFont({
  src: [
    { path: "../../public/fonts/bwgradual/BwGradual-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/bwgradual/BwGradual-Medium.woff2", weight: "500", style: "normal" }
  ],
  variable: "--font-heading",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"],
  preload: true
});
