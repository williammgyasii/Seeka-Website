"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedCounter from "./AnimatedCounter";

const barData = [
  { label: "Mon", height: 45 },
  { label: "Tue", height: 62 },
  { label: "Wed", height: 38 },
  { label: "Thu", height: 78 },
  { label: "Fri", height: 55 },
  { label: "Sat", height: 90 },
  { label: "Sun", height: 70 },
];

const cities = [
  { name: "San Francisco", status: "Active", latency: "12ms" },
  { name: "New York", status: "Active", latency: "18ms" },
  { name: "London", status: "Active", latency: "42ms" },
  { name: "Amsterdam", status: "Active", latency: "38ms" },
  { name: "Dubai", status: "Active", latency: "65ms" },
  { name: "Singapore", status: "Active", latency: "78ms" },
];

const integrations = [
  "LinkedIn", "Gmail", "Slack", "Notion", "Zapier",
  "HubSpot", "Salesforce", "Airtable", "Discord", "Teams",
];

export default function AnalyticsDashboard() {
  return (
    <section className="relative py-24 sm:py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          number="004"
          title="Smart Analytics"
          subtitle="Monitor performance with actionable data insights."
          description="Real-time metrics that help you make better decisions, faster."
        />

        {/* Dashboard grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Pipeline Health Donut */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-bg-card p-5 sm:p-6"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary mb-5">
              Pipeline Health
            </h3>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r="15.5" fill="none"
                    stroke="var(--color-green)" strokeWidth="3"
                    strokeDasharray="97.4" strokeDashoffset="24.3"
                    strokeLinecap="round" className="donut-segment"
                  />
                  <circle
                    cx="18" cy="18" r="15.5" fill="none"
                    stroke="var(--color-accent)" strokeWidth="3"
                    strokeDasharray="97.4" strokeDashoffset="58.4"
                    strokeLinecap="round" className="donut-segment"
                    style={{ transform: "rotate(270deg)", transformOrigin: "center" }}
                  />
                  <circle
                    cx="18" cy="18" r="15.5" fill="none"
                    stroke="var(--color-amber)" strokeWidth="3"
                    strokeDasharray="97.4" strokeDashoffset="78"
                    strokeLinecap="round" className="donut-segment"
                    style={{ transform: "rotate(145deg)", transformOrigin: "center" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[16px] font-bold text-text-primary">75%</span>
                </div>
              </div>
              <div className="space-y-2.5 flex-1">
                {[
                  { label: "On Track", color: "bg-green", pct: "75%" },
                  { label: "At Risk", color: "bg-accent", pct: "15%" },
                  { label: "Stalled", color: "bg-amber", pct: "10%" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${item.color}`} />
                    <span className="text-[11px] text-text-secondary flex-1">{item.label}</span>
                    <span className="text-[11px] font-bold text-text-primary">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Outreach Performance Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-border bg-bg-card p-5 sm:p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary">
                Outreach Performance
              </h3>
              <span className="text-[11px] font-bold text-green">+18%</span>
            </div>
            <div className="flex items-end gap-2 h-[100px]">
              {barData.map((bar, i) => (
                <motion.div
                  key={bar.label}
                  className="flex-1 flex flex-col items-center gap-1.5"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  style={{ originY: 1 }}
                >
                  <div
                    className="w-full rounded-t-md bg-accent/60 hover:bg-accent transition-colors"
                    style={{ height: `${bar.height}%` }}
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              {barData.map((bar) => (
                <span key={bar.label} className="flex-1 text-center text-[9px] text-text-tertiary">
                  {bar.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Opportunity Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="rounded-2xl border border-border bg-bg-card p-5 sm:p-6"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary mb-5">
              Evolution Score
            </h3>
            <div className="text-center mb-4">
              <AnimatedCounter
                target={847}
                className="text-[36px] font-bold text-text-primary tracking-tight"
              />
              <p className="text-[11px] text-text-tertiary mt-1">total opportunities scored</p>
            </div>
            <div className="space-y-2">
              {[
                { label: "High Quality", count: "342", pct: 40, color: "bg-green" },
                { label: "Medium", count: "389", pct: 46, color: "bg-amber" },
                { label: "Low Match", count: "116", pct: 14, color: "bg-rose" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[11px] text-text-secondary">{item.label}</span>
                    <span className="text-[11px] font-bold text-text-primary">{item.count}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.04)]">
                    <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Global Reach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="sm:col-span-2 rounded-2xl border border-border bg-bg-card p-5 sm:p-6"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary mb-5">
              Global Status
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-[rgba(255,255,255,0.02)] px-3.5 py-3"
                >
                  <div className="h-2 w-2 rounded-full bg-green animate-pulse" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-medium text-text-primary truncate">{city.name}</p>
                    <p className="text-[10px] text-text-tertiary">{city.latency}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Integration Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="rounded-2xl border border-border bg-bg-card p-5 sm:p-6 overflow-hidden"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary mb-4">
              Integrations
            </h3>
            <div className="overflow-hidden">
              <div className="marquee-track" style={{ animationDuration: "20s" }}>
                {[...integrations, ...integrations].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="shrink-0 rounded-full border border-border bg-[rgba(255,255,255,0.02)] px-3 py-1 text-[11px] font-medium text-text-secondary whitespace-nowrap"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3 overflow-hidden">
              <div className="marquee-track" style={{ animationDuration: "25s", animationDirection: "reverse" }}>
                {[...integrations, ...integrations].reverse().map((name, i) => (
                  <span
                    key={`rev-${name}-${i}`}
                    className="shrink-0 rounded-full border border-border bg-[rgba(255,255,255,0.02)] px-3 py-1 text-[11px] font-medium text-text-secondary whitespace-nowrap"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
