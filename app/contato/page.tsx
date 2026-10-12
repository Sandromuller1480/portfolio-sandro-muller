import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { hasProfessionalContact, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Canais profissionais de contato de Sandro Müller.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <section className="container-page py-16">
      <SectionHeading eyebrow="Contato" title="Canais profissionais">
        Os canais serão ativados quando e-mail, WhatsApp e redes forem confirmados para uso público.
      </SectionHeading>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="surface rounded-sm p-6">
          <h2 className="font-editorial text-3xl text-[#F4F0E8]">Status dos contatos</h2>
          {hasProfessionalContact ? (
            <ul className="mt-5 grid gap-3 text-[#B9B5AD]">
              {siteConfig.contacts.email ? <li>E-mail: {siteConfig.contacts.email}</li> : null}
              {siteConfig.contacts.whatsappInternational ? <li>WhatsApp configurado</li> : null}
            </ul>
          ) : (
            <p className="mt-4 text-[#B9B5AD]">
              Nenhum contato profissional foi publicado nesta versão para evitar expor dado não aprovado.
            </p>
          )}
        </article>
        <article className="surface rounded-sm p-6">
          <h2 className="font-editorial text-3xl text-[#F4F0E8]">Materiais necessários</h2>
          <p className="mt-4 text-[#B9B5AD]">
            Envie e-mail profissional, WhatsApp em formato internacional, redes sociais públicas e cidade
            de atuação caso queira exibir essas informações.
          </p>
        </article>
      </div>
    </section>
  );
}
