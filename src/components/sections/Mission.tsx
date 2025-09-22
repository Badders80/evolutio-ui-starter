"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export type MissionProps = {
  kicker?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Mission({
  kicker = "Our Mission",
  title = "Ownership Re-Imagined",
  body = "Traditional racehorse ownership has been restrictive, complex, and closed to most. Evolution Stables breaks down the barriers with an accessible, transparent, and flexible model designed for everyone—whether you're a seasoned owner or just starting out.",
  ctaLabel = "Join the Revolution",
  ctaHref = "/own",
}: MissionProps) {
  return (
    <section className="py-14 md:py-20">
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
          className="lede max-w-prose"
        >
          {body}
        </motion.p>

        <div className="mt-6">
          <Button href={ctaHref} variant="accent" gradient>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}