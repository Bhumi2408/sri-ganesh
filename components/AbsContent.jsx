"use client";
import Link from "next/link";
import { ArrowUpRight, Check, Mail, MessageCircle, Phone, Plus } from "lucide-react";
import { Reveal } from "./ui";
import Rich from "./Rich";

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

const P = ({ children, className = "" }) => <p className={`leading-relaxed text-slate-600 ${className}`}>{children}</p>;

// ABS long-form copy (lib/products.js → content, layout "abs"). Text is rendered verbatim from the doc;
// FAQ answers stay in the DOM inside <details> so crawlers read the same text as the FAQPage schema.
export default function AbsContent({ p }) {
  const c = p.content;
  const accent = p.accent;
  const letters = ["A", "B", "S"];

  return (
    <>
      {/* ---------- what it is: A · B · S + characteristics ---------- */}
      <section className="relative bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <Reveal><Eyebrow>The material</Eyebrow></Reveal>
              <Reveal i={1}><Heading className="mt-5">{c.what.title}</Heading></Reveal>
            </div>
            <Reveal i={2}>
              <P className="text-lg lg:pt-9">{c.what.text}</P>
            </Reveal>
          </div>

          <Reveal i={1}><P className="mt-12 font-medium text-slate-800">{c.what.componentsLead}</P></Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {c.what.components.map((m, i) => (
              <Reveal key={m.name} i={i} className="h-full">
                <div className="relative h-full overflow-hidden rounded-3xl bg-[#f6f8fb] p-6 ring-1 ring-slate-200 sm:p-7">
                  <span aria-hidden="true" className="absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none opacity-[0.08]" style={{ color: accent }}>
                    {letters[i]}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl font-display text-xl font-semibold text-white" style={{ background: accent }} aria-hidden="true">
                    {letters[i]}
                  </span>
                  <p className="relative mt-4 leading-relaxed text-slate-600">
                    <strong className="font-semibold text-slate-900">{m.name}</strong> {m.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal><P className="mt-6 max-w-4xl">{c.what.componentsNote}</P></Reveal>

          <Reveal><P className="mt-14 font-medium text-slate-800">{c.what.traitsLead}</P></Reveal>
          <div className="mt-5 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {c.what.traits.map((t) => (
              <div key={t.name} className="h-full bg-white p-6 sm:p-7">
                <span className="block h-1 w-8 rounded-full" style={{ background: accent }} />
                <p className="mt-4 leading-relaxed text-slate-600">
                  <strong className="font-semibold text-slate-900">{t.name}</strong> {t.text}
                </p>
              </div>
            ))}
          </div>
          <Reveal><P className="mt-6 max-w-4xl">{c.what.traitsNote}</P></Reveal>
        </div>
      </section>

      {/* ---------- industries: table + detail ---------- */}
      <section className="relative bg-[#f6f8fb] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <Reveal><Eyebrow>Industries</Eyebrow></Reveal>
            <Reveal i={1}><Heading className="mt-5">{c.industries.title}</Heading></Reveal>
            <Reveal i={2}><P className="mt-5">{c.industries.text}</P></Reveal>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
            <Reveal>
              <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200">
                <table className="w-full text-left text-sm sm:text-base">
                  <thead>
                    <tr className="bg-[#0b1f4d] text-white">
                      {c.industries.table.head.map((h) => (
                        <th key={h} scope="col" className="px-4 py-4 font-semibold sm:px-6">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {c.industries.table.rows.map(([ind, apps]) => (
                      <tr key={ind} className="align-top transition hover:bg-[#f6f8fb]">
                        <th scope="row" className="w-[36%] px-4 py-4 font-semibold sm:px-6" style={{ color: accent }}>{ind}</th>
                        <td className="px-4 py-4 leading-relaxed text-slate-600 sm:px-6">{apps}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <div className="space-y-3">
              {c.industries.items.map((it, i) => (
                <Reveal key={it.name} i={i * 0.5}>
                  <p className="rounded-2xl border-l-4 bg-white p-5 leading-relaxed text-slate-600 ring-1 ring-slate-200" style={{ borderLeftColor: accent }}>
                    <strong className="font-semibold text-slate-900">{it.name}</strong> {it.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal><P className="mt-8 max-w-4xl font-medium text-slate-700">{c.industries.note}</P></Reveal>
        </div>
      </section>

      {/* ---------- manufacturer in Delhi ---------- */}
      <section className="relative overflow-hidden bg-[#0b1f4d] py-16 text-white sm:py-24">
        <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: accent }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Reveal><Eyebrow light>Delhi · Pan India</Eyebrow></Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{c.delhi.title}</h2>
            </Reveal>
            <Reveal i={2}>
              {c.delhi.paras.map((t) => (
                <p key={t.slice(0, 24)} className="mt-5 leading-relaxed text-blue-100/80">{t}</p>
              ))}
            </Reveal>
          </div>
          <Reveal i={1}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
              <p className="font-semibold text-white">{c.delhi.listLead}</p>
              <ul className="mt-5 space-y-3.5">
                {c.delhi.list.map((t) => (
                  <li key={t} className="flex items-start gap-3 leading-relaxed text-blue-100/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#7cc242] text-[#0b1f4d]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-2">
            <p className="border-t border-white/10 pt-8 leading-relaxed text-blue-100/80">{c.delhi.note}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- how to choose: steps ---------- */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <Reveal><Eyebrow>Buyer&apos;s guide</Eyebrow></Reveal>
            <Reveal i={1}><Heading className="mt-5">{c.choose.title}</Heading></Reveal>
            <Reveal i={2}><P className="mt-5"><Rich text={c.choose.lead} /></P></Reveal>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.choose.steps.map((s, i) => (
              <Reveal key={s.name} i={i * 0.4} className="h-full">
                <div className="group relative h-full rounded-3xl bg-white p-6 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)] sm:p-7">
                  <span className="absolute inset-x-6 top-0 h-[3px] rounded-b-full sm:inset-x-7" style={{ background: accent }} />
                  <h3 className="font-display text-lg font-semibold leading-snug text-[#0b1530]">{s.name}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal><P className="mt-8 max-w-4xl"><Rich text={c.choose.note} /></P></Reveal>
        </div>
      </section>

      {/* ---------- quality + enquiry ---------- */}
      <section className="relative bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
            <Reveal className="h-full">
              <div className="h-full rounded-3xl bg-[#f6f8fb] p-6 ring-1 ring-slate-200 sm:p-9">
                <Eyebrow>Quality</Eyebrow>
                <Heading className="mt-5 sm:text-3xl">{c.quality.title}</Heading>
                {c.quality.paras.map((t) => (
                  <P key={t.slice(0, 24)} className="mt-4"><Rich text={t} /></P>
                ))}
              </div>
            </Reveal>
            <Reveal i={1} className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#0b1f4d] p-6 text-white sm:p-9">
                <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full opacity-30 blur-3xl" style={{ background: accent }} />
                <div className="relative">
                  <p className="font-display text-2xl leading-snug [&_strong]:font-semibold [&_strong]:text-white">
                    <Rich text={c.quality.cta} />
                  </p>
                  <p className="mt-4 leading-relaxed text-blue-100/80">{c.quality.ctaText}</p>
                </div>
                <div className="relative mt-8 flex flex-col gap-2.5">
                  <a href="tel:+919818058610" className="inline-flex items-center gap-2.5 rounded-full bg-[#7cc242] px-5 py-3 text-sm font-semibold text-[#0b1f4d] transition hover:bg-[#8be04e]">
                    <Phone className="h-4 w-4" /> +91 98180 58610
                  </a>
                  <a href="mailto:info@shriganeshpolymer.in" className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    <Mail className="h-4 w-4 shrink-0" /> <span className="[overflow-wrap:anywhere]">info@shriganeshpolymer.in</span>
                  </a>
                  <a href="https://wa.me/919818058610" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
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
