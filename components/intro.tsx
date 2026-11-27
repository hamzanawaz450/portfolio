"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload, HiOutlineLocationMarker, HiOutlineAcademicCap } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { profile, skillsData } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const marqueeItems = skillsData.flatMap((g) => g.items);

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % profile.rotatingWords.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} id="home" className="relative w-full scroll-mt-24 overflow-hidden">
      {/* Background: grid + soft glows */}
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-400/25 via-violet-400/20 to-cyan-300/20 blur-3xl dark:from-indigo-600/25 dark:via-violet-600/20 dark:to-cyan-500/10" />

      <div className="mx-auto grid max-w-5xl items-center gap-14 px-6 pb-16 pt-20 sm:pt-28 md:grid-cols-[1fr_auto]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for full-time &amp; freelance work
            </span>
          </motion.div>

          <motion.p variants={item} className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Full-Stack Developer · MSc Data Science
          </motion.p>

          <motion.h1 variants={item} className="mt-3 font-display text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl">
            Hamza <span className="text-gradient">Nawaz</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700 dark:text-slate-200 sm:text-2xl">
            I build fast, reliable{" "}
            <span className="relative inline-flex min-w-[12ch] overflow-hidden align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={profile.rotatingWords[wordIndex]}
                  className="font-semibold text-indigo-600 dark:text-indigo-400"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {profile.rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br className="hidden sm:block" /> — end to end.
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Full-stack developer from Pakistan, now studying Data Science at the University of
            Milano-Bicocca to build smarter, data-driven software.
          </motion.p>

          <motion.ul variants={item} className="mt-6 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:gap-6">
            <li className="flex items-center gap-2">
              <HiOutlineLocationMarker className="text-base text-indigo-600 dark:text-indigo-400" />
              {profile.location}
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineAcademicCap className="text-base text-indigo-600 dark:text-indigo-400" />
              University of Milano-Bicocca
            </li>
          </motion.ul>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Get in touch
              <BsArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <a
              className="group inline-flex h-12 items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-6 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
              href={profile.cv}
              download
            >
              Download CV
              <HiDownload className="transition group-hover:translate-y-0.5" />
            </a>

            <a
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 bg-white/80 text-lg text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-indigo-400"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hamza Nawaz on LinkedIn"
            >
              <BsLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto md:mx-0"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="animate-float">
            <div className="relative overflow-hidden rounded-[1.75rem] p-[3px] shadow-2xl shadow-indigo-500/20">
              <div className="ring-conic absolute inset-[-60%] animate-spin-slow" />
              <Image
                src="/Profile Picture.jpeg"
                alt="Hamza Nawaz, full-stack developer"
                width={300}
                height={300}
                quality={95}
                priority
                className="relative h-60 w-60 rounded-[1.6rem] object-cover sm:h-72 sm:w-72"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-5xl px-6">
        <motion.dl
          className="grid grid-cols-1 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 backdrop-blur dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="px-6 py-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-bold text-slate-900 dark:text-white">{s.value}</dd>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Tech marquee */}
      <div className="mask-fade-x group mt-14 overflow-hidden border-y border-slate-200 py-5 dark:border-slate-800">
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t}
              <span className="h-1 w-1 rounded-full bg-indigo-400/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
