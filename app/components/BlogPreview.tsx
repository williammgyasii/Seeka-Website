"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TiltCard from "./TiltCard";

const posts = [
  {
    category: "AI & Automation",
    categoryColor: "text-accent bg-accent-dim",
    title: "How AI is Transforming Opportunity Discovery in 2026",
    excerpt:
      "The days of manually scrolling through job boards are over. Learn how AI-powered discovery engines are changing the game for job seekers and freelancers.",
    date: "Mar 4, 2026",
    readTime: "5 min read",
  },
  {
    category: "Freelancing",
    categoryColor: "text-green bg-green-dim",
    title: "The Freelancer's Guide to Building a $10k/Month Pipeline",
    excerpt:
      "Discover the strategies top freelancers use to maintain a healthy pipeline of high-quality projects without spending hours on outreach.",
    date: "Feb 28, 2026",
    readTime: "8 min read",
  },
  {
    category: "Career Growth",
    categoryColor: "text-amber bg-amber-dim",
    title: "Why Your Job Search Needs a Pipeline, Not Just Applications",
    excerpt:
      "Treating your job search like a sales pipeline dramatically improves outcomes. Here's the framework that top candidates use.",
    date: "Feb 21, 2026",
    readTime: "6 min read",
  },
];

export default function BlogPreview() {
  return (
    <section className="relative py-24 sm:py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          number="008"
          title="Seeka Labs"
          subtitle="Fresh takes on opportunity discovery, outreach, and the tools behind modern job search."
          description="Stay ahead with insights and expert analyses from the Seeka team."
        />

        <div className="flex items-center justify-between mb-8">
          <span className="text-[13px] text-text-tertiary">Latest articles</span>
          <a
            href="#"
            className="group flex items-center gap-1.5 text-[13px] font-semibold text-accent hover:text-accent-light transition-colors shrink-0"
          >
            View All Posts
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="h-full" tiltMax={5}>
                <a
                  href="#"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-bg-card p-5 sm:p-6 transition-all duration-300 hover:bg-bg-card-hover hover:border-border-hover"
                >
                  {/* Decorative gradient strip */}
                  <div className="mb-4 h-32 rounded-xl bg-bg-inner border border-border flex items-center justify-center overflow-hidden relative">
                    <div className="gradient-blur absolute w-[200px] h-[200px] bg-accent/[0.06]" />
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-accent-dim flex items-center justify-center">
                        <span className="text-[12px] font-bold text-accent">S</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="h-1 w-8 rounded-full bg-[rgba(255,255,255,0.06)]" />
                        <div className="h-1 w-12 rounded-full bg-[rgba(255,255,255,0.06)]" />
                        <div className="h-1 w-6 rounded-full bg-[rgba(255,255,255,0.06)]" />
                      </div>
                    </div>
                  </div>

                  <span className={`inline-block self-start rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${post.categoryColor} mb-3`}>
                    {post.category}
                  </span>

                  <h3 className="text-[15px] sm:text-[16px] font-bold text-text-primary tracking-tight leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-[12px] sm:text-[13px] leading-relaxed text-text-secondary line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-[11px] text-text-tertiary">{post.date}</span>
                    <span className="text-[11px] text-text-tertiary">{post.readTime}</span>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
