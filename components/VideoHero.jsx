"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ChevronRight, ShieldCheck, Gem, Thermometer } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];
const up = (d) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: d, duration: 0.8, ease },
});

// little pellet cluster used in the grade chips
function Pellets({ color }) {
  const dots = [
    [5, 9],
    [11, 9],
    [17, 9],
    [8, 4],
    [14, 4],
    [8, 14],
    [14, 14],
  ];
  return (
    <svg viewBox="0 0 22 18" className="h-[14px] w-[17px] sm:h-[18px] sm:w-[22px]" aria-hidden="true">
      <defs>
        <radialGradient id={`p-${color}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="45%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.75" />
        </radialGradient>
      </defs>
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.2" fill={`url(#p-${color})`} />
      ))}
    </svg>
  );
}

const grades = [
  { code: "PC", color: "#e2e8f0" },
  { code: "ABS", color: "#3b82f6" },
  { code: "PBT", color: "#4caf27" },
];

const highlights = [
  { icon: Gem, title: "High strength", sub: "for demanding applications", color: "text-[#3b82f6]" },
  { icon: Thermometer, title: "Heat resistant", sub: "stable in extreme conditions", color: "text-[#7cc242]" },
  { icon: ShieldCheck, title: "Electrical grade", sub: "trusted for critical use", color: "text-[#3b82f6]" },
];

// Only the video for the current screen size is downloaded.
function useHeroVideo() {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const pick = () => setSrc(mq.matches ? "/herovideo.mp4" : "/herovideo-mobile.mp4");
    pick();
    mq.addEventListener("change", pick);
    return () => mq.removeEventListener("change", pick);
  }, []);
  return src;
}

