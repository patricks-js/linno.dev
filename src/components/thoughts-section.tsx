import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { ThoughtsList } from "@/components/thoughts/thoughts-list";
import { Button } from "@/components/ui/button";
import { thoughts } from "@/data/thoughts";

export function ThoughtsSection() {
  return (
    <section className="relative">
      <div className="space-y-6 px-6">
        <SectionTitle>Thoughts</SectionTitle>
        <ThoughtsList items={thoughts} />
        <div className="flex justify-center">
          <Button render={<Link href="/thoughts" />} variant="outline">
            Ver mais <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 size-6 bg-background" />
    </section>
  );
}
