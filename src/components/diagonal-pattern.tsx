import { cn } from "@/lib/utils";

interface DiagonalPatternProps {
  className?: string;
}

export function DiagonalPattern({ className }: DiagonalPatternProps) {
  return (
    <div
      className={cn(
        "relative h-10 w-full overflow-hidden border-y border-border/60 text-foreground/25 dark:text-foreground/30",
        className,
      )}
    >
      <div
        className="absolute inset-0 z-0 dark:opacity-[0.14] opacity-[0.2]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 6px, currentcolor 6px, currentcolor 7px, transparent 7px, transparent 12px)",
        }}
      />
    </div>
  );
}
