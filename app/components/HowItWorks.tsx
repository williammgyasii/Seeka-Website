import { UserPlus, Radar, SlidersHorizontal, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Set Up Your Profile",
    description:
      "Tell Seekr about your skills, experience, target roles, rates, and preferences. The more we know, the better we match.",
    color: "text-primary-600",
    bg: "bg-primary-50",
    ring: "ring-primary-100",
  },
  {
    number: "02",
    icon: Radar,
    title: "Discover & Qualify",
    description:
      "Our AI scans thousands of sources and surfaces high-quality opportunities ranked by fit, competition, and likelihood of success.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    ring: "ring-amber-100",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Reach Out with Precision",
    description:
      "Use AI-crafted outreach templates — cover letters, proposals, cold emails — personalized for each opportunity. Track engagement in real time.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Manage & Close",
    description:
      "Visualize your full pipeline. Get smart reminders, follow-up nudges, and conversion insights that help you close faster.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    ring: "ring-violet-100",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            From discovery to{" "}
            <span className="gradient-text">closed deal</span> in 4 steps
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            A streamlined workflow that takes you from finding opportunities to
            winning them — fast.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary-200 via-amber-200 via-emerald-200 to-violet-200 lg:left-1/2 lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative lg:flex lg:items-center lg:gap-16 ${
                  i % 2 === 0 ? "" : "lg:flex-row-reverse"
                } ${i > 0 ? "lg:mt-0" : ""}`}
              >
                <div
                  className={`flex-1 ${
                    i % 2 === 0
                      ? "lg:text-right lg:pr-16"
                      : "lg:text-left lg:pl-16"
                  }`}
                >
                  <div
                    className={`inline-block rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      i % 2 === 0 ? "lg:ml-auto" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 lg:justify-start">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.bg}`}
                      >
                        <step.icon size={24} className={step.color} />
                      </div>
                      <div>
                        <span
                          className={`text-xs font-bold uppercase tracking-widest ${step.color}`}
                        >
                          Step {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p
                      className={`mt-4 max-w-md text-base leading-relaxed text-slate-600 ${
                        i % 2 === 0 ? "lg:ml-auto" : ""
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-8 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:left-1/2 lg:block">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ring-4 ${step.ring} ${step.bg}`}
                  >
                    <span className={`text-sm font-bold ${step.color}`}>
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
