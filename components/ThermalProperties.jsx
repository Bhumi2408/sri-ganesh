"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Table2, BarChart3 } from "lucide-react";
import { Reveal } from "./ui";

// TODO: typical datasheet values (PBT = 30% glass filled) — replace with SGP's own test data.
// Series colours are validated for colour-blind separation on white.
const polymers = [
  {
    code: "PC",
    name: "Polycarbonate",
    short: "Polycarbonate",
    color: "#2a78d6",
    hdt: 132,
    vicat: 145,
    cont: 125,
    melt: [280, 320],
    best: "Heat stability with impact strength — LED housings, switches and covers.",
  },
  {
    code: "ABS",
    name: "Acrylonitrile Butadiene Styrene",
    short: "ABS resin",
    color: "#eb6834",
    hdt: 95,
    vicat: 100,
    cont: 80,
    melt: [220, 260],
    best: "Lowest processing temperature — economical for everyday moulded parts.",
  },
  {
    code: "PBT",
    name: "PBT · 30% glass filled",
    short: "PBT GF30",
    color: "#1baf7a",
    hdt: 205,
    vicat: 215,
    cont: 140,
    melt: [240, 270],
    best: "Highest heat resistance — ideal near hot contacts, lamp holders and MCBs.",
  },
];

const MAX = 340;
const TICKS = [0, 50, 100, 150, 200, 250, 300];
const pct = (v) => `${(v / MAX) * 100}%`;
const ease = [0.22, 1, 0.36, 1];

// hatched fill for the processing window — texture keeps it distinct from the solid HDT bar
const hatch = (c) => `repeating-linear-gradient(135deg, ${c} 0 2px, ${c}33 2px 7px)`;

function Tip({ children, className = "" }) {
  return (
    <span
      role="tooltip"
      className={`pointer-events-none absolute bottom-full left-1/2 z-40 mb-2.5 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#0b1530] px-3 py-1.5 text-xs font-medium text-slate-200 opacity-0 shadow-xl shadow-slate-900/20 transition duration-200 group-hover:opacity-100 ${className}`}
    >
      {children}
    </span>
  );
}

// key for the mark shapes — polymers are labelled on each row, so no colour legend is needed
function MarkKey() {
  const item = "flex items-center gap-2 text-xs text-slate-500";
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
      <li className={item}>
        <span className="h-2.5 w-6 rounded-r-[3px] bg-slate-500" /> Heat deflection (HDT)
      </li>
      <li className={item}>
        <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] border-2 border-slate-500 bg-white" /> Vicat softening
      </li>
      <li className={item}>
        <span className="h-3.5 w-[2px] rounded-full bg-[#0b1530]" /> Continuous use
      </li>
      <li className={item}>
        <span
          className="h-3.5 w-6 rounded-[3px] ring-1 ring-slate-500"
          style={{ background: hatch("#64748b") }}
        />{" "}
        Processing window
      </li>
    </ul>
  );
}

