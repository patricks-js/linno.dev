"use client";

import Image from "next/image";
import Link from "next/link";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { GitHubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { TwitterIcon } from "@/components/icons/twitter";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipCreateHandle,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SocialTooltipPayload = {
  label: string;
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/patricks-js",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/patrick-lsilva/",
    icon: LinkedInIcon,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/pattricx",
    icon: TwitterIcon,
  },
];

export function HeroSection() {
  const tooltipHandle = TooltipCreateHandle<SocialTooltipPayload>();
  const { resolvedTheme, setTheme } = useTheme();
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
        <Image
          src="/pfp.jpg"
          alt="Patrick Silva"
          width={112}
          height={112}
          className="rounded-full size-28 bg-secondary object-cover"
        />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="italic font-medium leading-relaxed font-serif text-4xl">
              Patrick Silva
            </h1>
            <p className="text-sm text-muted-foreground">
              22 • brasileiro • desenvolvedor de software
            </p>
          </div>
          <TooltipProvider>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <TooltipTrigger
                    key={link.label}
                    handle={tooltipHandle}
                    payload={{ label: link.label }}
                    render={
                      <Button
                        render={<Link href={link.href} target="_blank" />}
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        aria-label={link.label}
                      >
                        <Icon />
                      </Button>
                    }
                  />
                );
              })}
              <TooltipTrigger
                handle={tooltipHandle}
                payload={{ label: "Trocar tema" }}
                render={
                  <Button
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    aria-label="Trocar tema"
                  >
                    {isDark ? <SunIcon /> : <MoonIcon />}
                  </Button>
                }
              />
            </div>
            <Tooltip handle={tooltipHandle}>
              {({ payload }) => (
                <TooltipContent>{payload?.label}</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-foreground/75">
          <span className="text-foreground">Sou desenvolvedor de software</span>
          . Gosto de construir aplicações completas, do frontend ao backend, com
          foco em código limpo, escalabilidade e boa experiência para quem usa.
          Trabalho principalmente com TypeScript, usando React/Next.js no
          frontend e Bun no backend, sempre buscando soluções que façam sentido
          técnico e entregam valor ao negócio.
        </p>
      </div>
    </section>
  );
}
