import { Badge } from "@/components/ui/badge";

type ProjectTagsProps = {
  tags: string[];
};

export function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="outline" size="sm">
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