function SpectrumRow({ p, i, inView }) {
  const [lo, hi] = p.melt;
  const delay = 0.15 + i * 0.12;
  const fade = { initial: { opacity: 0 }, animate: { opacity: inView ? 1 : 0 }, transition: { duration: 0.5, delay: delay + 0.8 } };

  return (
    <div className="sm:flex sm:items-center">
      <div className="mb-3 flex items-center gap-3 sm:mb-0 sm:w-44 sm:shrink-0 sm:pr-6">
        <span className="h-9 w-1 rounded-full" style={{ background: p.color }} />
        <div className="min-w-0">
          <p className="font-display text-xl font-semibold leading-none text-[#0b1530]">{p.code}</p>
          <p className="mt-1 truncate text-xs text-slate-500">{p.short}</p>
        </div>
      </div>

      <div className="relative h-11 flex-1 rounded-xl bg-slate-50 ring-1 ring-inset ring-slate-200/80">
        <div className="absolute inset-y-0 left-0 right-4 md:right-16">
          {/* HDT bar */}
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: inView ? pct(p.hdt) : 0 }}
            transition={{ duration: 1.1, delay, ease }}
            className="group absolute left-0 top-1/2 h-3.5 -translate-y-1/2 rounded-r-[4px]"
            style={{ background: `linear-gradient(90deg, ${p.color}55, ${p.color})` }}
          >
            <Tip>
              {p.code} · Heat deflection: <b className="text-white">{p.hdt} °C</b>
            </Tip>
          </motion.span>

          {/* processing window */}
          <motion.span
            {...fade}
            className="group absolute top-1/2 h-6 -translate-y-1/2 rounded-[4px] ring-1"
            style={{ left: pct(lo), width: pct(hi - lo), background: hatch(p.color), "--tw-ring-color": p.color }}
          >
            <Tip>
              {p.code} · Processing: <b className="text-white">{lo}–{hi} °C</b>
            </Tip>
            <span className="absolute left-full top-1/2 ml-2 hidden -translate-y-1/2 whitespace-nowrap text-xs font-semibold tabular-nums text-slate-800 md:block">
              {lo}–{hi}°
            </span>
          </motion.span>

          {/* continuous use tick (wide hit area, thin mark) */}
          <motion.span {...fade} className="group absolute inset-y-1.5 z-20 w-3 -translate-x-1/2" style={{ left: pct(p.cont) }}>
            <span className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 rounded-full bg-[#0b1530] shadow-[0_0_0_2px_#fff]" />
            <Tip>
              {p.code} · Continuous use: <b className="text-white">{p.cont} °C</b>
            </Tip>
          </motion.span>

          {/* Vicat diamond */}
          <motion.span
            {...fade}
            className="group absolute top-1/2 z-30 grid h-5 w-5 -translate-x-1/2 -translate-y-1/2 place-items-center"
            style={{ left: pct(p.vicat) }}
          >
            <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] border-2 bg-white" style={{ borderColor: p.color }} />
            <Tip>
              {p.code} · Vicat softening: <b className="text-white">{p.vicat} °C</b>
            </Tip>
          </motion.span>
        </div>
      </div>
    </div>
  );
}

