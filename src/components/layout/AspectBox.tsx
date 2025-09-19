import { ReactNode } from "react";
import { parseAspect } from "@/lib/layout";

type Props = {
  ratio: string | number;
  bleed?: boolean;
  children: ReactNode;
  className?: string;
};

export function AspectBox({ ratio, bleed = false, children, className = "" }: Props) {
  const aspectRatio = parseAspect(ratio);
  
  return (
    <div
      className={`relative ${bleed ? "w-screen -mx-4 md:-mx-6" : "w-full"} ${className}`}
      style={{ aspectRatio }}
    >
      {children}
    </div>
  );
}