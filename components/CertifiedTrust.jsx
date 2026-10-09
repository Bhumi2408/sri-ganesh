"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SpinningGlobe from "./SpinningGlobe";
import IndiaMap, { legend } from "./IndiaMap";
import { Counter } from "./ui";

const certs = [
  { img: "/sgp/badge-iso14001.webp", title: "ISO 14001:2015", sub: "Certified Company" },
  { img: "/sgp/badge-iso9001.webp", title: "ISO 9001:2015", sub: "Certified Company" },
  { img: "/sgp/badge-msme.webp", title: "MSME", sub: "Govt. of India" },
  { img: "/sgp/badge-rohs.webp", title: "ROHS", sub: "Compliant" },
];

// Positions of the globe inside hands-base.webp (817 × 772 px), in %
const GLOBE = { left: (163 / 817) * 100, top: (43 / 772) * 100, size: (642 / 817) * 100 };
const LOGO = { left: (375 / 817) * 100, top: (285 / 772) * 100, width: (250 / 817) * 100 };

const up = (i = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
});

function GlobeInHands() {
  return (
    <div
      // the globe sits right of centre in the photo; on mobile shift it so the globe is centred
      className="relative mx-auto aspect-[817/772] w-full max-w-[560px] max-sm:-translate-x-[9.2%]"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, #000 10%, #000 88%, transparent 100%), linear-gradient(to bottom, #000 80%, transparent 100%)",
        WebkitMaskComposite: "source-in",
        maskImage:
          "linear-gradient(to right, transparent 0%, #000 10%, #000 88%, transparent 100%), linear-gradient(to bottom, #000 80%, transparent 100%)",
        maskComposite: "intersect",
      }}
    >
      {/* 1. photo: background network + hands */}
      <Image src="/sgp/hands-base.webp" alt="" fill priority sizes="560px" className="object-cover" />

      {/* 2. spinning earth, sitting exactly over the original globe */}
      <div
        className="absolute rounded-full"
        style={{ left: `${GLOBE.left}%`, top: `${GLOBE.top}%`, width: `${GLOBE.size}%`, aspectRatio: "1" }}
      >
        <SpinningGlobe className="h-full w-full rounded-full" />
        {/* soft light from upper-left for a 3D feel */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,.14),transparent_45%)]" />
      </div>

      {/* 3. SGP logo stays upright on the globe */}
      <img
        src="/sgp/sgp-globe-logo.webp"
        alt="SGP Premium Polymer"
        className="pointer-events-none absolute drop-shadow-[0_2px_8px_rgba(0,0,0,.8)]"
        style={{ left: `${LOGO.left}%`, top: `${LOGO.top}%`, width: `${LOGO.width}%` }}
      />

      {/* 4. fingers in front of the globe */}
      <Image src="/sgp/hands-front.webp" alt="Hands holding a globe" fill sizes="560px" className="pointer-events-none object-cover" />
    </div>
  );
}

export default function CertifiedTrust() {
  return (
    <section id="certifications" className="relative overflow-hidden bg-[#000021] py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-[1.3fr_1fr_0.75fr] lg:gap-4">
        {/* ---------- left: text + certifications ---------- */}
        <div className="relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <motion.img {...up(0)} src="/sgp/sgp-logo-white.webp" alt="SGP – Shri Ganesh Polymer" className="w-40 sm:w-48" />
            <motion.span
              {...up(1)}
              className="inline-flex items-center gap-2 rounded-md border-2 border-brand-green px-4 py-2 text-xs font-bold tracking-wide text-white sm:text-sm lg:hidden xl:inline-flex"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-green" />
              PREMIUM POLYMER SOLUTIONS
            </motion.span>
          </div>

          <motion.h2 {...up(2)} className="mt-8 text-[1.85rem] font-extrabold leading-[1.1] text-brand-green sm:text-6xl sm:leading-[1.05] lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Certified Quality
            <br />
            Worldwide Trust
          </motion.h2>

          <motion.p {...up(3)} className="mt-5 max-w-lg text-base font-medium text-white sm:text-lg">
            Manufacturing high-performance polymer products trusted by 90K+ businesses across 105+ cities in India.
          </motion.p>

          <motion.div
            {...up(4)}
            className="mt-6 inline-flex items-center gap-3 rounded-md border-2 border-brand-green px-6 py-2.5 text-xl font-semibold text-white"
          >
            Our Certifications <Award className="h-6 w-6" />
          </motion.div>

          <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-6">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.3 + i * 0.12 }}
                className="text-center"
              >
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  src={c.img}
                  alt={`${c.title} ${c.sub}`}
                  className="mx-auto aspect-square w-full max-w-[60px] rounded-full sm:max-w-[110px] shadow-[0_0_24px_rgba(124,194,66,.25)]"
                />
                <p className="mt-2 text-[10px] font-bold leading-tight text-white sm:mt-3 sm:text-base">{c.title}</p>
                <p className="mt-0.5 text-[9px] leading-tight text-gray-300 sm:mt-0 sm:text-xs">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------- centre: globe in hands ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:-mx-10"
        >
          <div className="absolute left-1/2 top-[40%] h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[80px]" />
          <GlobeInHands />
        </motion.div>

        {/* ---------- right: India reach card ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 mx-auto w-full max-w-md rounded-2xl border-2 border-white/80 bg-[#0a1a5c] p-5 shadow-[0_0_60px_rgba(36,71,168,.35)]"
        >
          <div className="px-4">
            <IndiaMap />
          </div>

          <div className="mt-4 flex items-end justify-between gap-3">
            <div className="flex gap-5">
              <div className="text-center">
                <Counter to={105} suffix="+" className="block text-3xl font-bold text-white" />
                <p className="text-xs font-medium text-white">Distributors</p>
              </div>
              <div className="text-center">
                <Counter to={90} suffix="K+" className="block text-3xl font-bold text-white" />
                <p className="text-xs font-medium text-white">
                  Touch Points
                  <br />
                  (Stores)
                </p>
              </div>
            </div>
            <div>
              <p className="border-b-2 border-white pb-1 text-sm font-bold text-white">OUR REACH</p>
              <p className="mt-2 text-[11px] font-semibold text-white">Numbers of Dealers</p>
              <ul className="mt-1 space-y-0.5">
                {legend.map((l) => (
                  <li key={l.label} className="flex items-center gap-2 text-[11px] font-medium text-white">
                    <span className="h-2.5 w-2.5" style={{ background: l.color }} />
                    {l.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
