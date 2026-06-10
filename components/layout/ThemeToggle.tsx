"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Basculer le thème clair/sombre"
      onClick={toggleTheme}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300/70 bg-white/80 text-slate-900 shadow-sm shadow-slate-900/5 transition duration-200 hover:-translate-y-0.5 hover:border-sky-400/80 hover:text-sky-500 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-100 dark:shadow-slate-900/30"
    >
      <span className="sr-only">Basculer le thème</span>
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

