import "../../styles/globals.css";
import type { ReactNode } from "react";
import { FeatureFlagProvider } from "@/lib/featureFlags";
import { NavBar } from "@/components/cc/NavBar";

export const metadata = {
  title: "Evolution UI (cc demo)",
  description: "UI-first slice running inside evolution-template"
};

export default function CcLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <FeatureFlagProvider>
          <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:bg-zinc-950/60">
            <div className="mx-auto max-w-6xl px-4 py-2">
              <NavBar />
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        </FeatureFlagProvider>
      </body>
    </html>
  );
}