export default function VideoHero() {
  const video = useHeroVideo();
  return (
    <section
      id="top"
      className="relative flex flex-col overflow-hidden bg-[#0a1630] pt-[97px] font-label sm:min-h-[78svh] sm:flex-row sm:items-center md:min-h-[82vh] md:pt-[137px] lg:min-h-[calc(137px+45.5vw)]"
    >
      {/* mobile: landscape video block above the text; sm+: full-bleed background */}
      <div className="relative aspect-[32/15] w-full sm:absolute sm:inset-0 sm:aspect-auto">
      {/* background video — muted + playsInline is required for autoplay on mobile */}
      {/* poster shows instantly; the matching video loads on top of it */}
      <picture aria-hidden="true">
        <source media="(min-width: 640px)" srcSet="/herovideo-poster.webp" />
        <img
          src="/herovideo-mobile-poster.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      {video && (
        <video
          key={video}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      )}

      {/* mobile: soft fade from the video into the navy text area below */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent to-[#0a1630] sm:hidden" />
      {/* desktop: navy wash on the left only */}
      <div className="absolute inset-0 hidden sm:block sm:bg-[#0a1630]/35 md:bg-transparent md:bg-[linear-gradient(90deg,rgba(9,22,52,.78)_0%,rgba(9,22,52,.5)_25%,rgba(9,22,52,.12)_48%,rgba(9,22,52,0)_62%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-8 pt-5 sm:px-5 sm:py-8 md:py-14 lg:max-w-none lg:px-[3.4vw] lg:py-[3vw]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease }}
          className="relative isolate max-w-[50rem] px-1 py-0 sm:p-9 lg:w-[max(51.7vw,600px)] lg:max-w-none lg:px-[2.8vw] lg:pb-[2.4vw] lg:pt-[2.2vw]"
        >
          {/* glass layer — masked so tint, border and blur dissolve into the video on the right */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 hidden rounded-[1.75rem] border border-white/25 sm:block bg-[linear-gradient(100deg,rgba(16,34,76,.72)_0%,rgba(16,34,76,.5)_45%,rgba(16,34,76,.15)_80%,rgba(16,34,76,0)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,.14)] backdrop-blur-[2px] lg:rounded-[1.9vw] lg:[mask-image:linear-gradient(90deg,#000_0%,#000_50%,rgba(0,0,0,.6)_75%,transparent_100%)]"
          />
          <motion.div
            {...up(0.15)}
            className="hidden items-center gap-2.5 rounded-full border border-[#7cc242]/60 bg-[linear-gradient(90deg,rgba(76,175,39,.28),rgba(255,255,255,.06))] whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.04em] text-white sm:inline-flex sm:py-1.5 sm:pl-2 sm:pr-3 sm:text-[13px] sm:tracking-[0.04em] lg:h-[max(2.6vw,34px)] lg:gap-[0.9vw] lg:pl-[0.9vw] lg:pr-[1.1vw] lg:text-[max(0.8vw,11px)]"
          >
            <ShieldCheck className="h-5 w-5 fill-[#5cc23a] sm:h-6 sm:w-6 text-[#0b1f3f] lg:h-[1.6vw] lg:w-[1.6vw]" strokeWidth={2} />
            ISO 9001 &amp; 14001 certified manufacturer
            <ChevronRight className="h-3.5 w-3.5 text-white/70 lg:h-[1vw] lg:w-[1vw]" />
          </motion.div>

          <motion.h1
            {...up(0.25)}
            className="mt-0 whitespace-nowrap text-[clamp(1.35rem,6.6vw,1.75rem)] font-extrabold leading-[1.15] sm:whitespace-normal sm:leading-[1.08] tracking-[-0.03em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.35)] sm:mt-6 sm:text-5xl sm:drop-shadow-none lg:mt-[1.6vw] lg:whitespace-nowrap lg:text-[4.4vw] lg:leading-[1.04]"
          >
            Engineering Polymers,
            <br />
            <span className="bg-gradient-to-r from-[#3b82f6] via-[#22c3e6] to-[#86e04a] bg-clip-text text-transparent">
              Built to Last.
            </span>
          </motion.h1>

          <motion.p {...up(0.35)} className="mt-3 max-w-[40rem] text-[14.5px] leading-relaxed text-white/85 sm:mt-5 sm:text-white/90 sm:text-[1.3rem] sm:leading-[1.4] lg:mt-[1.5vw] lg:max-w-[max(36vw,420px)] lg:text-[max(1.3vw,16px)] lg:leading-[1.3]">
            Premium PC, ABS &amp; PBT granules for India&apos;s leading manufacturers. Consistent quality. Reliable
            supply. Stronger products for a better tomorrow.
          </motion.p>

          <motion.div {...up(0.45)} className="mt-4 flex sm:mt-6 flex-wrap items-center gap-2 sm:gap-2.5 lg:mt-[1.3vw] lg:gap-[0.75vw]">
            {grades.map((g) => (
              <span
                key={g.code}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.05))] py-1.5 pl-2.5 pr-3.5 text-[13px] font-medium text-white backdrop-blur-sm sm:gap-2 sm:backdrop-blur-none sm:py-2 sm:pl-3.5 sm:pr-5 sm:text-base lg:h-[max(2.5vw,36px)] lg:gap-[0.7vw] lg:py-0 lg:pl-[0.8vw] lg:pr-[1.2vw] lg:text-[max(0.95vw,14px)]"
              >
                <Pellets color={g.color} />
                {g.code}
              </span>
            ))}
          </motion.div>

          <motion.div {...up(0.55)} className="mt-6 flex sm:mt-7 flex-wrap items-center gap-2.5 sm:gap-3 lg:mt-[1.7vw] lg:gap-[1.3vw]">
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-[#06122e] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white sm:gap-4 sm:py-2 sm:pl-7 sm:pr-2 sm:text-base shadow-xl shadow-black/30 transition hover:bg-[#0b1d45] sm:text-lg lg:h-[max(4vw,50px)] lg:gap-[1.1vw] lg:py-0 lg:pl-[2vw] lg:pr-[0.55vw] lg:text-[max(1.15vw,15px)]"
            >
              Explore products
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#8be04e] sm:h-10 sm:w-10 text-[#06122e] transition-transform duration-300 group-hover:rotate-45 sm:h-11 sm:w-11 lg:h-[max(2.85vw,38px)] lg:w-[max(2.85vw,38px)]">
                <ArrowUpRight className="h-4 w-4 lg:h-[1.2vw] lg:w-[1.2vw]" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="group hidden items-center gap-4 rounded-full border border-white/50 bg-white/[0.06] px-8 font-semibold text-white sm:inline-flex transition hover:border-white hover:bg-white/10 sm:py-4 sm:text-lg lg:h-[max(4vw,50px)] lg:gap-[1.1vw] lg:px-[2.3vw] lg:py-0 lg:text-[max(1.15vw,15px)]"
            >
              Get a quote
              <ArrowRight className="h-4 w-4 lg:h-[1.2vw] lg:w-[1.2vw] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.ul
            {...up(0.7)}
            className="mt-8 hidden gap-3 border-t border-white/20 pt-6 sm:flex sm:gap-0 sm:divide-x sm:divide-white/20 lg:mt-[2vw] lg:pt-[1.5vw]"
          >
            {highlights.map((h) => (
              <li key={h.title} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 sm:px-6 sm:first:pl-0 lg:gap-[0.9vw] lg:px-[1.5vw]">
                <h.icon className={`h-6 w-6 shrink-0 sm:h-7 sm:w-7 lg:h-[1.9vw] lg:w-[1.9vw] ${h.color}`} strokeWidth={1.75} />
                <span className="leading-tight">
                  <span className="block text-xs font-medium text-white sm:text-[15px] lg:text-[max(0.92vw,13px)]">{h.title}</span>
                  <span className="mt-0.5 hidden whitespace-nowrap text-xs text-white/75 sm:block lg:text-[max(0.75vw,11px)]">{h.sub}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
