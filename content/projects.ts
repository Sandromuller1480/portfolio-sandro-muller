import type { Project } from "@/lib/types";

export const projects: Project[] = [];

export const demoProjects: Project[] = [
  {
    slug: "estudo-fotografico-demo",
    title: "Estudo fotográfico demonstrativo",
    summary: "Registro neutro usado apenas para validar filtros, galeria e páginas internas.",
    categories: ["Fotografia"],
    keywords: ["demonstração", "galeria", "imagem"],
    year: "Demonstração",
    role: "Registro de demonstração para revisão local",
    context: "Este conteúdo não representa obra publicada de Sandro Müller.",
    objective: "Permitir a revisão visual do layout enquanto o acervo real é organizado.",
    deliverables: ["Card de catálogo", "Galeria acessível", "Página de projeto"],
    status: "rascunho",
    demoOnly: true,
    featured: true,
    cover: {
      type: "image",
      src: "/placeholders/placeholder-obra.svg",
      alt: "Composição abstrata neutra usada como placeholder de desenvolvimento.",
      caption: "Placeholder de desenvolvimento. Substituir por obra aprovada.",
    },
    gallery: [
      {
        type: "image",
        src: "/placeholders/placeholder-obra.svg",
        alt: "Placeholder de desenvolvimento para imagem de obra.",
        caption: "Imagem demonstrativa, não publicar como obra real.",
      },
    ],
  },
  {
    slug: "identidade-visual-demo",
    title: "Identidade visual demonstrativa",
    summary: "Exemplo interno para conferir apresentação de marca, paleta e aplicações.",
    categories: ["Marcas e Identidade Visual", "Design Gráfico"],
    keywords: ["demonstração", "marca", "identidade"],
    year: "Demonstração",
    role: "Estrutura de case para validação",
    context: "Case neutro criado para testar a arquitetura do site.",
    objective: "Exibir campos disponíveis para projetos de identidade visual.",
    process: "Quando materiais reais forem fornecidos, esta página deve ser removida ou substituída.",
    deliverables: ["Conceito", "Símbolo", "Paleta", "Aplicações"],
    status: "rascunho",
    demoOnly: true,
    featured: true,
    cover: {
      type: "image",
      src: "/placeholders/placeholder-marca.svg",
      alt: "Placeholder geométrico neutro para case de identidade visual.",
    },
  },
];

export function getVisibleProjects() {
  return process.env.NEXT_PUBLIC_ENABLE_DEMO === "true" ? [...projects, ...demoProjects] : projects;
}
