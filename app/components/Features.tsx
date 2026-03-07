import {
  Search,
  ShieldCheck,
  Send,
  BarChart3,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Discovery",
    description:
      "Surface opportunities from job boards, freelance markets, RFPs, and business leads — all in one unified feed tailored to your profile.",
    gradient: "from-primary-500 to-primary-600",
    iconBg: "bg-primary-50",
    iconColor: "text-primary-600",
  },
  {
    icon: ShieldCheck,
    title: "Instant Qualification",
    description:
      "AI-powered scoring rates every opportunity on fit, competition, and win probability so you focus only on what matters.",
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Send,
    title: "Outreach Engine",
    description:
      "Craft personalized pitches, cover letters, and proposals with AI assistance. Track opens, replies, and follow-up timing automatically.",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Pipeline Management",
    description:
      "Visual Kanban boards, conversion analytics, and smart reminders keep your opportunity pipeline moving from first touch to close.",
    gradient: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Intelligent recommendations and scoring at every step",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time opportunity alerts — never miss a lead",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Filters that match your skills, rate, and preferences",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Analytics that show exactly where you're winning",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Everything you need to{" "}
            <span className="gradient-text">win opportunities</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Four powerful pillars that transform how you find, evaluate, pursue,
            and manage opportunities across your career.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br opacity-[0.07] transition-opacity group-hover:opacity-[0.12]" />

              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}
              >
                <feature.icon size={24} className={feature.iconColor} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                {feature.description}
              </p>

              <div
                className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${feature.gradient} transition-all duration-300 group-hover:w-20`}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50">
                <item.icon size={20} className="text-primary-600" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
