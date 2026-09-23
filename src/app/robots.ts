// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/fk-vault-72q", "/api/"],
    },
    sitemap: "https://gymbym.com/sitemap.xml",
  };
}
