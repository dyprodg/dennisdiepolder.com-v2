import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const siteUrl = "https://dennisdiepolder.com";

const validSlugs = [
  "ai-bubble-and-the-valve",
  "the-generalist-advantage",
  "why-ai-should-stay-a-tool",
  "why-i-built-monti",
  "swiftcart-lessons",
  "operations-to-engineering",
] as const;

type Slug = (typeof validSlugs)[number];

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await props.params;

  if (!validSlugs.includes(slug as Slug)) {
    return {
      title: "Post Not Found",
      robots: { index: false, follow: false },
    };
  }

  const t = await getTranslations({ locale, namespace: "Blog" });
  const title = t(`posts.${slug}.title`);
  const description = t(`posts.${slug}.excerpt`);
  const date = t(`posts.${slug}.date`);
  const canonical = `${siteUrl}/${locale}/blog/${slug}`;
  const ogImage = `${siteUrl}/dennisdiepolder.jpeg`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en/blog/${slug}`,
        de: `${siteUrl}/de/blog/${slug}`,
        "x-default": `${siteUrl}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      siteName: "Dennis Diepolder",
      locale: locale === "de" ? "de_CH" : "en_US",
      publishedTime: date,
      authors: ["Dennis Diepolder"],
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await props.params;

  if (!validSlugs.includes(slug as Slug)) {
    notFound();
  }

  return <BlogPostContent slug={slug as Slug} locale={locale} />;
}

function BlogPostContent({ slug, locale }: { slug: Slug; locale: string }) {
  const t = useTranslations("Blog");

  const title = t(`posts.${slug}.title`);
  const date = t(`posts.${slug}.date`);
  const excerpt = t(`posts.${slug}.excerpt`);
  const content = t(`posts.${slug}.content`);
  const paragraphs = content.split("\n\n");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    datePublished: date,
    dateModified: date,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: "Dennis Diepolder",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Dennis Diepolder",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/${locale}/blog/${slug}`,
    },
    image: `${siteUrl}/dennisdiepolder.jpeg`,
    url: `${siteUrl}/${locale}/blog/${slug}`,
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          {t("backToBlog")}
        </Link>

        <header className="mb-12">
          <p className="font-mono text-sm text-zinc-500 mb-3">{date}</p>
          <h1 className="font-mono text-2xl sm:text-3xl font-bold leading-tight">
            {title}
          </h1>
        </header>

        <div className="space-y-6">
          {paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
