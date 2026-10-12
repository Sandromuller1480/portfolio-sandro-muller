"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MediaItem } from "@/lib/types";

export function LightboxGallery({ items }: { items: MediaItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeButton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (active === null) return;
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  useEffect(() => {
    if (active === null) opener.current?.focus();
  }, [active]);

  if (!items.length) return null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className="group text-left"
            onClick={(event) => {
              opener.current = event.currentTarget;
              setActive(index);
            }}
          >
            <span className="relative block aspect-[4/3] overflow-hidden bg-[#1C1E22]">
              <Image
                src={item.thumbnail || item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </span>
            {item.caption ? <span className="mt-2 block text-sm text-[#B9B5AD]">{item.caption}</span> : null}
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-[#111214]/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
        >
          <button
            ref={closeButton}
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid size-11 place-items-center border border-white/20 bg-[#1C1E22]"
            aria-label="Fechar imagem ampliada"
          >
            <X size={20} aria-hidden />
          </button>
          <figure className="grid max-h-[88vh] max-w-5xl gap-4">
            <div className="relative h-[70vh] w-[min(92vw,1024px)]">
              <Image src={items[active].src} alt={items[active].alt} fill sizes="92vw" className="object-contain" />
            </div>
            {items[active].caption ? (
              <figcaption className="text-center text-sm text-[#B9B5AD]">{items[active].caption}</figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </>
  );
}
