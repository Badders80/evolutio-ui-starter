"use client";
import { motion } from "framer-motion";

export function DualAudience() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl border border-border bg-surface-1 p-6 shadow-brand1"
          >
            <h2 className="mb-2">For Breeders &amp; Syndicators: Unlocking New Opportunities</h2>
            <p className="text-sm text-muted">
              Expand your reach through a centralized, scalable platform. Maintain full control while
              generating steady income with streamlined management and transparent returns.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.06 }}
          >
            <h2 className="mb-2">For Investors &amp; Fans: Your Ownership Experience</h2>
            <p className="text-sm text-muted">
              Own accessible shares in professionally managed elite racehorses. Experience simplified
              ownership that brings the passion and thrill of racing—without traditional barriers or
              complexity.
            </p>
          </motion.section>
        </div>
      </div>
    </section>
  );
}