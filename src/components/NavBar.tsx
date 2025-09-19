"use client";

import Link from "next/link";
import { useFeatureFlags } from "@/lib/featureFlags";

type NavBarProps = {
  className?: string;
};

export function NavBar({ className = "" }: NavBarProps) {
  const { apiMode, enableHeavy } = useFeatureFlags();
  const rootClass = `flex items-center justify-between${className ? ` ${className}` : ""}`;

  return (
    <div className={rootClass}>
      <Link href="/" className="font-semibold">Evolution</Link>
      <nav className="flex items-center gap-4 text-sm">
        <Link href="/" className="opacity-80 hover:opacity-100">Home</Link>
        <Link href="/about" className="opacity-80 hover:opacity-100">About</Link>
        <Link href="/mystable" className="opacity-80 hover:opacity-100">MyStable</Link>
        <Link href="/own" className="opacity-80 hover:opacity-100">Own</Link>
        <Link href="/debug" className="opacity-80 hover:opacity-100">Debug</Link>
        <span className="rounded-full border px-2 py-0.5 text-xs opacity-80">
          {apiMode} | {enableHeavy ? "heavy:on" : "heavy:off"}
        </span>
      </nav>
    </div>
  );
}
