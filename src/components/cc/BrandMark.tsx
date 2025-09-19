import Image from "next/image";
import { BRAND } from "@/lib/assets";

export function BrandMark({ className = "" }: { className?: string }) {
  // Uses typed brand path from assets helper; graceful fallback to text
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image 
        src={BRAND.logo} 
        alt="" 
        width={20} 
        height={20} 
        onError={(e) => ((e.target as any).style.display = "none")} 
      />
      <span className="font-semibold">Evolution</span>
    </div>
  );
}