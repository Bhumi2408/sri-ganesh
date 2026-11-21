"use client";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Reveal } from "./ui";
import { openQuote } from "./QuotePopup";

export default function ClosingCta() {
  return (
    <section className="bg-white px-5 pb-16 font-label sm:pb-24">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b1f4d] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#1e5eff]/40 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-[#7cc242]/25 blur-3xl" />
          <h2 className="relative mx-auto max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Start Your <span className="text-[#8be04e]">Engineering Polymer</span> Order With Shri Ganesh Polymer
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-blue-100/80">
            Your grade, your colour, your quantity. Share the details and we will send the right compound.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                openQuote();
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-[#7cc242] py-2 pl-6 pr-2 font-semibold text-[#0b1f4d] transition hover:brightness-105"
            >
              Get a Quote
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0b1f4d] text-[#8be04e] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <a
              href="https://wa.me/919818058610"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
