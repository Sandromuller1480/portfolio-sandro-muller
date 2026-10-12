import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { EmptyState } from "@/components/empty-state";
import { ParallaxLayer } from "@/components/parallax-layer";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { certificates } from "@/content/certificates";
import { categories } from "@/content/categories";
import { timeline } from "@/content/resume";
import { getVisibleProjects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const featured = getVisibleProjects().filter((project) => project.featured).slice(0, 9);

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <ParallaxLayer />
        <div className="container-page relative grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-[#C6A66B]">{siteConfig.role}</p>
            <h1 className="font-editorial text-6xl leading-[0.92] text-[#F4F0E8] md:text-8xl">
              {siteConfig.name}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#B9B5AD] md:text-2xl">{siteConfig.tagline}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/portfolio">
                Explorar trabalhos <ArrowRight size={18} aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contato" variant="secondary">
                Falar comigo
              </ButtonLink>
            </div>
          </div>
          <div className="surface relative min-h-[420px] rounded-sm p-8">
            <div className="absolute inset-8 border border-[#C6A66B]/35" aria-hidden />
            <div className="relative flex h-full min-h-[356px] flex-col justify-end">
              <span className="font-editorial text-[9rem] leading-none text-[#C6A66B]/18">SM</span>
              <p className="max-w-sm text-[#B9B5AD]">
                Retrato ou imagem autoral aprovada entra aqui. Enquanto isso, o monograma preserva a
                identidade sem publicar imagem não validada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Seleção editorial" title="Trabalhos em destaque">
          A home exibe uma curadoria curta. O acervo completo fica no catálogo, com filtros e busca.
        </SectionHeading>
        <div className="mt-10">
          {featured.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featured.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          ) : (
            <EmptyState
              title="Acervo público em preparação"
              message="A estrutura está pronta para receber fotografias, vídeos, desenhos, marcas e projetos digitais aprovados."
            />
          )}
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading eyebrow="Biografia" title="Imagem, arte e tecnologia no mesmo percurso">
          {siteConfig.biographyDraft}
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <div key={category} className="surface rounded-sm p-5">
              <p className="font-editorial text-2xl text-[#F4F0E8]">{category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Trajetória" title="Resumo profissional" />
        <div className="mt-10 grid gap-4">
          {timeline.map((item) => (
            <article key={item.title} className="surface grid gap-3 rounded-sm p-6 md:grid-cols-[180px_1fr]">
              <p className="text-sm uppercase tracking-[0.16em] text-[#C6A66B]">{item.period}</p>
              <div>
                <h3 className="font-editorial text-3xl text-[#F4F0E8]">{item.title}</h3>
                <p className="mt-2 text-[#B9B5AD]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 md:grid-cols-[1fr_1fr] md:items-center">
        <SectionHeading eyebrow="Certificados" title="Formação documentada">
          Certificados públicos aparecem apenas quando há documento e autorização para exibição.
        </SectionHeading>
        <div className="surface rounded-sm p-6">
          {certificates.map((certificate) => (
            <div key={certificate.slug}>
              <p className="font-editorial text-3xl text-[#F4F0E8]">{certificate.title}</p>
              <p className="mt-2 text-[#B9B5AD]">{certificate.institution}</p>
            </div>
          ))}
          <ButtonLink href="/certificados" variant="secondary" className="mt-6">
            Ver certificados
          </ButtonLink>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="surface rounded-sm p-8 md:p-12">
          <SectionHeading eyebrow="Contato" title="Vamos conversar sobre uma ideia">
            Use os canais profissionais assim que estiverem confirmados, ou envie materiais para completar
            o acervo público.
          </SectionHeading>
          <ButtonLink href="/contato" className="mt-8">
            Abrir contato
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
