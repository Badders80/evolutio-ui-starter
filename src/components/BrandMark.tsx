// ============================================================================
// Robust logo that cycles through candidates (env → gold/white/black) per theme.
// ============================================================================
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BRAND } from "@/lib/assets";

type Path = `/${string}`;

function useIsDark(): boolean {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const update = () => setDark(el.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);
  return dark;
}

export function BrandMark({
  className = "",
  size = 24,
  href = "/",
  label = "Evolution"
}: {
  className?: string;
  size?: number;
  href?: string;
  label?: string;
}) {
  const isDark = useIsDark();
  const candidates = useMemo<Path[]>(() => (isDark ? BRAND.candidates.dark : BRAND.candidates.light), [isDark]);
  const [idx, setIdx] = useState(0);
  const src = candidates[idx];

  return (
    <Link href={href} className={`flex items-center gap-2 ${className}`}>
      {src ? (
        <Image
          key={src}
          src={src}
          alt={`${label} logo`}
          width={size}
          height={size}
          priority
          onError={() => setIdx((i) => (i + 1 < candidates.length ? i + 1 : i))}
        />
      ) : (
        <div className="grid h-6 w-6 place-items-center rounded border text-xs">E</div>
      )}
      <span className="font-semibold">{label}</span>
    </Link>
  );
}