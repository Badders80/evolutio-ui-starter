import "./../styles/globals.css";
import type { ReactNode } from "react";
import { FeatureFlagProvider } from "@/lib/featureFlags";
import { NavBar } from "@/components/NavBar";
import DevBar from "@/components/cc/DevBar";
import localFont from "next/font/local";

const bwGradual = localFont({
  variable: "--font-heading",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
  src: [
    { path: "../../public/fonts/bwgradual/BwGradual-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/bwgradual/BwGradual-Bold.woff2", weight: "700", style: "normal" }
  ]
});

export const metadata = {
  title: "Evolution UI Starter",
  description: "UI-first Next.js starter with flags and mocks"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bwGradual.variable} font-sans min-h-dvh bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}>
        <FeatureFlagProvider>
          <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-zinc-950/80">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2">
              <DevBar />
              <NavBar />
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </FeatureFlagProvider>
      </body>
    </html>
  );
}
