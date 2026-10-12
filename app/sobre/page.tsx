import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/content/resume";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Biografia profissional de Sandro Müller.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <section className="container-page py-16">
      <SectionHeading eyebrow="Sobre" title="Sandro Müller">
        {siteConfig.biographyDraft}
      </SectionHeading>
      <p className="mt-4 text-sm text-[#C6A66B]">{siteConfig.biographyStatus}</p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {timeline.map((item) => (
          <article key={item.title} className="surface rounded-sm p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[#C6A66B]">{item.period}</p>
            <h2 className="mt-4 font-editorial text-3xl text-[#F4F0E8]">{item.title}</h2>
            <p className="mt-3 leading-7 text-[#B9B5AD]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
