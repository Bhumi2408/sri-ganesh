"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronsLeftRight } from "lucide-react";
import { Reveal } from "./ui";

// Granule close-ups are cropped from the product photos; parts are applications listed in lib/products.js.
const pairs = [
  { code: "PC", slug: "pc", accent: "#1e5eff", before: "pc-white", after: "led", part: "LED Panels & Downlights" },
  { code: "PC", slug: "pc", accent: "#1e5eff", before: "pc-grey", after: "meter", part: "Meter Boxes" },
  { code: "ABS", slug: "abs", accent: "#e11d48", before: "abs-white", after: "gangbox", part: "Modular Gang Boxes" },
  { code: "ABS", slug: "abs", accent: "#e11d48", before: "abs-black", after: "setupbox", part: "Set-top Boxes" },
  { code: "PBT", slug: "pbt", accent: "#4caf27", before: "pbt-grey", after: "mcb", part: "MCB Housings" },
  { code: "PBT", slug: "pbt", accent: "#4caf27", before: "pbt-black", after: "lamp", part: "Lamp Holders" },
];

const src = (name) => `/transformation/${name}.webp`;

// Before/after slider: granules on the left, the moulded part on the right.
function Compare({ p }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="group relative aspect-[4/3] select-none overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
      {/* the part sits in the right half so it is fully visible at the default split */}
      <div className="absolute inset-y-0 left-1/2 right-0">
        <Image src={src(p.after)} alt={p.part} fill sizes="(min-width: 1024px) 200px, (min-width: 640px) 25vw, 50vw" className="object-contain p-4 sm:p-5" />
      </div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={src(p.before)} alt={`${p.code} granules`} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>

      {/* divider + handle */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.15)]" style={{ left: `${pos}%` }}>
        <span
          className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-white shadow-lg ring-4 ring-white/60 transition-transform duration-300 group-hover:scale-110"
          style={{ background: p.accent }}
        >
          <ChevronsLeftRight className="h-5 w-5" />
        </span>
      </div>

      <span className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-[#0b1530]/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
        Granules
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-lg bg-[#0b1530]/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
        Finished part
      </span>

      {/* invisible range input drives the slider — works with mouse, touch and keyboard */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare ${p.code} granules with ${p.part}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        style={{ touchAction: "pan-y" }}
      />
    </div>
  );
}

export default function Transformation() {
  return (
    <section id="transformation" className="relative bg-white py-20 font-label sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-[#1e5eff] sm:w-10" />
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.2em] text-[#1e5eff] sm:tracking-[0.3em]">Quality transformation</span>
              <span className="h-px w-6 bg-[#1e5eff] sm:w-10" />
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl lg:text-5xl">
              From granule to{" "}
              <span className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text text-transparent">finished part.</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-4 leading-relaxed text-slate-600">Drag the slider to see what our PC, ABS and PBT granules become.</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {pairs.map((p, i) => (
            <Reveal key={p.before} i={(i % 3) * 0.5}>
              <Compare p={p} />
              <Link href={`/products/${p.slug}`} className="mt-4 flex items-center justify-center gap-2.5 text-center">
                <span className="rounded-md px-2 py-0.5 text-xs font-semibold text-white" style={{ background: p.accent }}>
                  {p.code}
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0b1530]">{p.part}</h3>
              </Link>
              <span className="mx-auto mt-2.5 block h-[3px] w-10 rounded-full" style={{ background: p.accent }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
