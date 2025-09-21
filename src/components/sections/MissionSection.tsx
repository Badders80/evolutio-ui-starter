"use client";

import { Accent } from "@/components/site/Accent";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export type MissionSectionProps = {
  kicker?: string;
  titleTop?: string;
  titleBottom?: string;
  body1?: string;
  body2?: string;
  ctaLabel?: string;
  ctaHref?: string;
  asContent?: boolean;
};

export default function MissionSection({
  kicker = "OUR MISSION",
  titleTop = "OWNERSHIP",
  titleBottom = "RE-IMAGINED",
  body1 = "Traditional racehorse ownership — expensive, restrictive, and opaque — has historically excluded those who dream of experiencing the thrill firsthand.",
  body2 = "Evolution Stables removes these barriers, delivering ownership that’s genuinely accessible, fully transparent, and uniquely liquid.",
  ctaLabel = "Join the revolution",
  ctaHref = "/own",
  asContent = true
}: MissionSectionProps) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
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

          <h1 className="mb-6 font-heading leading-[0.95] tracking-tightest text-[clamp(2.5rem,6vw,4.25rem)]">
            <span className="block">{titleTop}</span>
            <span className="block">{titleBottom}</span>
          </h1>

          <p className="lede mb-5 max-w-4xl">{body1}</p>

          <p className="lede mb-8 max-w-4xl">
            We deliver ownership that’s <Accent>genuinely accessible</Accent>, <Accent>fully transparent</Accent>, and{" "}
            <Accent>uniquely liquid</Accent>.
          </p>

          <Button href={ctaHref} variant="outline" className="border-accent text-accent hover:bg-accent/10">
            {ctaLabel} <ArrowRight className="ml-2 inline-block h-4 w-4 align-[-1px]" />
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
