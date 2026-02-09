import { DiagonalPattern } from "@/components/diagonal-pattern";
import { Footer } from "@/components/layout/footer";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ProjectsHeader } from "@/components/projects/projects-header";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto pt-20 pb-10 border-x border-border/60 space-y-10">
      <ProjectsHeader />
      <DiagonalPattern />
      <ProjectsGrid projects={projects} />
      <DiagonalPattern />
      <Footer />
    </main>
  );
}
