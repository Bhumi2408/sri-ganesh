"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Target,
  Eye,
  HeartHandshake,
  Cog,
  FlaskConical,
  Truck,
  Palette,
  ArrowUpRight,
  Phone,
  Lightbulb,
  Plug,
  Car,
  Smartphone,
  Gauge,
  Briefcase,
} from "lucide-react";
import { Reveal, Counter } from "./ui";

const numbers = [
  { to: 15, label: "Years of excellence", note: "Serving industry since inception" },
  { to: 5000, unit: "MT", label: "Annual capacity", note: "Twin & single screw extrusion" },
  { to: 500, label: "Industrial clients", note: "Brands across India" },
  { to: 105, label: "Distributors", note: "Pan-India supply network" },
];

const industries = [
  { icon: Lightbulb, title: "LED & Lighting", text: "Panels, battens, bulb bodies, lamp holders" },
  { icon: Plug, title: "Electrical", text: "Switches, sockets, MCBs, terminal blocks" },
  { icon: Car, title: "Automotive", text: "Interior and under-hood components" },
  { icon: Smartphone, title: "Mobile accessories", text: "Chargers, adaptors and housings" },
  { icon: Gauge, title: "Meters & enclosures", text: "Meter boxes, junction & gang boxes" },
  { icon: Briefcase, title: "Consumer goods", text: "Luggage shells, set-top boxes, keyboards" },
];

const facts = [
  "2 twin screw & 2 single screw extruders",
  "In-house polymer testing laboratory",
  "ISO 9001 & ISO 14001 certified",
  "Pan-India distribution network",
];

const purpose = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To supply engineering polymer granules of consistent quality at fair prices, delivered on time — so our customers can mould with confidence.",
    tone: "from-[#3b82f6] to-[#1e4fd8] shadow-[#2563eb]/30",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be the most trusted name in PC, ABS and PBT compounds for India's electrical, lighting and automotive industries.",
    tone: "from-[#86d04f] to-[#3f9a1f] shadow-[#4caf27]/30",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    text: "Quality in every batch, honesty in every deal and long-term partnerships built on reliability.",
    tone: "from-[#3b82f6] to-[#1e4fd8] shadow-[#2563eb]/30",
  },
];

