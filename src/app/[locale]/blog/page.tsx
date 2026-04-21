import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const siteUrl = "https://dennisdiepolder.com";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Blog" });
  const isDe = locale === "de";

  const title = t("title");
  const description = isDe
    ? "Artikel über Software Engineering, Echtzeit-Systeme, E-Commerce-Architektur und den Weg von Operations zu Engineering."
    : "Articles about software engineering, real-time systems, e-commerce architecture, and the transition from operations to engineering.";

  const canonical = `${siteUrl}/${locale}/blog`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en/blog`,
        de: `${siteUrl}/de/blog`,
        "x-default": `${siteUrl}/en/blog`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: "Dennis Diepolder",
      locale: isDe ? "de_CH" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const blogSlugs = [
  "the-generalist-advantage",
  "why-ai-should-stay-a-tool",
  "why-i-built-monti",
  "swiftcart-lessons",
  "operations-to-engineering",
] as const;

export default function BlogPage() {
  const t = useTranslations("Blog");

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          {t("backToHome")}
        </Link>

        <h1 className="font-mono text-3xl sm:text-4xl font-bold mb-12">
          {t("title")}
        </h1>

        <div className="grid gap-6">
          {blogSlugs.map((slug) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 backdrop-blur-sm bg-white/40 dark:bg-zinc-900/40 hover:border-accent-500 dark:hover:border-accent-500 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-zinc-500 mb-2">
                    {t(`posts.${slug}.date`)}
                  </p>
                  <h2 className="font-mono text-lg font-semibold mb-2 group-hover:text-accent-500 transition-colors">
                    {t(`posts.${slug}.title`)}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {t(`posts.${slug}.excerpt`)}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="mt-1 shrink-0 text-zinc-400 group-hover:text-accent-500 transition-colors"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
