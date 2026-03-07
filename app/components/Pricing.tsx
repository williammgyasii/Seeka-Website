import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for getting started with opportunity discovery.",
    features: [
      "Up to 50 opportunities / month",
      "Basic qualification scoring",
      "3 outreach templates",
      "Pipeline board",
      "Email support",
    ],
    cta: "Get Started Free",
    ctaStyle:
      "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:shadow-md",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
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
    cta: "Start 14-Day Free Trial",
    ctaStyle:
      "bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30",
    popular: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/month",
    description: "For agencies and teams managing multiple pipelines.",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Shared pipeline views",
      "Team analytics dashboard",
      "Role-based permissions",
      "API access",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    ctaStyle:
      "border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:shadow-md",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Simple pricing,{" "}
            <span className="gradient-text">powerful results</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Start free and upgrade as you grow. No hidden fees, no long-term
            contracts.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-primary-200 shadow-xl shadow-primary-100/50 scale-[1.02]"
                  : "border-slate-200 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold text-white shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-base text-slate-500">
                    {plan.period}
                  </span>
                )}
              </div>

              <a
                href="#"
                className={`mb-8 flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-primary-500"
                    />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
