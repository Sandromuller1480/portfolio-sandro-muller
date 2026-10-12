import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Política simples de privacidade do portfólio de Sandro Müller.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <section className="container-page py-16">
      <SectionHeading eyebrow="Privacidade" title="Uso de dados">
        Esta versão do site não usa autenticação, pagamentos, banco de dados, painel administrativo ou formulários com envio de dados.
      </SectionHeading>
      <div className="surface mt-10 rounded-sm p-6 leading-8 text-[#B9B5AD]">
        <p>
          Links externos, embeds de vídeo e recursos de compartilhamento podem ser tratados pelos respectivos
          serviços quando ativados pelo visitante. Contatos e downloads só devem ser publicados após confirmação.
        </p>
      </div>
    </section>
  );
}
