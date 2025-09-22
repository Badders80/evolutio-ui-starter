"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export type PlatformMyStableProps = {
  title?: string;
  titleHighlight?: string;
  body?: string;
  tagline?: string;
  taglineLink?: {
    text: string;
    href: string;
  };
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PlatformMyStable({
  title = "MyStable: Everything you need, in one ",
  titleHighlight = "stable",
  body = "Manage your ownership, monitor your assets, and stay connected — simple, secure, and all in one spot.",
  tagline = " place.",
  taglineLink = {
    text: "Tokinvest",
    href: "https://tokinvest.com/",
  },
  ctaLabel = "Log In",
  ctaHref = "/login",
}: PlatformMyStableProps) {
  return (
    <section className="py-14 md:py-20">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-3"
        >
          {title}<span className="text-accent">{titleHighlight}</span>{tagline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="lede max-w-prose"
        >
          {body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          className="mt-6 rounded-2xl border border-border bg-surface-1 p-5"
        >
          <p className="text-sm text-muted">
            <span className="font-medium">Tagline:</span> Evolution Stables, powered by{" "}
            <a
              href={taglineLink.href}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-accent/60 underline-offset-2"
            >
              {taglineLink.text}
            </a>{" "}
            — secure, transparent, and made with the future of ownership in mind.
          </p>
        </motion.div>

        <div className="mt-6">
          <Button href={ctaHref} variant="outline">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}