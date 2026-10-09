"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb, Plug, Settings, Monitor } from "lucide-react";
import { Reveal } from "./ui";

// Every application listed on the product pages (lib/products.js), grouped into four —
// the same industries named on the About page.
const BLUE = { solid: "#1e5eff", soft: "#dbe7ff", deep: "#1847d6" };
const GREEN = { solid: "#22a447", soft: "#dcf3d9", deep: "#168a36" };

const applications = [
  {
    title: "LED & Lighting",
    text: "LED panels, battens, GU10 & LED bulb bodies, B22 caps and lamp holders",
    img: "/applications/browse/lighting.webp",
    icon: Lightbulb,
    grades: ["PC", "PBT"],
    href: "/products/pc",
    tone: BLUE,
  },
  {
    title: "Electrical & Switchgear",
    text: "Modular switches & sockets, plugs, MCB housings, terminal blocks and connectors",
    img: "/applications/browse/switches.webp",
    icon: Plug,
    grades: ["PC", "ABS", "PBT"],
    href: "/products/pbt",
    tone: GREEN,
  },
  {
    title: "Meters & Enclosures",
    text: "Meter boxes, junction boxes and modular gang boxes",
    img: "/applications/browse/meter.webp",
    icon: Settings,
    grades: ["PC", "ABS"],
    href: "/products/pc",
    tone: BLUE,
  },
  {
    title: "Consumer Electronics & Goods",
    text: "Chargers, CCTV housings, set-top boxes, keyboards and luggage shells",
    img: "/applications/browse/electronics.webp",
    icon: Monitor,
    grades: ["PC", "ABS"],
    href: "/products/abs",
    tone: GREEN,
  },
];

export default function Applications() {
  return (
    <section id="applications" className="relative bg-[#fbfcfe] py-14 font-label sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="mx-auto max-w-7xl px-5">
        {/* ---------- heading ---------- */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#1e5eff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Applications</span>
              <span className="h-px w-10 bg-[#1e5eff]" />
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-[#0b1530] sm:text-4xl lg:text-5xl">
              Browse by{" "}
              <span className="bg-gradient-to-r from-[#1e5eff] via-[#16a3c4] to-[#4caf27] bg-clip-text text-transparent">
                application.
              </span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Where our PC, ABS and PBT granules end up — find the right grade for the part you mould.
            </p>
          </Reveal>
        </div>

        {/* ---------- cards ---------- */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {applications.map((a, i) => (
            <Reveal key={a.title} i={i * 0.5} className="h-full">
              <Link
                href={a.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]"
              >
                {/* visual */}
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                  {/* soft curved wash + dot texture, top-right */}
                  <div
                    aria-hidden="true"
                    className="absolute -right-[30%] -top-[25%] h-[115%] w-[95%] rounded-full opacity-90"
                    style={{ background: `radial-gradient(circle at 30% 60%, ${a.tone.soft} 0%, ${a.tone.soft}99 45%, transparent 72%)` }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-3 right-4 h-24 w-28 opacity-50 [background-size:9px_9px] [mask-image:radial-gradient(circle,black,transparent_70%)]"
                    style={{ backgroundImage: `radial-gradient(${a.tone.solid}40 1px, transparent 1.2px)` }}
                  />

                  <span
                    className="absolute left-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white shadow-[0_10px_24px_-10px_rgba(15,23,42,0.35)] ring-1 ring-slate-100 sm:h-14 sm:w-14"
                    style={{ color: a.tone.solid }}
                  >
                    <a.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>

                  <Image
                    src={a.img}
                    alt={`${a.title} — ${a.text}`}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain px-6 pb-2 pt-8 drop-shadow-[0_18px_20px_rgba(15,23,42,0.18)] transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
                  <h3 className="font-display text-lg font-bold leading-snug text-[#0b1530] sm:text-xl">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{a.text}</p>

                  <div className="mt-auto flex items-center gap-2.5 pt-6">
                    <div className="flex shrink-0 gap-1.5">
                      {a.grades.map((g) => (
                        <span
                          key={g}
                          className="rounded-full bg-[#eef3ff] px-3 py-1.5 text-xs font-bold tracking-wide text-[#1e3a8a]"
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                    {/* fading lead-in line to the arrow */}
                    <span
                      aria-hidden="true"
                      className="h-[2px] min-w-4 flex-1 rounded-full"
                      style={{ background: `linear-gradient(90deg, transparent, ${a.tone.solid}55)` }}
                    />
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-white sm:h-12 sm:w-12 transition-transform duration-300 group-hover:translate-x-1"
                      style={{
                        background: `linear-gradient(135deg, ${a.tone.solid}, ${a.tone.deep})`,
                        boxShadow: `0 12px 24px -10px ${a.tone.solid}`,
                      }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
