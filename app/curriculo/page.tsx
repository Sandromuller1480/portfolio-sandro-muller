import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { education, skillGroups, timeline } from "@/content/resume";

export const metadata: Metadata = {
  title: "Currículo",
  description: "Currículo digital de Sandro Müller.",
  alternates: { canonical: "/curriculo" },
};

export default function CurriculoPage() {
  return (
    <section className="container-page py-16">
      <SectionHeading eyebrow="Currículo" title="Currículo digital">
        Resumo profissional organizado para publicação. Dados pessoais sensíveis, escolaridade pendente e PDF antigo não são exibidos.
      </SectionHeading>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h2 className="font-editorial text-4xl text-[#F4F0E8]">Experiências em linha do tempo</h2>
          <div className="mt-6 grid gap-4">
            {timeline.map((item) => (
              <article key={item.title} className="surface rounded-sm p-6">
                <p className="text-sm uppercase tracking-[0.16em] text-[#C6A66B]">{item.period}</p>
                <h3 className="mt-3 font-editorial text-3xl text-[#F4F0E8]">{item.title}</h3>
                <p className="mt-2 text-[#B9B5AD]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="grid gap-6">
          <div className="surface rounded-sm p-6">
            <h2 className="font-editorial text-3xl text-[#F4F0E8]">Competências</h2>
            <div className="mt-5 grid gap-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm uppercase tracking-[0.16em] text-[#C6A66B]">{group.title}</h3>
                  <p className="mt-2 text-[#B9B5AD]">{group.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-sm p-6">
            <h2 className="font-editorial text-3xl text-[#F4F0E8]">Cursos e formação confirmados</h2>
            {education.map((item) => (
              <div key={item.title} className="mt-4">
                <p className="text-[#F4F0E8]">{item.title}</p>
                <p className="text-[#B9B5AD]">{item.institution}</p>
              </div>
            ))}
          </div>

          <div className="surface rounded-sm p-6">
            <h2 className="font-editorial text-3xl text-[#F4F0E8]">Download</h2>
            <p className="mt-3 text-[#B9B5AD]">
              A estrutura está preparada para uma versão pública revisada do currículo. O PDF antigo não foi disponibilizado.
            </p>
            <ButtonLink href="/contato" variant="secondary" className="mt-5">
              Enviar currículo revisado
            </ButtonLink>
          </div>
        </aside>
      </div>
    </section>
  );
}
