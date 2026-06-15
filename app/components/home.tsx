import bgSvg from "../../public/bg.svg";
import mutedBgSvg from "../../public/bg-muted.svg";

export default function Home() {
  return (
    <div
      id="home"
      className="flex min-h-screen flex-col self-stretch justify-end leading-none"
    >
      <div
        className="flex flex-1 flex-col self-stretch justify-end leading-none bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${mutedBgSvg.src})` }}
      >
        <p className="p-[1vw] text-[4vw] text-[var(--foreground-muted)]">
          I craft apps that solve your problems.
        </p>
      </div>
      <h1
        aria-label="RODRIGO CONDE"
        className="bg-cover bg-center bg-no-repeat text-[16vw] font-bold tracking-[-0.09em] [font-stretch:75%]"
        style={{ backgroundImage: `url(${bgSvg.src})`, fontFamily: 'Arial' }}
      >
        RODRIGO CONDE
      </h1>
    </div>
  );
}
