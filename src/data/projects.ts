export type ProjectLink = {
  label: string;
  href: string;
  type: "external" | "github";
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  cover: {
    image: string;
    alt: string;
    className: string;
  };
  tags: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "better-shot",
    title: "BetterShot",
    summary: "Captura e organiza screenshots com presets e export em lote.",
    description:
      "Ferramenta de captura com presets de layout, export inteligente e organização por coleções. Ideal para criar assets visuais rapidamente.",
    cover: {
      image: "/nextjs_icon_dark.svg",
      alt: "BetterShot",
      className: "bg-gradient-to-br from-amber-300 via-orange-400 to-red-500",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
    links: [
      {
        label: "Visitar",
        href: "https://example.com/bettershot",
        type: "external",
      },
      {
        label: "GitHub",
        href: "https://github.com/patricks-js",
        type: "github",
      },
    ],
  },
  {
    slug: "oneurl",
    title: "OneURL",
    summary: "Página única para organizar links e destacar projetos.",
    description:
      "Alternativa open-source ao Linktree com temas customizáveis, analytics e integrações. Foco em performance e experiência simples.",
    cover: {
      image: "/tanstack.svg",
      alt: "OneURL",
      className: "bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600",
    },
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "TanStack",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "Visitar",
        href: "https://example.com/oneurl",
        type: "external",
      },
      {
        label: "GitHub",
        href: "https://github.com/patricks-js",
        type: "github",
      },
    ],
  },
  {
    slug: "mind-mentor-ai",
    title: "Mind Mentor AI",
    summary: "Planner inteligente com rotinas e insights guiados por IA.",
    description:
      "Aplicativo de produtividade com prompts contextuais, cronogramas e recomendação de hábitos. Interface focada em clareza e foco.",
    cover: {
      image: "/typescript.svg",
      alt: "Mind Mentor AI",
      className: "bg-gradient-to-br from-emerald-400 via-green-500 to-lime-500",
    },
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    links: [
      {
        label: "Visitar",
        href: "https://example.com/mind-mentor",
        type: "external",
      },
      {
        label: "GitHub",
        href: "https://github.com/patricks-js",
        type: "github",
      },
    ],
  },
  {
    slug: "link-preview",
    title: "Link Preview",
    summary: "Visualizador de metadata e preview de páginas em tempo real.",
    description:
      "Pré-visualizador de URLs com scrape leve e cache. Útil para validar metas e cards antes de publicar.",
    cover: {
      image: "/nodejs.svg",
      alt: "Link Preview",
      className: "bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900",
    },
    tags: ["Node.js", "Express", "Redis", "TypeScript"],
    links: [
      {
        label: "Visitar",
        href: "https://example.com/link-preview",
        type: "external",
      },
      {
        label: "GitHub",
        href: "https://github.com/patricks-js",
        type: "github",
      },
    ],
  },
  {
    slug: "stackflow",
    title: "Stackflow",
    summary: "Monitoramento de deploys e dashboards de operação.",
    description:
      "Painel para acompanhar pipelines, métricas e erros críticos com alertas configuráveis e visualizações rápidas.",
    cover: {
      image: "/nestjs.svg",
      alt: "Stackflow",
      className:
        "bg-gradient-to-br from-orange-300 via-amber-400 to-yellow-500",
    },
    tags: ["NestJS", "PostgreSQL", "Docker", "Grafana"],
    links: [
      {
        label: "Visitar",
        href: "https://example.com/stackflow",
        type: "external",
      },
      {
        label: "GitHub",
        href: "https://github.com/patricks-js",
        type: "github",
      },
    ],
  },
  {
    slug: "relay-docs",
    title: "Relay Docs",
    summary: "Documentação viva com editor, versionamento e busca.",
    description:
      "Portal de docs com editor colaborativo, versionamento por releases e busca instantânea por conteúdo.",
    cover: {
      image: "/gitlab.svg",
      alt: "Relay Docs",
      className:
        "bg-gradient-to-br from-fuchsia-500 via-rose-500 to-orange-500",
    },
    tags: ["Next.js", "MDX", "TypeScript", "PostgreSQL"],
    links: [
      {
        label: "Visitar",
        href: "https://example.com/relay-docs",
        type: "external",
      },
      {
        label: "GitHub",
        href: "https://github.com/patricks-js",
        type: "github",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getProjectIndex(slug: string) {
  return projects.findIndex((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = getProjectIndex(slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  return { prev, next };
}
