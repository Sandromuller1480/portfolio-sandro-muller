import { getVisibleProjects } from "@/content/projects";

export function getProjectBySlug(slug: string) {
  return getVisibleProjects().find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3) {
  const current = getProjectBySlug(slug);
  if (!current) return [];

  return getVisibleProjects()
    .filter((project) => project.slug !== slug)
    .map((project) => ({
      project,
      score: project.categories.filter((category) => current.categories.includes(category)).length,
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.project);
}
