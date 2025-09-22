import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NavBar } from "@/components/NavBar";
import { ImageContainer } from "@/components/layout/ImageContainer";
import MissionSection from "@/components/sections/MissionSection";
import { FeatureFlagProvider } from "@/lib/featureFlags";
import { heading } from "@/styles/fonts";
// import NavFadeIn from "@/components/layout/NavFadeIn"; // ← Uncomment to use navigation fade-in

export const metadata: Metadata = {
  title: "Evolutio UI Starter",
  description: "UI-first Next.js starter focused on speed."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${heading.variable} min-h-dvh bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <FeatureFlagProvider>
          {/* Example NavFadeIn usage - uncomment and adapt to your needs:
          <NavFadeIn delay={1.1}>
            <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-zinc-950/80">
              <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2">
                <Suspense fallback={null}>
                  <DevBar />
                </Suspense>
                <NavBar />
              </div>
            </header>
          </NavFadeIn>
          */}
          
          <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-zinc-950/80">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2">
              <NavBar />
            </div>
          </header>
          <div className="mx-auto max-w-6xl px-4 pt-6">
            <ImageContainer
              src="/images/content/Horse-Double-Black.png"
              alt="Horse racing action"
              ratio="1:1"
              mode="contain"
              className="mb-6"
            />
            <div className="mb-6 rounded-2xl bg-black" style={{ aspectRatio: "32/9" }}>
              {/* 32:9 black container */}
            </div>
            <div
              className="mb-6 flex items-center justify-center overflow-hidden rounded-2xl bg-black"
              style={{ aspectRatio: "16/9" }}
            >
              <MissionSection />
            </div>
          </div>
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </FeatureFlagProvider>
      </body>
    </html>
  );
}
