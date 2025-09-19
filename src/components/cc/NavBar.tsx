"use client";

import Link from "next/link";
import { BrandMark } from "../BrandMark";

type NavBarProps = {
  className?: string;
};

const links = [{ href: "/debug/flags", label: "Flags" }];

export function NavBar({ className = "" }: NavBarProps) {
  const rootClass = `relative flex w-full items-center gap-6${className ? ` ${className}` : ""}`;

  return (
    <div className={rootClass}>
      <BrandMark href="/cc" size={36} label="Evolution Stables" className="shrink-0" />
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
