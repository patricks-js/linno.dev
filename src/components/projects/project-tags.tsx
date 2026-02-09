type ProjectTagsProps = {
  tags: string[];
};

export function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
