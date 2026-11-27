"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "./reveal";
import { HiOutlineDesktopComputer, HiOutlineServer, HiOutlineDatabase, HiOutlineChartBar } from "react-icons/hi";

const icons = [HiOutlineDesktopComputer, HiOutlineServer, HiOutlineDatabase, HiOutlineChartBar];

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section ref={ref} id="skills" className="w-full scroll-mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading number="03 · Skills" title="Skills & tools" />
        <div className="grid gap-6 sm:grid-cols-2">
          {skillsData.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
            <Reveal key={group.category} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15 text-xl text-indigo-600 transition group-hover:scale-110 dark:text-indigo-400">
                  <Icon />
                </span>
                <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                  {group.category}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:text-indigo-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
