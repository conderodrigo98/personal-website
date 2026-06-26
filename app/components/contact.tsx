export default function Contact() {
  return (
    <section
      id="connect"
      className="flex w-full justify-center px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="flex w-full max-w-6xl flex-col items-center gap-6 text-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--foreground-muted)]">
            Contact
          </p>
          <h2 className="mt-3 text-5xl leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Start the conversation.
          </h2>
        </div>

        <a
          href="mailto:conderodrigo98@gmail.com"
          className="brand-rotate-button inline-flex min-h-16 items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-[var(--background)] shadow-[0_20px_60px_rgba(25,25,25,0.18)] transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--foreground)] sm:min-h-20 sm:px-12 sm:text-2xl"
        >
          CLICK HERE
        </a>

        <p className="max-w-[24ch] text-sm leading-6 text-[var(--foreground-muted)] sm:text-base">
          Let&apos;s do things together.
        </p>
      </div>
    </section>
  );
}
