import React from "react";
import Reveal from "./reveal";

type SectionHeadingProps = {
  number: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14">
      <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
        <span className="h-px w-8 bg-current" />
        {number}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-[2.6rem] sm:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
