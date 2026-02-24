import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

const blogSlugs = [
  "why-ai-should-stay-a-tool",
  "why-i-built-monti",
  "swiftcart-lessons",
  "operations-to-engineering",
] as const;

export function BlogPreview() {
  const t = useTranslations("Blog");

  return (
    <section id="blog" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-12">
          {t("title")}
        </h2>
        <div className="grid gap-6">
          {blogSlugs.map((slug) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group block border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-accent-500 dark:hover:border-accent-500 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-zinc-500 mb-2">
                    {t(`posts.${slug}.date`)}
                  </p>
                  <h3 className="font-mono text-lg font-semibold mb-2 group-hover:text-accent-500 transition-colors">
                    {t(`posts.${slug}.title`)}
                  </h3>
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
    </section>
  );
}
