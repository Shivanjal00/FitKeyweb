// src/app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gymbym",
    short_name: "Gymbym",
    description: "One membership. Multiple gyms across Delhi.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F4EF",
    theme_color: "#111315",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
