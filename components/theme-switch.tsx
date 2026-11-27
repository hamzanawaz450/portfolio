"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 z-[999] flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:scale-110 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
