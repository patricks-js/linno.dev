import { Badge } from "../ui/badge";

type ThoughtTagsProps = {
  tags: string[];
};

export function ThoughtTags({ tags }: ThoughtTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="outline">{tag}</Badge>
        </li>
      ))}
    </ul>
  );
}
