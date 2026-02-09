import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { GitHubIcon } from "@/components/icons/github";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { TwitterIcon } from "@/components/icons/twitter";
import { StackSection } from "@/components/stack-section";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto space-y-12">
      <section>
        <div className="rounded-full size-28 bg-secondary" />
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-medium leading-relaxed font-serif text-4xl">
              Patrick Silva
            </h1>
            <p className="text-sm text-muted-foreground">
              22 • brasileiro • desenvolvedor de software
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              render={
                <Link href="https://github.com/patricks-js" target="_blank" />
              }
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <GitHubIcon />
            </Button>
            <Button
              render={
                <Link
                  href="https://www.linkedin.com/in/patrick-lsilva/"
                  target="_blank"
                />
              }
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <LinkedInIcon />
            </Button>
            <Button
              render={<Link href="https://x.com/pattricx" target="_blank" />}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <TwitterIcon />
            </Button>
            {/* <Button variant="secondary">X</Button> // TODO: Change theme */}
            {/* <Button variant="secondary">X</Button> // TODO: Change language */}
          </div>
        </div>
        <Separator className="my-8 opacity-60" />
        <p className="text-lg">
          <strong>Sou desenvolvedor de software</strong>. Gosto de construir
          aplicações completas, do frontend ao backend, com foco em código
          limpo, escalabilidade e boa experiência para quem usa. Trabalho
          principalmente com TypeScript, usando React/Next.js no frontend e Bun
          no backend, sempre buscando soluções que façam sentido técnico e
          entregam valor ao negócio.
        </p>
      </section>
      <section className="space-y-8">
        <h2 className="text-xl font-serif leading-relaxed">
          Experiencia profissional
        </h2>
        <ul className="px-4">
          <li>
            <header className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-medium leading-relaxed">
                  In8 Solutions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvedor Full Stack
                </p>
              </div>
              <div className="flex items-center gap-6">
                <p>Julho 2022 • Atual</p>
                <Button variant="ghost" size="icon">
                  <ChevronDownIcon />
                </Button>
              </div>
            </header>
          </li>
        </ul>
      </section>
      <StackSection />
    </main>
  );
}
