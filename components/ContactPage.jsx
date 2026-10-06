"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight, ClipboardList, Palette, Scale, Factory } from "lucide-react";
import { Reveal } from "./ui";
import EnquiryForm, { ENQUIRY_EMAIL, WHATSAPP_URL } from "./EnquiryForm";

const ADDRESS = "E-64 & 51, Mangolpuri Industrial Area, Phase-II, Delhi-110034";
const MAPS_URL = "https://maps.google.com/?q=E-64+Mangolpuri+Industrial+Area+Phase+II+Delhi+110034";
const MAP_EMBED = "https://www.google.com/maps?q=Mangolpuri+Industrial+Area+Phase+II+Delhi+110034&output=embed";

const BLUE = "from-[#3b82f6] to-[#1e4fd8] shadow-[#2563eb]/30";
const GREEN = "from-[#86d04f] to-[#3f9a1f] shadow-[#4caf27]/30";

const channels = [
  {
    icon: MapPin,
    tone: BLUE,
    title: "Visit us",
    lines: ["E-64 & 51, Mangolpuri Industrial Area,", "Phase-II, Delhi-110034"],
    cta: "Get directions",
    href: MAPS_URL,
    external: true,
  },
  {
    icon: Phone,
    tone: GREEN,
    title: "Call us",
    lines: ["+91 98180 58610", "+91 98110 90445"],
    cta: "Call now",
    href: "tel:+919818058610",
  },
  {
    icon: Mail,
    tone: BLUE,
    title: "Email us",
    lines: [ENQUIRY_EMAIL, "For quotes & samples"],
    cta: "Write to us",
    href: `mailto:${ENQUIRY_EMAIL}`,
  },
  {
    icon: MessageCircle,
    tone: GREEN,
    title: "WhatsApp",
    lines: ["+91 98180 58610", "Quick questions & updates"],
    cta: "Start chat",
    href: WHATSAPP_URL,
    external: true,
  },
];

const tips = [
  { icon: ClipboardList, text: "Product & grade (e.g. PC FR, PBT glass-filled)" },
  { icon: Palette, text: "Colour or shade required" },
  { icon: Scale, text: "Approximate monthly quantity" },
  { icon: Factory, text: "Application — the part you will mould" },
];

export default function ContactPage() {
  return (
    <div className="font-label">
      {/* ---------- ways to reach us ---------- */}
      <section className="relative bg-white pb-6 pt-4 sm:pt-6">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {channels.map((c, i) => (
            <Reveal key={c.title} i={i} className="h-full">
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)] sm:p-6"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${c.tone}`}>
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-base font-semibold text-slate-900">{c.title}</h2>
                <div className="mt-1.5 space-y-0.5 text-sm leading-relaxed text-slate-500">
                  {c.lines.map((l) => (
                    <p key={l} className="break-words">{l}</p>
                  ))}
                </div>
                <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-[#1e5eff]">
                  {c.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- form + map ---------- */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div aria-hidden="true" className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#7cc242]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          {/* form */}
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.35)] sm:p-9">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#1e5eff]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Enquiry form</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-[#0b1530] sm:text-4xl">
                Request a quote
              </h2>
              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Share a few details and our team will get back with the right grade and pricing.
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>

          {/* map + tips */}
          <div className="flex flex-col gap-6">
            <Reveal i={1}>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_60px_-40px_rgba(15,23,42,0.35)]">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <iframe
                    title="Shri Ganesh Polymer location on Google Maps"
                    src={MAP_EMBED}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1e5eff]">Our unit</p>
                    <p className="mt-1.5 text-sm font-medium leading-snug text-slate-800">{ADDRESS}</p>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open in Google Maps"
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-[#1e5eff] hover:bg-[#1e5eff] hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal i={2}>
              <div className="rounded-3xl bg-gradient-to-br from-[#eef4ff] to-[#f1f8ea] p-6 sm:p-7">
                <h3 className="text-base font-semibold text-slate-900">For a faster quote, include</h3>
                <ul className="mt-4 space-y-3">
                  {tips.map((t) => (
                    <li key={t.text} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-[#1e5eff] shadow-sm">
                        <t.icon className="h-4 w-4" />
                      </span>
                      {t.text}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-slate-500">
                  Not sure which grade fits?{" "}
                  <Link href="/products" className="font-semibold text-[#1e5eff] underline-offset-4 hover:underline">
                    Browse our products
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