function Spectrum() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <div className="relative">
        {/* gridlines share the track's coordinate box */}
        <div aria-hidden="true" className="absolute inset-y-0 left-0 right-4 sm:left-44 md:right-16">
          {TICKS.map((t) => (
            <span key={t} className="absolute inset-y-0 w-px bg-slate-200/80" style={{ left: pct(t) }} />
          ))}
        </div>
        <div className="relative space-y-6 sm:space-y-5">
          {polymers.map((p, i) => (
            <SpectrumRow key={p.code} p={p} i={i} inView={inView} />
          ))}
        </div>
      </div>

      {/* x axis with a cool → hot scale line */}
      <div className="relative mr-4 mt-4 sm:ml-44 md:mr-16">
        <div className="h-[2px] rounded-full bg-gradient-to-r from-[#2a78d6]/50 via-[#eda100]/50 to-[#eb6834]/60" />
        <div className="relative mt-2 h-4">
          {TICKS.map((t) => (
            <span
              key={t}
              className={`absolute -translate-x-1/2 text-[11px] tabular-nums text-slate-400 ${t % 100 ? "hidden sm:block" : ""}`}
              style={{ left: pct(t) }}
            >
              {t}°
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DataTable() {
  const rows = [
    { label: "Heat deflection temp.", note: "HDT @ 1.82 MPa", get: (p) => p.hdt },
    { label: "Vicat softening point", note: "Vicat B50", get: (p) => p.vicat },
    { label: "Continuous use temp.", note: "Long-term service", get: (p) => p.cont },
    { label: "Processing (melt) temp.", note: "Moulding window", get: (p) => `${p.melt[0]}–${p.melt[1]}` },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.14em] text-slate-500">
            <th className="py-4 pr-4 font-semibold">Property · °C</th>
            {polymers.map((p) => (
              <th key={p.code} className="px-4 py-4 font-semibold">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: p.color }} />
                  <span className="text-slate-900">{p.code}</span>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 tabular-nums">
          {rows.map((r) => (
            <tr key={r.label} className="transition-colors hover:bg-slate-50">
              <td className="py-4 pr-4 text-slate-800">
                {r.label} <span className="block text-xs text-slate-400">{r.note}</span>
              </td>
              {polymers.map((p) => (
                <td key={p.code} className="px-4 py-4 font-semibold text-slate-900">
                  {r.get(p)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MaterialCard({ p }) {
  const stats = [
    { label: "Vicat softening", value: `${p.vicat} °C` },
    { label: "Continuous use", value: `${p.cont} °C` },
    { label: "Processing", value: `${p.melt[0]}–${p.melt[1]} °C` },
  ];
  return (
    <article className="group relative h-full overflow-hidden rounded-3xl bg-white p-6 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.45)] ring-1 ring-inset ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_70px_-40px_rgba(15,23,42,0.45)] sm:p-7">
      <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: p.color }} />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-[0.12] blur-3xl transition-opacity duration-300 group-hover:opacity-20"
        style={{ background: p.color }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-2xl font-semibold text-[#0b1530]">{p.code}</p>
          <p className="mt-0.5 text-xs text-slate-500">{p.name}</p>
        </div>
        <div className="text-right">
          <p className="font-display text-4xl font-semibold leading-none tracking-tight text-[#0b1530] tabular-nums">
            {p.hdt}
            <span className="ml-0.5 text-lg text-slate-400">°C</span>
          </p>
          <p className="mt-1.5 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Heat deflection</p>
        </div>
      </div>

      <dl className="relative mt-6 divide-y divide-slate-100 border-y border-slate-100">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center justify-between py-2.5 text-sm">
            <dt className="text-slate-500">{s.label}</dt>
            <dd className="font-semibold tabular-nums text-slate-900">{s.value}</dd>
          </div>
        ))}
      </dl>

      <p className="relative mt-5 text-sm leading-relaxed text-slate-600">
        <span className="font-semibold text-slate-900">Best for · </span>
        {p.best}
      </p>
    </article>
  );
}

export default function ThermalProperties() {
  const [view, setView] = useState("chart");
  const tab = (v) =>
    `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
      view === v ? "bg-[#0b1530] text-white shadow-lg shadow-slate-900/20" : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <section
      aria-labelledby="thermal-title"
      className="relative overflow-hidden bg-white py-20 font-label text-[#0b1530] sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* ---------- header ---------- */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#1e5eff]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Thermal performance</span>
              </div>
            </Reveal>
            <Reveal i={1}>
              <h2 id="thermal-title" className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Thermal properties of{" "}
                <span className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text text-transparent">polymers.</span>
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 leading-relaxed text-slate-600">
                How PC, ABS and PBT hold up under heat — from long-term service to the moulding window — so you can
                match the granule to your part&apos;s working temperature.
              </p>
            </Reveal>
          </div>

          <Reveal i={2}>
            <div role="tablist" aria-label="View" className="inline-flex rounded-full bg-white p-1 shadow-sm ring-1 ring-inset ring-slate-200">
              <button role="tab" aria-selected={view === "chart"} onClick={() => setView("chart")} className={tab("chart")}>
                <BarChart3 className="h-4 w-4" /> Chart
              </button>
              <button role="tab" aria-selected={view === "table"} onClick={() => setView("table")} className={tab("table")}>
                <Table2 className="h-4 w-4" /> Table
              </button>
            </div>
          </Reveal>
        </div>

        {/* ---------- spectrum / table ---------- */}
        <Reveal i={1}>
          <figure className="mt-12 rounded-[2rem] bg-white p-5 shadow-[0_40px_80px_-50px_rgba(15,23,42,0.35)] ring-1 ring-inset ring-slate-200 sm:p-9">
            <figcaption className="mb-8 flex flex-col gap-4 border-b border-slate-100 pb-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-[#0b1530]">Thermal spectrum</p>
                <p className="text-sm text-slate-500">Temperature scale · °C · hover a mark for its value</p>
              </div>
              {view === "chart" && <MarkKey />}
            </figcaption>
            {view === "chart" ? <Spectrum /> : <DataTable />}
          </figure>
        </Reveal>

        {/* ---------- material cards ---------- */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {polymers.map((p, i) => (
            <Reveal key={p.code} i={i} className="h-full">
              <MaterialCard p={p} />
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Typical values for standard grades (PBT shown as 30% glass filled). Actual properties vary by grade — ask for
          the datasheet of your specific grade.
        </p>
      </div>
    </section>
  );
}
