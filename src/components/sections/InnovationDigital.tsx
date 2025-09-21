"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const bullets = [
  {
    t: "Fractional Ownership",
    b: "Own as little or as much as you want, lowering barriers to entry."
  },
  {
    t: "Performance Linked",
    b: "Share directly in winnings, connecting your investment to real race outcomes."
  },
  {
    t: "Shared Experience",
    b: "Connect with fellow owners and fans, sharing the thrill, challenges, and triumphs together."
  }
];

export function InnovationDigital() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-page">
        <div className="kicker mb-2">Innovation</div>
        <h2 className="mb-4">
          Digital-<span className="text-accent">Syndication</span>
        </h2>
        <p className="lede max-w-prose">
          The modern way to experience ownership — traditional syndication with a digital twist. Our
          model keeps the timeless principles of shared risk, shared rewards, and shared passion —
          enhanced with the clarity, flexibility, and access today's owners expect.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {bullets.map((b, i) => (
            <motion.section
              key={b.t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-surface-1 p-6 shadow-brand1"
            >
              <h3 className="mb-2 text-lg font-semibold">{b.t}</h3>
              <p className="text-sm text-muted">{b.b}</p>
            </motion.section>
          ))}
        </div>

        <div className="mt-8">
          <Button href="/own" variant="accent" gradient>
            Explore Digital Ownership
          </Button>
        </div>
      </div>
    </section>
  );
}