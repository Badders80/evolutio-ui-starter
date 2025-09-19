"use client";

import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  href?: string;
  variant?: "primary" | "ghost";
};

export function Button({ href, variant = "primary", className = "", ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-3 py-1.5 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
      : "border hover:bg-zinc-50 dark:hover:bg-zinc-900";
  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {rest.children}
      </Link>
    );
  }
  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}