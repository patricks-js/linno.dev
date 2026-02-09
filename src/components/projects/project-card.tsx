import Image from "next/image";
import Link from "next/link";
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame";
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
      <Frame className="transition-colors group-hover:opacity-95">
        <FramePanel
          className={cn(
            "flex aspect-16/10 items-center justify-center overflow-hidden",
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
        </FramePanel>
        <FrameHeader className={cn(isCompact ? "py-3" : "py-4")}>
          <FrameTitle className="text-sm">{project.title}</FrameTitle>
          {showSummary && (
            <FrameDescription>{project.summary}</FrameDescription>
          )}
        </FrameHeader>
      </Frame>
    </Link>
  );
}
