"use client";
import { useState } from "react";
import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";

// Re-encoded from granualsvideo.mp4: 1280px, light denoise + sharpen, 2-pass H.264 (~10.8 MB, faststart).
const VIDEO = "/product-video/granules.mp4";
const POSTER = "/product-video/granules-poster.webp";

const grades = [
  { code: "PC", color: "#2cb5e6", text: "Transparent or custom colours, high impact & heat stability" },
  { code: "ABS", color: "#f4ad1a", text: "Opaque, paintable and easy to mould in custom colours" },
  { code: "PBT", color: "#f2561d", text: "Glass-filled grades with stiffness for electrical parts" },
];

export default function ProductVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="product-video" className="relative bg-white py-20 font-label sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* ---------- copy ---------- */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1e5eff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Product showcase</span>
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl lg:text-[2.75rem]">
              See our granules{" "}
              <span className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text text-transparent">up close.</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-4 max-w-md leading-relaxed text-slate-600">
              Uniform pellet size, clean cut and consistent colour — every shade of PC, ABS and PBT we compound, batch after batch.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {grades.map((g, i) => (
              <Reveal key={g.code} i={i + 2}>
                <li className="flex items-center gap-4">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl font-display text-xs font-semibold text-white"
                    style={{ background: g.color, boxShadow: `0 10px 24px -10px ${g.color}` }}
                  >
                    {g.code}
                  </span>
                  <p className="text-sm leading-snug text-slate-600">{g.text}</p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal i={5}>
            <Link
              href="/products"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#0b1f4d] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white shadow-lg shadow-[#0b1f4d]/20 transition hover:bg-[#123a8f]"
            >
              Explore all grades
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#8be04e] text-[#0b1f4d] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
        </div>

        {/* ---------- video ---------- */}
        <Reveal i={1} className="lg:order-first">
          <div className="relative mr-3 sm:mr-4">
            {/* granule-colour panel peeking out behind the frame */}
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 left-6 top-6 rounded-[1.75rem] sm:-bottom-4 sm:-right-4"
              style={{ background: "linear-gradient(135deg, #2cb5e6, #1f6fe0 40%, #f4ad1a 75%, #f2561d)" }}
            />
            <div className="relative aspect-[1280/870] overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.55)] ring-1 ring-black/5">
              {playing ? (
                <video src={VIDEO} poster={POSTER} controls autoPlay playsInline className="h-full w-full bg-black object-contain" />
              ) : (
                <button type="button" onClick={() => setPlaying(true)} aria-label="Play granules video" className="group absolute inset-0 h-full w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={POSTER} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <span className="absolute inset-0 bg-[#0b1530]/15 transition duration-500 group-hover:bg-transparent" />

                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/40 motion-reduce:animate-none" />
                    <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white text-[#1e5eff] shadow-2xl transition duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                      <Play className="ml-1 h-6 w-6 fill-current sm:h-8 sm:w-8" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
          <div className="mt-7 flex items-center justify-between gap-4 pr-4 text-sm">
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Product reel</span>
              <span className="mt-0.5 block font-display font-medium text-[#0b1530]">PC · ABS · PBT granules</span>
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tabular-nums text-slate-600">2:09</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
