export type Thought = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string[];
};

export const thoughts: Thought[] = [
  {
    slug: "como-escolho-problemas",
    title: "Como escolho problemas, resolvo e termino entregando resultado",
    date: "12 Jan 2024",
    tags: ["Produtividade", "Processo", "Engenharia"],
    excerpt:
      "Um framework simples para priorizar problemas e chegar em entregas consistentes.",
    content: [
      "Nem todo problema precisa ser resolvido agora. Eu começo avaliando impacto, urgência e dependências técnicas.",
      "Depois crio uma hipótese clara de solução, com uma métrica de sucesso simples e objetiva.",
      "Por fim, corto escopo sem perder o valor central, garantindo entrega contínua e aprendizado rápido.",
    ],
  },
  {
    slug: "ssh-do-jeito-certo",
    title:
      "Como fazer SSH no seu servidor (do jeito certo): guia para iniciantes",
    date: "29 Nov 2023",
    tags: ["Infra", "Segurança", "DevOps"],
    excerpt:
      "Boas práticas para acesso seguro, chaves e hardening básico em servidores.",
    content: [
      "Prefira autenticação por chave pública e desabilite senha sempre que possível.",
      "Configure fail2ban, limite portas expostas e monitore tentativas de acesso.",
      "Padronize o setup com scripts e documente o processo para sua equipe.",
    ],
  },
  {
    slug: "o-que-e-rag",
    title: "O que é RAG? Por que você deveria aprender isso?",
    date: "03 Out 2023",
    tags: ["IA", "RAG", "Produto"],
    excerpt:
      "RAG melhora qualidade de respostas conectando LLMs a fontes confiáveis.",
    content: [
      "RAG combina busca por contexto relevante e geração de resposta com LLMs.",
      "Isso reduz alucinações e torna resultados mais rastreáveis e úteis.",
      "É uma das técnicas mais práticas para levar IA a produtos reais.",
    ],
  },
];

export function getThoughtBySlug(slug: string) {
  return thoughts.find((thought) => thought.slug === slug) ?? null;
}
