import bgSvg from "../../public/bg.svg";
import mutedBgSvg from "../../public/bg-muted.svg";
import HomeTypingLine from "./home-typing-line";
import HomeTitle from "./home-title";

export default function Home() {
  return (
    <div
      id="home"
      className="relative flex min-h-[100svh] flex-col self-stretch justify-end leading-none pb-0"
    >
      <div
        className="flex flex-1 flex-col self-stretch justify-end leading-none bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${mutedBgSvg.src})` }}
      >
        <p className="min-h-[3.5rem] text-[1.5rem] text-[var(--foreground-muted)] sm:min-h-0 p-[1vw] sm:text-[4rem] leading-none">
          <HomeTypingLine />
        </p>
      </div>
      <HomeTitle
        backgroundImageUrl={bgSvg.src}
        className="overflow-hidden bg-cover bg-center bg-no-repeat pb-[62%] sm:pb-0"
        text="RODRIGO CONDE"
      />
      <a
        href="#me"
        aria-label="Scroll down to the next section"
        className="scroll-chevron absolute flex h-11 w-11 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--background)_38%,transparent)] bg-[color:color-mix(in_srgb,var(--foreground)_74%,transparent)] text-[var(--background)] shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[3px] sm:hidden"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </div>
  );
}
