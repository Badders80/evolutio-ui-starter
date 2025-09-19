"use client";

import Link from "next/link";
import { useFeatureFlags } from "@/lib/featureFlags";
import { BrandMark } from "./BrandMark";

type NavBarProps = {
  className?: string;
};

export function NavBar({ className = "" }: NavBarProps) {
  const { apiMode, enableHeavy } = useFeatureFlags();
  const rootClass = `flex items-center justify-between${className ? ` ${className}` : ""}`;

  return (
    <div className={rootClass}>
      <Link href="/cc" className="flex items-center gap-2"><BrandMark /></Link>
      <nav className="flex items-center gap-4 text-sm">
        <Link href="/debug/flags" className="opacity-80 hover:opacity-100">Flags</Link>
        <span className="rounded-full border px-2 py-0.5 text-xs opacity-80">
          {apiMode} | {enableHeavy ? "heavy:on" : "heavy:off"}
        </span>
      </nav>
    </div>
  );
}
