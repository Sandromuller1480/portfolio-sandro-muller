import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { certificates } from "@/content/certificates";

export const metadata: Metadata = {
  title: "Certificados",
  description: "Certificados públicos confirmados de Sandro Müller.",
  alternates: { canonical: "/certificados" },
};

export default function CertificadosPage() {
  return (
    <section className="container-page py-16">
      <SectionHeading eyebrow="Certificados" title="Documentos confirmados">
        Cards públicos só aparecem quando há informações verificáveis. Materiais pendentes ficam documentados internamente.
      </SectionHeading>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {certificates.map((certificate) => (
          <article key={certificate.slug} className="surface rounded-sm p-6">
            <div className="grid aspect-[4/3] place-items-center border border-white/10 bg-[#111214] text-center">
              <span className="px-8 font-editorial text-4xl text-[#C6A66B]">Certificado</span>
            </div>
            <h2 className="mt-6 font-editorial text-3xl text-[#F4F0E8]">{certificate.title}</h2>
            <p className="mt-2 text-[#B9B5AD]">{certificate.institution}</p>
            <dl className="mt-5 grid gap-3 text-sm">
              <div>
                <dt className="text-[#C6A66B]">Ano</dt>
                <dd className="text-[#B9B5AD]">{certificate.year || "Pendente no documento público"}</dd>
              </div>
              <div>
                <dt className="text-[#C6A66B]">Carga horária</dt>
                <dd className="text-[#B9B5AD]">{certificate.workload || "Não informada"}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
