import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCoverProps = {
  project: Project;
};

export function ProjectCover({ project }: ProjectCoverProps) {
  return (
    <section className="relative">
      <div className="px-6">
        <div
          className={cn(
            "flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-border/60",
            project.cover.className,
          )}
        >
          <Image
            src={project.cover.image}
            alt={project.cover.alt}
            width={360}
            height={360}
            className="size-28 drop-shadow-md"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
    </section>
  );
}
