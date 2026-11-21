"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Palette, ShieldCheck } from "lucide-react";
import { Reveal } from "./ui";

// shades shown in the bowl pyramid (/pc-colours.webp, from public/dana.png)
const shades = [
  { name: "Natural white", hex: "#f4f4f2" },
  { name: "Lime green", hex: "#a4cf2c" },
  { name: "Signal orange", hex: "#ff4a12" },
  { name: "Bright orange", hex: "#ff6a00" },
  { name: "Ruby red", hex: "#e1141b" },
  { name: "Royal blue", hex: "#1f3fcf" },
  { name: "Teal", hex: "#0f8f86" },
  { name: "Jet black", hex: "#141414" },
  { name: "Graphite grey", hex: "#3b3d40" },
];

const traits = ["High impact strength", "Heat stability", "Flame retardant grades", "Excellent transparency"];
const grades = ["PC Granules", "PC FR Grade", "PC Extrusion Grade"];

export default function PcColours() {
  const [active, setActive] = useState(null);
  const shade = active === null ? null : shades[active];

  return (
    <section id="pc-colours" className="relative overflow-hidden bg-gradient-to-b from-white via-[#f4f8ff] to-white py-16 font-label sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
        {/* ---------- copy — on mobile its parts join the flex column so the bowls sit under the paragraph ---------- */}
        <div className="contents lg:order-1 lg:block">
          <div className="order-1">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1e5eff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Custom colours</span>
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-[#0b1530] sm:text-4xl lg:text-5xl">
              Every{" "}
              {/* only "Shade" is multi-coloured — one letter per shade from the swatches */}
              <span aria-label="Shade">
                {["#e1141b", "#ff6a00", "#a4cf2c", "#0f8f86", "#1f3fcf"].map((c, i) => (
                  <span key={i} aria-hidden="true" style={{ color: c }}>
                    {"Shade"[i]}
                  </span>
                ))}
              </span>{" "}
              Matched in Our Lab
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
              Our PC, ABS and PBT granules are compounded in natural and custom colours. Share a sample or a shade
              code and our lab will match it, so your moulded parts stay true to colour from the first batch to the
              last.
            </p>
          </Reveal>
          </div>

          <div className="order-3">
          {/* swatches */}
          <Reveal i={3}>
            <div className="lg:mt-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Popular shades</p>
                <p className="h-5 text-sm font-semibold text-[#0b1530]" aria-live="polite">
                  {shade?.name}
                </p>
              </div>
              <div className="mt-3 flex flex-nowrap gap-2 sm:gap-2.5" onMouseLeave={() => setActive(null)}>
                {shades.map((s, i) => (
                  <button
                    key={s.name}
                    type="button"
                    aria-label={s.name}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`relative h-7 w-7 shrink-0 rounded-full shadow-[inset_0_-3px_6px_rgba(0,0,0,0.18),inset_0_3px_5px_rgba(255,255,255,0.45)] ring-2 transition duration-300 hover:-translate-y-1 sm:h-8 sm:w-8 ${
                      active === i ? "-translate-y-1 ring-[#0b1530] ring-offset-2" : "ring-white"
                    }`}
                    style={{ background: s.hex }}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal i={4}>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {traits.map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#1e5eff]/10 text-[#1e5eff]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-nowrap gap-1.5 sm:gap-2">
              {grades.map((g) => (
                <span key={g} className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 sm:px-3.5 sm:text-xs">
                  {g}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal i={5}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/products/pc-granules-manufacturer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1e5eff] py-2 pl-6 pr-2 font-semibold text-white shadow-xl shadow-[#1e5eff]/30 transition hover:bg-[#1847d6]"
              >
                Explore PC granules
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </Reveal>
          </div>
        </div>

        {/* ---------- visual ---------- */}
        <Reveal i={1} className="order-2 lg:order-2">
          <div className="relative">
            {/* soft glow; the photo's white background multiplies away into it */}
            <div aria-hidden="true" className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_55%,rgba(30,94,255,0.16),rgba(124,194,66,0.10)_45%,transparent_70%)] blur-2xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mix-blend-multiply"
            >
              <Image
                src="/pc-colours.webp"
                alt="Polycarbonate granules in ten colours — white, lime, orange, red, blue, teal, black and grey — in glass bowls"
                width={1536}
                height={1024}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="h-auto w-full"
              />
            </motion.div>

            {/* floating badges */}
            <div className="absolute left-0 top-[6%] hidden items-center gap-2.5 rounded-2xl border border-white bg-white/85 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur-md sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#1e5eff] to-[#1847d6] font-display text-xs font-bold text-white">
                PC
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-[#0b1530]">Polycarbonate</span>
                <span className="block text-[11px] text-slate-500">Engineering grade</span>
              </span>
            </div>
            <div className="absolute -right-1 top-[38%] hidden items-center gap-2.5 rounded-2xl border border-white bg-white/85 px-4 py-3 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur-md sm:flex sm:right-0">
              <Palette className="h-5 w-5 text-[#e1141b]" />
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-[#0b1530]">Custom shades</span>
                <span className="block text-[11px] text-slate-500">Matched in our lab</span>
              </span>
            </div>
            <div className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[#0b1f4d] px-4 py-2 text-xs font-semibold text-white shadow-xl shadow-[#0b1f4d]/30 sm:text-sm">
              <ShieldCheck className="h-4 w-4 text-[#8be04e]" /> Batch-to-batch colour consistency
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
