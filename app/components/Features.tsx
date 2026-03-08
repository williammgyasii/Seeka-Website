"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, Send, BarChart3, ChevronDown } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    number: "01",
    icon: Search,
    accentColor: "text-sky",
    accentBg: "bg-sky-dim",
    title: "Discovery Engine",
    description:
      "Surface opportunities from job boards, freelance platforms, RFPs, and direct leads — all in one intelligent feed powered by AI that learns your preferences.",
    visual: (
      <div className="space-y-2">
        {[
          { role: "Senior Product Designer", co: "Stripe", match: "94%", mc: "text-green", dot: "bg-green" },
          { role: "Frontend Engineer", co: "Linear", match: "87%", mc: "text-green", dot: "bg-green" },
          { role: "Growth Marketing Lead", co: "Vercel", match: "72%", mc: "text-amber", dot: "bg-amber" },
          { role: "Contract — Design System", co: "Resend", match: "68%", mc: "text-amber", dot: "bg-amber" },
        ].map((j) => (
          <div key={j.role} className="mockup-row">
            <div className="h-8 w-8 rounded-lg bg-accent-dim flex items-center justify-center text-[10px] font-bold text-accent shrink-0">
              {j.co[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium text-text-primary truncate">{j.role}</p>
              <p className="text-[10px] text-text-tertiary">{j.co}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[12px] font-bold ${j.mc}`}>{j.match}</span>
              <div className={`h-2 w-2 rounded-full ${j.dot}`} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: "02",
    icon: ShieldCheck,
    accentColor: "text-green",
    accentBg: "bg-green-dim",
    title: "Qualification AI",
    description:
      "Every opportunity gets an intelligent score based on skill match, salary fit, culture alignment, and competition level — so you only pursue what you can win.",
    visual: (
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider">Score</span>
          <span className="text-[22px] font-bold text-green">94%</span>
        </div>
        <div className="space-y-3">
          {[
            { label: "Skill Match", value: 96, color: "bg-green" },
            { label: "Salary Fit", value: 88, color: "bg-sky" },
            { label: "Culture", value: 91, color: "bg-accent" },
            { label: "Competition", value: 35, color: "bg-amber" },
          ].map((b) => (
            <div key={b.label}>
              <div className="flex justify-between mb-1.5">
                <span className="text-[11px] text-text-secondary">{b.label}</span>
                <span className="text-[11px] font-bold text-text-primary">{b.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-[rgba(255,255,255,0.05)]">
                <div className={`h-2 rounded-full ${b.color} transition-all duration-700`} style={{ width: `${b.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    icon: Send,
    accentColor: "text-amber",
    accentBg: "bg-amber-dim",
    title: "Outreach Automation",
    description:
      "AI-crafted cover letters, proposals, and cold emails — personalized per opportunity. Multi-step sequences with automated follow-ups and open/reply tracking.",
    visual: (
      <div>
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
          <span className="text-[10px] text-text-tertiary">To:</span>
          <span className="text-[11px] text-text-primary font-medium">hiring@stripe.com</span>
        </div>
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
          <span className="text-[10px] text-text-tertiary">Subj:</span>
          <span className="text-[11px] text-text-primary font-medium">Re: Senior Product Designer</span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="mockup-bar w-full" />
          <div className="mockup-bar w-[90%]" />
          <div className="mockup-bar w-[95%]" />
          <div className="mockup-bar w-[55%]" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="mockup-pill bg-accent-dim text-accent">AI Generated</span>
          <span className="mockup-pill bg-green-dim text-green">Personalized</span>
          <span className="mockup-pill bg-amber-dim text-amber">Tracked</span>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    icon: BarChart3,
    accentColor: "text-rose",
    accentBg: "bg-rose-dim",
    title: "Pipeline Management",
    description:
      "Visual kanban boards, conversion analytics, smart reminders, and deal velocity tracking — everything to move opportunities from first touch to close.",
    visual: (
      <div className="grid grid-cols-3 gap-2">
        {[
          { stage: "Applied", color: "bg-sky", items: [{ name: "Vercel", type: "Full-time" }, { name: "Supabase", type: "Contract" }] },
          { stage: "Interview", color: "bg-amber", items: [{ name: "Stripe", type: "Full-time" }] },
          { stage: "Offer", color: "bg-green", items: [{ name: "Linear", type: "Full-time" }] },
        ].map((col) => (
          <div key={col.stage} className="rounded-lg border border-border bg-[rgba(255,255,255,0.02)] p-2.5">
            <div className="flex items-center gap-1.5 mb-2">
              <div className={`h-1.5 w-1.5 rounded-full ${col.color}`} />
              <p className="text-[10px] font-semibold uppercase tracking-wider text-text-tertiary">
                {col.stage}
              </p>
            </div>
            <div className="space-y-1.5">
              {col.items.map((item) => (
                <div key={item.name} className="rounded-md bg-[rgba(255,255,255,0.03)] border border-border p-2.5">
                  <p className="text-[11px] font-medium text-text-primary">{item.name}</p>
                  <p className="text-[9px] text-text-tertiary mt-0.5">{item.type}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

function AccordionItem({
  feature,
  isOpen,
  onToggle,
}: {
  feature: (typeof features)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = feature.icon;

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center gap-4 sm:gap-5 py-5 sm:py-6 text-left group"
      >
        <span className="text-[12px] font-mono font-semibold text-text-tertiary w-6">
          {feature.number}
        </span>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${feature.accentBg} shrink-0`}>
          <Icon size={18} className={feature.accentColor} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[16px] sm:text-[18px] font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
            {feature.title}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-text-tertiary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
              <div className="pb-6 sm:pb-8 pl-0 sm:pl-[72px] min-w-0">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 min-w-0">
                <p className="text-[13px] sm:text-[14px] leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
                <div className="card-visual">{feature.visual}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Features() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="features" className="relative py-24 sm:py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          number="002"
          title="Our Features"
          subtitle="Flexible AI solutions for building your modern opportunity pipeline."
          description="We discover, qualify, and help you win — so you can work smarter, not harder."
        />

        <div className="rounded-2xl border border-border bg-bg-card px-5 sm:px-8">
          {features.map((feature, i) => (
            <AccordionItem
              key={feature.number}
              feature={feature}
              isOpen={i === openIndex}
              onToggle={() => setOpenIndex(i === openIndex ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
