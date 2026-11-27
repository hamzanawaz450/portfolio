import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Hamza Nawaz. All rights reserved.</p>
        <p>Built with Next.js, TypeScript &amp; Tailwind CSS · Hosted on Vercel</p>
      </div>
    </footer>
  );
}
