"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { profile } from "@/lib/data";
import Reveal from "./reveal";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section ref={ref} id="contact" className="w-full scroll-mt-16 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading
          number="05 · Contact"
          title="Let's work together"
          subtitle="Open to full-time roles, freelance projects and collaborations. I usually reply within a day."
        />

        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <Reveal><ul className="space-y-4 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <HiOutlineMail className="text-xl text-indigo-600 dark:text-indigo-400" />
                <span className="break-all">{profile.email}</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <BsLinkedin className="text-lg text-indigo-600 dark:text-indigo-400" />
                LinkedIn profile
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <HiOutlineLocationMarker className="text-xl text-indigo-600 dark:text-indigo-400" />
              {profile.location}
            </li>
          </ul></Reveal>

          <Reveal delay={0.1}>
          <form
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-indigo-500/5 dark:border-slate-800 dark:bg-slate-900"
            action={async (formData) => {
              const { error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Message sent — thank you!");
            }}
          >
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Your email
              <input className={`${inputClass} mt-1.5`} name="senderEmail" type="email" required maxLength={500} placeholder="you@company.com" />
            </label>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
              <textarea className={`${inputClass} mt-1.5 h-40 resize-none`} name="message" required maxLength={5000} placeholder="Tell me about your project or role…" />
            </label>
            <div>
              <SubmitBtn />
            </div>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
