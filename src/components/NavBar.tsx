"use client";

import Image from "next/image";
import Link from "next/link";

type NavBarProps = {
  className?: string;
};

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mystable", label: "MyStable" },
  { href: "/own", label: "Own" },
  { href: "/debug", label: "Debug" }
];

export function NavBar({ className = "" }: NavBarProps) {
  const rootClass = `relative flex w-full items-center gap-6${className ? ` ${className}` : ""}`;

  return (
    <div className={rootClass}>
      <Link href="/" className="flex shrink-0 items-center" aria-label="Evolution Stables home">
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
      <div className="ml-auto flex items-center gap-3">
        <Link
          href="/get-started"
          className="rounded-full border px-4 py-1 text-sm font-medium transition hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900"
        >
          Get Starter
        </Link>
        <Link
          href="/login"
          className="rounded-full bg-zinc-900 px-4 py-1 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
