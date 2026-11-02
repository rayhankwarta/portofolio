"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useMounted } from "@/hooks/useMounted";

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className="w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-800"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap"}
      title={isDark ? "Ganti ke tema terang" : "Ganti ke tema gelap"}
      className="relative flex items-center justify-center w-8 h-8 rounded-full border border-neutral-300 dark:border-neutral-700/80 hover:border-neutral-900 dark:hover:border-neutral-300 transition-colors bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xs focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer text-neutral-700 dark:text-neutral-300 shadow-2xs shrink-0"
    >
      {isDark ? (
        <Moon className="w-3.5 h-3.5 transition-transform hover:rotate-12" />
      ) : (
        <Sun className="w-3.5 h-3.5 transition-transform hover:rotate-45" />
      )}
    </button>
  );
}
