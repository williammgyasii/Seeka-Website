"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          number="009"
          title="Let's Talk."
          subtitle="Ready to automate your opportunity pipeline?"
          description="Get started in under 30 seconds — no credit card required."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-card">
            <div className="gradient-blur absolute top-[-60%] left-[50%] h-[500px] w-[min(700px,150vw)] -translate-x-1/2 bg-[rgba(110,110,255,0.06)]" />
            <div className="gradient-blur absolute bottom-[-40%] right-[20%] h-[300px] w-[min(400px,100vw)] bg-[rgba(110,110,255,0.03)]" />

            <div className="relative grid gap-10 md:grid-cols-2 md:gap-16 px-6 py-12 sm:px-10 sm:py-16 md:px-14 md:py-20">
              {/* Left side: messaging */}
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-accent mb-4">
                  Got a question, challenge, or idea?
                </p>
                <h3 className="text-[clamp(1.4rem,4vw,2.8rem)] font-bold leading-[1.1] tracking-[-0.03em] text-text-primary">
                  Let AI Do the Work
                  <br />
                  <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                    So You Can Win Faster
                  </span>
                </h3>
                <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-text-secondary max-w-md">
                  Join seekers who are discovering and winning opportunities
                  with intelligent automation.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-1.5">
                    <Shield size={13} className="text-green" />
                    <span className="text-[11px] sm:text-[12px] text-text-tertiary">No credit card required</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap size={13} className="text-amber" />
                    <span className="text-[11px] sm:text-[12px] text-text-tertiary">Free plan available</span>
                  </div>
                </div>
              </div>

              {/* Right side: form */}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-xl border border-border bg-bg-inner px-5 py-3 text-[14px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/40 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-xl border border-border bg-bg-inner px-5 py-3 text-[14px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/40 transition-colors"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="rounded-xl border border-border bg-bg-inner px-5 py-3 text-[14px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/40 transition-colors resize-none"
                />
                <a
                  href="https://app.seeka.tech/"
                  className="group mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_0_24px_rgba(110,110,255,0.3)] transition-all hover:shadow-[0_0_40px_rgba(110,110,255,0.45)] hover:brightness-110"
                >
                  Get Started
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="text-[11px] text-text-tertiary mt-1">
                  By submitting, you agree to our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
