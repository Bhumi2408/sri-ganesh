"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight, Phone } from "lucide-react";
import { Reveal } from "./ui";
import { products } from "@/lib/products";

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-[#1e5eff]" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">{children}</span>
    </div>
  );
}

export default function ProductDetail({ slug }) {
  const p = products.find((x) => x.slug === slug);
  const others = products.filter((x) => x.slug !== slug);

  return (
    <div className="font-label">
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef4ff] via-[#f6f9fd] to-white pb-14 pt-[calc(97px+2.5rem)] md:pb-20 md:pt-[calc(137px+3rem)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,18,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,32,0.05) 1px, transparent 1px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-[#1e5eff]">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/products" className="transition hover:text-[#1e5eff]">Products</Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-medium text-slate-800" aria-current="page">{p.code}</span>
          </nav>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 shadow-[0_40px_80px_-50px_rgba(15,23,42,0.45)] ring-1 ring-slate-200 sm:p-6">
                <div className="relative aspect-[1000/812]">
                  <Image src={p.image} alt={`${p.code} granules in different colours`} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-contain" />
                </div>
                <span
                  className="absolute left-5 top-5 rounded-xl px-3.5 py-2 font-serif text-3xl font-semibold leading-none text-white shadow-lg sm:left-7 sm:top-7"
                  style={{ background: p.accent }}
                >
                  {p.code}
                </span>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span
                  className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: p.accent, background: `${p.accent}14` }}
                >
                  For {p.tag}
                </span>
              </Reveal>
              <Reveal i={1}>
                <h1 className="mt-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-[#0b1530] sm:text-5xl">
                  {p.name} <span className="text-slate-400">({p.code})</span>
                </h1>
              </Reveal>
              <Reveal i={2}>
                {p.long.map((t) => (
                  <p key={t.slice(0, 20)} className="mt-5 leading-relaxed text-slate-600">{t}</p>
                ))}
              </Reveal>
              <Reveal i={3}>
                <ul className="mt-7 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: `${p.accent}1a`, color: p.accent }}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal i={4}>
                <div className="mt-7 flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Grades</span>
                  {p.grades.map((g) => (
                    <span key={g} className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-700">{g}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-[#0b1f4d] py-2 pl-6 pr-2 font-semibold text-white shadow-xl shadow-[#0b1f4d]/25 transition hover:bg-[#123a8f]"
                  >
                    Enquire about {p.code}
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-[#7cc242] text-[#0b1f4d] transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                  <a
                    href="tel:+919818058610"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:border-[#1e5eff] hover:text-[#1e5eff]"
                  >
                    <Phone className="h-4 w-4" /> Call us
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- applications ---------- */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Reveal><Eyebrow>Applications</Eyebrow></Reveal>
              <Reveal i={1}>
                <h2 className="mt-5 font-serif text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
                  Products made with our {p.code} granules.
                </h2>
              </Reveal>
            </div>
            <Reveal i={2}>
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                <span className="font-serif text-lg font-semibold leading-none" style={{ color: p.accent }}>
                  {p.applications.length}
                </span>
                applications &amp; counting
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {p.applications.map((a, i) => (
              <Reveal key={a.label} i={i * 0.3} className="h-full">
                <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)]">
                  <div
                    className="relative aspect-[4/3] overflow-hidden"
                    style={{ background: `radial-gradient(circle at 50% 60%, #ffffff 0%, ${p.accent}12 70%, ${p.accent}22 100%)` }}
                  >
                    <span className="absolute left-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/90 font-serif text-xs font-semibold text-slate-500 shadow-sm backdrop-blur sm:left-4 sm:top-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Image
                      src={a.img}
                      alt={a.label}
                      fill
                      sizes="(min-width: 1024px) 400px, 50vw"
                      className="object-contain p-5 drop-shadow-[0_18px_18px_rgba(15,23,42,0.18)] transition-transform duration-700 group-hover:scale-[1.08] sm:p-8"
                    />
                  </div>
                  <figcaption className="flex flex-1 items-center justify-between gap-3 border-t border-slate-100 px-4 py-3.5 sm:px-5 sm:py-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug text-slate-900 sm:text-base">{a.label}</p>
                      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                        Moulded in {p.code}
                      </p>
                    </div>
                    <span
                      className="hidden h-9 w-9 shrink-0 place-items-center rounded-full text-white opacity-0 transition duration-300 group-hover:opacity-100 sm:grid"
                      style={{ background: p.accent }}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </figcaption>
                  <span
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: p.accent }}
                  />
                </figure>
              </Reveal>
            ))}

            {/* CTA tile fills the leftover cells of the last row */}
            <Reveal
              i={p.applications.length * 0.3}
              className={`h-full ${p.applications.length % 2 === 0 ? "col-span-2" : ""} ${["lg:col-span-3", "lg:col-span-2", "lg:col-span-1"][p.applications.length % 3]}`}
            >
              <Link
                href="/contact"
                className="group relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden rounded-3xl bg-[#0b1f4d] p-6 text-white sm:p-7"
              >
                <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-40 blur-3xl" style={{ background: p.accent }} />
                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8be04e]">Your part next?</p>
                  <p className="mt-3 font-serif text-2xl font-medium leading-snug">
                    Tell us what you mould — we&apos;ll suggest the right {p.code} grade.
                  </p>
                </div>
                <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Get a quote
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#7cc242] text-[#0b1f4d] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- other products ---------- */}
      <section className="relative bg-[#f6f8fb] py-16 sm:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
        <div className="mx-auto max-w-7xl px-5">
          <Reveal><Eyebrow>Explore more</Eyebrow></Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {others.map((o, i) => (
              <Reveal key={o.slug} i={i}>
                <Link
                  href={`/products/${o.slug}`}
                  className="group flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)] sm:p-5"
                >
                  <div className="relative h-24 w-28 shrink-0 sm:h-28 sm:w-36">
                    <Image src={o.image} alt="" fill sizes="144px" className="object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-2xl font-semibold" style={{ color: o.accent }}>{o.code}</p>
                    <p className="text-sm font-medium text-slate-800">{o.name}</p>
                    <p className="mt-1 hidden text-sm text-slate-500 sm:block">{o.desc}</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-700 transition group-hover:border-transparent group-hover:bg-[#0b1f4d] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
