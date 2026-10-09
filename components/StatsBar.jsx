"use client";
import { CalendarClock, Factory, Users, Truck } from "lucide-react";
import { Reveal, Counter } from "./ui";

// card colours = our granule shades (same as the India map): PBT orange, ABS yellow, PC cyan, PBT blue
const ORANGE = { from: "#ff8048", to: "#f2561d", line: "bg-[#f2561d]", glow: "shadow-[#f2561d]/35" };
const YELLOW = { from: "#ffc94a", to: "#f4ad1a", line: "bg-[#f4ad1a]", glow: "shadow-[#f4ad1a]/35" };
const CYAN = { from: "#5fd0f3", to: "#2cb5e6", line: "bg-[#2cb5e6]", glow: "shadow-[#2cb5e6]/35" };
const ROYAL = { from: "#5a95f0", to: "#1f6fe0", line: "bg-[#1f6fe0]", glow: "shadow-[#1f6fe0]/35" };

const stats = [
  { icon: CalendarClock, to: 15, suffix: "+", label: "Years of Excellence", short: "Years of Trust", note: "Serving industry since inception", tone: ORANGE },
  { icon: Users, to: 500, suffix: "+", label: "Industrial Clients", short: "Happy Clients", note: "Brands across India", tone: CYAN },
  { icon: Factory, to: 5000, suffix: "+", unit: "MT", label: "Annual Capacity", short: "MT Capacity", note: "Twin & single screw extrusion", tone: YELLOW },
  { icon: Truck, to: 105, suffix: "+", label: "Distributors", note: "Pan-India supply network", tone: ROYAL },
];

// coloured wedge tucked into the card's top-left corner (concave edge)
function CornerAccent({ tone }) {
  return (
    <span
      aria-hidden="true"
      className="absolute left-0 top-0 h-9 w-9 sm:h-14 sm:w-14"
      style={{
        background: `linear-gradient(135deg, ${tone.from}, ${tone.to})`,
        WebkitMaskImage: "radial-gradient(circle at 100% 100%, transparent 70.5%, #000 71%)",
        maskImage: "radial-gradient(circle at 100% 100%, transparent 70.5%, #000 71%)",
      }}
    />
  );
}

// two-layer swoosh along the bottom-right corner
function Swoosh({ tone, id }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 64" preserveAspectRatio="none" className="absolute bottom-0 right-0 h-9 w-28 sm:h-12 sm:w-44">
      <defs>
        <linearGradient id={`sw-${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor={tone.from} />
          <stop offset="100%" stopColor={tone.to} />
        </linearGradient>
      </defs>
      <path d="M160 6 C 132 44, 72 60, 0 64 L160 64 Z" fill={tone.from} opacity="0.14" />
      <path d="M160 22 C 140 50, 104 60, 52 64 L160 64 Z" fill={`url(#sw-${id})`} />
    </svg>
  );
}

export default function StatsBar() {
  return (
    <section aria-label="Company at a glance" className="relative bg-white pb-6 pt-1 font-label sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-x-4 gap-y-12 px-6 pt-6 sm:grid-cols-2 sm:gap-x-5 sm:pt-8 sm:px-5 lg:grid-cols-4 lg:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} i={i} className={`h-full ${i === 3 ? "hidden sm:block" : ""}`}>
            <div className="group relative h-full rounded-2xl bg-white px-1.5 pb-5 pt-6 text-center shadow-[0_24px_50px_-28px_rgba(15,23,42,0.35)] ring-1 ring-slate-100 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_60px_-28px_rgba(15,23,42,0.45)] sm:rounded-3xl sm:px-5 sm:pb-6 sm:pt-11">
              {/* accents are clipped to the card's rounded corners */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                <CornerAccent tone={s.tone} />
                <Swoosh tone={s.tone} id={i} />
              </div>

              {/* icon badge with a white halo ring */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full bg-white p-1 shadow-[0_10px_30px_-8px_rgba(15,23,42,0.25)] sm:p-2">
                  <div
                    className={`grid h-7 w-7 place-items-center rounded-full text-white shadow-lg ${s.tone.glow} transition-transform duration-500 group-hover:scale-105 sm:h-[52px] sm:w-[52px]`}
                    style={{ background: `linear-gradient(135deg, ${s.tone.from}, ${s.tone.to})` }}
                  >
                    <s.icon className="h-3.5 w-3.5 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
                  </div>
                </div>
              </div>

              <p className="relative flex items-baseline justify-center font-display text-[1.15rem] font-semibold leading-none tracking-tight text-[#0b1530] sm:text-[2rem]">
                <Counter to={s.to} />
                <span className="ml-0.5 font-semibold" style={{ color: s.tone.to }}>{s.suffix}</span>
                {s.unit && (
                  <span className="ml-1.5 hidden font-label text-xs font-semibold tracking-wider text-slate-400 sm:inline">{s.unit}</span>
                )}
              </p>

              <p className="relative mt-1.5 text-[8px] font-semibold uppercase leading-tight tracking-[0.03em] text-[#0b1530] sm:mt-3 sm:text-[10.5px] sm:tracking-[0.24em]">
                <span className="sm:hidden">{s.short || s.label}</span>
                <span className="hidden sm:inline">{s.label}</span>
              </p>
              <span className={`relative mx-auto mt-2 hidden h-[3px] w-8 rounded-full sm:block ${s.tone.line} transition-all duration-500 group-hover:w-12 sm:mt-2.5 sm:w-10`} />
              <p className="relative mt-2 hidden text-[10.5px] leading-snug text-slate-500 sm:mt-2.5 sm:block sm:text-[13px]">{s.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
