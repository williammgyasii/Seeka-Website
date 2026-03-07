import { Briefcase, PenTool, Rocket } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Job Search",
    description:
      "Aggregate listings from every major job board. Auto-qualify roles by skill match, salary range, and culture fit. Track every application in one place.",
    features: [
      "Multi-board aggregation",
      "Skill-match scoring",
      "Application tracker",
      "Interview prep assistant",
    ],
    gradient: "from-blue-500 to-primary-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconColor: "text-blue-600",
    tagBg: "bg-blue-50 text-blue-700",
  },
  {
    icon: PenTool,
    title: "Freelancing",
    description:
      "Discover gigs across Upwork, Fiverr, Toptal, and direct clients. Score projects by rate, scope, and client quality. Send winning proposals faster.",
    features: [
      "Cross-platform gig feed",
      "Rate optimization",
      "Proposal templates",
      "Client reputation analysis",
    ],
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconColor: "text-emerald-600",
    tagBg: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Rocket,
    title: "Business Building",
    description:
      "Find RFPs, partnerships, and sales leads. Qualify them against your ICP. Run targeted outreach campaigns and track deal flow from prospect to close.",
    features: [
      "Lead generation",
      "ICP matching",
      "Outreach campaigns",
      "Deal pipeline tracking",
    ],
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconColor: "text-violet-600",
    tagBg: "bg-violet-50 text-violet-700",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Use Cases
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            One platform,{" "}
            <span className="gradient-text">every opportunity type</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Whether you&apos;re hunting for your next role, landing freelance
            gigs, or growing a business — Seekr adapts to how you work.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className={`group relative overflow-hidden rounded-2xl border ${useCase.border} bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${useCase.bg}`}
              >
                <useCase.icon size={28} className={useCase.iconColor} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {useCase.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {useCase.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {useCase.features.map((feature) => (
                  <span
                    key={feature}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${useCase.tagBg}`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
