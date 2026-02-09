# Elev - Landing Page

Landing page do Elev, hospedada via GitHub Pages.

## Setup

```bash
npm install
npm run dev
```

## Deploy

O deploy é automático via GitHub Actions. A cada push na branch `main`, o site é buildado e publicado no GitHub Pages.

### Configuração do GitHub Pages

1. Vá em **Settings** > **Pages** do repositório
2. Em **Source**, selecione **GitHub Actions**
3. O workflow já está configurado em `.github/workflows/deploy.yml`

### Base path (se necessário)

Se o repositório NÃO for o principal do usuário (ex: `usuario.github.io/nome-repo`), edite o `vite.config.ts` e altere a propriedade `base`:

```ts
base: "/nome-repo/",
```

Se for o repositório principal (`usuario.github.io`), mantenha:

```ts
base: "/",
```

## Variáveis de Ambiente

Copie `.env.example` para `.env` e configure os valores. Para o build no GitHub Actions, configure as variáveis como secrets do repositório ou diretamente no workflow.

## Tecnologias

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- shadcn/ui
- React Router DOM
