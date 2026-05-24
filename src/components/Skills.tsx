import { useTranslations } from "next-intl";
import {
  Code,
  Layout,
  Server,
  Cloud,
  Database,
  Wrench,
  Briefcase,
} from "lucide-react";

const skillCategories = [
  {
    key: "languages",
    icon: Code,
    items: ["Go", "TypeScript", "JavaScript", "Python"],
  },
  {
    key: "frontend",
    icon: Layout,
    items: ["Next.js", "React", "Vite", "Tailwind CSS", "HTML/CSS"],
  },
  {
    key: "backend",
    icon: Server,
    items: ["Go (net/http, goroutines)", "Node.js", "REST APIs", "WebSocket", "Keycloak"],
  },
  {
    key: "infrastructure",
    icon: Cloud,
    items: ["AWS", "Terraform", "Vercel", "Docker"],
  },
  {
    key: "data",
    icon: Database,
    items: ["PostgreSQL", "Edge Config", "Event-Driven Pipelines"],
  },
  {
    key: "tools",
    icon: Wrench,
    items: ["Git", "GitHub", "CI/CD", "Linux", "Grafana", "Prometheus", "Sentry"],
  },
  {
    key: "domain",
    icon: Briefcase,
    items: [
      "Contact Center Operations",
      "Genesys Cloud",
      "Real-Time Systems",
      "Business Process Optimization",
    ],
  },
] as const;

export function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-12">
          {t("title")}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.key}>
                <h3 className="font-mono text-sm text-accent-500 mb-3 tracking-wide flex items-center gap-1.5">
                  <Icon size={14} className="shrink-0" />
                  {t(category.key)}
                </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
