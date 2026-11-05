// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { getGyms } from "@/lib/data/gyms";
import { getLibraries } from "@/lib/data/libraries";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://gymbym.com";
  const staticRoutes = [
    "",
    "/gyms",
    "/libraries",
    "/pricing",
    "/partner",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route.length > 0 && ["/privacy", "/terms", "/cookies"].includes(route) ? 0.3 : 0.8,
  }));

  // Every listing page, so Google can index them. Never fail the sitemap.
  try {
    const [gyms, libraries] = await Promise.all([getGyms(), getLibraries()]);
    for (const g of gyms) {
      entries.push({
        url: `${base}/gyms/${g.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
    for (const l of libraries) {
      entries.push({
        url: `${base}/libraries/${l.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  } catch (err) {
    console.error("sitemap: could not load listings", err);
  }

  return entries;
}
