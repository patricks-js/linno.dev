"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { SectionTitle } from "@/components/section-title";
import { Marquee } from "@/components/ui/marquee";

type TechStackItem = {
  name: string;
  category: "language" | "framework" | "database" | "runtime" | "tool";
  icon?: string;
  iconLight?: string;
  iconDark?: string;
};

const techStack: TechStackItem[] = [
  { name: "JavaScript", category: "language", icon: "/javascript.svg" },
  { name: "TypeScript", category: "language", icon: "/typescript.svg" },
  {
    name: "React",
    category: "framework",
    iconLight: "/React_light_dark/React_light.svg",
    iconDark: "/React_light_dark/React_dark.svg",
  },
  { name: "Next.js", category: "framework", icon: "/nextjs_icon_dark.svg" },
  { name: "Node.js", category: "runtime", icon: "/nodejs.svg" },
  { name: "Bun", category: "runtime", icon: "/bun.svg" },
  { name: "PostgreSQL", category: "database", icon: "/postgresql.svg" },
  {
    name: "MongoDB",
    category: "database",
    iconLight: "/MongoDB_light_dark/MongoDB_light.svg",
    iconDark: "/MongoDB_light_dark/MongoDB_dark.svg",
  },
  { name: "Redis", category: "database", icon: "/redis.svg" },
  {
    name: "Drizzle ORM",
    category: "database",
    iconLight: "/Drizzle%20ORM_light_dark/Drizzle%20ORM_light.svg",
    iconDark: "/Drizzle%20ORM_light_dark/Drizzle%20ORM_dark.svg",
  },
  { name: "Docker", category: "tool", icon: "/docker.svg" },
  { name: "Git", category: "tool", icon: "/git.svg" },
  {
    name: "GitHub",
    category: "tool",
    iconLight: "/GitHub_light_dark/GitHub_light.svg",
    iconDark: "/GitHub_light_dark/GitHub_dark.svg",
  },
  { name: "Vite", category: "tool", icon: "/vite.svg" },
  { name: "Playwright", category: "tool", icon: "/playwright.svg" },
  { name: "TanStack", category: "tool", icon: "/tanstack.svg" },
  { name: "VS Code", category: "tool", icon: "/vscode.svg" },
];

function getIconSrc(item: TechStackItem, isDark: boolean) {
  if (item.icon) return item.icon;
  if (isDark) return item.iconDark ?? item.iconLight ?? "";
  return item.iconLight ?? item.iconDark ?? "";
}

export function StackSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = useMemo(() => {
    if (!mounted) return false;
    return resolvedTheme === "dark";
  }, [mounted, resolvedTheme]);

  return (
    <section>
      <div className="space-y-6 px-6">
        <div className="space-y-2">
          <SectionTitle>Minha Stack</SectionTitle>
          <p className="text-sm text-muted-foreground">
            Tecnologias que uso para criar produtos que resolvem problemas
            reais.
          </p>
        </div>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:20s] [--gap:2.5rem] p-2">
            {techStack.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center gap-2 p-2 opacity-60 transition duration-200 group/stack hover:scale-105 hover:opacity-90"
              >
                <Image
                  src={getIconSrc(item, isDark)}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="size-10 grayscale transition duration-200 group-hover/stack:grayscale-0"
                />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
