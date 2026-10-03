"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowDown, ShieldCheck } from "lucide-react";
import PolymerCore from "./PolymerCore";
import { Counter } from "./ui";

const materials = [
  {
    id: "pc",
    code: "PC",
    name: "Polycarbonate",
    props: ["High impact", "Transparent", "Flame retardant"],
    accent: "#38bdf8",
    colors: ["#38bdf8", "#e0f2fe", "#1e5eff", "#94a3b8"],
  },
  {
    id: "abs",
    code: "ABS",
    name: "Acrylonitrile Butadiene Styrene",
    props: ["Tough", "Insulating", "Easy to paint"],
    accent: "#facc15",
    colors: ["#facc15", "#f8fafc", "#ef4444", "#fb923c"],
  },
  {
    id: "pbt",
    code: "PBT",
    name: "Polybutylene Terephthalate",
    props: ["Stiff", "Glass-filled", "Heat resistant"],
    accent: "#f97316",
    colors: ["#94a3b8", "#f97316", "#2563eb", "#e2e8f0"],
  },
];
const palettes = Object.fromEntries(materials.map((m) => [m.id, m.colors]));

const applications = [
  "LED Panels", "Modular Switches", "Automotive Parts", "Mobile Chargers",
  "CCTV Housings", "Meter Boxes", "Junction Boxes", "Luggage Shells", "Set-top Boxes",
];



const ease = [0.22, 1, 0.36, 1];

function Line({ children, delay, className = "" }) {
  return (
    <span className="block overflow-hidden pb-2">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 1, ease }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

function MagneticLink({ children, className, href }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.a
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.25);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef(null);
  const m = materials[active];

  // auto-cycle materials
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % materials.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  // cursor spotlight
  const onMove = (e) => {
    const r = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    sectionRef.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      id="intro"
      ref={sectionRef}
      onMouseMove={onMove}
      className="hero-spotlight section-light relative flex min-h-screen flex-col overflow-hidden pt-20"
      style={{ "--accent": m.accent }}
    >
      {/* ---------- background ---------- */}
      <div className="grid-bg absolute inset-0" />
      <div className="hero-aurora absolute inset-0" />
      <div
        className="absolute right-[-10%] top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full blur-[140px] transition-colors duration-1000"
        style={{ background: `color-mix(in srgb, ${m.accent} 22%, transparent)` }}
      />
      <div className="noise pointer-events-none absolute inset-0" />
      <span className="text-outline pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-extrabold leading-none">
        POLYMER
      </span>

      {/* ---------- content ---------- */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-8 px-5 lg:grid-cols-[1.1fr_1fr] lg:gap-x-10 lg:gap-y-0">
        {/* heading — on mobile the core sits right below this */}
        <div className="min-w-0 lg:self-end">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-8 inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-4 text-xs font-medium text-gray-300"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-green px-2.5 py-1 font-semibold text-ink">
              <ShieldCheck className="h-3.5 w-3.5" /> ISO
            </span>
            9001 &amp; 14001 certified manufacturer
          </motion.div>

          <h1 className="text-[2.9rem] font-extrabold leading-[0.98] tracking-tight text-white sm:text-7xl xl:text-[5.5rem]">
            <Line delay={0.15}>Engineered</Line>
            <Line delay={0.28}>
              for <span className="text-gradient">Excellence.</span>
            </Line>
            <Line delay={0.41} className="text-stroke whitespace-nowrap text-[0.8em] font-bold">
              Molded for Life.
            </Line>
          </h1>
        </div>

        <div className="order-last min-w-0 lg:order-none lg:col-start-1 lg:row-start-2 lg:self-start">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="max-w-lg text-base lg:mt-7 leading-relaxed text-gray-400 sm:text-lg"
          >
            Precision-compounded <span className="text-white">PC, ABS &amp; PBT</span> granules for the brands that
            build India&apos;s lighting, electrical and automotive products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticLink
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-green py-2 pl-7 pr-2 font-semibold text-ink shadow-[0_0_40px_-8px] shadow-brand-green/60"
            >
              <span className="btn-shine absolute inset-0" />
              <span className="relative">Enquire Now</span>
              <span className="relative grid h-10 w-10 place-items-center rounded-full bg-ink text-brand-green transition-transform duration-300 group-hover:-rotate-45">
                <ArrowRight className="h-4 w-4" />
              </span>
            </MagneticLink>
           
          </motion.div>

          
        </div>

        {/* ---------- interactive polymer core ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.4, ease }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mx-auto aspect-square w-full mb-10 max-w-[34rem] lg:mb-0 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          {/* orbit rings */}
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle cx="200" cy="200" r="196" fill="none" stroke="rgba(11,18,32,0.08)" />
            <g className="origin-center animate-spin-slow">
              <circle cx="200" cy="200" r="178" fill="none" stroke="rgba(11,18,32,0.18)" strokeDasharray="2 10" />
              <circle cx="200" cy="22" r="4" fill={m.accent} className="transition-[fill] duration-700" />
            </g>
            <g className="orbit-reverse origin-center">
              <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(11,18,32,0.07)" />
              <circle cx="350" cy="200" r="3" fill="#7cc242" />
            </g>
          </svg>

          <PolymerCore material={m.id} palettes={palettes} />

          {/* material readout */}
          <div className="pointer-events-none absolute -top-6 left-0 lg:top-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">Material</p>
                <p className="text-4xl font-extrabold sm:text-5xl" style={{ color: m.accent }}>{m.code}</p>
                <p className="max-w-[7.5rem] text-xs leading-snug text-gray-400">{m.name}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pointer-events-none absolute bottom-16 right-0 hidden flex-col lg:flex items-end gap-2 sm:bottom-20">
            <AnimatePresence mode="popLayout">
              {m.props.map((p, i) => (
                <motion.span
                  key={m.id + p}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="glass flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1 text-xs text-gray-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: m.accent }} />
                  {p}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>

          {/* material switcher */}
          <div
            role="tablist"
            aria-label="Choose material"
            className="glass absolute -bottom-10 left-1/2 flex lg:bottom-0 -translate-x-1/2 gap-1 rounded-full p-1"
          >
            {materials.map((mat, i) => (
              <button
                key={mat.id}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`relative rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                  i === active ? "text-ink" : "text-gray-400 hover:text-white"
                }`}
              >
                {i === active && (
                  <motion.span
                    layoutId="mat-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: mat.accent }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{mat.code}</span>
                {i === active && !paused && (
                  <motion.span
                    key={`bar-${active}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute inset-x-4 bottom-1 h-0.5 origin-left rounded-full bg-ink/40"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ---------- applications ticker ---------- */}
      <div className="relative z-10 mt-12 border-y border-white/5 bg-white/[0.02] py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center">
            {[...applications, ...applications].map((a, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap pr-8 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                {a}
                <span className="h-1.5 w-1.5 rotate-45 bg-brand-green/70" />
              </span>
            ))}
          </div>
        </div>
        <a
          href="#about"
          aria-label="Scroll down"
          className="absolute -top-14 right-5 hidden h-11 w-11 place-items-center rounded-full border border-white/15 text-gray-400 transition hover:border-brand-green hover:text-brand-green md:grid"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
