"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import Reveal from "./reveal";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.4);

  return (
    <section ref={ref} id="experience" className="w-full scroll-mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading number="04 · Experience" title="Experience & education" />
        <ol className="relative space-y-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-indigo-500 before:via-violet-400/60 before:to-transparent">
          {experiencesData.map((item, i) => (
            <li key={`${item.title}-${item.organization}`} className="relative pl-10">
              <span className="absolute -left-[1rem] top-5 flex h-8 w-8 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-600 shadow-sm dark:border-indigo-900 dark:bg-slate-900 dark:text-indigo-400">
                {item.type === "education" ? <LuGraduationCap /> : <CgWorkAlt />}
              </span>
              <Reveal delay={i * 0.05}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50">
                  <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-6">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                        {item.organization} <span className="text-slate-400">·</span>{" "}
                        <span className="text-slate-500 dark:text-slate-400">{item.location}</span>
                      </p>
                    </div>
                    <p className="h-fit w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300 sm:justify-self-end">
                      {item.date}
                    </p>
                  </div>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
