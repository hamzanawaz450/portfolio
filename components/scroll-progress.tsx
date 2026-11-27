"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[1000] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
      style={{ scaleX }}
    />
  );
}
