import type { MetadataRoute } from "next";

const siteUrl = "https://dennisdiepolder.com";

const blogSlugs = [
  "why-ai-should-stay-a-tool",
  "why-i-built-monti",
  "swiftcart-lessons",
  "operations-to-engineering",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "de"];

  const pages = locales.flatMap((locale) => [
    {
      url: `${siteUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...blogSlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]);

  return pages;
}
