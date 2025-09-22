// ============================================================================
// Robust logo with scroll-triggered transformation (grey  gold).
// ============================================================================
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Path = `/${string}`;

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
  const scrolled = useScrolled();
  
  // Grey logo initially, transforms to gold on scroll
  const candidates = useMemo<Path[]>(() => {
    if (scrolled) {
      // Gold logo when scrolled
      return ["/brand/EvolutionStables-Mono-Gold.svg", "/brand/Logo-Gold.png"];
    } else {
      // Grey logo initially
      return ["/brand/Logo-Grey.png"];
    }
  }, [scrolled]);
  
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
          className="transition-opacity duration-300 ease-in-out"
          onError={() => setIdx((i) => (i + 1 < candidates.length ? i + 1 : i))}
        />
      ) : (
        <div className="grid size-6 place-items-center rounded border text-xs">E</div>
      )}
      {label && <span className="font-semibold">{label}</span>}
    </Link>
  );
}
