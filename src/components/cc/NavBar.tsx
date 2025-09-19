"use client";

import Image from "next/image";
import Link from "next/link";

type NavBarProps = {
  className?: string;
};

const links = [{ href: "/debug/flags", label: "Flags" }];

export function NavBar({ className = "" }: NavBarProps) {
  const rootClass = `relative flex w-full items-center gap-6${className ? ` ${className}` : ""}`;

  return (
    <div className={rootClass}>
      <Link href="/cc" className="flex shrink-0 items-center" aria-label="Evolution Stables component catalog">
        <Image
          src="/brand/EvolutionStables%20Mono-Grey.svg"
          alt="Evolution Stables logo"
          width={36}
          height={36}
          priority
        />
      </Link>
      <nav className="pointer-events-auto absolute left-1/2 flex -translate-x-1/2 items-center gap-6 text-sm">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="opacity-80 transition hover:opacity-100">
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
