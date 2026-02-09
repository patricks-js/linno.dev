import { DiagonalPattern } from "@/components/diagonal-pattern";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/layout/footer";
import { StackSection } from "@/components/stack-section";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto pt-20 pb-10 border-x border-border/60 space-y-10">
      <HeroSection />
      <DiagonalPattern />
      <ExperienceSection />
      <DiagonalPattern />
      <StackSection />
      <DiagonalPattern />
      <Footer />
    </main>
  );
}
