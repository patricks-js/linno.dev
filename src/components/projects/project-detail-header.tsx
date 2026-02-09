import { ArrowLeftIcon, ArrowUpRightIcon, HomeIcon } from "lucide-react";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons/github";
import { ProjectTags } from "@/components/projects/project-tags";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Project } from "@/data/projects";

type ProjectDetailHeaderProps = {
  project: Project;
};

const actionClass =
  "inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-card/30 text-foreground/80 transition-colors hover:text-foreground";

export function ProjectDetailHeader({ project }: ProjectDetailHeaderProps) {
  return (
    <section className="relative">
      <div className="space-y-5 px-6">
        <TooltipProvider>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Link
                    href="/projects"
                    className={actionClass}
                    aria-label="Voltar"
                  >
                    <ArrowLeftIcon className="size-4" />
                  </Link>
                }
              />
              <TooltipContent>Voltar para projects</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Link href="/" className={actionClass} aria-label="Home">
                    <HomeIcon className="size-4" />
                  </Link>
                }
              />
              <TooltipContent>Voltar para home</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-medium">{project.title}</h1>
            <ProjectTags tags={project.tags} />
          </div>
          <div className="flex items-center gap-2">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={actionClass}
                aria-label={link.label}
              >
                {link.type === "github" ? (
                  <GitHubIcon className="size-4" />
                ) : (
                  <ArrowUpRightIcon className="size-4" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
    </section>
  );
}
