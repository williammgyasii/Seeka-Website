const links = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  "Use Cases": ["Job Search", "Freelancing", "Business Dev"],
  Resources: ["Docs", "Blog", "Community", "Support"],
  Company: ["About", "Careers", "Privacy", "Terms"],
};

const socials = ["Instagram", "LinkedIn", "Twitter", "GitHub"];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Newsletter */}
        <div className="mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-bold text-text-primary tracking-tight">
                Stay in the loop
              </h3>
              <p className="mt-1 text-[13px] text-text-secondary">
                Get product updates, tips, and insights delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2 sm:w-auto w-full">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-[240px] rounded-full border border-border bg-bg-card px-4 py-2 text-[13px] text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/40 transition-colors"
              />
              <button className="rounded-full bg-text-primary px-5 py-2 text-[13px] font-semibold text-bg transition-opacity hover:opacity-90 shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white text-xs font-bold">
                S
              </div>
              <span className="text-[15px] font-semibold text-text-primary tracking-tight" style={{ fontFamily: "var(--font-poppins, Poppins), sans-serif" }}>
                Seeka
              </span>
            </a>
            <p className="mt-3 max-w-[260px] text-[12px] sm:text-[13px] leading-relaxed text-text-tertiary">
              Seeka — Discover, Qualify, Reach Out &amp; Win. The all-in-one
              opportunity management platform.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-text-tertiary">
                {category}
              </h4>
              <ul className="mt-3 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[12px] sm:text-[13px] text-text-secondary transition-colors hover:text-text-primary">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:pt-8 sm:flex-row">
          <p className="text-[11px] sm:text-[12px] text-text-tertiary">
            &copy; {new Date().getFullYear()} Seeka. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socials.map((name) => (
              <a key={name} href="#" className="text-[11px] sm:text-[12px] text-text-tertiary transition-colors hover:text-text-secondary">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
