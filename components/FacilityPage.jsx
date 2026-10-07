"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FlaskConical,
  Gauge,
  Flame,
  Hammer,
  Scale,
  Activity,
  Syringe,
  Palette,
  Eye,
  Boxes,
  Cog,
  PackageCheck,
  ShieldCheck,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { Reveal, Counter } from "./ui";

const numbers = [
  { to: 5000, suffix: "+", unit: "MT", label: "Annual capacity" },
  { to: 2, label: "Twin screw extruders" },
  { to: 2, label: "Single screw extruders" },
  { to: 8, label: "Lab instruments" },
];

const journey = [
  { icon: Boxes, title: "Raw material inspection", text: "Virgin-grade resins, fillers and additives are checked on arrival before they enter production." },
  { icon: Cog, title: "Compounding & extrusion", text: "Twin screw lines handle high-shear compounding and glass-fill; single screw lines give stable, consistent output." },
  { icon: FlaskConical, title: "Batch testing", text: "Samples from every batch are moulded into specimens and tested for flow, strength, gravity and colour." },
  { icon: PackageCheck, title: "Packing & dispatch", text: "Approved granules are sealed in labelled bags and shipped through our pan-India distribution network." },
];

const lab = [
  { icon: Gauge, label: "Melt Flow Index Tester", use: "Flow behaviour for moulding" },
  { icon: Flame, label: "Muffle Furnace", use: "Ash & filler content" },
  { icon: Hammer, label: "IZOD / Charpy Impact Tester", use: "Impact strength" },
  { icon: Scale, label: "Specific Gravity Balance", use: "Density consistency" },
  { icon: Activity, label: "Tensile Testing Machine", use: "Tensile strength & elongation" },
  { icon: Syringe, label: "Specimen Moulding Machine", use: "Standard test specimens" },
  { icon: Eye, label: "Spectrophotometer", use: "Precise colour values" },
  { icon: Palette, label: "Colour Matching Cabinet", use: "Visual shade approval" },
];

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-10 ${light ? "bg-[#8be04e]" : "bg-[#1e5eff]"}`} />
      <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-[#8be04e]" : "text-[#1e5eff]"}`}>
        {children}
      </span>
    </div>
  );
}

export default function FacilityPage() {
  return (
    <div className="font-label">
      {/* ---------- machine + numbers (dark band) ---------- */}
      <section className="relative overflow-hidden bg-[#0b1f4d] pb-16 pt-14 text-white sm:pb-20 sm:pt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          }}
        />
        <div aria-hidden="true" className="absolute left-1/2 top-1/3 h-72 w-[70%] -translate-x-1/2 rounded-full bg-[#1e5eff]/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center">
                <Eyebrow light>Production floor</Eyebrow>
              </div>
              <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Where resin becomes ready-to-mould granules.
              </h2>
            </div>
          </Reveal>

          <Reveal i={1}>
            <div className="relative mx-auto mt-10 max-w-5xl">
              <div className="absolute inset-x-[10%] bottom-2 h-10 rounded-full bg-black/50 blur-2xl" />
              <Image
                src="/sgp/machineimage.webp"
                alt="Twin screw extruder used for polymer compounding"
                width={1300}
                height={475}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="relative h-auto w-full"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-4">
            {numbers.map((n, i) => (
              <Reveal key={n.label} i={i} className="h-full">
                <div
                  className={`h-full border-white/10 p-6 text-center sm:p-8 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i === 1 ? "lg:border-r" : ""}`}
                >
                  <p className="flex items-baseline justify-center font-serif text-4xl font-semibold leading-none sm:text-5xl">
                    <Counter to={n.to} />
                    {n.suffix && <span className="text-[#7cc242]">{n.suffix}</span>}
                    {n.unit && <span className="ml-1.5 font-label text-sm font-semibold text-blue-200/70">{n.unit}</span>}
                  </p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100/70">{n.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- vertical journey ---------- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <Reveal>
              <Eyebrow>The process</Eyebrow>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
                Four checkpoints, one standard.
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 leading-relaxed text-slate-600">
                Compounding, testing and packing all happen under one roof in Mangolpuri Industrial Area, Delhi — so
                nothing leaves the plant without passing our lab.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f6f8fb] px-4 py-2 text-sm text-slate-600 ring-1 ring-slate-200">
                <MapPin className="h-4 w-4 text-[#4caf27]" /> E-64 &amp; 51, Mangolpuri Ind. Area, Phase-II
              </p>
            </Reveal>
          </div>

          <ol className="relative border-l-2 border-dashed border-slate-200 pl-8 sm:pl-12">
            {journey.map((j, i) => (
              <Reveal key={j.title} i={i * 0.5}>
                <li className={`relative ${i < journey.length - 1 ? "pb-12" : ""}`}>
                  <span className="absolute -left-[3.45rem] top-0 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-[#1e5eff] to-[#1e4fd8] text-white shadow-lg shadow-[#1e5eff]/30 ring-4 ring-white sm:-left-[4.45rem]">
                    <j.icon className="h-5 w-5" />
                  </span>
                  <p className="font-serif text-sm italic text-[#4caf27]">Stage 0{i + 1}</p>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">{j.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-slate-500">{j.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- lab equipment ---------- */}
      <section className="relative bg-[#f6f8fb] py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <Eyebrow>Testing laboratory</Eyebrow>
              </Reveal>
              <Reveal i={1}>
                <h2 className="mt-5 max-w-xl font-serif text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
                  Eight instruments behind every batch.
                </h2>
              </Reveal>
            </div>
            <Reveal i={2}>
              <div className="flex max-w-sm items-start gap-3 rounded-2xl border border-[#4caf27]/25 bg-white p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#3f9a1f]" />
                <p className="text-sm leading-relaxed text-slate-600">
                  Skilled technicians run quality control from raw material to finished granule.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {lab.map((t, i) => (
              <Reveal key={t.label} i={i * 0.3} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(15,23,42,0.4)] sm:p-6">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#1e5eff] to-[#4caf27] transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef4ff] text-[#1e5eff] transition-colors group-hover:bg-[#1e5eff] group-hover:text-white">
                      <t.icon className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-2xl font-semibold text-slate-200">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-sm font-semibold leading-snug text-slate-900 sm:text-base">{t.label}</h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">{t.use}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- visit CTA ---------- */}
      <section className="bg-white px-5 py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-r from-[#eef4ff] to-[#f1f8ea] p-8 sm:p-12 md:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="font-serif text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
                See the plant for yourself.
              </h2>
              <p className="mt-3 max-w-lg text-slate-600">
                Schedule a visit to our Delhi facility or ask for a test report with your next sample.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0b1f4d] py-2 pl-6 pr-2 font-semibold text-white shadow-xl shadow-[#0b1f4d]/25 transition hover:bg-[#123a8f]"
              >
                Book a visit
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#7cc242] text-[#0b1f4d] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
