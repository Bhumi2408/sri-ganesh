"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "./ui";

// TODO: sample copy — replace with genuine client feedback (name, role, company) before going live.
const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Purchase Head",
    company: "LED lighting manufacturer, Delhi",
    product: "PC FR Grade",
    accent: "#1e5eff",
    text: "Consistent MFI batch after batch — our rejection rate on LED panel housings dropped noticeably after switching to SGP's PC FR grade. Deliveries are always on schedule.",
  },
  {
    name: "Amit Sharma",
    role: "Production Manager",
    company: "Switchgear company, Noida",
    product: "PBT Glass Filled",
    accent: "#4caf27",
    text: "The glass-filled PBT gives us the stiffness we need for terminal blocks and MCB parts. Their lab shares test reports with every lot, which makes our QC simple.",
  },
  {
    name: "Neha Gupta",
    role: "Director",
    company: "Electrical accessories brand, Faridabad",
    product: "ABS Granules",
    accent: "#e11d48",
    text: "Excellent colour matching on ABS — they matched our brand shade on the first sample. Pricing is fair and the team is quick to respond.",
  },
  {
    name: "Vikram Singh",
    role: "Owner",
    company: "Moulding unit, Sonipat",
    product: "PC Extrusion Grade",
    accent: "#1e5eff",
    text: "We have been sourcing PC extrusion grade for diffuser profiles for years. Clarity and surface finish are reliable, and supply has never stopped our line.",
  },
];

const initials = (n) =>
  n
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

function Stars({ className = "" }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [[idx, dir], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const r = reviews[idx];

  const go = (d) => setState(([i]) => [(i + d + reviews.length) % reviews.length, d]);
  const jump = (to) => setState(([i]) => [to, to > i ? 1 : -1]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), 6500);
    return () => clearTimeout(t);
  }, [idx, paused]);

  return (
    <section
      aria-label="Client testimonials"
      className="relative overflow-hidden bg-[#0b1f4d] py-16 font-label text-white sm:py-24"
    >
      <div aria-hidden="true" className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#1e5eff]/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#7cc242]/20 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50 [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        {/* ---------- left: heading + score ---------- */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#8be04e]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8be04e]">Testimonials</span>
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Trusted by manufacturers{" "}
              <em className="bg-gradient-to-r from-[#60a5fa] to-[#8be04e] bg-clip-text font-normal text-transparent">
                across India.
              </em>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-5 max-w-md leading-relaxed text-blue-100/75">
              From LED and switchgear makers to moulding units — here&apos;s what our clients say about working with us.
            </p>
          </Reveal>

          <Reveal i={3}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div className="flex gap-2">
                {reviews.map((x, i) => (
                  <button
                    key={x.name}
                    onClick={() => jump(i)}
                    aria-label={`Show review by ${x.name}`}
                    className={`grid h-11 w-11 place-items-center rounded-full border-2 text-xs font-semibold text-white transition duration-300 ${
                      i === idx ? "scale-110 border-[#8be04e]" : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                    style={{ background: x.accent }}
                  >
                    {initials(x.name)}
                  </button>
                ))}
              </div>
              <div>
                <Stars />
                <p className="mt-1 text-sm text-blue-100/70">
                  <span className="font-semibold text-white">500+</span> happy industrial clients
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- right: review card ---------- */}
        <Reveal i={1}>
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative">
            {/* stacked cards behind */}
            <div aria-hidden="true" className="absolute inset-x-6 -bottom-3 top-3 rounded-[2rem] bg-white/10 sm:inset-x-10 sm:-bottom-5" />
            <div aria-hidden="true" className="absolute inset-x-3 -bottom-1.5 top-1.5 rounded-[2rem] bg-white/20 sm:inset-x-5 sm:-bottom-2.5" />

            <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] bg-white p-6 text-slate-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)] sm:min-h-[320px] sm:p-10">
              <Quote
                aria-hidden="true"
                className="absolute -right-2 -top-2 h-28 w-28 rotate-180 text-slate-100 sm:h-36 sm:w-36"
                strokeWidth={1}
              />
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.figure
                  key={idx}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) go(1);
                    else if (info.offset.x > 60) go(-1);
                  }}
                  className="relative cursor-grab touch-pan-y active:cursor-grabbing"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <Stars />
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
                      style={{ background: `${r.accent}14`, color: r.accent }}
                    >
                      {r.product}
                    </span>
                  </div>
                  <blockquote className="mt-6 font-serif text-xl leading-relaxed text-slate-800 sm:text-2xl sm:leading-relaxed">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-sm font-semibold text-white shadow-lg"
                      style={{ background: r.accent, boxShadow: `0 10px 24px -10px ${r.accent}` }}
                    >
                      {initials(r.name)}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-slate-900">{r.name}</span>
                      <span className="block text-sm text-slate-500">
                        {r.role} · {r.company}
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            </div>

            {/* controls */}
            <div className="relative mt-8 flex items-center justify-between sm:mt-10">
              <div className="flex items-center gap-2">
                {reviews.map((x, i) => (
                  <button
                    key={x.name}
                    onClick={() => jump(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ${i === idx ? "w-8 bg-[#8be04e]" : "w-2 bg-white/30 hover:bg-white/60"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous review"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/25 transition hover:border-white hover:bg-white/10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next review"
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#7cc242] text-[#0b1f4d] transition hover:brightness-110"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
