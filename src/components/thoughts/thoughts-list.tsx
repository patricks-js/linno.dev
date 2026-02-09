import Link from "next/link";
import type { Thought } from "@/data/thoughts";

type ThoughtsListProps = {
  items: Thought[];
};

export function ThoughtsList({ items }: ThoughtsListProps) {
  return (
    <ul className="divide-y divide-border/40">
      {items.map((thought) => (
        <li key={thought.slug} className="py-4">
          <Link
            href={`/thoughts/${thought.slug}`}
            className="flex items-start justify-between gap-6"
          >
            <p className="font-medium">{thought.title}</p>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {thought.date}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
