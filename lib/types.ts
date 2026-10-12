export type Category =
  | "Fotografia"
  | "Vídeos e Cinema"
  | "Desenhos e Artes Plásticas"
  | "Design Gráfico"
  | "Marcas e Identidade Visual"
  | "Aplicativos"
  | "Sistemas"
  | "Sites e Desenvolvimento Web";

export type ProjectStatus = "rascunho" | "publicado" | "protótipo" | "em desenvolvimento";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  thumbnail?: string;
  provider?: "youtube" | "vimeo" | "external";
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  categories: Category[];
  keywords: string[];
  year?: string;
  client?: string;
  role?: string;
  context?: string;
  objective?: string;
  process?: string;
  deliverables?: string[];
  result?: string;
  credits?: string[];
  links?: { label: string; href: string }[];
  cover?: MediaItem;
  gallery?: MediaItem[];
  status: ProjectStatus;
  featured?: boolean;
  demoOnly?: boolean;
};

export type Certificate = {
  slug: string;
  title: string;
  institution: string;
  year?: string;
  workload?: string;
  thumbnail?: string;
  image?: string;
  download?: string;
  verificationUrl?: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
  status?: "confirmado" | "pendente";
};
