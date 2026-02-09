import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DiagonalPattern } from "@/components/diagonal-pattern";
import { Footer } from "@/components/layout/footer";
import { ProjectCover } from "@/components/projects/project-cover";
import { ProjectDescription } from "@/components/projects/project-description";
import { ProjectDetailHeader } from "@/components/projects/project-detail-header";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
      description: "Detalhes do projeto.",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <main className="max-w-4xl mx-auto pt-20 pb-10 border-x border-border/60 space-y-10">
      <ProjectDetailHeader project={project} />
      <DiagonalPattern />
      <ProjectCover project={project} />
      <ProjectDescription project={project} />
      <DiagonalPattern />
      <ProjectNavigation previous={prev} next={next} />
      <DiagonalPattern />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
