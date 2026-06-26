import bgSvg from "../../public/bg.svg";
import mutedBgSvg from "../../public/bg-muted.svg";
import HomeTypingLine from "./home-typing-line";

export default function Home() {
  return (
    <div
      id="home"
      className="flex min-h-screen flex-col self-stretch justify-end leading-none pb-0"
    >
      <div
        className="flex flex-1 flex-col self-stretch justify-end leading-none bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${mutedBgSvg.src})` }}
      >
        <p className="min-h-[12vw] text-[5vw] text-[var(--foreground-muted)] sm:min-h-0 p-[1vw] sm:text-[4vw] leading-none">
          <HomeTypingLine />
        </p>
      </div>
      <h1
        aria-label="RODRIGO CONDE" 
        className="bg-cover bg-center bg-no-repeat pb-[27vw] sm:pb-0 text-[27vw] font-bold tracking-[-0.09em] [font-stretch:75%] sm:text-[16vw]"
        style={{ backgroundImage: `url(${bgSvg.src})`, fontFamily: 'Arial' }}
      >
        RODRIGO CONDE
      </h1>
    </div>
  );
}
