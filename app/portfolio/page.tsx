import type { Metadata } from "next";
import { EmptyState } from "@/components/empty-state";
import { PortfolioFilters } from "@/components/portfolio-filters";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getVisibleProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Trabalhos",
  description: "Catálogo de trabalhos de Sandro Müller em arte, imagem, design e tecnologia.",
  alternates: { canonical: "/portfolio" },
};

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; busca?: string }>;
}) {
  const params = await searchParams;
  const category = params.categoria || "";
  const query = (params.busca || "").toLowerCase();
  const projects = getVisibleProjects().filter((project) => {
    const matchesCategory = category ? project.categories.includes(category as never) : true;
    const haystack = [project.title, project.summary, ...project.keywords].join(" ").toLowerCase();
    return matchesCategory && (query ? haystack.includes(query) : true);
  });

  return (
    <section className="container-page py-16">
      <SectionHeading eyebrow="Portfólio" title="Catálogo de trabalhos">
        Filtre por área ou busque por título e palavras-chave. Os filtros são preservados na URL.
      </SectionHeading>
      <div className="mt-10">
        <PortfolioFilters />
      </div>
      <div className="mt-10">
        {projects.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
        ) : (
          <EmptyState
            title="Nenhum trabalho público encontrado"
            message="Limpe os filtros ou ative demonstrações localmente com NEXT_PUBLIC_ENABLE_DEMO=true para revisar a interface."
          />
        )}
      </div>
    </section>
  );
}
