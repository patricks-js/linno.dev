import { HomeButton } from "@/components/home-button";
import { SectionTitle } from "@/components/section-title";

export function ProjectsHeader() {
  return (
    <section className="relative">
      <div className="space-y-3 px-6">
        <HomeButton />
        <SectionTitle className="text-3xl italic">proof of work</SectionTitle>
        <p className="text-sm text-muted-foreground">
          Uma vitrine com meus trabalhos e projetos paralelos.
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
    </section>
  );
}
