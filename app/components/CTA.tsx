import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-violet-700 px-8 py-16 text-center md:px-16 md:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-white/5 blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/[0.02]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Ready to find and win
              <br />
              your next opportunity?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100 leading-relaxed">
              Join thousands of professionals who use Seekr to discover, qualify,
              and close opportunities faster than ever.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-primary-700 shadow-lg transition-all hover:shadow-xl hover:bg-primary-50 active:scale-[0.98]"
              >
                Start for Free
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 active:scale-[0.98]"
              >
                Talk to Sales
              </a>
            </div>

            <p className="mt-6 text-sm text-primary-200">
              No credit card required &middot; Free plan available forever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
