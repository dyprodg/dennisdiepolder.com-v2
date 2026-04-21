import type { MetadataRoute } from "next";

const siteUrl = "https://dennisdiepolder.com";

const blogSlugs = [
  "the-generalist-advantage",
  "why-ai-should-stay-a-tool",
  "why-i-built-monti",
  "swiftcart-lessons",
  "operations-to-engineering",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "de"] as const;
  const now = new Date();

  const home = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: {
        en: `${siteUrl}/en`,
        de: `${siteUrl}/de`,
        "x-default": `${siteUrl}/en`,
      },
    },
  }));

  const blogIndex = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/blog`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${siteUrl}/en/blog`,
        de: `${siteUrl}/de/blog`,
        "x-default": `${siteUrl}/en/blog`,
      },
    },
  }));

  const posts = locales.flatMap((locale) =>
    blogSlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${siteUrl}/en/blog/${slug}`,
          de: `${siteUrl}/de/blog/${slug}`,
          "x-default": `${siteUrl}/en/blog/${slug}`,
        },
      },
    })),
  );

  return [...home, ...blogIndex, ...posts];
}
