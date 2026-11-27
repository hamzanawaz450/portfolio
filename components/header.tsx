"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { HiMenu, HiX } from "react-icons/hi";
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setOpen(false);
  };

  const linkClass = (name: SectionName) =>
    clsx(
      "relative px-3 py-2 text-sm font-medium transition-colors",
      activeSection === name
        ? "text-indigo-600 dark:text-indigo-400"
        : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
    );

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-[999] transition-all duration-300",
        scrolled || open
          ? "border-b border-slate-200/80 bg-white/75 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/75"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className={clsx("mx-auto flex max-w-5xl items-center justify-between px-6 transition-all duration-300", scrolled ? "h-14" : "h-16")}>
        <Link
          href="#home"
          onClick={() => go("Home")}
          className="group flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-xs font-bold text-white shadow-md shadow-indigo-500/30 transition group-hover:rotate-6">
            HN
          </span>
          Hamza Nawaz<span className="text-indigo-600 dark:text-indigo-400">.</span>
        </Link>

        <nav className="hidden md:block" aria-label="Main">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.hash}>
                <Link href={link.hash} onClick={() => go(link.name)} className={linkClass(link.name)}>
                  {link.name}
                  {activeSection === link.name && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="text-2xl text-slate-700 dark:text-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 md:hidden" aria-label="Mobile">
          <ul className="mx-auto max-w-5xl px-3 py-2">
            {links.map((link) => (
              <li key={link.hash}>
                <Link href={link.hash} onClick={() => go(link.name)} className={clsx(linkClass(link.name), "block py-3")}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
