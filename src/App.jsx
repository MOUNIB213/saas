import { useState } from 'react';
import { ArrowUpRight, Code, Terminal, X } from 'lucide-react';

const navLinks = ['About Me', 'Services', 'Portfolio', 'Contact'];

const techStack = [
  {
    value: 'FULL-STACK',
    label: 'JavaScript, TypeScript, Node.js',
  },
  {
    value: 'FRONTEND',
    label: 'React, Next.js, Tailwind CSS',
  },
  {
    value: 'BACKEND & ARCHITECTURE',
    label: 'REST APIs, Databases & Cloud',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* ───── Background Video ───── */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ───── Dark Overlay ───── */}
      <div className="absolute inset-0 z-[1] bg-black/55" />

      {/* ───── Foreground Content ───── */}
      <div className="relative z-10 flex h-full flex-col">
        {/* ── Navbar ── */}
        <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          {/* Brand */}
          <a
            href="#"
            className="font-podium text-xl font-bold uppercase tracking-wider text-white sm:text-2xl"
          >
            MOUNIB KHALDI
          </a>

          {/* Desktop Nav Links (hidden below md) */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-inter text-sm uppercase tracking-widest text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA (hidden below md) */}
          <a
            href="#"
            className="group hidden items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-all hover:border-white/60 hover:bg-white/10 md:inline-flex"
          >
            GET IN TOUCH
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Hamburger (visible below md) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col space-y-1.5 md:hidden"
            aria-label="Open menu"
          >
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-4 bg-white" />
          </button>
        </nav>

        {/* ── Hero Content (vertically centered) ── */}
        <div className="flex flex-1 items-center px-6 sm:px-10 lg:px-16">
          <div className="w-full max-w-4xl">
            {/* Tagline */}
            <div className="animate-fade-up mb-6 flex items-center gap-2 lg:mb-8">
              <Terminal className="h-4 w-4 text-white/70" />
              <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
                Software Engineer & Web Architect
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight text-white">
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">
                Develop.
              </span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">
                Optimize.
              </span>
              <span className="block text-[clamp(2.8rem,8vw,7rem)]">
                Scale.
              </span>
            </h1>

            {/* Subtext */}
            <p className="animate-fade-up-delay-2 mt-6 max-w-xl font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
              I am Mounib Khaldi, a passionate Software Engineer specializing in
              crafting high-performance digital solutions.
              <br />I build clean, robust, and scalable systems that drive —{' '}
              <strong className="text-white">digital success.</strong>
            </p>

            {/* CTA & Services Row */}
            <div className="animate-fade-up-delay-3 mt-8 flex items-center gap-6 lg:mt-10">
              <a
                href="#"
                className="group inline-flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs"
              >
                EXPLORE MY WORK
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="hidden items-center gap-3 sm:flex">
                <Code className="h-8 w-8 text-white/50" />
                <span className="font-inter text-xs uppercase tracking-wider text-white/60">
                  Web & App Development / Landing Pages
                </span>
              </div>
            </div>

            {/* Tech Stack Row */}
            <div className="animate-fade-up-delay-4 mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-3 sm:gap-8 lg:mt-14">
              {techStack.map((item) => (
                <div key={item.value}>
                  <div className="font-inter text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ───── Mobile Menu Overlay ───── */}
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm transition-all duration-500 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <span className="font-podium text-xl font-bold uppercase tracking-wider text-white sm:text-2xl">
            MOUNIB KHALDI
          </span>
          <button onClick={closeMenu} aria-label="Close menu">
            <X className="h-7 w-7 text-white" />
          </button>
        </div>

        {/* Mobile menu links */}
        <div className="flex flex-1 flex-col items-center justify-center gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={closeMenu}
              className="font-podium text-4xl uppercase text-white transition-all duration-500 ease-out sm:text-5xl"
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            onClick={closeMenu}
            className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-all duration-500 ease-out hover:border-white/60 hover:bg-white/10"
            style={{
              transitionDelay: `${4 * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            GET IN TOUCH
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
            }
