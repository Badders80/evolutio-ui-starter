"use client";
import Image from "next/image";

export function SectionBand({
  src,
  alt = "",
  height = 420,
  overlay = 0.4,
}: {
  src: string;
  alt?: string;
  height?: number;
  overlay?: number; // 0..1
}) {
  return (
    <div className="relative w-full" style={{ height }}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover opacity-80" />
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${overlay})` }} />
    </div>
  );
}