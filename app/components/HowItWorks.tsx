"use client";

import { UserPlus, Radar, SlidersHorizontal, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedCounter from "./AnimatedCounter";
import TiltCard from "./TiltCard";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    color: "text-sky",
    bg: "bg-sky-dim",
    title: "Connect",
    description: "Tell Seeka your skills, target roles, rates, and preferences. We build your opportunity DNA.",
    stat: { target: 30, suffix: " sec", label: "average setup time" },
  },
  {
    number: "02",
    icon: Radar,
    color: "text-green",
    bg: "bg-green-dim",
    title: "Discover",
    description: "Our engine scans thousands of sources and surfaces matches ranked by fit and win probability.",
    stat: { target: 500, suffix: "+", label: "sources scanned daily" },
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    color: "text-amber",
    bg: "bg-amber-dim",
    title: "Qualify",
    description: "AI evaluates skill fit, competition, salary alignment, and culture to score every opportunity.",
    stat: { target: 94, suffix: "%", label: "match accuracy" },
  },
  {
    number: "04",
    icon: Rocket,
    color: "text-rose",
    bg: "bg-rose-dim",
    title: "Win",
    description: "Track your full pipeline with visual boards, smart reminders, and conversion insights.",
    stat: { target: 3, suffix: "x", label: "faster close rate" },
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          number="003"
          title="Our Process"
          subtitle="Optimized processes through simplified workflows."
          description="Seamless operations from discovery to close, every step of the way."
        />

        {/* Progress line (desktop) */}
        <div className="hidden lg:block relative mb-0">
          <div className="absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-border">
            <motion.div
              className="h-full bg-accent/40"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <TiltCard className="h-full" tiltMax={6}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-6 sm:p-7 transition-all duration-300 hover:bg-bg-card-hover hover:border-border-hover">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${step.bg}`}>
                      <step.icon size={18} className={step.color} />
                    </div>
                    <span className="text-[32px] sm:text-[36px] font-bold text-text-tertiary/15 tracking-tighter leading-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-[16px] sm:text-[17px] font-bold text-text-primary tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-secondary flex-1">
                    {step.description}
                  </p>

                  {/* Quantified stat */}
                  <div className="mt-5 pt-4 border-t border-border">
                    <AnimatedCounter
                      target={step.stat.target}
                      suffix={step.stat.suffix}
                      duration={2}
                      className="text-[20px] sm:text-[22px] font-bold text-text-primary tracking-tight"
                    />
                    <p className="mt-0.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-text-tertiary">
                      {step.stat.label}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
