// ============================================================================
// Robust logo that cycles through candidates (env â†’ gold/white/black) per theme.
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

function useScrolled(): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrolled;
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
  const scrolled = useScrolled();
  
  // Use gold logo when scrolled, otherwise use theme-based candidates
  const candidates = useMemo<Path[]>(() => {
    if (scrolled) {
      return ["/brand/EvolutionStables-Mono-Gold.svg"];
    }
    return isDark ? BRAND.candidates.dark : BRAND.candidates.light;
  }, [isDark, scrolled]);
  
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
        <div className="grid size-6 place-items-center rounded border text-xs">E</div>
      )}
      {label && <span className="font-semibold">{label}</span>}
    </Link>
  );
}
