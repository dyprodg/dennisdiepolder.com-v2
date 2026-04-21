import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Home, BookOpen } from "lucide-react";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-xl w-full text-center">
        <p className="font-mono text-accent-500 text-sm mb-4 tracking-wide">
          404
        </p>
        <h1 className="font-mono text-4xl sm:text-5xl font-bold mb-6">
          {t("title")}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          {t("description")}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-500 text-white text-sm font-medium hover:bg-accent-600 transition-colors"
          >
            <Home size={16} />
            {t("goHome")}
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <BookOpen size={16} />
            {t("goBlog")}
          </Link>
        </div>
      </div>
    </div>
  );
}
