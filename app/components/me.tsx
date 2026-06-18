const meCards = [
  { title: "Prepared", body: "I have a bachelors degree in Computer Engineering and multiple Microsoft and SCRUM certifications.", color: "var(--brand-yellow)" },
  { title: "Up to date", body: "I'm knowledgeable of current AI and cloud technologies.", color: "var(--brand-red)" },
  { title: "Best of both worlds", body: "I have a hybrid profile: hands-on leader & business atuned engineer.", color: "var(--brand-blue)" },
  { title: "A bit of everything", body: "I have experience leading, analysing, designing, building, and deploying complex software systems in critical environments.", color: "var(--brand-green)" },
];

export default function Me() {
  return (
    <section
      id="me"
      className="flex w-full justify-center px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="flex w-full max-w-6xl flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--foreground-muted)]">
            Me
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Four quick facts.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {meCards.map((card) => (
            <article
              key={card.title}
              className="min-h-56 rounded-[2rem] p-6 shadow-[0_18px_40px_rgba(25,25,25,0.12)] sm:min-h-64 sm:p-8"
              style={{ backgroundColor: card.color }}
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)]/75">
                  {card.title}
                </p>
                <p className="max-w-[14ch] text-3xl font-bold leading-tight tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
