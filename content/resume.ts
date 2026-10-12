import type { TimelineItem } from "@/lib/types";

export const timeline: TimelineItem[] = [
  {
    period: "Por volta de 1990",
    title: "Início no desenho artístico e na pintura a óleo",
    description:
      "Marco biográfico informado para estruturar a trajetória artística, pendente de refinamento com datas e obras.",
    status: "confirmado",
  },
  {
    period: "Trajetória posterior",
    title: "Comunicação visual, design gráfico, fotografia e audiovisual",
    description:
      "Atuação multidisciplinar incluindo roteiro, direção, produção e pós-produção, sem detalhamento público de clientes nesta versão.",
    status: "confirmado",
  },
  {
    period: "Atual",
    title: "Criação digital, aplicativos, sistemas e sites",
    description:
      "Integração entre sensibilidade visual, design de interfaces e desenvolvimento de soluções digitais.",
    status: "confirmado",
  },
];

export const skillGroups = [
  {
    title: "Artes visuais",
    items: ["Desenho artístico", "Pintura a óleo", "Composição visual"],
  },
  {
    title: "Imagem e audiovisual",
    items: ["Fotografia", "Roteiro", "Direção", "Produção", "Pós-produção"],
  },
  {
    title: "Design",
    items: ["Design gráfico", "Identidade visual", "Comunicação visual"],
  },
  {
    title: "Tecnologia",
    items: ["Aplicativos", "Sistemas", "Sites", "Experiências digitais"],
  },
];

export const education = [
  {
    title: "Pós-produção e Finalização",
    institution: "Escola de Cinema Darcy Ribeiro / Instituto Brasileiro de Audiovisual",
    status: "confirmado",
  },
];
