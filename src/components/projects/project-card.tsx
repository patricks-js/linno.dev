import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  variant?: "compact" | "cover";
};

export function ProjectCard({ project, variant = "cover" }: ProjectCardProps) {
  const isCompact = variant === "compact";
  const showSummary = !isCompact;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <article
        className={cn(
          "h-full rounded-2xl border border-border/60 bg-card/30 transition-colors group-hover:border-border",
          isCompact ? "p-4" : "p-3",
        )}
      >
        <div
          className={cn(
            "flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl border border-border/60",
            project.cover.className,
          )}
        >
          <Image
            src={project.cover.image}
            alt={project.cover.alt}
            width={160}
            height={120}
            className={cn("drop-shadow-sm", isCompact ? "size-12" : "size-20")}
          />
        </div>
        <div className={cn("mt-3", isCompact ? "space-y-1" : "space-y-0.5")}>
          <h3 className="text-sm font-medium">{project.title}</h3>
          {showSummary && (
            <p className="text-sm text-muted-foreground">{project.summary}</p>
          )}
        </div>
      </article>
    </Link>
  );
}
