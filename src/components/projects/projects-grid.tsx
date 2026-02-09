import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/data/projects";

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="relative">
      <div className="px-6">
        <ul className="columns-1 gap-5 sm:columns-2">
          {projects.map((project) => (
            <li key={project.slug} className="mb-5 break-inside-avoid">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
    </section>
  );
}
