import Image from "next/image";

const navItems = [
  { href: "#me", label: "Me" },
  { href: "#my-journey", label: "My Journey" },
  { href: "#connect", label: "Connect" },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-4 left-1/2 z-50 w-auto max-w-[calc(100vw-2rem)] -translate-x-1/2"
    >
      <ul className="flex items-center gap-1 rounded-full border border-black/10 bg-black/70 p-1 text-[0.8125rem] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md sm:gap-2 sm:text-sm">
        <li>
          <a
            href="#home"
            aria-label="Home"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
          >
            <Image
              src="/home-placeholder.svg"
              alt=""
              width={18}
              height={18}
              aria-hidden="true"
            />
          </a>
        </li>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block rounded-full px-3 py-2 leading-none whitespace-nowrap transition-colors duration-150 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
