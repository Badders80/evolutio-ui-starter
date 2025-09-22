"use client";
import { motion } from "framer-motion";

export type AboutEvolutionProps = {
  kicker?: string;
  title?: string;
  features?: Array<{
    title: string;
    body: string;
  }>;
};

export default function AboutEvolution({
  kicker = "About",
  title = "Ownership, the Evolution Way",
  features = [
    {
      title: "Accessible Ownership",
      body: "Fractional shares and flexible options open the gates to premium bloodstock and the thrill of racing. Whether you're new or experienced, Evolution makes ownership simple and inclusive.",
    },
    {
      title: "Transparency in Our DNA",
      body: "Clear costs, open updates, and no surprises. Every step of the journey is communicated so you always know where you stand.",
    },
    {
      title: "Your Hub",
      body: "Track training, follow performance updates, and manage documents and financials — all in one secure digital space.",
    },
    {
      title: "Global Racing, Made Local",
      body: "From New Zealand to the world, connect with the sport wherever you are. Experience ownership without borders, grounded in racing's global community.",
    },
  ],
}: AboutEvolutionProps) {
  return (
    <section className="py-14 md:py-20">
      <div className="container-page">
        <div className="kicker mb-2">{kicker}</div>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          {title}
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <motion.section
              key={feature.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-surface-1 p-6 shadow-brand1"
            >
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.body}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}