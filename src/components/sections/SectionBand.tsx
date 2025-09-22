"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getMarketingImage } from "@/lib/assets";

export type SectionBandProps = {
  imageName: string;
  aspectRatio?: "wide" | "standard";
  className?: string;
};

export function SectionBand({ imageName, aspectRatio = "wide", className = "" }: SectionBandProps) {
  const imageData = getMarketingImage(imageName);

  if (!imageData) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`overflow-hidden ${className}`}
    >
      <div className={`relative w-full ${aspectRatio === "wide" ? "aspect-[21/9]" : "aspect-video"}`}>
        <Image
          src={imageData.src}
          alt={imageData.alt}
          fill
          className="absolute inset-0 size-full object-cover"
          sizes="100vw"
          priority
        />
        {/* Optional overlay for text content */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>
    </motion.section>
  );
}
