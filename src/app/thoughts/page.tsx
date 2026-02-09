import type { Metadata } from "next";
import { DiagonalPattern } from "@/components/diagonal-pattern";
import { HomeButton } from "@/components/home-button";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/section-title";
import { ThoughtsList } from "@/components/thoughts/thoughts-list";
import { thoughts } from "@/data/thoughts";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Notas, ideias e aprendizados recentes.",
};

export default function ThoughtsPage() {
  return (
    <main className="max-w-4xl mx-auto pt-20 pb-10 border-x border-border/60 space-y-10">
      <section className="relative">
        <div className="space-y-3 px-6">
          <HomeButton />
          <SectionTitle className="text-3xl italic">Thoughts</SectionTitle>
          <p className="text-sm text-muted-foreground">
            Notas rápidas, ideias e aprendizados recentes.
          </p>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
      </section>
      <DiagonalPattern />
      <section className="relative">
        <div className="px-6">
          <ThoughtsList items={thoughts} />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
      </section>
      <DiagonalPattern />
      <Footer />
    </main>
  );
}
