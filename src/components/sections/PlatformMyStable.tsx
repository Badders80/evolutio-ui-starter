"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function PlatformMyStable() {
  return (
    <section className="py-14 md:py-20">
      <div className="container-page">
        <h2 className="mb-3">
          MyStable: Everything you need, in one <span className="text-accent">stable</span> place.
        </h2>
        <p className="lede max-w-prose">
          Manage your ownership, monitor your assets, and stay connected — simple, secure, and all in
          one spot.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-6 rounded-2xl border border-border bg-surface-1 p-5"
        >
          <p className="text-sm text-muted">
            <span className="font-medium">Tagline:</span> Evolution Stables, powered by{" "}
            <a
              href="https://tokinvest.com/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-accent/60 underline-offset-2"
            >
              Tokinvest
            </a>{" "}
            — secure, transparent, and made with the future of ownership in mind.
          </p>
        </motion.div>

        <div className="mt-6">
          <Button href="/login" variant="outline">
            Log In
          </Button>
        </div>
      </div>
    </section>
  );
}