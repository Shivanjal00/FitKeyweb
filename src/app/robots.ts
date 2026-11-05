// src/app/robots.ts
import { MetadataRoute } from "next";

// The admin page is deliberately NOT listed here: robots.txt is public, so
// naming it would advertise the secret URL. It is kept out of search results
// by the noindex meta tag in app/fk-vault-72q/layout.tsx instead.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://gymbym.com/sitemap.xml",
  };
}
