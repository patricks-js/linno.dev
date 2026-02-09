# Patrick Silva — Portfolio

Portfólio pessoal com páginas de projetos e thoughts, tema dark/light e layout pensado para leitura.

## Rodar o projeto

### 1) Instalar o Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

Depois, reinicie o terminal e verifique:

```bash
bun --version
```

### 2) Instalar dependências

```bash
bun install
```

### 3) Ambiente de desenvolvimento

```bash
bun dev
```

Acesse: `http://localhost:3000`

## Tecnologias

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui (Base UI)
- next-themes

## Estrutura rápida

- `src/app` — páginas e rotas
- `src/components` — componentes reutilizáveis
- `src/data` — dados mock (projects, thoughts)
- `public` — assets estáticos
