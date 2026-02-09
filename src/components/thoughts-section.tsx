import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";

const thoughts = [
  {
    title: "Como escolho problemas, resolvo e termino entregando resultado",
    date: "12 Jan 2024",
  },
  {
    title:
      "Como fazer SSH no seu servidor (do jeito certo): guia para iniciantes",
    date: "29 Nov 2023",
  },
  {
    title: "O que é RAG? Por que você deveria aprender isso?",
    date: "03 Out 2023",
  },
];

export function ThoughtsSection() {
  return (
    <section className="relative">
      <div className="space-y-6 px-6">
        <SectionTitle>Thoughts</SectionTitle>
        <ul className="divide-y divide-border/40">
          {thoughts.map((thought) => (
            <li
              key={thought.title}
              className="flex items-start justify-between gap-6 py-4"
            >
              <p className="font-medium">{thought.title}</p>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {thought.date}
              </span>
            </li>
          ))}
        </ul>
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
