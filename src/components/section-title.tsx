import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn("text-xl font-serif leading-relaxed opacity-60", className)}
    >
      {children}
    </h2>
  );
}
