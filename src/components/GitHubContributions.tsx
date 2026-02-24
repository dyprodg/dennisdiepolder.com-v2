"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function GitHubContributions() {
  const { theme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!mounted) {
    return (
      <div className="w-full h-[120px] rounded-lg bg-zinc-100 dark:bg-zinc-800 animate-pulse" />
    );
  }

  const color = theme === "dark" ? "10b981" : "059669";

  return (
    <div className="w-full overflow-hidden">
      <a
        href="https://github.com/dyprodg"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://ghchart.rshah.org/${color}/dyprodg`}
          alt="GitHub Contribution Chart"
          className="w-full rounded-lg"
        />
      </a>
    </div>
  );
}
