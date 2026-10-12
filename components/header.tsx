"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/portfolio", label: "Trabalhos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/curriculo", label: "Currículo" },
  { href: "/certificados", label: "Certificados" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#111214]/88 backdrop-blur">
      <div className="container-page flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center border border-[#C6A66B]/60 font-editorial text-xl">
            SM
          </span>
          <span className="leading-tight">
            <span className="block font-editorial text-xl">{siteConfig.name}</span>
            <span className="hidden text-xs text-[#B9B5AD] sm:block">{siteConfig.role}</span>
          </span>
        </Link>

        <nav aria-label="Menu principal" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "min-h-11 px-3 py-3 text-sm text-[#B9B5AD] transition hover:text-[#F4F0E8]",
                pathname.startsWith(item.href) && "text-[#C6A66B]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center border border-white/15 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-[#111214] md:hidden" aria-label="Menu móvel">
          <div className="container-page grid py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-11 py-3 text-[#F4F0E8]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
