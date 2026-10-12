import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { LightboxGallery } from "@/components/lightbox-gallery";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { VideoEmbed } from "@/components/video-embed";
import { getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.siteUrl}/portfolio/${project.slug}`,
      images: [{ url: project.cover?.src || siteConfig.socialImage, width: 1200, height: 630 }],
    },
  };
}

export function generateStaticParams() {
  return [];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);
  const images = (project.gallery || []).filter((item) => item.type === "image");
  const videos = (project.gallery || []).filter((item) => item.type === "video");

  return (
    <article className="container-page py-16">
      <p className="text-sm uppercase tracking-[0.18em] text-[#C6A66B]">{project.categories.join(" / ")}</p>
      <h1 className="mt-4 font-editorial text-5xl leading-tight text-[#F4F0E8] md:text-7xl">{project.title}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-9 text-[#B9B5AD]">{project.summary}</p>

      <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Ano", project.year],
          ["Cliente", project.client],
          ["Participação", project.role],
          ["Status", project.status],
        ].map(([label, value]) => (
          <div key={label} className="surface rounded-sm p-5">
            <dt className="text-xs uppercase tracking-[0.16em] text-[#C6A66B]">{label}</dt>
            <dd className="mt-2 text-[#F4F0E8]">{value || "Não informado"}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading eyebrow="Case" title="Contexto e processo" />
        <div className="grid gap-6 text-lg leading-8 text-[#B9B5AD]">
          {project.context ? <p>{project.context}</p> : null}
          {project.objective ? <p><strong className="text-[#F4F0E8]">Objetivo:</strong> {project.objective}</p> : null}
          {project.process ? <p><strong className="text-[#F4F0E8]">Processo:</strong> {project.process}</p> : null}
          {project.result ? <p><strong className="text-[#F4F0E8]">Resultado:</strong> {project.result}</p> : null}
          {project.deliverables?.length ? (
            <div>
              <p className="text-[#F4F0E8]">Entregáveis</p>
              <ul className="mt-2 list-inside list-disc">
                {project.deliverables.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ) : null}
          {project.credits?.length ? <p><strong className="text-[#F4F0E8]">Créditos:</strong> {project.credits.join(", ")}</p> : null}
        </div>
      </div>

      {images.length ? (
        <section className="mt-16">
          <SectionHeading eyebrow="Galeria" title="Imagens do projeto" />
          <div className="mt-8"><LightboxGallery items={images} /></div>
        </section>
      ) : null}

      {videos.length ? (
        <section className="mt-16">
          <SectionHeading eyebrow="Vídeo" title="Reprodução sob demanda" />
          <div className="mt-8 grid gap-6">{videos.map((item) => <VideoEmbed key={item.src} item={item} />)}</div>
        </section>
      ) : null}

      {related.length ? (
        <section className="mt-16">
          <SectionHeading eyebrow="Relacionados" title="Projetos próximos" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => <ProjectCard key={item.slug} project={item} />)}
          </div>
        </section>
      ) : null}

      <div className="surface mt-16 rounded-sm p-8">
        <h2 className="font-editorial text-4xl text-[#F4F0E8]">Quer conversar sobre um trabalho semelhante?</h2>
        <ButtonLink href="/contato" className="mt-6">Falar comigo</ButtonLink>
      </div>
    </article>
  );
}
