"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

type SectionName = "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact";

interface LinkType {
  name: SectionName;
  hash: string;
}

export default function Header(): React.JSX.Element {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (linkName: SectionName): void => {
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
    setIsMobileMenuOpen(false); // Close mobile menu when link is clicked
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="bg-[#07081F] fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-[1000] flex flex-col items-center justify-center w-8 h-8 sm:hidden"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <motion.span
          className="block w-6 h-0.5 bg-[#BE3389] mb-1"
          animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-[#BE3389] mb-1"
          animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-6 h-0.5 bg-[#BE3389]"
          animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="text-[#BE3389] flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link: LinkType) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => handleLinkClick(link.name)}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>): void => {
                  e.currentTarget.style.border = 'none';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>): void => {
                  e.currentTarget.style.border = '';
                }}
              >
                <span
                  className={clsx(
                    "relative",
                    {
                      "text-[#ff0aa1] dark:text-gray-200": activeSection === link.name,
                    }
                  )}
                  style={{
                    textShadow: activeSection === link.name
                      ? '0 0 5px #ff0aa1, 0 0 10px #ff0aa1, 0 0 20px #ff0aa1, 0 0 30px #E31877, 0 0 40px #E31877, 0 0 50px #E31877, 0 0 75px #E31877'
                      : 'none',
                  }}
                >
                  {link.name}
                </span>

                {link.name === activeSection && (
                  <motion.span
                    className="text-[#ff0aa1] rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="fixed top-0 left-0 w-full h-full bg-[#07081F] bg-opacity-95 backdrop-blur-md z-[998] sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center h-full">
              <motion.ul
                className="text-[#BE3389] flex flex-col items-center space-y-8 text-xl font-medium"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {links.map((link: LinkType, index: number) => (
                  <motion.li
                    key={link.hash}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      className={clsx(
                        "block px-6 py-3 transition-colors duration-200",
                        {
                          "text-[#ff0aa1]": activeSection === link.name,
                          "text-[#BE3389] hover:text-[#ff0aa1]": activeSection !== link.name,
                        }
                      )}
                      href={link.hash}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      <span
                        className="relative"
                        style={{
                          textShadow: activeSection === link.name
                            ? '0 0 5px #ff0aa1, 0 0 10px #ff0aa1, 0 0 20px #ff0aa1'
                            : 'none',
                        }}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}