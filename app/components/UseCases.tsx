"use client";

import { useState, useEffect, useCallback } from "react";
import { Briefcase, PenTool, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";


const slides = [
  {
    icon: Briefcase,
    title: "Job Search",
    stat: "2.4x faster placement",
    description:
      "Aggregate listings from every major board. Auto-qualify by skill match, salary, and culture fit. Track every application in one pipeline.",
    tags: ["Multi-board feed", "Skill matching", "Application tracker", "Interview prep"],
    visual: (
      <div className="space-y-1.5">
        {["Senior Designer — Stripe", "Frontend Eng — Linear", "PM — Vercel"].map((r) => (
          <div key={r} className="mockup-row">
            <div className="h-6 w-6 rounded-md bg-[rgba(255,255,255,0.04)] flex items-center justify-center text-[8px] font-bold text-text-tertiary">
              {r.split("— ")[1]?.[0]}
            </div>
            <span className="text-[10px] font-medium text-text-primary flex-1 truncate">{r}</span>
            <div className="h-1.5 w-1.5 rounded-full bg-green" />
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: PenTool,
    title: "Freelancing",
    stat: "$150/hr avg rate match",
    description:
      "Discover gigs across Upwork, Toptal, and direct clients. Score projects by rate, scope, and client quality.",
    tags: ["Cross-platform", "Rate optimization", "Proposal AI", "Client scoring"],
    visual: (
      <div className="space-y-2">
        <div className="flex justify-between text-[10px]">
          <span className="text-text-tertiary">Rate match</span>
          <span className="font-bold text-green">$150/hr</span>
        </div>
        <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.04)]">
          <div className="h-1.5 w-[82%] rounded-full bg-green" />
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-text-tertiary">Client quality</span>
          <span className="font-bold text-accent">4.9/5</span>
        </div>
        <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.04)]">
          <div className="h-1.5 w-[92%] rounded-full bg-accent" />
        </div>
      </div>
    ),
  },
  {
    icon: Rocket,
    title: "Business Building",
    stat: "142 leads / month avg",
    description:
      "Find RFPs, partnerships, and sales leads. Qualify against your ICP. Run targeted outreach and track deal flow.",
    tags: ["Lead generation", "ICP matching", "Outreach campaigns", "Deal pipeline"],
    visual: (
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Leads", val: "142" },
          { label: "Qualified", val: "38" },
          { label: "Outreach", val: "24" },
          { label: "Closed", val: "6" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-[rgba(255,255,255,0.015)] p-2 text-center">
            <p className="text-[14px] font-bold text-text-primary">{s.val}</p>
            <p className="text-[8px] uppercase tracking-wider text-text-tertiary">{s.label}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setActive((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  function pos(index: number) {
    const diff = (index - active + count) % count;
    if (diff === 0) return "carousel-card-active";
    if (diff === 1) return "carousel-card-right";
    if (diff === count - 1) return "carousel-card-left";
    return "carousel-card-hidden";
  }

  return (
    <section id="use-cases" className="relative py-24 sm:py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          number="005"
          title="Use Cases"
          subtitle="One platform for every opportunity type — jobs, freelancing, and business."
          description="Whether you're hunting for your next role, landing freelance gigs, or growing a business — Seeka adapts."
        />

        {/* 3D Carousel */}
        <div
          className="mt-12 sm:mt-16 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="carousel-scene relative mx-auto h-[380px] max-w-[540px] sm:h-[460px] md:h-[500px]">
            {slides.map((slide, i) => {
              const Icon = slide.icon;
              return (
                <div
                  key={slide.title}
                  className={`absolute inset-0 cursor-pointer rounded-2xl border border-border bg-bg-card overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${pos(i)}`}
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => setActive(i)}
                >
                  <div className="relative h-[40%] border-b border-border bg-bg-inner flex items-center justify-center p-5 sm:p-6">
                    <div className="w-full max-w-[280px]">{slide.visual}</div>
                    <div className="gradient-blur absolute top-0 left-1/2 -translate-x-1/2 h-[150px] w-[250px] bg-[rgba(110,110,255,0.04)]" />
                  </div>

                  <div className="p-5 sm:p-7">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-bg-inner">
                        <Icon size={14} className="text-accent" />
                      </div>
                      <h3 className="text-[19px] sm:text-[21px] font-bold text-text-primary tracking-tight">
                        {slide.title}
                      </h3>
                    </div>
                    <span className="inline-block mb-2 text-[11px] font-bold text-green">
                      {slide.stat}
                    </span>
                    <p className="text-[13px] leading-relaxed text-text-secondary line-clamp-2">
                      {slide.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {slide.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-2.5 py-0.5 text-[9px] font-semibold text-text-tertiary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-text-secondary transition-all hover:border-border-hover hover:text-text-primary"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-accent" : "w-2 bg-text-tertiary/40 hover:bg-text-tertiary"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg-card text-text-secondary transition-all hover:border-border-hover hover:text-text-primary"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
