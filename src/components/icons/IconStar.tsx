// Example SVG icon component showing both patterns

// Pattern 1: Inline SVG (works without any setup)
export function IconStar({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

// Pattern 2: SVGR import (now configured!)
// import Star from "@/assets/icons/star.svg";
// export function IconStarSVGR({ className = "h-4 w-4" }: { className?: string }) {
//   return <Star className={className} aria-hidden />;
// }

// For a real icon, place star.svg in /src/assets/icons/ and use the import approach