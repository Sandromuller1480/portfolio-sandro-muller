import type { Metadata } from "next";
import QRCode from "qrcode";
import { ButtonLink } from "@/components/button-link";
import { ShareActions } from "@/components/share-actions";
import { hasProfessionalContact, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cartão digital",
  description: "Cartão de visita digital de Sandro Müller.",
  alternates: { canonical: "/cartao" },
  openGraph: {
    title: `${siteConfig.name} | Cartão digital`,
    description: siteConfig.tagline,
    url: `${siteConfig.siteUrl}/cartao`,
    type: "profile",
    images: [{ url: siteConfig.socialImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
};

export default async function CartaoPage() {
  const cardUrl = `${siteConfig.siteUrl}/cartao`;
  const qr = await QRCode.toDataURL(cardUrl, { margin: 1, color: { dark: "#111214", light: "#F4F0E8" } });
  const whatsapp = siteConfig.contacts.whatsappInternational
    ? `https://wa.me/${siteConfig.contacts.whatsappInternational}?text=${encodeURIComponent(siteConfig.contacts.whatsappMessage)}`
    : null;

  return (
    <section className="container-page grid min-h-[calc(100vh-10rem)] place-items-center py-12">
      <div className="surface w-full max-w-md rounded-sm p-6 text-center">
        <div className="mx-auto grid size-28 place-items-center border border-[#C6A66B]/60 font-editorial text-5xl text-[#C6A66B]">
          SM
        </div>
        <h1 className="mt-6 font-editorial text-5xl text-[#F4F0E8]">{siteConfig.name}</h1>
        <p className="mt-3 text-[#B9B5AD]">{siteConfig.role}</p>

        <div className="mt-8 grid gap-3">
          <ButtonLink href="/" variant="primary">Ver portfólio</ButtonLink>
          {whatsapp ? (
            <a className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/15 px-4 text-sm" href={whatsapp}>
              Falar no WhatsApp
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/10 px-4 text-sm text-[#B9B5AD]">
              WhatsApp pendente de confirmação
            </span>
          )}
          <ButtonLink href="/curriculo" variant="secondary">Ver currículo</ButtonLink>
          {hasProfessionalContact ? (
            <a className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/15 px-4 text-sm" href="/cartao/contato.vcf">
              Salvar contato
            </a>
          ) : (
            <span className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/10 px-4 text-sm text-[#B9B5AD]">
              VCF aguardando contatos aprovados
            </span>
          )}
        </div>

        <div className="mx-auto mt-8 w-44 bg-[#F4F0E8] p-3">
          <img src={qr} alt={`QR Code para ${cardUrl}`} width={152} height={152} />
        </div>

        <div className="mt-8">
          <ShareActions title={siteConfig.name} text={siteConfig.tagline} url={cardUrl} />
        </div>
      </div>
    </section>
  );
}
