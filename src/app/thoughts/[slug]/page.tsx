import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiagonalPattern } from "@/components/diagonal-pattern";
import { HomeButton } from "@/components/home-button";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/section-title";
import { ThoughtTags } from "@/components/thoughts/thought-tags";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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

  const actionClass =
    "inline-flex size-9 items-center justify-center rounded-full border border-border/60 bg-card/30 text-foreground/80 transition-colors hover:text-foreground";

  return (
    <main className="max-w-4xl min-h-svh mx-auto pt-20 pb-10 border-x border-border/60 flex flex-col gap-10">
      <section className="relative">
        <div className="space-y-4 px-6">
          <TooltipProvider>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Link
                      href="/thoughts"
                      aria-label="Voltar para thoughts"
                      className={actionClass}
                    >
                      <ArrowLeftIcon className="size-4" />
                    </Link>
                  }
                />
                <TooltipContent>Thoughts</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<HomeButton />} />
                <TooltipContent>Home</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
          <SectionTitle className="text-3xl italic">
            {thought.title}
          </SectionTitle>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{thought.date}</p>
            <ThoughtTags tags={thought.tags} />
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
      </section>
      <DiagonalPattern />
      <section className="relative flex-1">
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
