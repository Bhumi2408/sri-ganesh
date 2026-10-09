"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Layers, Palette, FlaskConical, Truck, Phone } from "lucide-react";
import { Reveal } from "./ui";
import { products } from "@/lib/products";

const compareRows = [
  { label: "Polymer type", values: { pc: "Amorphous thermoplastic", abs: "Amorphous terpolymer", pbt: "Semi-crystalline polyester" } },
  { label: "Stand-out property", values: { pc: "Impact strength & clarity", abs: "Toughness & easy moulding", pbt: "Stiffness & heat resistance" } },
  { label: "Finish", values: { pc: "Transparent / custom colours", abs: "Opaque, paintable", pbt: "White to light shades" } },
  { label: "Grades", values: Object.fromEntries(products.map((p) => [p.slug, p.grades.join(", ")])) },
];

const custom = [
  { icon: Layers, title: "Share your grade", text: "Tell us the polymer, grade and end-use part." },
  { icon: Palette, title: "Colour matching", text: "We match your shade in our colour cabinet." },
  { icon: FlaskConical, title: "Lab-tested sample", text: "Batch tested for MFI, impact and tensile." },
  { icon: Truck, title: "Bulk supply", text: "Sealed bags dispatched on schedule, pan-India." },
];

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#1e5eff]" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">
        {children}
      </span>
    </div>
  );
}

function ProductRow({ p, i }) {
  const flip = i % 2 === 1;
  return (
    <article id={p.slug} className="scroll-mt-28 py-14 sm:py-20">
      <div className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {/* visual */}
        <Reveal>
          <div className="relative">
            <div
              className="relative aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-slate-200"
              style={{ background: `linear-gradient(140deg, ${p.accent}14, #ffffff 55%, ${p.accent}0d)` }}
            >
              <span
                aria-hidden="true"
                className="absolute -bottom-6 right-4 select-none font-display text-[9rem] font-semibold leading-none sm:text-[12rem]"
                style={{ color: `${p.accent}14` }}
              >
                {p.code}
              </span>
              <Image
                src={p.image}
                alt={`${p.code} granules`}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-contain p-8 drop-shadow-[0_25px_25px_rgba(15,23,42,0.18)] sm:p-12"
              />
            </div>
            <span
              className="absolute -top-4 left-6 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg"
              style={{ background: p.accent }}
            >
              0{i + 1} · {p.tag}
            </span>
          </div>
        </Reveal>

        {/* details */}
        <div className="min-w-0">
          <Reveal>
            <p className="font-display text-5xl font-semibold leading-none sm:text-6xl" style={{ color: p.accent }}>
              {p.code}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">{p.name}</h2>
          </Reveal>
          <Reveal i={1}>
            <p className="mt-5 leading-relaxed text-slate-600">{p.long[0]}</p>
          </Reveal>
          <Reveal i={2}>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.features.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] font-medium text-slate-700"
                  style={{ borderColor: `${p.accent}40`, background: `${p.accent}0d` }}
                >
                  <Check className="h-3 w-3" strokeWidth={3} style={{ color: p.accent }} />
                  {f}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal i={3}>
            <div className="mt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Applications</p>
              <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
                {p.applications.slice(0, 4).map((a) => (
                  <div key={a.img} className="w-24 shrink-0 sm:w-28">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                      <Image src={a.img} alt={a.label} fill sizes="112px" className="object-contain p-1.5" />
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-slate-500">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal i={4}>
            <Link
              href={`/products/${p.slug}`}
              className="group mt-8 inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 font-semibold text-white shadow-lg transition hover:brightness-110"
              style={{ background: p.accent, boxShadow: `0 16px 32px -16px ${p.accent}` }}
            >
              Explore {p.code} grades
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <div className="font-label">
      {/* ---------- quick jump ---------- */}
      <div className="border-y border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-5 py-4">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Jump to</span>
          {products.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              <span className="h-2 w-2 rounded-full" style={{ background: p.accent }} />
              {p.code}
            </a>
          ))}
          <a
            href="#compare"
            className="shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold text-[#1e5eff] transition hover:bg-[#eef4ff]"
          >
            Compare
          </a>
        </div>
      </div>

      {/* ---------- product rows ---------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-slate-200 px-5">
          {products.map((p, i) => (
            <ProductRow key={p.slug} p={p} i={i} />
          ))}
        </div>
      </section>

      {/* ---------- comparison ---------- */}
      <section id="compare" className="scroll-mt-28 border-t border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <Eyebrow>Side by side</Eyebrow>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
              Which polymer fits your part?
            </h2>
          </Reveal>

          <Reveal i={2}>
            <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="w-1/4 px-6 py-5" />
                    {products.map((p) => (
                      <th key={p.slug} className="px-6 py-5">
                        <span className="font-display text-2xl font-semibold" style={{ color: p.accent }}>
                          {p.code}
                        </span>
                        <span className="mt-0.5 block text-xs font-medium text-slate-400">{p.tag}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {compareRows.map((r) => (
                    <tr key={r.label}>
                      <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{r.label}</th>
                      {products.map((p) => (
                        <td key={p.slug} className="px-6 py-4 text-slate-700">
                          {r.values[p.slug]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Typical uses</th>
                    {products.map((p) => (
                      <td key={p.slug} className="px-6 py-4 text-slate-700">
                        {p.apps}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- custom orders ---------- */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-white py-16 text-[#0b1530] sm:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Custom orders</Eyebrow>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                Your grade, your colour — compounded to order.
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 leading-relaxed text-slate-600">
                Need a specific FR rating, glass-fill percentage or exact shade? We compound to your specification and
                verify every batch before it ships.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#7cc242] py-2 pl-6 pr-2 font-semibold text-[#0b1f4d] transition hover:brightness-105"
                >
                  Request a sample
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0b1f4d] text-[#8be04e] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
                <a
                  href="tel:+919818058610"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 font-semibold transition hover:border-slate-900"
                >
                  <Phone className="h-4 w-4" /> Call us
                </a>
              </div>
            </Reveal>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {custom.map((c, i) => (
              <Reveal key={c.title} i={i} className="h-full">
                <li className="relative h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 sm:p-7">
                  <span className="absolute right-6 top-5 font-display text-4xl font-semibold text-slate-100">0{i + 1}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#7cc242]/15 text-[#3f9a1f]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{c.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
