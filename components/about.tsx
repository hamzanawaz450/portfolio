"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { quickFacts } from "@/lib/data";
import Reveal from "./reveal";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <section ref={ref} id="about" className="w-full scroll-mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading number="01 · About" title="About me" />

        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-[1.05rem]">
            <p>
              I&apos;m a <strong className="font-semibold text-slate-900 dark:text-white">full-stack developer from Pakistan</strong> with
              a degree in Computer Science. After several internships in web development, I now build
              production web applications and AI chatbots at Najoomi Technologies — from the interface
              to the database.
            </p>
            <p>
              My core stack is <strong className="font-semibold text-slate-900 dark:text-white">React, Next.js, TypeScript and Node.js</strong>,
              with MongoDB, PostgreSQL, Flask and Pinecone for data and retrieval. I care about clean code,
              fast interfaces and solving real problems for real users.
            </p>
            <p>
              I&apos;m currently studying for an <strong className="font-semibold text-slate-900 dark:text-white">MSc in Data Science at the University of Milano-Bicocca</strong> in
              Milan, to combine software engineering with statistics and machine learning and build
              smarter, data-driven products.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
          <dl className="h-fit divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">{fact.value}</dd>
              </div>
            ))}
          </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
