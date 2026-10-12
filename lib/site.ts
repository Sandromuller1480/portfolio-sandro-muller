export const siteConfig = {
  name: "Sandro Müller",
  role: "Artista, designer e desenvolvedor digital",
  tagline: "Arte, imagem e tecnologia para transformar ideias em experiências.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://seu-dominio.com.br",
  locale: "pt_BR",
  biographyDraft:
    "Sou Sandro Müller, artista e profissional multidisciplinar. Minha trajetória começou por volta de 1990, com o desenho artístico e a pintura a óleo sobre tela. Ao longo dos anos, ampliei minha atuação para a comunicação visual, o design gráfico, a fotografia e o audiovisual, trabalhando também com roteiro, direção, produção e pós-produção. Hoje, reúno essa experiência à criação de aplicativos, sistemas e sites, conectando sensibilidade visual e soluções digitais.",
  biographyStatus: "Texto sujeito à aprovação",
  publicCity: null as string | null,
  contacts: {
    email: null as string | null,
    whatsappInternational: null as string | null,
    whatsappMessage:
      "Olá, Sandro. Vim pelo seu portfólio e gostaria de conversar sobre um projeto.",
    instagram: null as string | null,
    linkedin: null as string | null,
    github: null as string | null,
  },
  socialImage: "/opengraph-image",
};

export const hasProfessionalContact =
  Boolean(siteConfig.contacts.email) || Boolean(siteConfig.contacts.whatsappInternational);
