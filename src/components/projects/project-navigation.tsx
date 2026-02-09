import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectNavigationProps = {
  previous: Project | null;
  next: Project | null;
};

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  return (
    <section className="relative">
      <div className="grid gap-6 px-6 sm:grid-cols-2">
        <div>
          {previous && (
            <Link
              href={`/projects/${previous.slug}`}
              className="group flex items-center gap-3 text-sm text-muted-foreground"
            >
              <ArrowLeftIcon className="size-4" />
              <span>
                <span className="block text-xs uppercase tracking-[0.2em]">
                  Previous
                </span>
                <span className="mt-1 block text-base text-foreground">
                  {previous.title}
                </span>
              </span>
            </Link>
          )}
        </div>
        <div className="sm:text-right">
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group inline-flex items-center gap-3 text-sm text-muted-foreground sm:justify-end"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.2em]">
                  Next
                </span>
                <span className="mt-1 block text-base text-foreground">
                  {next.title}
                </span>
              </span>
              <ArrowRightIcon className="size-4" />
            </Link>
          )}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
    </section>
  );
}
