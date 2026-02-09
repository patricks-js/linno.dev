import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section className="relative">
      <div className="space-y-6 px-6">
        <SectionTitle>Projetos</SectionTitle>
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} variant="compact" />
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Button render={<Link href="/projects" />} variant="outline">
            Ver mais →
          </Button>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
    </section>
  );
}
