"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export type InnovationDigitalProps = {
  kicker?: string;
  title?: string;
  titleHighlight?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  bullets?: Array<{
    title: string;
    body: string;
  }>;
};

export default function InnovationDigital({
  kicker = "Innovation",
  title = "Digital-",
  titleHighlight = "Syndication",
  body = "The modern way to experience ownership — traditional syndication with a digital twist. Our model keeps the timeless principles of shared risk, shared rewards, and shared passion — enhanced with the clarity, flexibility, and access today's owners expect.",
  ctaLabel = "Explore Digital Ownership",
  ctaHref = "/own",
  bullets = [
    {
      title: "Fractional Ownership",
      body: "Own as little or as much as you want, lowering barriers to entry.",
    },
    {
      title: "Performance Linked",
      body: "Share directly in winnings, connecting your investment to real race outcomes.",
    },
    {
      title: "Shared Experience",
      body: "Connect with fellow owners and fans, sharing the thrill, challenges, and triumphs together.",
    },
  ],
}: InnovationDigitalProps) {
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
          {title}<span className="text-accent">{titleHighlight}</span>
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

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {bullets.map((bullet, i) => (
            <motion.section
              key={bullet.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-surface-1 p-6 shadow-brand1"
            >
              <h3 className="mb-2 text-lg font-semibold">{bullet.title}</h3>
              <p className="text-sm text-muted">{bullet.body}</p>
            </motion.section>
          ))}
        </div>

        <div className="mt-8">
          <Button href={ctaHref} variant="accent" gradient>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}