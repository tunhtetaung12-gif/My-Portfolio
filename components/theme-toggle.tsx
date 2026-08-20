"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 opacity-60" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
      className="relative flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer shadow-sm"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label="Toggle theme"
    >
      <Sun className={`w-4 h-4 text-amber-500 transition-transform duration-300 ${isDark ? "rotate-90 scale-0 absolute" : "rotate-0 scale-100"}`} />
      <Moon className={`w-4 h-4 text-sky-400 transition-transform duration-300 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0 absolute"}`} />
    </button>
  );
}
