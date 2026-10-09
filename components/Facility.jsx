"use client";
import Image from "next/image";
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
  Cog,
  Settings2,
  PackageCheck,
  Boxes,
  ShieldCheck,
} from "lucide-react";
import { Reveal, Counter } from "./ui";

const specs = [
  { icon: Cog, value: "2", label: "Twin screw extruders", note: "High-shear compounding" },
  { icon: Settings2, value: "2", label: "Single screw extruders", note: "Stable, consistent output" },
  { icon: FlaskConical, value: "8", label: "Lab test instruments", note: "In-house quality control" },
];

const process = [
  { icon: Boxes, title: "Raw material", text: "Virgin-grade resins and additives, checked on arrival." },
  { icon: Cog, title: "Compounding", text: "Precise extrusion on twin and single screw lines." },
  { icon: FlaskConical, title: "Testing", text: "Every batch verified in our in-house laboratory." },
  { icon: PackageCheck, title: "Packing & dispatch", text: "Sealed, labelled bags delivered on schedule." },
];

const tests = [
  { icon: Gauge, label: "Melt Flow Index Tester" },
  { icon: Flame, label: "Muffle Furnace" },
  { icon: Hammer, label: "Digital IZOD / Charpy Impact Tester" },
  { icon: Scale, label: "Digital Specific Gravity Balance" },
  { icon: Activity, label: "Computerized Tensile Testing Machine" },
  { icon: Syringe, label: "Test Specimen Injection Moulding Machine" },
  { icon: Eye, label: "Spectrophotometer" },
  { icon: Palette, label: "Colour Matching Cabinet" },
];

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#1e5eff]" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">{children}</span>
    </div>
  );
}

export default function Facility() {
  return (
    <section id="facility" className="relative overflow-hidden bg-white py-20 font-label sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* ---------- header ---------- */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>Manufacturing Setup</Eyebrow>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl lg:text-5xl">
                Advanced extrusion,{" "}
                <span className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text font-normal text-transparent">
                  precise
                </span>{" "}
                results.
              </h2>
            </Reveal>
          </div>
          <Reveal i={2}>
            <p className="max-w-md leading-relaxed text-slate-600 lg:ml-auto">
              Powered by twin and single screw extruders and backed by an in-house lab, we deliver polymer compounds
              with precision, consistency and efficiency — batch after batch.
            </p>
          </Reveal>
        </div>

        {/* ---------- showcase ---------- */}
        <Reveal i={1}>
          <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_40px_80px_-50px_rgba(15,23,42,0.35)] lg:grid-cols-[1.5fr_1fr]">
            {/* machine stage */}
            <div className="relative flex min-h-[240px] items-end bg-gradient-to-br from-[#eef4ff] via-[#f5f8fc] to-[#eef7e8] px-5 pb-6 pt-14 sm:min-h-[340px] sm:px-10 sm:pb-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(11,18,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,32,0.05) 1px, transparent 1px)",
                }}
              />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-sm backdrop-blur sm:left-8 sm:top-7">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4caf27]" />
                Twin screw extrusion line
              </span>
              <div className="absolute inset-x-[12%] bottom-6 h-8 rounded-full bg-slate-900/25 blur-2xl sm:bottom-10" />
              <Image
                src="/sgp/machineimage.webp"
                alt="Twin screw extruder used for polymer compounding"
                width={1300}
                height={475}
                sizes="(min-width: 1024px) 720px, 100vw"
                className="relative h-auto w-full"
              />
            </div>

            {/* specs */}
            <div className="flex flex-col border-t border-slate-200 lg:border-l lg:border-t-0">
              <div className="relative overflow-hidden bg-[#0b1f4d] p-6 text-white sm:p-8">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7cc242]/25 blur-3xl" />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200/80">
                  Annual production capacity
                </p>
                <p className="relative mt-3 flex items-baseline font-display text-5xl font-semibold leading-none sm:text-6xl">
                  <Counter to={5000} />
                  <span className="ml-1 text-[#7cc242]">+</span>
                  <span className="ml-2 font-label text-base font-semibold tracking-wider text-blue-200/80">MT</span>
                </p>
                <p className="relative mt-3 text-sm leading-relaxed text-blue-100/80">
                  Built to meet large-scale demand with timely delivery across India.
                </p>
              </div>
              <ul className="flex-1 divide-y divide-slate-200">
                {specs.map((s) => (
                  <li key={s.label} className="flex items-center gap-4 px-6 py-4 sm:px-8 sm:py-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#eaf1ff] to-[#f1f8ea] text-[#1e5eff]">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-slate-900">{s.label}</p>
                      <p className="text-sm text-slate-500">{s.note}</p>
                    </div>
                    <span className="font-display text-3xl font-semibold text-[#0b1530]">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* ---------- process ---------- */}
        <div className="mt-20 sm:mt-24">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
          </Reveal>
          <Reveal i={1}>
            <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-[#0b1530] sm:text-3xl">
              From resin to ready-to-mould granules.
            </h3>
          </Reveal>
          <div className="relative mt-10 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-[#1e5eff]/40 via-slate-200 to-[#4caf27]/40 lg:block" />
            {process.map((p, i) => (
              <Reveal key={p.title} i={i} className="relative">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="relative grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-[#1e5eff] shadow-sm">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <span className="relative bg-white pr-3 font-display text-sm text-slate-400">Step 0{i + 1}</span>
                  </div>
                  <h4 className="mt-5 font-semibold text-slate-900">{p.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ---------- lab ---------- */}
        <div className="mt-20 grid gap-10 rounded-[2rem] bg-[#f6f8fb] p-6 ring-1 ring-slate-200 sm:mt-24 sm:p-10 lg:grid-cols-[1fr_1.6fr] lg:gap-14 lg:p-12">
          <div>
            <Reveal>
              <Eyebrow>Lab · Quality Control</Eyebrow>
            </Reveal>
            <Reveal i={1}>
              <h3 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl">
                In-house polymer testing lab.
              </h3>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 leading-relaxed text-slate-600">
                Every material undergoes precise laboratory testing for quality, durability and performance. Skilled
                professionals ensure strict quality control from raw materials to finished products.
              </p>
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#4caf27]/25 bg-white p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#4caf27]/10 text-[#3f9a1f]">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-slate-700">
                  Reliable, industry-standard polymer solutions — tested batch after batch.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-px self-start overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {tests.map((t, i) => (
              <Reveal key={t.label} i={i * 0.3} className="h-full">
                <div className="group flex h-full items-center gap-4 bg-white p-4 transition-colors hover:bg-[#f7faff] sm:p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#eaf1ff] to-[#f1f8ea] text-[#1e5eff] transition duration-300 group-hover:from-[#1e5eff] group-hover:to-[#1e4fd8] group-hover:text-white">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 text-sm font-medium leading-snug text-slate-800">{t.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