const strengths = [
  { icon: Cog, title: "Advanced extrusion", text: "Twin and single screw lines for precise, consistent compounding." },
  { icon: FlaskConical, title: "Tested in-house", text: "MFI, impact, tensile, specific gravity and colour testing in our own lab." },
  { icon: Palette, title: "Custom grades & colours", text: "FR, extrusion and glass-filled grades with colour matching to your shade." },
  { icon: Truck, title: "Reliable supply", text: "5000+ MT annual capacity and a nationwide distribution network." },
];

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#1e5eff]" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">{children}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="font-label">
      {/* ---------- story ---------- */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-lg">
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#dbe8ff] via-[#eef4ff] to-[#f4f9ef] ring-1 ring-slate-200">
                <Image
                  src="/sgp/about-image.webp"
                  alt="Shri Ganesh Polymer manufacturing unit, Mangolpuri Industrial Area, Delhi"
                  fill
                  sizes="(max-width: 1024px) 90vw, 512px"
                  className="object-contain object-bottom p-6 pb-0 drop-shadow-[0_30px_30px_rgba(15,23,42,0.3)]"
                />
              </div>
              <div className="absolute -bottom-5 -right-2 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.4)] sm:-right-6">
                <p className="font-display text-4xl font-semibold leading-none text-[#0b1530]">
                  15<span className="text-[#4caf27]">+</span>
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Years of excellence</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl lg:text-5xl">
                A reliable partner for engineering polymers.
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-6 leading-relaxed text-slate-600">
                An innovative business approach lets Shri Ganesh Polymer run its operations exceptionally well and makes
                us a reliable manufacturer of PC, ABS and PBT granules. Our experts use modern machines and tools to meet
                customer demands on time.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                High on quality and fair on price, our PC Granules, PC Extrusion Grade Granules, ABS Granules and PBT
                Glass Filled Granules are supplied across the country for LEDs, switches, meters, sheets, automotive and
                mobile accessories.
              </p>
            </Reveal>
            <Reveal i={3}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {facts.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-medium text-slate-800">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#4caf27]/15 text-[#3f9a1f]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- numbers ---------- */}
      <section aria-label="Company at a glance" className="bg-white px-5 pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-white/10 lg:grid-cols-4">
          {numbers.map((n, i) => (
            <Reveal key={n.label} i={i} className="h-full">
              <div className={`h-full px-6 py-8 sm:px-8 sm:py-10 ${i % 2 === 0 ? "bg-[#0b1f4d] text-white" : "bg-[#eef4ff] text-[#0b1530]"} ${i === 2 ? "max-lg:bg-[#eef4ff] max-lg:text-[#0b1530]" : ""} ${i === 3 ? "max-lg:bg-[#0b1f4d] max-lg:text-white" : ""}`}>
                <p className="flex items-baseline font-display text-4xl font-semibold leading-none sm:text-5xl">
                  <Counter to={n.to} />
                  <span className="text-[#7cc242]">+</span>
                  {n.unit && <span className="ml-1.5 font-label text-sm font-semibold opacity-60">{n.unit}</span>}
                </p>
                <p className="mt-4 text-sm font-semibold">{n.label}</p>
                <p className="mt-1 text-xs opacity-60">{n.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- mission / vision / values ---------- */}
      <section className="relative border-t border-slate-200 bg-white py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>What drives us</Eyebrow>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
                Purpose behind every pellet.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {purpose.map((p, i) => (
              <Reveal key={p.title} i={i} className="h-full">
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)] sm:p-8">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${p.tone}`}>
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-500">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- strengths ---------- */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>Why SGP</Eyebrow>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-display text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
                What sets us apart.
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-5 leading-relaxed text-slate-600">
                From compounding to testing to delivery, every step happens under one roof — giving you consistent
                material and dependable timelines.
              </p>
              <Link
                href="/facility"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1e5eff] underline-offset-4 hover:underline"
              >
                See our facility <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <Reveal key={s.title} i={i * 0.5} className="h-full">
                <div className="group h-full bg-white p-6 transition-colors hover:bg-[#f7faff] sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#eaf1ff] to-[#f1f8ea] text-[#1e5eff] transition duration-300 group-hover:from-[#1e5eff] group-hover:to-[#1e4fd8] group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- industries ---------- */}
      <section className="relative border-t border-slate-200 bg-white py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <Eyebrow>Industries we serve</Eyebrow>
              </Reveal>
              <Reveal i={1}>
                <h2 className="mt-5 max-w-xl font-display text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
                  Inside the products you use every day.
                </h2>
              </Reveal>
            </div>
            <Reveal i={2}>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e5eff] underline-offset-4 hover:underline"
              >
                Browse our granules <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((d, i) => (
              <Reveal key={d.title} i={i * 0.4} className="h-full">
                <div className="group flex h-full items-center gap-5 rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition duration-300 hover:ring-[#1e5eff]/40 sm:p-6">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#0b1f4d] text-[#8be04e] transition-transform duration-300 group-hover:-rotate-6">
                    <d.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{d.title}</h3>
                    <p className="mt-1 text-sm leading-snug text-slate-500">{d.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-white px-5 py-16 sm:py-20">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#eaf1ff] via-[#f3f8ff] to-[#eaf6e1] px-6 py-12 text-center ring-1 ring-slate-200 sm:px-12 sm:py-16">
            <div aria-hidden="true" className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#1e5eff]/10 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#7cc242]/20 blur-3xl" />
            <h2 className="relative mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
              Looking for a dependable polymer supplier?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-slate-600">
              Tell us your grade, colour and quantity — we&apos;ll recommend the right compound.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0b1f4d] py-2 pl-6 pr-2 font-semibold text-white shadow-xl shadow-[#0b1f4d]/25 transition hover:bg-[#123a8f]"
              >
                Get a quote
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#7cc242] text-[#0b1f4d] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="tel:+919818058610"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-[#1e5eff] hover:text-[#1e5eff]"
              >
                <Phone className="h-4 w-4" /> +91 98180 58610
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
