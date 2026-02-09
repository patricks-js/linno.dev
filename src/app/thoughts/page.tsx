import type { Metadata } from "next";
import { DiagonalPattern } from "@/components/diagonal-pattern";
import { HomeButton } from "@/components/home-button";
import { Footer } from "@/components/layout/footer";
import { SectionTitle } from "@/components/section-title";
import { ThoughtsList } from "@/components/thoughts/thoughts-list";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { thoughts } from "@/data/thoughts";

export const metadata: Metadata = {
  title: "Thoughts",
  description: "Notas, ideias e aprendizados recentes.",
};

export default function ThoughtsPage() {
  return (
    <main className="max-w-4xl mx-auto min-h-svh pt-20 pb-10 border-x border-border/60 flex flex-col gap-10">
      <section className="relative">
        <div className="space-y-3 px-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger render={<HomeButton />} />
              <TooltipContent>Voltar para home</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <SectionTitle className="text-3xl italic">Thoughts</SectionTitle>
          <p className="text-sm text-muted-foreground">
            Notas rápidas, ideias e aprendizados recentes.
          </p>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
      </section>
      <DiagonalPattern />
      <section className="relative flex-1">
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
