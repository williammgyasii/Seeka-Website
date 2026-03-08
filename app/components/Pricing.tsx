"use client";

import { Check, Zap, Crown, Building2 } from "lucide-react";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import AnimateIn from "./AnimateIn";
import TiltCard from "./TiltCard";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    monthly: "Free",
    annually: "Free",
    period: "",
    description: "Perfect for getting started with opportunity discovery.",
    features: [
      "50 opportunities / month",
      "Basic qualification scoring",
      "3 outreach templates",
      "Pipeline board",
      "Email support",
    ],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Professional",
    icon: Crown,
    monthly: "$37",
    annually: "$29",
    period: "/month",
    description: "For serious seekers who want AI-powered everything.",
    features: [
      "Unlimited opportunities",
      "Advanced AI qualification",
      "Unlimited AI outreach",
      "Full pipeline analytics",
      "Multi-platform integrations",
      "Priority support",
      "Custom scoring rules",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    monthly: "Custom",
    annually: "Custom",
    period: "",
    description: "For teams and agencies managing multiple pipelines.",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Shared pipeline views",
      "Team analytics dashboard",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Schedule a Call",
    highlight: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          number="006"
          title="Pricing"
          subtitle="Flexible, transparent plans. Built for clarity and growth."
          description="Scale at your own pace — choose only what you need, when you need it."
        />

        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-bg-card p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-[12px] sm:text-[13px] font-medium transition-all ${
                !annual ? "bg-accent text-white" : "text-text-tertiary hover:text-text-secondary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-4 py-1.5 text-[12px] sm:text-[13px] font-medium transition-all ${
                annual ? "bg-accent text-white" : "text-text-tertiary hover:text-text-secondary"
              }`}
            >
              Annually
            </button>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <AnimateIn key={plan.name} delay={i * 0.08}>
                <TiltCard className="h-full" tiltMax={5}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border p-6 sm:p-8 transition-colors duration-300 ${
                      plan.highlight
                        ? "border-accent/20 bg-[rgba(110,110,255,0.03)]"
                        : "border-border bg-bg-card hover:bg-bg-card-hover"
                    }`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-3 left-6">
                        <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-3">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${plan.highlight ? "bg-accent-dim" : "bg-[rgba(255,255,255,0.04)]"}`}>
                        <Icon size={16} className={plan.highlight ? "text-accent" : "text-text-tertiary"} />
                      </div>
                      <h3 className="text-[15px] font-semibold text-text-primary">{plan.name}</h3>
                    </div>
                    <p className="text-[12px] sm:text-[13px] text-text-tertiary">{plan.description}</p>

                    <div className="mt-4 sm:mt-5 flex items-baseline gap-0.5">
                      <span className="text-[32px] sm:text-[36px] font-bold text-text-primary tracking-tight">
                        {annual ? plan.annually : plan.monthly}
                      </span>
                      {plan.period && (
                        <span className="text-[13px] sm:text-[14px] text-text-tertiary">{plan.period}</span>
                      )}
                    </div>

                    <a
                      href="https://app.seeka.tech/"
                      className={`mt-5 sm:mt-6 flex items-center justify-center rounded-full py-2.5 text-[13px] font-semibold transition-all hover:brightness-110 ${
                        plan.highlight ? "bg-accent text-white shadow-[0_0_20px_rgba(110,110,255,0.2)]" : "bg-text-primary text-bg"
                      }`}
                    >
                      {plan.cta}
                    </a>

                    <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-border">
                      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-text-tertiary mb-3">
                        What&apos;s Included:
                      </p>
                      <ul className="space-y-2 sm:space-y-2.5">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                            <span className="text-[12px] sm:text-[13px] text-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
