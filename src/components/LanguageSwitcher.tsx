"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "de" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="px-2 py-1 rounded-md font-mono text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
      aria-label="Switch language"
    >
      {locale === "en" ? "DE" : "EN"}
    </button>
  );
}
