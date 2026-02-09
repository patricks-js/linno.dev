import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectDescriptionProps = {
  project: Project;
};

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  const primaryLink =
    project.links.find((link) => link.type === "external") ?? project.links[0];

  return (
    <section className="relative">
      <div className="space-y-3 px-6">
        <p className="text-sm text-muted-foreground">{project.description}</p>
        {primaryLink && (
          <Link href={primaryLink.href} className="text-sm text-primary">
            Ver o projeto →
          </Link>
        )}
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
    </section>
  );
}
