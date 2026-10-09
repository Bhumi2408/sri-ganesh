"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";
import EnquiryForm, { ENQUIRY_EMAIL, WHATSAPP_URL } from "./EnquiryForm";

const details = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98180 58610",
    sub: "+91 98110 90445",
    href: "tel:+919818058610",
  },
  {
    icon: Mail,
    label: "Email",
    value: ENQUIRY_EMAIL,
    sub: "Quotes & samples",
    href: `mailto:${ENQUIRY_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "E-64 & 51, Mangolpuri Industrial Area",
    sub: "Phase-II, Delhi-110034",
    href: "https://maps.google.com/?q=E-64+Mangolpuri+Industrial+Area+Phase+II+Delhi+110034",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 font-label sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="relative mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-50px_rgba(15,23,42,0.45)] ring-1 ring-slate-200 lg:grid-cols-[0.9fr_1.1fr]">
            {/* ---------- info panel ---------- */}
            <div className="relative overflow-hidden bg-[#0b1f4d] p-6 text-white sm:p-10 lg:p-12">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#1e5eff]/40 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#7cc242]/25 blur-3xl" />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40 [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                }}
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#7cc242]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7cc242]">Contact</span>
                </div>
                <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  Let&apos;s build something{" "}
                  <span className="font-normal text-[#8be04e]">durable.</span>
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-blue-100/80">
                  Tell us your grade, volume and application — our team will get back with the right compound.
                </p>

                <ul className="mt-9 space-y-3">
                  {details.map((d) => (
                    <li key={d.label}>
                      <a
                        href={d.href}
                        target={d.external ? "_blank" : undefined}
                        rel={d.external ? "noreferrer" : undefined}
                        className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 transition sm:gap-4 sm:p-4 hover:border-white/25 hover:bg-white/[0.08]"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 sm:h-11 sm:w-11 text-[#8be04e] transition group-hover:bg-[#7cc242] group-hover:text-[#0b1f4d]">
                          <d.icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-200/70">
                            {d.label}
                          </span>
                          <span className="mt-0.5 block text-[13px] font-medium text-white min-[400px]:text-sm sm:text-[15px] [overflow-wrap:anywhere]">
                            {d.value}
                          </span>
                          <span className="block text-xs text-blue-100/60">{d.sub}</span>
                        </span>
                        <ArrowUpRight className="mt-1 hidden h-4 w-4 shrink-0 text-white/40 sm:block transition group-hover:text-white" />
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 hidden flex-wrap items-center gap-3 border-t border-white/10 pt-6 lg:mt-auto lg:flex">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#25d366]/25 transition hover:brightness-105"
                  >
                    <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* ---------- form ---------- */}
            <div className="p-6 sm:p-10 lg:p-12">
              <h3 className="font-display text-2xl font-medium tracking-tight text-[#0b1530] sm:text-3xl">Request a quote</h3>
              <p className="mt-2 text-sm text-slate-500">
                Fields marked * are required.{" "}
                <Link href="/contact" className="font-semibold text-[#1e5eff] underline-offset-4 hover:underline">
                  More ways to reach us
                </Link>
              </p>
              <div className="mt-7">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
