import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type HomeButtonProps = {
  className?: string;
};

export function HomeButton({ className }: HomeButtonProps) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-card/30 text-foreground/80 transition-colors hover:text-foreground",
        className,
      )}
    >
      <HomeIcon className="size-4" />
    </Link>
  );
}
