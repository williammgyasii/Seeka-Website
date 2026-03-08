"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const logos = [
  "LinkedIn", "Indeed", "Upwork", "Toptal", "Glassdoor",
  "AngelList", "Fiverr", "Remote.co", "WeWorkRemotely", "Wellfound",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-0 sm:pt-36">
      <div className="orb-container">
        <div className="orb-blob orb-blob-1" />
        <div className="orb-blob orb-blob-2" />
        <div className="orb-blob orb-blob-3" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-card/80 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="text-[12px] sm:text-[13px] font-medium text-text-secondary">
            Neural Network{" "}
            <span className="text-text-tertiary mx-1">//</span>{" "}
            <span className="text-accent font-semibold">Latest Release</span>
          </span>
        </motion.div>

        {/* Split headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <h1 className="max-w-4xl text-[clamp(2.5rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-text-primary">
            You discover,
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              we automate.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-6 max-w-xl text-[15px] sm:text-[17px] leading-relaxed text-text-secondary"
        >
          — The smarter way to find, qualify, and win every opportunity.
        </motion.p>

        {/* CTA + Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://app.seeka.tech/"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(110,110,255,0.3)] transition-all hover:shadow-[0_0_40px_rgba(110,110,255,0.45)] hover:brightness-110"
            >
              Get Started
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="flex w-full sm:w-auto items-center justify-center rounded-full border border-border px-7 py-3.5 text-[15px] font-medium text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
            >
              See Seeka in Action
            </a>
          </div>

          {/* Metric cards */}
          <div className="flex flex-wrap gap-3">
            <div className="rounded-xl border border-border bg-bg-card/80 backdrop-blur-sm px-4 py-3">
              <AnimatedCounter
                target={12400}
                suffix="+"
                duration={2}
                className="text-[18px] sm:text-[20px] font-bold tracking-tight text-text-primary"
              />
              <p className="text-[10px] font-medium text-text-tertiary mt-0.5">Opportunities Found</p>
            </div>
            <div className="rounded-xl border border-border bg-bg-card/80 backdrop-blur-sm px-4 py-3">
              <div className="flex items-baseline gap-0.5">
                <span className="text-green text-[11px] font-semibold">+</span>
                <AnimatedCounter
                  target={94}
                  suffix="%"
                  duration={2.3}
                  className="text-[18px] sm:text-[20px] font-bold tracking-tight text-text-primary"
                />
              </div>
              <p className="text-[10px] font-medium text-text-tertiary mt-0.5">Match Accuracy</p>
            </div>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-[13px] sm:text-[14px] text-text-tertiary max-w-lg"
        >
          We run your pipeline so you can focus on winning great opportunities.
        </motion.p>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-14 sm:mt-20 max-w-5xl"
        >
          <div className="gradient-border-wrap rounded-2xl">
            <div className="rounded-2xl bg-bg-card p-1 sm:p-1.5">
              <div className="rounded-xl bg-bg-inner p-4 sm:p-6">
                {/* Window chrome */}
                <div className="mb-4 sm:mb-5 flex items-center gap-2">
                  <div className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]" />
                  <div className="h-[10px] w-[10px] rounded-full bg-[#febc2e]" />
                  <div className="h-[10px] w-[10px] rounded-full bg-[#28c840]" />
                  <div className="ml-3 h-6 flex-1 rounded-lg bg-[rgba(255,255,255,0.04)] flex items-center px-3">
                    <span className="text-[10px] text-text-tertiary">app.seeka.io/dashboard</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
                  {[
                    { label: "Discovered", value: "2,847", sub: "+124 today", color: "bg-accent", tc: "text-accent", dim: "bg-accent-dim" },
                    { label: "Qualified", value: "486", sub: "17% match", color: "bg-green", tc: "text-green", dim: "bg-green-dim" },
                    { label: "Outreach", value: "124", sub: "68% opens", color: "bg-amber", tc: "text-amber", dim: "bg-amber-dim" },
                    { label: "Pipeline", value: "$284k", sub: "38 active", color: "bg-rose", tc: "text-rose", dim: "bg-rose-dim" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-[rgba(255,255,255,0.02)] p-3 sm:p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`h-2.5 w-2.5 rounded-full ${s.color}`} />
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-text-tertiary">
                          {s.label}
                        </span>
                      </div>
                      <p className="text-lg sm:text-2xl font-bold text-text-primary tracking-tight">
                        {s.value}
                      </p>
                      <span className={`mt-1 inline-block text-[10px] sm:text-[11px] font-medium ${s.tc}`}>
                        {s.sub}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pipeline rows */}
                <div className="mt-3 sm:mt-4 space-y-2 hidden sm:block">
                  {[
                    { name: "Senior Frontend Engineer", company: "Stripe", status: "Interview", sc: "bg-green-dim text-green", dot: "bg-green" },
                    { name: "Contract Design System", company: "Linear", status: "Proposal Sent", sc: "bg-amber-dim text-amber", dot: "bg-amber" },
                    { name: "Growth Lead", company: "Vercel", status: "Applied", sc: "bg-sky-dim text-sky", dot: "bg-sky" },
                  ].map((r) => (
                    <div key={r.name} className="flex items-center gap-3 rounded-xl border border-border bg-[rgba(255,255,255,0.02)] px-4 py-3">
                      <div className="h-8 w-8 rounded-lg bg-accent-dim flex items-center justify-center text-[11px] font-bold text-accent">
                        {r.company[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium text-text-primary truncate">{r.name}</p>
                        <p className="text-[11px] text-text-tertiary">{r.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${r.dot}`} />
                        <span className={`mockup-pill ${r.sc}`}>{r.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity pulse bar */}
                <div className="mt-3 sm:mt-4 flex items-center gap-3 rounded-lg border border-border bg-[rgba(255,255,255,0.015)] px-4 py-2.5">
                  <div className="flex gap-[3px] items-end h-4">
                    {[40, 65, 50, 80, 55, 70, 45, 90, 60, 75, 50, 85].map((h, i) => (
                      <div
                        key={i}
                        className="w-[3px] rounded-full bg-accent/40 pulse-bar"
                        style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-text-tertiary">
                    Live activity
                  </span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
                    <span className="text-[10px] text-green font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent z-10" />
        </motion.div>
      </div>

      {/* Logo marquee */}
      <div className="relative z-10 mt-16 sm:mt-20 border-t border-b border-border py-6 sm:py-8 overflow-hidden">
        <p className="mb-4 sm:mb-5 text-center text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-text-tertiary">
          Aggregating opportunities from 50+ platforms
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track">
            {[...logos, ...logos].map((name, i) => (
              <div key={`${name}-${i}`} className="flex items-center px-6 sm:px-8">
                <span className="text-[14px] sm:text-[15px] font-semibold text-text-tertiary/50 whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
