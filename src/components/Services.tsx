import { useTranslations } from "next-intl";
import { Check, Mail } from "lucide-react";

const tiers = [
  {
    key: "starter",
    featured: false,
    features: ["f1", "f2", "f3", "f4", "f5"],
  },
  {
    key: "business",
    featured: true,
    features: ["f1", "f2", "f3", "f4", "f5", "f6"],
  },
  {
    key: "platform",
    featured: false,
    features: ["f1", "f2", "f3", "f4", "f5", "f6"],
  },
] as const;

export function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-3">
          {t("title")}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 max-w-2xl">
          {t("subtitle")}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.key}
              className={`relative flex flex-col rounded-lg p-6 sm:p-8 backdrop-blur-sm transition-colors ${
                tier.featured
                  ? "border-2 border-accent-500 bg-white/60 dark:bg-zinc-900/60"
                  : "border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 hover:border-accent-500/60 dark:hover:border-accent-500/60"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-6 px-2 py-0.5 bg-accent-500 text-white text-xs font-mono rounded">
                  {t("popular")}
                </div>
              )}

              <p className="font-mono text-sm text-accent-500 mb-2 tracking-wide">
                {t(`tiers.${tier.key}.name`)}
              </p>
              <div className="mb-4">
                <span className="font-mono text-xs text-zinc-500">
                  {t("from")}
                </span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-mono text-3xl font-bold">
                    {t(`tiers.${tier.key}.price`)}
                  </span>
                  <span className="font-mono text-sm text-zinc-500">
                    {t("currency")}
                  </span>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                {t(`tiers.${tier.key}.description`)}
              </p>

              <ul className="space-y-2 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent-500"
                    />
                    <span>{t(`tiers.${tier.key}.features.${f}`)}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:info@dennisdiepolder.com?subject=Inquiry%20-%20{tier}"
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  tier.featured
                    ? "bg-accent-500 text-white hover:bg-accent-600"
                    : "border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <Mail size={14} />
                {t("cta")}
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-zinc-500 text-center mt-8">
          {t("disclaimer")}
        </p>
      </div>
    </section>
  );
}
