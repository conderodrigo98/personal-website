const journeyStats = [
  { value: "7+", label: "Years in the industry." },
  { value: "20+", label: "Completed projects." },
  { value: "10+", label: "Tools, stacks, and systems still in rotation." },
  { value: "Many", label: "Problems untangled one release at a time." },
];

const journeyTimeline = [
  {
    years: "2017 - 2019",
    role: "Junior Developer",
    company: "BrightApps",
    description:
      "Placeholder copy about first shipping lessons, fixing rough edges, and learning how products behave once real users show up.",
    tags: ["JavaScript", "React", "Node.js"],
    color: "var(--brand-yellow)",
    tintedColor: "color-mix(in srgb, var(--brand-yellow) 28%, white)",
    side: "right" as const,
  },
  {
    years: "2019 - 2021",
    role: "Software Engineer",
    company: "DataPulse",
    description:
      "Placeholder copy about joining a growing platform, improving reliability, and turning messy operational work into repeatable systems.",
    tags: ["TypeScript", "AWS", "Docker"],
    color: "var(--brand-red)",
    tintedColor: "color-mix(in srgb, var(--brand-red) 22%, white)",
    side: "left" as const,
  },
  {
    years: "2021 - 2023",
    role: "Senior Engineer",
    company: "CloudWave",
    description:
      "Placeholder copy about scaling core services, mentoring teammates, and spending more time on tradeoffs than on novelty.",
    tags: ["Go", "Kubernetes", "PostgreSQL"],
    color: "var(--brand-blue)",
    tintedColor: "color-mix(in srgb, var(--brand-blue) 22%, white)",
    side: "right" as const,
  },
  {
    years: "2023 - Present",
    role: "Staff Engineer",
    company: "InnovateX",
    description:
      "Placeholder copy about architecture, team enablement, and the ongoing work of making complex systems feel simpler to build on.",
    tags: ["Leadership", "Architecture", "Python"],
    color: "var(--brand-green)",
    tintedColor: "color-mix(in srgb, var(--brand-green) 24%, white)",
    side: "left" as const,
  },
];

export default function MyJourney() {
  return (
    <section
      id="my-journey"
      className="flex w-full justify-center px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="flex w-full max-w-6xl flex-col gap-14 sm:gap-18">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
              The Journey
            </p>
            <h2 className="mt-3 max-w-[10ch] text-5xl leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Seven years of building things that held up.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-[var(--foreground-muted)] sm:text-xl">
              Placeholder reflections on growth, pivots, tradeoffs, and the
              kind of work that slowly sharpens judgment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-8 border-y border-black/8 py-6 sm:grid-cols-2 sm:py-8 lg:border-y-0 lg:border-l lg:pl-8">
            {journeyStats.map((stat, index) => (
              <article
                key={stat.label}
                className={`flex min-h-28 flex-col justify-between gap-4 ${
                  index > 1 ? "sm:border-t sm:border-black/8 sm:pt-8" : ""
                }`}
              >
                <p className="text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="max-w-[22ch] text-sm leading-6 text-[var(--foreground-muted)]">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-5 w-px bg-black/10 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="flex flex-col gap-8 sm:gap-10">
            {journeyTimeline.map((entry, index) => {
              const isRight = entry.side === "right";

              return (
                <article
                  key={entry.years}
                  className="relative grid gap-5 pl-14 lg:grid-cols-2 lg:gap-12 lg:pl-0"
                >
                  <div
                    className="absolute top-8 left-5 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-[5px] border-[var(--background)] lg:left-1/2"
                    style={{ backgroundColor: entry.color }}
                  />

                  <div
                    className={`order-2 lg:order-none ${
                      isRight ? "lg:col-start-2" : "lg:col-start-1"
                    }`}
                  >
                    <div
                      className="relative overflow-hidden rounded-[2.25rem] border p-6 shadow-[0_24px_60px_rgba(25,25,25,0.08)] sm:p-8"
                      style={{
                        backgroundColor: entry.tintedColor,
                        borderColor: entry.color,
                        borderTopLeftRadius: isRight ? "3.5rem" : "2rem",
                        borderTopRightRadius: isRight ? "2rem" : "3.5rem",
                        borderBottomLeftRadius: isRight ? "2rem" : "3.75rem",
                        borderBottomRightRadius: isRight ? "3.75rem" : "2rem",
                      }}
                    >
                      <div className="flex flex-col gap-5">
                        <div>
                          <p
                            className="text-sm font-semibold tracking-[0.16em]"
                            style={{ color: entry.color }}
                          >
                            {entry.years}
                          </p>
                          <h3 className="mt-3 text-3xl leading-tight tracking-[-0.05em] sm:text-4xl">
                            {entry.role}
                          </h3>
                          <p className="mt-2 text-lg text-[var(--foreground-muted)]">
                            {entry.company}
                          </p>
                        </div>

                        <p className="max-w-[34ch] text-base leading-7 text-[var(--foreground)]/85 sm:text-lg">
                          {entry.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border px-3 py-1 text-sm leading-none"
                              style={{
                                borderColor: `${entry.color}55`,
                                backgroundColor:
                                  "color-mix(in srgb, white 60%, transparent)",
                                color: "var(--foreground)",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`order-1 flex flex-col justify-center gap-3 lg:order-none ${
                      isRight
                        ? "lg:col-start-1 lg:items-end lg:text-right"
                        : "lg:col-start-2 lg:items-start lg:text-left"
                    }`}
                  >
                    <p
                      className="text-sm font-semibold uppercase tracking-[0.18em]"
                      style={{ color: entry.color }}
                    >
                      Chapter {index + 1}
                    </p>
                    <p className="max-w-[22ch] text-sm leading-6 text-[var(--foreground-muted)]">
                      Placeholder milestone text for what changed, what
                      mattered, and what the chapter made possible next.
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
