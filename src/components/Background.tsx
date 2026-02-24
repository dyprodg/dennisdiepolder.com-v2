import { useTranslations } from "next-intl";

export function Background() {
  const t = useTranslations("Background");

  return (
    <section id="background" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-8">
          {t("title")}
        </h2>
        <div className="max-w-3xl space-y-6">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
            {t("p1")}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
            {t("p2")}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
            {t("p3")}
          </p>
        </div>
      </div>
    </section>
  );
}
