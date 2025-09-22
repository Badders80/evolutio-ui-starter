"use client";
import { motion } from "framer-motion";

export type FooterBlurbProps = {
  title?: string;
};

export default function FooterBlurb({
  title = "Experience the future of racehorse ownership. Own the experience.",
}: FooterBlurbProps) {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container-page text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-semibold"
        >
          {title}
        </motion.h2>
      </div>
    </section>
  );
}