# Portfólio Sandro Müller

Aplicação em Next.js com App Router, TypeScript e Tailwind CSS para o portfólio profissional de Sandro Müller.

## Instalação local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
```

## Conteúdo

- Dados centrais: `lib/site.ts`
- Categorias: `content/categories.ts`
- Projetos: `content/projects.ts`
- Certificados: `content/certificates.ts`
- Currículo: `content/resume.ts`

Para adicionar um projeto, inclua um item em `projects` com `slug`, `title`, `summary`, `categories`, `keywords`, `status` e mídias. O catálogo e as páginas internas são gerados a partir desses dados.

## Imagens e vídeos

Substitua placeholders em `public/placeholders` por arquivos aprovados, mantendo textos alternativos e legendas. Vídeos devem usar capa e carregar o player somente após ação do visitante.

## Biografia e contatos

Edite `lib/site.ts`. E-mail, WhatsApp, redes sociais e cidade estão nulos por segurança até confirmação. O WhatsApp deve ser informado em formato internacional, sem `+`, espaços ou pontuação.

## Currículo

O PDF antigo não está publicado. Quando houver uma versão pública revisada, coloque o arquivo em `public/downloads` e adicione o link ao componente da página de currículo.

## URL pública, domínio e imagem social

Configure `NEXT_PUBLIC_SITE_URL` no `.env.local` e na Vercel. A imagem social é gerada por `app/opengraph-image.tsx` em 1200 x 630 px.

## Demonstrações locais

Projetos demonstrativos existem para revisar a interface sem misturar conteúdo falso ao catálogo público. Ative localmente com:

```bash
NEXT_PUBLIC_ENABLE_DEMO=true npm run dev
```

Na produção, mantenha `NEXT_PUBLIC_ENABLE_DEMO=false`.

## GitHub

```bash
git init
git add .
git commit -m "Implementa portfolio Sandro Muller"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Vercel

1. Importe o repositório no painel da Vercel.
2. Configure `NEXT_PUBLIC_SITE_URL` com a URL definitiva.
3. Mantenha `NEXT_PUBLIC_ENABLE_DEMO=false`.
4. Revise o preview antes de apontar domínio próprio.
5. Para recuperar versões, use a aba Deployments da Vercel e promova um deployment anterior.

## Revisão antes de publicar

Confirme contatos, imagens, créditos, certificados, currículo público, links de vídeo e URLs definitivas. Não publique materiais demonstrativos como obras reais.
