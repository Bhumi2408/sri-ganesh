"use client";
import Link from "next/link";
import { ArrowUpRight, Check, CircleCheck, Mail, MapPin, MessageCircle, Phone, Plus } from "lucide-react";
import { Reveal } from "./ui";

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-10 ${light ? "bg-[#8be04e]" : "bg-[#1e5eff]"}`} />
      <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-[#8be04e]" : "text-[#1e5eff]"}`}>{children}</span>
    </div>
  );
}

function Heading({ children, className = "" }) {
  return (
    <h2 className={`font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl ${className}`}>
      {children}
    </h2>
  );
}

function Ticks({ items, accent }) {
  return (
    <ul className="mt-6 grid gap-x-4 gap-y-3 sm:grid-cols-2">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: `${accent}1a`, color: accent }}>
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

// PBT long-form copy (lib/products.js → content, layout "pbt"). Text is rendered verbatim from the doc;
// FAQ answers stay in the DOM inside <details> so crawlers read the same text as the FAQPage schema.
export default function PbtContent({ p }) {
  const c = p.content;
  const accent = p.accent;

  return (
    <>
      {/* ---------- what it is + our grades ---------- */}
      <section className="relative bg-white pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl bg-white p-6 ring-1 ring-slate-200 sm:p-9">
              <Eyebrow>The material</Eyebrow>
              <Heading className="mt-5 sm:text-3xl">{c.what.title}</Heading>
              <p className="mt-4 leading-relaxed text-slate-600">{c.what.text}</p>
              <Ticks items={c.what.items} accent={accent} />
            </div>
          </Reveal>
          <Reveal i={1} className="h-full">
            <div className="relative h-full overflow-hidden rounded-3xl bg-[#f6f8fb] p-6 ring-1 ring-slate-200 sm:p-9">
              <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: accent }} />
              <Eyebrow>Our grades</Eyebrow>
              <Heading className="mt-5 sm:text-3xl">{c.range.title}</Heading>
              <p className="mt-4 leading-relaxed text-slate-600">{c.range.text}</p>
              <Ticks items={c.range.items} accent={accent} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- thermal data + comparison ---------- */}
      <section className="relative overflow-hidden bg-[#0b1f4d] py-16 text-white sm:py-24">
        <div aria-hidden="true" className="absolute -left-24 top-10 h-72 w-72 rounded-full opacity-25 blur-3xl" style={{ background: accent }} />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <Reveal><Eyebrow light>Heat performance</Eyebrow></Reveal>
              <Reveal i={1}>
                <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{c.thermal.title}</h2>
              </Reveal>
              <Reveal i={2}><p className="mt-5 leading-relaxed text-blue-100/80">{c.thermal.text}</p></Reveal>
            </div>
            <Reveal i={1}>
              <table className="w-full overflow-hidden rounded-3xl text-left">
                <thead>
                  <tr className="border-b border-white/15 text-xs uppercase tracking-[0.16em] text-blue-100/60">
                    {c.thermal.head.map((h, i) => (
                      <th key={h} scope="col" className={`pb-3 font-semibold ${i ? "text-right" : ""}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {c.thermal.rows.map(([k, v]) => (
                    <tr key={k}>
                      <th scope="row" className="py-4 pr-4 font-medium text-blue-100/90">{k}</th>
                      <td className="whitespace-nowrap py-4 text-right font-display text-2xl font-semibold text-[#8be04e] sm:text-3xl">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>

          <div className="mt-16 rounded-3xl bg-white p-5 text-slate-700 sm:p-9">
            <Reveal><h2 className="font-display text-2xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-3xl">{c.compare.title}</h2></Reveal>
            <Reveal i={1}><p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{c.compare.text}</p></Reveal>
            <div className="-mx-5 mt-7 overflow-x-auto px-5 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[560px] text-left text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    {c.compare.head.map((h, i) => (
                      <th
                        key={h}
                        scope="col"
                        className="px-3 py-3 font-semibold first:pl-0"
                        style={i === 1 ? { color: accent } : { color: "#0b1530" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {c.compare.rows.map(([k, ...vals]) => (
                    <tr key={k} className="align-top">
                      <th scope="row" className="py-4 pr-3 font-semibold text-slate-900">{k}</th>
                      {vals.map((v, i) => (
                        <td key={i} className={`px-3 py-4 leading-relaxed ${i === 0 ? "bg-[#4caf27]/[0.07] font-semibold text-slate-900" : "text-slate-600"}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Reveal><p className="mt-6 leading-relaxed text-slate-700">{c.compare.summary}</p></Reveal>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">{c.compare.footnote}</p>
          </div>
        </div>
      </section>

      {/* ---------- uses + why us ---------- */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <Reveal><Eyebrow>Applications</Eyebrow></Reveal>
              <Reveal i={1}><Heading className="mt-5">{c.uses.title}</Heading></Reveal>
              <Reveal i={2}><p className="mt-5 leading-relaxed text-slate-600">{c.uses.text}</p></Reveal>
            </div>
            <Reveal i={1}>
              <ul className="grid gap-3 sm:grid-cols-2 lg:pt-9">
                {c.uses.items.map((u) => (
                  <li key={u} className="flex items-center gap-3 rounded-2xl bg-[#f6f8fb] px-5 py-4 font-semibold text-slate-900 ring-1 ring-slate-200">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: accent }} />
                    {u}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="mt-20 max-w-3xl">
            <Reveal><Eyebrow>Why SGP</Eyebrow></Reveal>
            <Reveal i={1}><Heading className="mt-5">{c.why.title}</Heading></Reveal>
            <Reveal i={2}><p className="mt-5 leading-relaxed text-slate-600">{c.why.text}</p></Reveal>
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {c.why.items.map((w) => (
              <li key={w.name} className="h-full bg-white p-6 sm:p-7">
                <CircleCheck className="h-6 w-6" style={{ color: accent }} />
                <p className="mt-4 leading-relaxed text-slate-600">
                  <strong className="font-semibold text-slate-900">{w.name}</strong> {w.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- supplier checklist ---------- */}
      <section className="relative bg-[#f6f8fb] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>Checklist</Eyebrow></Reveal>
            <Reveal i={1}><Heading className="mt-5">{c.checklist.title}</Heading></Reveal>
            <Reveal i={2}><p className="mt-5 leading-relaxed text-slate-600">{c.checklist.text}</p></Reveal>
          </div>
          <Reveal i={1}>
            <div className="rounded-3xl bg-white p-3 ring-1 ring-slate-200 sm:p-4">
              <ul className="divide-y divide-slate-100">
                {c.checklist.items.map((q) => (
                  <li key={q} className="flex items-start gap-3 px-3 py-4 leading-relaxed text-slate-800">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md text-white" style={{ background: accent }}>
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
              <p className="mt-2 rounded-2xl bg-[#0b1f4d] px-5 py-4 font-semibold text-white">{c.checklist.note}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- quality + Delhi ---------- */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2">
          {[c.quality, c.delhi].map((b, i) => (
            <Reveal key={b.title} i={i} className="h-full">
              <div className="relative h-full overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200 sm:p-9">
                <span className="absolute inset-y-0 left-0 w-1" style={{ background: i ? "#1e5eff" : accent }} />
                <Heading className="sm:text-3xl">{b.title}</Heading>
                <p className="mt-4 leading-relaxed text-slate-600">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- how to order + quote ---------- */}
      <section className="relative bg-white pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl bg-[#f6f8fb] p-6 ring-1 ring-slate-200 sm:p-9">
              <Heading className="sm:text-3xl">{c.order.title}</Heading>
              <ol className="mt-7 grid gap-4 sm:grid-cols-2">
                {c.order.steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm font-semibold text-white" style={{ background: accent }}>
                      {i + 1}.
                    </span>
                    <span className="leading-relaxed text-slate-700">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal i={1} className="h-full">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#0b1f4d] p-6 text-white sm:p-9">
              <div aria-hidden="true" className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full opacity-30 blur-3xl" style={{ background: accent }} />
              <div className="relative">
                <h2 className="font-display text-3xl font-medium leading-tight tracking-tight">{c.quote.title}</h2>
                <p className="mt-4 leading-relaxed text-blue-100/80">{c.quote.text}</p>
                <ul className="mt-6 space-y-3 text-blue-100/90">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#8be04e]" />
                    <a href={`mailto:${c.quote.email}`} className="[overflow-wrap:anywhere] hover:text-white">{c.quote.email}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#8be04e]" />
                    <span>{c.quote.address}</span>
                  </li>
                </ul>
              </div>
              <div className="relative mt-8 flex flex-col gap-2.5 sm:flex-row lg:flex-col">
                <a href="tel:+919818058610" className="inline-flex items-center gap-2.5 rounded-full bg-[#7cc242] px-5 py-3 text-sm font-semibold text-[#0b1f4d] transition hover:bg-[#8be04e]">
                  <Phone className="h-4 w-4" /> +91 98180 58610
                </a>
                <a href="https://wa.me/919818058610" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="relative bg-white pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <Reveal i={1}><Heading className="mt-5">Frequently Asked Questions</Heading></Reveal>
            <Reveal i={2}>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1e5eff] underline-offset-4 hover:underline">
                Ask us anything else <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {c.faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-semibold leading-snug text-slate-900">{f.q}</h3>
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#eef4ff] text-[#1e5eff] transition-transform duration-300 group-open:rotate-45">
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <p className="pb-5 pr-10 leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
