import Link from "next/link";
import { siteConfig } from "@/lib/site";

const links = [
  ["Trabalhos", "/portfolio"],
  ["Sobre", "/sobre"],
  ["Currículo", "/curriculo"],
  ["Certificados", "/certificados"],
  ["Cartão digital", "/cartao"],
  ["Contato", "/contato"],
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-sm text-[#B9B5AD]">
      <div className="container-page grid gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-editorial text-2xl text-[#F4F0E8]">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl">{siteConfig.role}. {siteConfig.tagline}</p>
        </div>
        <nav aria-label="Navegação do rodapé" className="grid gap-2 sm:grid-cols-2">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="min-h-11 py-2 hover:text-[#F4F0E8]">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
