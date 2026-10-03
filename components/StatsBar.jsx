"use client";
import Image from "next/image";
import { CalendarClock, Factory, Users, Truck } from "lucide-react";
import { Reveal, Counter } from "./ui";

const BLUE = { badge: "from-[#3b82f6] to-[#1e4fd8]", glow: "shadow-[#2563eb]/40", line: "bg-[#2563eb]", halo: "rgba(37,99,235,.18)" };
const GREEN = { badge: "from-[#86d04f] to-[#3f9a1f]", glow: "shadow-[#4caf27]/40", line: "bg-[#4caf27]", halo: "rgba(76,175,39,.18)" };

const stats = [
  { icon: CalendarClock, to: 15, suffix: "+", label: "Years of Excellence", note: "Serving industry since inception", tone: BLUE },
  { icon: Factory, to: 5000, suffix: "+", unit: "MT", label: "Annual Capacity", note: "Twin & single screw extrusion", tone: GREEN },
  { icon: Users, to: 500, suffix: "+", label: "Industrial Clients", note: "Brands across India", tone: BLUE },
  { icon: Truck, to: 105, suffix: "+", label: "Distributors", note: "Pan-India supply network", tone: GREEN },
];

export default function StatsBar() {
  return (
    <section aria-label="Company at a glance" className="relative overflow-hidden py-12 font-label sm:py-14">
      {/* soft photographic backdrop */}
      <Image
        src="/desktopbanner2.webp"
        alt=""
        fill
        sizes="100vw"
        className="scale-110 object-cover opacity-60 blur-xl brightness-125 saturate-150"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#f5f9fd]/70 to-white/85" />
      <div className="absolute -bottom-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-r from-[#7cc242]/20 via-[#1e5eff]/10 to-[#7cc242]/20 blur-2xl" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-x-3 gap-y-10 px-4 pt-6 sm:gap-x-4 sm:px-5 lg:grid-cols-4 lg:gap-5">
        {stats.map((s, i) => (
          <Reveal key={s.label} i={i} className="h-full">
            <div className="group relative h-full rounded-2xl border border-white bg-white/70 px-2.5 pb-4 pt-9 text-center shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.35)] sm:px-4 sm:pb-5 sm:pt-10">
              {/* curved glow behind the badge */}
              <div
                className="pointer-events-none absolute inset-x-6 top-0 h-8 rounded-b-[100%]"
                style={{ background: `radial-gradient(60% 100% at 50% 0%, ${s.tone.halo}, transparent 70%)` }}
              />

              {/* icon badge */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                <div className="rounded-full bg-white/80 p-1 shadow-lg shadow-slate-900/10 ring-1 ring-white backdrop-blur">
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${s.tone.badge} text-white shadow-lg ${s.tone.glow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-[52px] sm:w-[52px]`}
                  >
                    <s.icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                  </div>
                </div>
              </div>

              <p className="flex items-baseline justify-center font-serif text-[1.75rem] font-semibold leading-none tracking-tight text-[#0b1530] sm:text-4xl">
                <Counter to={s.to} />
                <span className="ml-0.5 font-medium text-[#4caf27]">{s.suffix}</span>
                {s.unit && (
                  <span className="ml-1 font-label text-[9px] font-bold tracking-wider text-slate-400 sm:text-xs">{s.unit}</span>
                )}
              </p>

              <p className="mt-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#0b1530] sm:text-[11px] sm:tracking-[0.2em]">
                {s.label}
              </p>
              <span className={`mx-auto mt-2.5 block h-0.5 w-8 rounded-full ${s.tone.line} transition-all duration-500 group-hover:w-12`} />
              <p className="mt-2.5 text-[11px] leading-snug text-slate-500 sm:text-xs">{s.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
