import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.SITE_URL || "https://robertauguste.dev";
  return [
    { url: origin, priority: 1 },
    { url: `${origin}/projects/jobops-ai`, priority: 0.8 },
  ];
}
