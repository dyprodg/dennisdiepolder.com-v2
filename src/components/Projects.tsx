import { useTranslations } from "next-intl";
import { Github, ExternalLink } from "lucide-react";

const projectMeta = {
  monti: {
    repo: "https://github.com/dyprodg/MONTI",
    live: "https://monti.dennisdiepolder.com",
  },
  swiftcart: {
    repo: "https://github.com/dyprodg/SwiftCard",
    live: "https://swift-card.vercel.app/",
  },
} as const;

function ProjectCard({
  projectKey,
}: {
  projectKey: "monti" | "swiftcart";
}) {
  const t = useTranslations(`Projects.${projectKey}`);
  const meta = projectMeta[projectKey];

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4 mb-6">
        <h3 className="font-mono text-xl font-bold">{t("title")}</h3>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={meta.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="GitHub Repository"
          >
            <Github size={18} />
          </a>
          <a
            href={meta.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="Live Site"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="font-mono text-sm text-accent-500 mb-1">
            {t("problemLabel")}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("problem")}
          </p>
        </div>

        <div>
          <p className="font-mono text-sm text-accent-500 mb-1">
            {t("solutionLabel")}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("solution")}
          </p>
        </div>

        <div>
          <p className="font-mono text-sm text-accent-500 mb-1">
            {t("impactLabel")}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t("impact")}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <p className="font-mono text-xs text-zinc-500 tracking-wide">
          {t("stack")}
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-12">
          {t("title")}
        </h2>
        <div className="grid gap-8">
          <ProjectCard projectKey="monti" />
          <ProjectCard projectKey="swiftcart" />
        </div>
      </div>
    </section>
  );
}
