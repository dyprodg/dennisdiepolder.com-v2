import Image from "next/image";
import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";
import { GitHubContributions } from "./GitHubContributions";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-[90vh] flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 mb-12">
          <div className="flex-1">
            <p className="font-mono text-accent-500 text-sm mb-4 tracking-wide">
              {t("title")}
            </p>
            <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {t("name")}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-4 leading-relaxed">
              {t("description")}
            </p>
            <p className="text-base text-zinc-500 dark:text-zinc-500 mb-8">
              {t("cta")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/dyprodg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dennis-diepolder-2a5a98276/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="mailto:info@dennisdiepolder.com"
                className="flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <Image
              src="/dennisdiepolder.jpeg"
              alt="Dennis Diepolder"
              width={220}
              height={220}
              priority
              className="rounded-2xl object-cover w-40 h-40 md:w-56 md:h-56 border-2 border-zinc-200 dark:border-zinc-800"
            />
          </div>
        </div>

        <GitHubContributions />
      </div>
    </section>
  );
}
