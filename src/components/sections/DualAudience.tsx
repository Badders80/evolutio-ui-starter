"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export type DualAudienceProps = {
  kicker?: string;
  title?: string;
  body?: string;
  leftAudience?: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
  rightAudience?: {
    title: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export default function DualAudience({
  kicker = "For Everyone",
  title = "Two Paths to Ownership",
  body = "Whether you prefer a structured approach or want to create your own adventure, Evolution Stables provides the perfect pathway to racehorse ownership.",
  leftAudience = {
    title: "Stable Syndication",
    body: "Join curated groups with expert-managed horses, established teams, and proven track records.",
    ctaLabel: "Explore Syndicates",
    ctaHref: "/cc",
  },
  rightAudience = {
    title: "MyStable Experience",
    body: "Build your own stable from the ground up. Choose your horses, assemble your team, and craft your strategy.",
    ctaLabel: "Start Building",
    ctaHref: "/mystable",
  },
}: DualAudienceProps) {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="container-page">
        <div className="kicker mb-2">{kicker}</div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="lede mb-10 max-w-prose"
        >
          {body}
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="rounded-lg bg-white p-8 shadow-sm"
          >
            <h3 className="mb-4 text-2xl font-bold text-slate-900">{leftAudience.title}</h3>
            <p className="mb-6 text-lg leading-relaxed text-slate-700">{leftAudience.body}</p>
            <Button href={leftAudience.ctaHref} variant="outline">
              {leftAudience.ctaLabel}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="rounded-lg bg-white p-8 shadow-sm"
          >
            <h3 className="mb-4 text-2xl font-bold text-slate-900">{rightAudience.title}</h3>
            <p className="mb-6 text-lg leading-relaxed text-slate-700">{rightAudience.body}</p>
            <Button href={rightAudience.ctaHref} variant="accent" gradient>
              {rightAudience.ctaLabel}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}