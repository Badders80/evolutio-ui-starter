"use client";
import { motion } from "framer-motion";

const items = [
  {
    t: "Accessible Ownership",
    b: "Fractional shares and flexible options open the gates to premium bloodstock and the thrill of racing. Whether you're new or experienced, Evolution makes ownership simple and inclusive."
  },
  {
    t: "Transparency in Our DNA",
    b: "Clear costs, open updates, and no surprises. Every step of the journey is communicated so you always know where you stand."
  },
  {
    t: "Your Hub",
    b: "Track training, follow performance updates, and manage documents and financials — all in one secure digital space."
  },
  {
    t: "Global Racing, Made Local",
    b: "From New Zealand to the world, connect with the sport wherever you are. Experience ownership without borders, grounded in racing's global community."
  }
];

export function AboutEvolution() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-page">
        <div className="kicker mb-2">About</div>
        <h2 className="mb-8">Ownership, the Evolution Way</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.section
              key={it.t}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-surface-1 p-6 shadow-brand1"
            >
              <h3 className="mb-2 text-lg font-semibold">{it.t}</h3>
              <p className="text-sm text-muted">{it.b}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}