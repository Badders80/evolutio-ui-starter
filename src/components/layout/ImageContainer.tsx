"use client";

import Image from "next/image";
import { useState } from "react";
import { AspectBox } from "./AspectBox";

type Props = {
  src: string;
  alt?: string;
  ratio: string | number;
  mode?: "cover" | "contain";
  zoom?: number;
  bleed?: boolean;
  rounded?: boolean;
  allowZoom?: boolean;
  className?: string;
};

export function ImageContainer({
  src,
  alt = "",
  ratio,
  mode = "cover",
  zoom = 1,
  bleed = false,
  rounded = true,
  allowZoom = false,
  className = ""
}: Props) {
  const [currentZoom, setCurrentZoom] = useState(zoom);
  
  return (
    <div className={`relative ${className}`}>
      <AspectBox 
        ratio={ratio} 
        bleed={bleed} 
        className={`overflow-hidden bg-black ${rounded ? "rounded-2xl" : ""} ${bleed ? "" : "border shadow-sm"}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-center"
          style={{
            objectFit: mode,
            transform: `scale(${currentZoom * 1.60})`
          }}
        />
        {/* 50% black overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Centered brand logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/brand/Evolution-Stables-Logo.svg"
            alt="Evolution Stables"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>
        {allowZoom && (
          <div className="absolute bottom-2 left-2 right-2">
            <input
              type="range"
              min="1"
              max="2"
              step="0.1"
              value={currentZoom}
              onChange={(e) => setCurrentZoom(Number(e.target.value))}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer backdrop-blur"
            />
          </div>
        )}
      </AspectBox>
    </div>
  );
}