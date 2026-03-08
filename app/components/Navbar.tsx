"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white text-sm font-bold">
            S
          </div>
          <span className="text-[15px] font-semibold text-text-primary tracking-tight" style={{ fontFamily: "var(--font-poppins, Poppins), sans-serif" }}>
            Seeka
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-border bg-bg-elevated/80 px-1.5 py-1.5 backdrop-blur-xl md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://app.seeka.tech/" className="text-[13px] font-medium text-text-secondary transition-colors hover:text-text-primary">
            Log in
          </a>
          <a href="https://app.seeka.tech/" className="rounded-full bg-text-primary px-4 py-2 text-[13px] font-semibold text-bg transition-opacity hover:opacity-90">
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-text-primary md:hidden"
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
            <path
              d={open ? "M4.5 4.5L13.5 13.5M4.5 13.5L13.5 4.5" : "M2 5h14M2 9h14M2 13h14"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-bg-elevated/95 px-4 sm:px-6 pb-6 pt-2 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[15px] font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <a href="https://app.seeka.tech/" className="rounded-xl bg-accent py-2.5 text-center text-[14px] font-semibold text-white">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
