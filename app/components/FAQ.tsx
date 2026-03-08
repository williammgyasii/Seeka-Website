"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";
import AnimateIn from "./AnimateIn";

const faqs = [
  {
    q: "How does Seeka find opportunities?",
    a: "Seeka aggregates opportunities from major job boards, freelance platforms, RFP databases, and direct business leads. Our AI continuously scans and indexes new listings, matching them to your profile in real time.",
  },
  {
    q: "What makes the AI qualification different from regular filters?",
    a: "Unlike keyword filters, Seeka's AI understands context — it evaluates skill fit, competition level, salary alignment, culture signals, and historical win probability to give each opportunity a score you can trust.",
  },
  {
    q: "Can I use Seeka for both job hunting and freelancing?",
    a: "Absolutely. Seeka supports multiple modes — job search, freelancing, and business development. You can run all three simultaneously with separate pipelines, or focus on one at a time.",
  },
  {
    q: "How does the outreach engine work?",
    a: "Our AI generates personalized outreach (cover letters, proposals, cold emails) tailored to each opportunity. It references your profile, the job requirements, and winning patterns. You can edit, approve, and track everything.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Starter plan is free forever and includes 50 opportunities per month, basic qualification scoring, 3 outreach templates, and a pipeline board. Upgrade to Pro when you need more.",
  },
  {
    q: "Do I need technical knowledge to use Seeka?",
    a: "Not at all. Seeka is designed for everyone — from job seekers to freelancers to sales teams. The interface is intuitive and no coding or technical setup is required.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 py-4 sm:py-5 text-left"
      >
        <span className="text-[11px] font-mono text-text-tertiary w-5 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[14px] sm:text-[15px] font-medium text-text-primary pr-4 flex-1">{q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <Plus size={18} className="text-text-tertiary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-4 sm:pb-5 pl-9 text-[13px] sm:text-[14px] leading-relaxed text-text-secondary">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-24 sm:py-32 md:py-44">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          number="007"
          title="Questions & Answers"
          subtitle="Simple explanations to help you get started and move faster."
          description="Spend less time guessing and more time building."
        />

        <AnimateIn delay={0.1}>
          <div className="rounded-2xl border border-border bg-bg-card px-5 sm:px-8">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
