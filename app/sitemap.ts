import type { MetadataRoute } from "next";
import { getVisibleProjects } from "@/content/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/portfolio", "/sobre", "/curriculo", "/certificados", "/contato", "/cartao", "/privacidade"];
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getVisibleProjects().map((project) => ({
    url: `${siteConfig.siteUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
