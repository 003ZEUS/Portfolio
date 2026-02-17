"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const GITHUB_URL = "https://github.com/003ZEUS";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-neon-purple/20 shadow-neon-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold text-white tracking-tight hover:text-neon-purple-bright transition-colors duration-300"
          >
            Sheryar Javed
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-neon-purple-bright transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <a
              href="/Sheryar-Javed-FlowCV-Resume-20260217.pdf"
              download
              className="px-4 py-2 text-sm font-semibold text-neon-purple-bright border border-neon-purple/40 rounded-lg hover:bg-neon-purple/10 hover:shadow-neon-sm transition-all duration-300"
            >
              Resume
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-gray-300 hover:text-neon-purple-bright transition-colors duration-300"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.75 5.7.75 12.13c0 5.14 3.33 9.5 7.94 11.04.58.11.79-.26.79-.57 0-.28-.01-1.02-.02-2-3.23.72-3.91-1.6-3.91-1.6-.53-1.38-1.3-1.75-1.3-1.75-1.06-.75.08-.74.08-.74 1.17.08 1.78 1.23 1.78 1.23 1.04 1.82 2.73 1.29 3.4.99.1-.77.41-1.29.74-1.59-2.58-.3-5.29-1.32-5.29-5.86 0-1.3.45-2.36 1.19-3.2-.12-.3-.52-1.52.11-3.16 0 0 .97-.32 3.18 1.22a10.7 10.7 0 0 1 2.9-.4c.98 0 1.97.13 2.9.4 2.21-1.54 3.18-1.22 3.18-1.22.63 1.64.23 2.86.11 3.16.74.84 1.19 1.9 1.19 3.2 0 4.55-2.71 5.56-5.3 5.86.42.37.79 1.1.79 2.22 0 1.6-.02 2.9-.02 3.3 0 .31.21.68.8.56 4.61-1.54 7.94-5.9 7.94-11.04C23.25 5.7 18.27.5 12 .5z" />
              </svg>
            </a>
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const GITHUB_URL = "https://github.com/003ZEUS";

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-300 hover:text-neon-purple-bright transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-neon-purple/20 p-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-neon-purple-bright transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/Sheryar_Javed_Resume.txt"
                download
                onClick={() => setOpen(false)}
                className="text-neon-purple-bright font-semibold py-2"
              >
                Download Resume
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-neon-purple-bright transition-colors py-2"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
