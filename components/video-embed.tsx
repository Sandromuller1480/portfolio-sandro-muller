"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import type { MediaItem } from "@/lib/types";

export function VideoEmbed({ item }: { item: MediaItem }) {
  const [loaded, setLoaded] = useState(false);

  if (!item.src) {
    return <p className="surface rounded-sm p-5 text-[#B9B5AD]">Vídeo indisponível no momento.</p>;
  }

  return (
    <div className="surface overflow-hidden rounded-sm">
      {loaded ? (
        <iframe
          src={item.src}
          title={item.caption || "Vídeo do projeto"}
          className="aspect-video w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="relative block aspect-video w-full text-left" onClick={() => setLoaded(true)}>
          <Image
            src={item.thumbnail || "/placeholders/placeholder-obra.svg"}
            alt={item.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <span className="absolute inset-0 grid place-items-center bg-black/28">
            <span className="grid size-16 place-items-center rounded-full bg-[#C6A66B] text-[#111214]">
              <Play size={26} aria-hidden />
            </span>
          </span>
          <span className="sr-only">Carregar vídeo</span>
        </button>
      )}
      {item.caption ? <p className="p-4 text-sm text-[#B9B5AD]">{item.caption}</p> : null}
    </div>
  );
}
