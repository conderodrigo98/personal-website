import bgSvg from "../../public/bg.svg";
import mutedBgSvg from "../../public/bg-muted.svg";
import HomeTypingLine from "./home-typing-line";
import HomeTitle from "./home-title";

export default function Home() {
  return (
    <div
      id="home"
      className="flex min-h-[100svh] flex-col self-stretch justify-end leading-none pb-0"
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
    </div>
  );
}
