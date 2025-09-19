import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/mystable`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/own`, lastModified: now, changeFrequency: "monthly", priority: 0.5 }
  ];
}