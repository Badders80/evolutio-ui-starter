"use client";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  href?: string;
  variant?: "accent" | "neutral" | "ghost" | "outline" | "subtle";
  size?: "sm" | "md" | "lg";
  gradient?: boolean; // use brand gradient when variant=accent
};

export function Button({ href, variant = "accent", size = "md", gradient = false, className = "", ...rest }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl font-medium transition";
  const sizes = size === "sm" ? "px-3 py-1.5 text-sm" : size === "lg" ? "px-5 py-3 text-base" : "px-4 py-2 text-sm";

  const styles =
    variant === "accent"
      ? `${gradient ? "bg-accent-gradient" : "bg-accent"} text-black hover:brightness-110`
      : variant === "neutral"
      ? "bg-white text-black hover:bg-zinc-200"
      : variant === "outline"
      ? "border border-border text-fg hover:bg-white/5"
      : variant === "subtle"
      ? "bg-surface-2 text-fg hover:bg-surface-3"
      : "border border-white/10 text-fg hover:bg-white/5";

  const classes = `${base} ${sizes} ${styles} ${className}`;
  if (href) return <Link href={href} className={classes}>{rest.children}</Link>;
  return <button className={classes} {...rest} />;
}