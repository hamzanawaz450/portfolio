"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ProjectData } from "@/lib/data";

export default function Project({ title, description, tags, imageUrl }: ProjectData) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
    >
      {/* Spotlight that follows the cursor */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(99,102,241,0.12), transparent 45%)",
        }}
      />
      {imageUrl && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
          <Image
            src={imageUrl}
            alt={`${title} – project by Hamza Nawaz`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            quality={90}
            className="object-cover object-top transition duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 transition group-hover:opacity-100" />
        </div>
      )}
      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
