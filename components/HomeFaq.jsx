"use client";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "./ui";
import { homeFaqs } from "@/lib/homeContent";

// Answers stay in the DOM inside <details>, so crawlers read the same text as the FAQPage schema.
export default function HomeFaq() {
  return (
    <section id="faq" className="relative bg-white py-16 font-label sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1e5eff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">FAQ</span>
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal i={2}>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1e5eff] underline-offset-4 hover:underline">
              Ask us anything else <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {homeFaqs.map((f, i) => (
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
  );
}
