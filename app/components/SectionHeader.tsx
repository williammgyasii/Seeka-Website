"use client";

import { motion } from "framer-motion";

interface Props {
  number: string;
  title: string;
  subtitle: string;
  description?: string;
}

export default function SectionHeader({ number, title, subtitle, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 sm:mb-20"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-16">
        {/* Left: Title + Number */}
        <div className="md:w-1/2 shrink-0">
          <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-text-primary">
            {title}
          </h2>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-[12px] font-mono font-semibold tracking-wider text-accent">
              {number}
            </span>
            <div className="flex h-5 w-5 items-center justify-center rounded bg-accent/10">
              <span className="text-[8px] font-bold text-accent">S</span>
            </div>
          </div>
        </div>

        {/* Right: Subtitle + Description */}
        <div className="md:w-1/2 md:pt-3">
          <p className="text-[16px] sm:text-[18px] font-medium leading-[1.4] text-text-secondary">
            {subtitle}
          </p>
          {description && (
            <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed text-text-tertiary">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 h-px bg-border" />
    </motion.div>
  );
}
