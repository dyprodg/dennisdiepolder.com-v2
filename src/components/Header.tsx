"use client";

import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { key: "whatIDo", href: "#what-i-do" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "blog", href: "#blog" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const t = useTranslations("Header");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            return;
          }
        }
        setActiveSection(null);
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className={`font-mono font-bold text-lg tracking-tight transition-colors ${
            activeSection === null ? "text-accent-500" : "hover:text-accent-500"
          }`}
        >
          dd.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-accent-500"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {t(item.key)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-6 py-4">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${
                  isActive
                    ? "text-accent-500"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {t(item.key)}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
