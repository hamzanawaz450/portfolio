"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import Reveal from "./reveal";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className="w-full scroll-mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading
          number="02 · Projects"
          title="Selected work"
          subtitle="A few things I've designed, built and shipped — from AI chatbots to full web platforms."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projectsData.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1} className="h-full">
              <Project {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
