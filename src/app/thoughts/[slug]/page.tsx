import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DiagonalPattern } from "@/components/diagonal-pattern";
import { Footer } from "@/components/layout/footer";
import { HomeButton } from "@/components/home-button";
import { SectionTitle } from "@/components/section-title";
import { getThoughtBySlug, thoughts } from "@/data/thoughts";

type ThoughtPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ThoughtPageProps): Promise<Metadata> {
  const { slug } = await params;
  const thought = getThoughtBySlug(slug);

  if (!thought) {
    return {
      title: "Thought",
      description: "Anotação e reflexão.",
    };
  }

  return {
    title: "Thoughts",
    description: thought.excerpt,
  };
}

export default async function ThoughtPage({ params }: ThoughtPageProps) {
  const { slug } = await params;
  const thought = getThoughtBySlug(slug);

  if (!thought) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto pt-20 pb-10 border-x border-border/60 space-y-10">
      <section className="relative">
        <div className="space-y-4 px-6">
          <HomeButton />
          <SectionTitle className="text-3xl italic">{thought.title}</SectionTitle>
          <p className="text-sm text-muted-foreground">{thought.date}</p>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
      </section>
      <DiagonalPattern />
      <section className="relative">
        <div className="space-y-4 px-6 text-sm text-muted-foreground">
          {thought.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
      </section>
      <DiagonalPattern />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return thoughts.map((thought) => ({ slug: thought.slug }));
}
