import { ReactNode } from "react";
import { AspectBox } from "./AspectBox";

type Props = {
  children: ReactNode;
  ratio?: string | number;
  max?: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
  pad?: "none" | "sm" | "md" | "lg";
  className?: string;
};

export function ContentContainer({
  children,
  ratio,
  max = "lg",
  pad = "md",
  className = ""
}: Props) {
  const maxWidths = {
    none: "",
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-3xl",
    xl: "max-w-5xl",
    "2xl": "max-w-7xl"
  };

  const paddings = {
    none: "",
    sm: "px-2 py-6",
    md: "px-4 py-8",
    lg: "px-6 py-12"
  };

  const content = (
    <div className={`mx-auto ${maxWidths[max]} ${paddings[pad]} ${className}`}>
      {children}
    </div>
  );

  if (ratio) {
    return (
      <AspectBox ratio={ratio} className="flex items-center justify-center">
        {content}
      </AspectBox>
    );
  }

  return content;
}