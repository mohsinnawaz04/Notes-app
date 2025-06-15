"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relatvie flex size-9 items-center justify-center rounded-md border border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
    >
      <Moon className="absolute h-4 w-4 scale-100 rotate-90 transition-all dark:scale-0 dark:rotate-0" />
      <Sun className="h-4 w-4 scale-0 rotate-0 transition-all dark:scale-100 dark:-rotate-90" />
    </button>
  );
}
