"use client";

import { ChevronDownIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { TooltipProvider } from "@/components/ui/tooltip";

type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    company: "In8 Solutions",
    role: "Desenvolvedor Full Stack",
    period: "Julho 2025 • Atual",
    highlights: [
      "Desenvolvi e modernizei interfaces complexas com TypeScript e React, implementando design responsivo e gerenciamento avancado de estado para melhorar a escalabilidade da interface.",
      "Refinei queries SQL e a logica de backend em Node.js, reduzindo significativamente a latencia e aumentando a performance de funcionalidades centrais do sistema.",
      "Otimizei pipelines de CI no GitLab para automatizar testes e deploy, acelerando ciclos de entrega e garantindo maior qualidade de codigo entre ambientes.",
      "Traduzi requisitos de negocio em especificacoes tecnicas, colaborando em times ageis para garantir a entrega de funcionalidades de alto valor.",
    ],
  },
  {
    company: "inFlow - Your Sugestion Plataform",
    role: "Desenvolvedor Full Stack Freelancer",
    period: "Maio 2023 • Julho 2023",
    highlights: [
      "Construí um aplicativo de chat em tempo real com React Native, integrando autenticação, notificações e um back-end em Node.",
      "Modelei e desenvolvi funcionalidades full-stack com foco em comunicação eficiente e boa experiência do usuário.",
      "Participei ativamente na definição do escopo técnico e na adoção de melhores práticas para versionamento e controle de estado.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-xl font-serif leading-relaxed">
        Experiência Profissional
      </h2>
      <ul className="space-y-6">
        {experiences.map((experience) => (
          <li key={experience.company}>
            <Collapsible>
              <header className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium leading-relaxed">
                    {experience.company}
                  </h3>
                  <p className="font-medium text-muted-foreground">
                    {experience.role}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-muted-foreground">{experience.period}</p>
                  <TooltipProvider>
                    <CollapsibleTrigger
                      className={buttonVariants({
                        variant: "ghost",
                        size: "icon",
                      })}
                      aria-label="Mostrar descrição do cargo"
                    >
                      <ChevronDownIcon />
                    </CollapsibleTrigger>
                  </TooltipProvider>
                </div>
              </header>
              <CollapsiblePanel className="pl-4 pt-4 border-t mt-4">
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-primary">
                  {experience.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CollapsiblePanel>
            </Collapsible>
          </li>
        ))}
      </ul>
    </section>
  );
}
