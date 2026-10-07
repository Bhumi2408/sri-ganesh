"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Thermometer, Flame, Table2, BarChart3 } from "lucide-react";
import { Reveal } from "./ui";

// TODO: typical datasheet values (PBT = 30% glass filled) — replace with SGP's own test data.
const polymers = [
  { code: "PC", name: "Polycarbonate", color: "#1e5eff" },
  { code: "ABS", name: "ABS", color: "#e11d48" },
  { code: "PBT", name: "PBT GF30", color: "#4caf27" },
];

const heat = [
  { label: "Heat deflection temp.", note: "HDT @ 1.82 MPa", values: { PC: 132, ABS: 95, PBT: 205 } },
  { label: "Vicat softening point", note: "Vicat B50", values: { PC: 145, ABS: 100, PBT: 215 } },
  { label: "Continuous use temp.", note: "Long-term service", values: { PC: 125, ABS: 80, PBT: 140 } },
];
const HEAT_MAX = 250;
const HEAT_TICKS = [0, 50, 100, 150, 200, 250];

const melt = { PC: [280, 320], ABS: [220, 260], PBT: [240, 270] };
const MELT_MIN = 200;
const MELT_MAX = 340;
const MELT_TICKS = [200, 240, 280, 320];

const takeaways = [
  { code: "PBT", text: "Highest heat resistance — ideal near hot contacts, lamp holders and MCBs." },
  { code: "PC", text: "Strong heat stability with impact strength — LED housings and switches." },
  { code: "ABS", text: "Lowest processing temperature — economical for everyday moulded parts." },
];

const colorOf = (code) => polymers.find((p) => p.code === code).color;
const ease = [0.22, 1, 0.36, 1];

function Legend() {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Legend">
      {polymers.map((p) => (
        <li key={p.code} className="flex items-center gap-2 text-sm text-slate-600">
          <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: p.color }} />
          <span className="font-semibold text-slate-900">{p.code}</span>
          <span className="hidden sm:inline">{p.name}</span>
        </li>
      ))}
    </ul>
  );
}

function Tip({ children }) {
  return (
    <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition group-hover:opacity-100">
      {children}
    </span>
  );
}

function HeatChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const pct = (v) => `${(v / HEAT_MAX) * 100}%`;
  return (
    <div ref={ref}>
      {/* gridlines + ticks share one coordinate box with the bar tracks (right-16 is room for value labels) */}
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-y-0 left-0 right-16 sm:left-[9.5rem]">
          {HEAT_TICKS.map((t) => (
            <span key={t} className="absolute inset-y-0 w-px bg-slate-200" style={{ left: pct(t) }} />
          ))}
        </div>

        <div className="relative space-y-6">
          {heat.map((row) => (
            <div key={row.label} className="sm:flex sm:items-center">
              <div className="mb-2 sm:mb-0 sm:w-[9.5rem] sm:shrink-0 sm:pr-4">
                <p className="text-sm font-semibold text-slate-900">{row.label}</p>
                <p className="text-xs text-slate-500">{row.note}</p>
              </div>
              <div className="mr-16 flex-1 space-y-[2px]">
                {polymers.map((p, i) => {
                  const v = row.values[p.code];
                  return (
                    <div key={p.code} className="group relative h-[18px]">
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: inView ? pct(v) : 0 }}
                        transition={{ duration: 1, delay: i * 0.12, ease }}
                        className="absolute inset-y-0 left-0 rounded-r-[4px] transition-[filter] group-hover:brightness-110"
                        style={{ background: p.color }}
                      >
                        <Tip>
                          {p.code} · {row.note}: {v} °C
                        </Tip>
                      </motion.span>
                      <span
                        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 text-xs tabular-nums text-slate-600"
                        style={{ left: pct(v) }}
                      >
                        <span className="font-semibold text-slate-900">{v}°</span>{" "}
                        <span className="text-slate-400">{p.code}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* x axis */}
      <div className="relative mr-16 mt-3 h-4 sm:ml-[9.5rem]">
        {HEAT_TICKS.map((t) => (
          <span key={t} className="absolute -translate-x-1/2 text-[11px] tabular-nums text-slate-400" style={{ left: pct(t) }}>
            {t}°
          </span>
        ))}
      </div>
    </div>
  );
}

function MeltChart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const pct = (v) => ((v - MELT_MIN) / (MELT_MAX - MELT_MIN)) * 100;
  return (
    <div ref={ref}>
      <div className="relative">
        <div aria-hidden="true" className="absolute inset-y-0 left-12 right-16">
          {MELT_TICKS.map((t) => (
            <span key={t} className="absolute inset-y-0 w-px bg-slate-200" style={{ left: `${pct(t)}%` }} />
          ))}
        </div>
        <div className="relative space-y-5">
          {polymers.map((p, i) => {
            const [lo, hi] = melt[p.code];
            return (
              <div key={p.code} className="flex items-center">
                <span className="w-12 shrink-0 text-sm font-semibold text-slate-900">{p.code}</span>
                <div className="group relative mr-16 h-6 flex-1">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: inView ? 1 : 0 }}
                    transition={{ duration: 0.9, delay: i * 0.12, ease }}
                    className="absolute inset-y-0 origin-left rounded-[4px] transition-[filter] group-hover:brightness-110"
                    style={{ left: `${pct(lo)}%`, width: `${pct(hi) - pct(lo)}%`, background: p.color }}
                  >
                    <Tip>
                      {p.code} melt: {lo}–{hi} °C
                    </Tip>
                  </motion.span>
                  <span
                    className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pl-2 text-xs font-semibold tabular-nums text-slate-900"
                    style={{ left: `${pct(hi)}%` }}
                  >
                    {lo}–{hi}°
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative ml-12 mr-16 mt-3 h-4">
        {MELT_TICKS.map((t) => (
          <span key={t} className="absolute -translate-x-1/2 text-[11px] tabular-nums text-slate-400" style={{ left: `${pct(t)}%` }}>
            {t}°
          </span>
        ))}
      </div>
    </div>
  );
}

function DataTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.12em] text-slate-500">
            <th className="py-3 pr-4 font-semibold">Property (°C)</th>
            {polymers.map((p) => (
              <th key={p.code} className="px-3 py-3 font-semibold">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-[2px]" style={{ background: p.color }} />
                  <span className="text-slate-900">{p.code}</span>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 tabular-nums text-slate-700">
          {heat.map((r) => (
            <tr key={r.label}>
              <td className="py-3 pr-4">
                {r.label} <span className="text-slate-400">({r.note})</span>
              </td>
              {polymers.map((p) => (
                <td key={p.code} className="px-3 py-3">
                  {r.values[p.code]}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="py-3 pr-4">Processing (melt) temp.</td>
            {polymers.map((p) => (
              <td key={p.code} className="px-3 py-3">
                {melt[p.code][0]}–{melt[p.code][1]}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function ThermalProperties() {
  const [table, setTable] = useState(false);

  return (
    <section aria-labelledby="thermal-title" className="relative bg-white py-16 font-label sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#1e5eff]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Compare</span>
              </div>
            </Reveal>
            <Reveal i={1}>
              <h2 id="thermal-title" className="mt-5 font-serif text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl lg:text-5xl">
                Thermal properties of{" "}
                <em className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text font-normal text-transparent">
                  polymers.
                </em>
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-4 leading-relaxed text-slate-600">
                How PC, ABS and PBT behave under heat — pick the right granule for your part&apos;s working temperature.
              </p>
            </Reveal>
          </div>
          <Reveal i={2}>
            <div className="flex flex-wrap items-center gap-4">
              <Legend />
              <button
                onClick={() => setTable((t) => !t)}
                aria-pressed={table}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                {table ? <BarChart3 className="h-4 w-4" /> : <Table2 className="h-4 w-4" />}
                {table ? "View chart" : "View table"}
              </button>
            </div>
          </Reveal>
        </div>

        {table ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 sm:p-8">
            <DataTable />
          </div>
        ) : (
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
            <Reveal className="h-full">
              <figure className="h-full rounded-3xl border border-slate-200 bg-[#fcfcfb] p-5 sm:p-8">
                <figcaption className="mb-7 flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#eef4ff] text-[#1e5eff]">
                    <Thermometer className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900">Heat resistance</span>
                    <span className="block text-sm text-slate-500">Higher is better · °C</span>
                  </span>
                </figcaption>
                <HeatChart />
              </figure>
            </Reveal>

            <Reveal i={1} className="h-full">
              <div className="flex h-full flex-col gap-5">
                <figure className="rounded-3xl border border-slate-200 bg-[#fcfcfb] p-5 sm:p-8">
                  <figcaption className="mb-7 flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#fff1f2] text-[#e11d48]">
                      <Flame className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-slate-900">Processing temperature</span>
                      <span className="block text-sm text-slate-500">Melt range for moulding · °C</span>
                    </span>
                  </figcaption>
                  <MeltChart />
                </figure>

                <ul className="flex-1 space-y-3 rounded-3xl bg-[#0b1f4d] p-5 text-white sm:p-7">
                  {takeaways.map((t) => (
                    <li key={t.code} className="flex gap-3 text-sm leading-relaxed text-blue-100/85">
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-[3px]" style={{ background: colorOf(t.code) }} />
                      <span>
                        <span className="font-semibold text-white">{t.code}</span> — {t.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        )}

        <p className="mt-5 text-xs text-slate-400">
          Typical values for standard grades (PBT shown as 30% glass filled). Actual properties vary by grade — ask
          for the datasheet of your specific grade.
        </p>
      </div>
    </section>
  );
}
