import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const t = useTranslations("Contact");
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4">
          {t("title")}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-2xl">
          {t("description")}
        </p>

        <div className="flex items-center gap-4 mb-16">
          <a
            href="mailto:info@dennisdiepolder.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-500 text-white text-sm font-medium hover:bg-accent-600 transition-colors"
          >
            <Mail size={16} />
            {t("emailMe")}
          </a>
          <a
            href="https://github.com/dyprodg"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/dennis-diepolder-2a5a98276/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          {t("copyright", { year: year.toString() })}
        </p>
      </div>
    </section>
  );
}
