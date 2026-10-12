"use client";

import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";

export function ShareActions({ title, text, url }: { title: string; text: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  const share = async () => {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }
    await copy();
  };

  return (
    <div className="grid gap-3">
      <button
        type="button"
        onClick={share}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-[#C6A66B] px-4 text-sm font-medium text-[#111214]"
      >
        <Share2 size={18} aria-hidden />
        Compartilhar
      </button>
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-white/15 px-4 text-sm text-[#F4F0E8]"
        aria-live="polite"
      >
        {copied ? <Check size={18} aria-hidden /> : <Copy size={18} aria-hidden />}
        {copied ? "Link copiado" : "Copiar link"}
      </button>
    </div>
  );
}
