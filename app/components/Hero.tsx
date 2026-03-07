import {
  ArrowRight,
  Search,
  Filter,
  Send,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary-50/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Now in Early Access
          </div>

          <h1 className="animate-fade-in-up delay-100 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Find opportunities.
            <br />
            <span className="gradient-text">Win them.</span>
          </h1>

          <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Seekr is your all-in-one platform for opportunity discovery,
            qualification, outreach, and pipeline management — whether
            you&apos;re job hunting, freelancing, or building a business.
          </p>

          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group flex items-center gap-2 rounded-xl bg-primary-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/30 active:scale-[0.98]"
            >
              Start for Free
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:shadow-md active:scale-[0.98]"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up delay-500 mx-auto mt-20 max-w-5xl">
          <div className="animate-pulse-glow rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xl shadow-slate-200/50">
            <div className="rounded-xl bg-slate-50 p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 h-6 flex-1 rounded-md bg-slate-200/70" />
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  {
                    icon: Search,
                    label: "Discover",
                    count: "2,847",
                    color: "text-primary-500",
                    bg: "bg-primary-50",
                  },
                  {
                    icon: Filter,
                    label: "Qualified",
                    count: "486",
                    color: "text-amber-500",
                    bg: "bg-amber-50",
                  },
                  {
                    icon: Send,
                    label: "Outreach",
                    count: "124",
                    color: "text-emerald-500",
                    bg: "bg-emerald-50",
                  },
                  {
                    icon: BarChart3,
                    label: "Pipeline",
                    count: "38",
                    color: "text-violet-500",
                    bg: "bg-violet-50",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm border border-slate-100 transition-transform hover:scale-[1.02]"
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.bg}`}
                    >
                      <item.icon size={20} className={item.color} />
                    </div>
                    <span className="text-2xl font-bold text-slate-800">
                      {item.count}
                    </span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {[85, 62, 40].map((width, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-slate-200/70" />
                    <div className="flex-1">
                      <div
                        className="h-3 rounded-full bg-slate-200/70"
                        style={{ width: `${width}%` }}
                      />
                    </div>
                    <div className="h-6 w-16 rounded-md bg-primary-100/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
