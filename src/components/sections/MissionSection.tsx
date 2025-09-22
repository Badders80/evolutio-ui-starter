"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Accent } from "@/components/site/Accent";
import { Button } from "@/components/ui/Button";

export type MissionSectionProps = {
  kicker?: string;
  titleTop?: string;
  titleBottom?: string;
  body1?: ReactNode;
  body2?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  asContent?: boolean;
};

const defaultBody1 =
  "Traditional racehorse ownership - expensive, restrictive, and opaque - has historically excluded those who dream of experiencing the thrill firsthand.";

const defaultBody2 = (
  <>
    We deliver ownership that&apos;s <Accent>genuinely accessible</Accent>, <Accent>fully transparent</Accent>, and{' '}
    <Accent>uniquely liquid</Accent>.
  </>
);

export default function MissionSection({
  kicker = "OUR MISSION",
  titleTop = "OWNERSHIP",
  titleBottom = "RE-IMAGINED",
  body1 = defaultBody1,
  body2 = defaultBody2,
  ctaLabel = "Join the revolution",
  ctaHref = "/own",
  asContent = true
}: MissionSectionProps) {
  const Wrapper = ({ children }: { children: ReactNode }) =>
    asContent ? <div className="container-page">{children}</div> : <>{children}</>;

  return (
    <section className="py-12 md:py-20">
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="kicker mb-3">{kicker}</div>

          <h1 className="mb-6 font-heading text-[clamp(2.5rem,6vw,4.25rem)] leading-[0.95] tracking-tight">
            <span className="block">{titleTop}</span>
            <span className="block">{titleBottom}</span>
          </h1>

          <p className="lede mb-5 max-w-4xl">{body1}</p>

          <p className="lede mb-8 max-w-4xl">
            {body2}
          </p>

          <Button href={ctaHref} variant="outline" className="border-accent text-accent hover:bg-accent/10">
            {ctaLabel} <ArrowRight className="ml-2 inline-block size-4 align-[-1px]" />
          </Button>
        </motion.div>
      </Wrapper>
    </section>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 12h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
