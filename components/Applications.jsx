"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";

// Every application listed on the product pages (lib/products.js), grouped into four —
// the same industries named on the About page.
const applications = [
  {
    title: "LED & Lighting",
    text: "LED panels, battens, GU10 & LED bulb bodies, B22 caps and lamp holders",
    img: "/applications/browse/lighting.webp",
    grades: ["PC", "PBT"],
    href: "/products/pc",
  },
  {
    title: "Electrical & Switchgear",
    text: "Modular switches & sockets, plugs, MCB housings, terminal blocks and connectors",
    img: "/applications/browse/switches.webp",
    grades: ["PC", "ABS", "PBT"],
    href: "/products/pbt",
  },
  {
    title: "Meters & Enclosures",
    text: "Meter boxes, junction boxes and modular gang boxes",
    img: "/applications/browse/meter.webp",
    grades: ["PC", "ABS"],
    href: "/products/pc",
  },
  {
    title: "Consumer Electronics & Goods",
    text: "Chargers, CCTV housings, set-top boxes, keyboards and luggage shells",
    img: "/applications/browse/electronics.webp",
    grades: ["PC", "ABS"],
    href: "/products/abs",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="relative bg-white py-10 font-label sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#1e5eff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Applications</span>
              <span className="h-px w-10 bg-[#1e5eff]" />
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl lg:text-5xl">
              Browse by{" "}
              <span className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text text-transparent">application.</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="hidden md:block mt-4 leading-relaxed text-slate-600">
              Where our PC, ABS and PBT granules end up — find the right grade for the part you mould.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {applications.map((a, i) => (
            <Reveal key={a.title} i={i * 0.5} className="h-full">
              <Link
                href={a.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(15,23,42,0.45)] hover:ring-[#1e5eff]/40"
              >
                <div className="relative aspect-square">
                  <Image
                    src={a.img}
                    alt={`${a.title} — ${a.text}`}
                    fill
                    sizes="(min-width: 1024px) 300px, 50vw"
                    className="object-contain p-4 transition duration-500 group-hover:scale-105 sm:p-5"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center border-t border-slate-100 px-3 pb-4 pt-3.5 text-center">
                  <h3 className="flex items-center gap-1 text-sm font-semibold text-[#0b1530] sm:text-[15px]">
                    {a.title}
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#1e5eff] opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="hidden md:block mt-1 text-[11px] leading-snug text-slate-500 sm:text-xs">{a.text}</p>
                  <div className="mt-auto flex gap-1.5 pt-3">
                    {a.grades.map((g) => (
                      <span key={g} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-slate-600">
                        {g}
                      </span>
                    ))}
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
