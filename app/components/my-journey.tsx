const journeyStats = [
  { value: "7+", label: "Years in the industry" },
  { value: "20+", label: "Completed projects" },
  { value: "3", label: "Professional certifications" },
  { value: "7+", label: "Years of building software" },
];

const accentColors = [
  {
    color: "var(--brand-yellow)",
    tintedColor: "color-mix(in srgb, var(--brand-yellow) 24%, white)",
  },
  {
    color: "var(--brand-red)",
    tintedColor: "color-mix(in srgb, var(--brand-red) 20%, white)",
  },
  {
    color: "var(--brand-blue)",
    tintedColor: "color-mix(in srgb, var(--brand-blue) 18%, white)",
  },
  {
    color: "var(--brand-green)",
    tintedColor: "color-mix(in srgb, var(--brand-green) 22%, white)",
  },
];

const journeyTimeline = [
  {
    year: "1998",
    title: "All started here",
    subtitle: "Montevideo, Uruguay",
    description:
      "A random day of September, I was born.",
  },
  {
    year: "2017",
    title: "Started my Bachelors",
    subtitle: "Universidad de la República",
    description:
      "Began my journey in software engineering, building the foundations that would later shape my career in product development and technical leadership.",
  },
  {
    year: "2019",
    title: "Built \"A Quién Voto?\"",
    subtitle: "Personal Project",
    description:
      "Created a web platform to help Uruguayan voters compare political candidates and proposals during the national elections.",
  },
  {
    year: "2019",
    title: "My first job",
    subtitle: "Software Development @ Urudata Software",
    description:
      "Started my professional career working on enterprise software, learning from experienced engineers and shipping solutions used by real customers.",
  },
  {
    year: "2022",
    title: "Completed Computer Engineering Degree",
    subtitle: "Universidad de la República",
    description:
      "Graduated after combining full-time professional experience with university studies.",
  },
  {
    year: "2023",
    title: "Published a Research Paper",
    subtitle: "AIMS Journal of Dynamics and Games",
    description:
      "Published research work focused on software engineering and computer science topics.",
  },
  {
    year: "2023",
    title: "Microsoft Certified: Azure Developer Associate",
    subtitle: "AZ-204",
    description:
      "Validated expertise in designing, building, testing and maintaining cloud applications on Microsoft Azure.",
  },
  {
    year: "2024",
    title: "Promoted to Tech Lead",
    subtitle: "Urudata Software",
    description:
      "Began leading development teams, mentoring engineers, defining technical direction, and driving product modernization initiatives.",
  },
  {
    year: "2025",
    title: "Microsoft Certified: Azure AI Engineer Associate",
    subtitle: "AI-102",
    description:
      "Expanded expertise into applied artificial intelligence, generative AI, and intelligent cloud solutions.",
  },
  {
    year: "2026",
    title: "Evidence-Based Management Professional Certification",
    subtitle: "Scrum.org's EBM-PAL",
    description:
      "Deepened knowledge of product strategy, value delivery, and evidence-based decision making.",
  },
].map((entry, index) => ({
  ...entry,
  ...accentColors[index % accentColors.length],
  side: index % 2 === 1 ? ("right" as const) : ("left" as const),
}));

export default function MyJourney() {
  return (
    <section
      id="my-journey"
      className="flex w-full justify-center px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="flex w-full max-w-6xl flex-col gap-14 sm:gap-18">
        <div className="flex flex-col gap-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand-blue)]">
              My Journey
            </p>
            <h2 className="mt-3 text-5xl leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              An adventure of growth & tech
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-muted)] sm:text-xl">
              After 9855 days, i have gone through challenges, learning, some tight spots and some big wins, but i have the same willingness and more power than ever.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-black/10 sm:left-5 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="flex flex-col gap-4 sm:gap-5">
            {journeyTimeline.map((entry, index) => {
              const isRight = entry.side === "right";

              return (
                <article
                  key={`${entry.year}-${entry.title}`}
                  className="relative grid pl-12 sm:pl-16 lg:grid-cols-2 lg:gap-14 lg:pl-0"
                >
                  <div
                    className="absolute top-5 left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-[4px] border-[var(--background)] sm:left-5 lg:left-1/2"
                    style={{ backgroundColor: entry.color }}
                  />

                  <div
                    className={`lg:row-start-1 ${isRight ? "lg:col-start-2" : "lg:col-start-1"
                      }`}
                  >
                    <div
                      tabIndex={0}
                      className="group relative overflow-hidden rounded-[1.5rem] border p-4 shadow-[0_14px_34px_rgba(25,25,25,0.07)] outline-none transition-all duration-300 hover:shadow-[0_20px_48px_rgba(25,25,25,0.1)] focus-visible:shadow-[0_20px_48px_rgba(25,25,25,0.1)] focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] sm:p-5"
                      style={{
                        backgroundColor: entry.tintedColor,
                        borderColor: entry.color,
                      }}
                    >
                      <div className="flex flex-col gap-3">
                        <div
                          className={`flex items-start justify-between gap-4 ${isRight ? "" : "flex-row-reverse"
                            }`}
                        >
                          <div
                            className={`min-w-0 ${isRight ? "text-left" : "text-right"
                              }`}
                          >
                            <span
                              className="inline-flex rounded-full px-2.5 py-1 text-xs font-semibold leading-none text-[var(--background)]"
                              style={{ backgroundColor: entry.color }}
                            >
                              {entry.year}
                            </span>
                            <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">
                              {entry.title}
                            </h3>
                          </div>

                          <span className="mt-1 shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/65">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <p
                          className={`text-sm leading-5 text-[var(--foreground-muted)] sm:text-base ${isRight ? "text-left" : "text-right"
                            }`}
                        >
                          {entry.subtitle}
                        </p>

                        <p
                          className={`max-h-0 overflow-hidden text-sm leading-6 text-[var(--foreground)]/85 opacity-0 transition-all duration-300 group-hover:mt-1 group-hover:max-h-40 group-hover:opacity-100 group-focus:mt-1 group-focus:max-h-40 group-focus:opacity-100 sm:text-base ${isRight ? "text-left" : "text-right"
                            }`}
                        >
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="relative flex justify-center pl-12 sm:pl-16 lg:pl-0">
              <div className="absolute top-3 left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-[4px] border-[var(--background)] bg-[var(--foreground)] sm:left-5 lg:left-1/2" />
              <p className="pt-8 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[var(--foreground)]/65">
                Today
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journeyStats.map((stat, index) => (
            <article
              key={stat.label}
              className="flex min-h-40 flex-col justify-center gap-5 rounded-[1.75rem] border border-black/8 bg-white/35 p-5 text-center shadow-[0_16px_36px_rgba(25,25,25,0.08)] backdrop-blur-sm sm:min-h-44"
              style={{
                borderTopColor: accentColors[index % accentColors.length].color,
              }}
            >
              <p
                className="text-center text-5xl font-semibold leading-none tracking-[-0.08em] sm:text-6xl"
                style={{ color: accentColors[index % accentColors.length].color }}
              >
                {stat.value}
              </p>
              <p className="text-sm leading-6 text-[var(--foreground-muted)]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
