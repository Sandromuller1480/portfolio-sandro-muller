"use client";

import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { categories } from "@/content/categories";

export function PortfolioFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const selectedCategory = params.get("categoria") || "";
  const query = params.get("busca") || "";

  const hasFilters = selectedCategory || query;

  const updateParams = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    router.replace(`${pathname}${next.toString() ? `?${next.toString()}` : ""}`, { scroll: false });
  };

  const resetHref = useMemo(() => pathname, [pathname]);

  return (
    <div className="surface rounded-sm p-4">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
        <label className="relative block">
          <span className="sr-only">Buscar por título ou palavra-chave</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#B9B5AD]" size={18} aria-hidden />
          <input
            value={query}
            onChange={(event) => updateParams("busca", event.target.value)}
            placeholder="Buscar por título ou palavra-chave"
            className="min-h-11 w-full rounded-sm border border-white/10 bg-[#111214] py-3 pl-11 pr-4 text-[#F4F0E8] placeholder:text-[#B9B5AD]"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => updateParams("categoria", "")}
            className={`min-h-11 rounded-sm border px-4 text-sm ${
              !selectedCategory ? "border-[#C6A66B] text-[#C6A66B]" : "border-white/10 text-[#B9B5AD]"
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => updateParams("categoria", category)}
              className={`min-h-11 rounded-sm border px-4 text-sm ${
                selectedCategory === category
                  ? "border-[#C6A66B] text-[#C6A66B]"
                  : "border-white/10 text-[#B9B5AD] hover:text-[#F4F0E8]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {hasFilters ? (
        <a href={resetHref} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-[#C6A66B]">
          <X size={16} aria-hidden />
          Limpar filtros
        </a>
      ) : null}
    </div>
  );
}
