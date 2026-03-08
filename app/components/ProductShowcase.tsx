"use client";

import { motion } from "framer-motion";
import {
  Rss, Target, Mail, Kanban,
  BarChart3, Plug, FileText, Brain,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";

const capabilities = [
  {
    icon: Rss,
    title: "Opportunity Feed",
    description: "Real-time stream from 50+ sources, filtered to your criteria.",
    color: "text-sky",
    bg: "bg-sky-dim",
    span: "sm:col-span-2",
  },
  {
    icon: Target,
    title: "Smart Matching",
    description: "AI scores every listing by fit, competition, and win probability.",
    color: "text-green",
    bg: "bg-green-dim",
    span: "",
  },
  {
    icon: Mail,
    title: "Email Sequences",
    description: "Multi-step outreach with automated follow-ups and tracking.",
    color: "text-amber",
    bg: "bg-amber-dim",
    span: "",
  },
  {
    icon: Kanban,
    title: "Pipeline Board",
    description: "Drag-and-drop stages from discovery to close.",
    color: "text-rose",
    bg: "bg-rose-dim",
    span: "",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Conversion funnels, response rates, and pipeline velocity.",
    color: "text-accent",
    bg: "bg-accent-dim",
    span: "",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connect with LinkedIn, Gmail, Slack, and 30+ tools.",
    color: "text-sky",
    bg: "bg-sky-dim",
    span: "sm:col-span-2",
  },
  {
    icon: FileText,
    title: "Templates",
    description: "Pre-built outreach and proposal templates you can customize.",
    color: "text-amber",
    bg: "bg-amber-dim",
    span: "",
  },
  {
    icon: Brain,
    title: "AI Scoring",
    description: "Machine learning models trained on winning patterns.",
    color: "text-green",
    bg: "bg-green-dim",
    span: "",
  },
];

export default function ProductShowcase() {
  return (
    <section className="relative py-24 sm:py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          number="001"
          title="Our Product"
          subtitle="Designed with purpose, automated for speed and built to help you move faster, with less friction."
          description="Every feature is designed to solve real problems, delivering practical value for seekers everywhere."
        />

        {/* Featured product card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <div className="gradient-border-wrap rounded-2xl">
            <div className="rounded-2xl bg-bg-card p-6 sm:p-10 md:p-14">
              <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
                <div className="flex-1">
                  <h2 className="text-[clamp(1.5rem,4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
                    Your Entire Opportunity
                    <br />
                    Pipeline, Automated
                  </h2>
                  <p className="mt-4 text-[14px] sm:text-[16px] leading-relaxed text-text-secondary max-w-lg">
                    From discovery to close, Seeka handles the grunt work so you can focus on
                    what matters — landing the right opportunities.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["AI-Powered", "Real-Time", "Multi-Platform"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-accent/20 bg-accent-dim px-3.5 py-1 text-[11px] font-semibold text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mini dashboard mockup */}
                <div className="w-full md:w-[340px] shrink-0">
                  <div className="rounded-xl border border-border bg-bg-inner p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-text-tertiary uppercase tracking-wider">Pipeline</span>
                      <span className="text-[11px] font-bold text-green">+23% this week</span>
                    </div>
                    {[
                      { stage: "Discovery", count: 847, pct: 100, color: "bg-sky" },
                      { stage: "Qualified", count: 234, pct: 28, color: "bg-accent" },
                      { stage: "Outreach", count: 89, pct: 10.5, color: "bg-amber" },
                      { stage: "Closing", count: 12, pct: 1.4, color: "bg-green" },
                    ].map((s) => (
                      <div key={s.stage}>
                        <div className="flex justify-between mb-1">
                          <span className="text-[11px] text-text-secondary">{s.stage}</span>
                          <span className="text-[11px] font-bold text-text-primary">{s.count}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.04)]">
                          <div
                            className={`h-1.5 rounded-full ${s.color} transition-all duration-1000`}
                            style={{ width: `${s.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capability grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={cap.span}
            >
              <TiltCard className="h-full" tiltMax={5}>
                <div className="group h-full rounded-2xl border border-border bg-bg-card p-5 sm:p-6 transition-all duration-300 hover:bg-bg-card-hover hover:border-border-hover">
                  <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${cap.bg} mb-3`}>
                    <cap.icon size={16} className={cap.color} />
                  </div>
                  <h3 className="text-[15px] font-bold text-text-primary tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] sm:text-[13px] leading-relaxed text-text-secondary">
                    {cap.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
