import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  const image = project.cover?.src || "/placeholders/placeholder-obra.svg";

  return (
    <article className="group surface overflow-hidden rounded-sm">
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#1C1E22]">
          <Image
            src={image}
            alt={project.cover?.alt || `Capa do projeto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="grid gap-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#C6A66B]">
                {project.categories.join(" / ")}
              </p>
              <h3 className="mt-2 font-editorial text-3xl leading-tight text-[#F4F0E8]">
                {project.title}
              </h3>
            </div>
            <ArrowUpRight className="mt-1 shrink-0 text-[#C6A66B]" size={20} aria-hidden />
          </div>
          <p className="leading-7 text-[#B9B5AD]">{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}
