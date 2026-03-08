"use client";

interface Props {
  texts: string[];
  reverse?: boolean;
  speed?: number;
}

export default function MarqueeBand({
  texts,
  reverse = false,
  speed = 30,
}: Props) {
  const repeated = [...texts, ...texts, ...texts, ...texts];

  return (
    <div className="relative overflow-hidden border-t border-b border-border py-5 sm:py-6">
      <div className="flex flex-col gap-3">
        {[false, true, false].map((rev, row) => {
          const shouldReverse = rev ? !reverse : reverse;
          return (
            <div key={row} className="overflow-hidden">
              <div
                className="flex w-max gap-4 sm:gap-6"
                style={{
                  animation: `${shouldReverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
                }}
              >
                {repeated.map((text, i) => (
                  <span
                    key={`${row}-${i}`}
                    className={`whitespace-nowrap text-[clamp(1rem,3vw,1.75rem)] font-bold tracking-tight ${
                      row === 1
                        ? "text-text-primary/10"
                        : "text-text-primary/[0.04]"
                    }`}
                  >
                    {text}
                    <span className="mx-3 sm:mx-4 text-accent/30">&bull;</span>
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
