"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Phone, MapPin, Cog, BadgeCheck, Truck, Clock } from "lucide-react";
import { Reveal } from "./ui";

const pillars = [
  { icon: Cog, title: "Modern machinery", text: "Latest extrusion lines that speed up production and minimise errors." },
  { icon: BadgeCheck, title: "Quality at fair price", text: "High on quality, sensible on cost — batch after batch." },
  { icon: Truck, title: "Nationwide network", text: "A large distribution network spread across India." },
  { icon: Clock, title: "On-time delivery", text: "Experts and processes built to meet demand on schedule." },
];

const SEAL = "SHRI GANESH POLYMER • PREMIUM POLYMER • ";

export default function About() {
  const stageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start end", "end start"] });
  const buildingY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const floatDown = useTransform(scrollYProgress, [0, 1], [-30, 40]);

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 font-label">
      {/* ambient backdrop */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-[#1e5eff]/[0.06] blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-[#7cc242]/[0.10] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-x-20 lg:gap-y-0">
        {/* ---------- heading (on mobile the image follows it) ---------- */}
        <div className="lg:col-start-2 lg:row-start-1">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#1e5eff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">About Us</span>
            </div>
          </Reveal>

          <Reveal i={1}>
            <h2 className="mt-5 max-w-xl font-serif text-[1.85rem] font-medium leading-[1.15] tracking-tight text-[#0b1530] md:text-4xl">
              Polymers{" "}
              <em className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text font-normal text-transparent">crafted</em>{" "}
              with precision.
            </h2>
          </Reveal>
        </div>

        {/* ---------- visual stage ---------- */}
        <Reveal className="lg:sticky lg:top-28 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div ref={stageRef} className="relative mx-auto max-w-[30rem] pb-8 pt-4 sm:pb-10 sm:pt-6 lg:max-w-none">
            {/* arch */}
            <div className="relative mx-auto aspect-[4/5] w-[88%] overflow-hidden rounded-t-[999px] rounded-b-[2.5rem] bg-gradient-to-b from-[#dbe8ff] via-[#eef4ff] to-[#f4f9ef] shadow-[0_40px_80px_-40px_rgba(30,94,255,0.45)] ring-1 ring-white">
              <div
                className="absolute inset-0 [background-size:36px_36px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
                style={{ backgroundImage: "linear-gradient(rgba(11,18,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,18,32,0.05) 1px, transparent 1px)" }}
              />
              <div className="absolute left-1/2 top-[18%] h-48 w-48 -translate-x-1/2 rounded-full bg-white/80 blur-2xl" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#7cc242]/25 to-transparent" />
              <motion.div style={{ y: buildingY }} className="absolute inset-x-[4%] bottom-[-2%] top-[10%]">
                <Image
                  src="/sgp/about-image.webp"
                  alt="Shri Ganesh Polymer manufacturing unit, Mangolpuri Industrial Area, Delhi"
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-contain object-bottom drop-shadow-[0_30px_30px_rgba(15,23,42,0.35)]"
                />
              </motion.div>
            </div>

            {/* ISO card */}
            <motion.div
              className="absolute right-0 bottom-1 flex items-center gap-2 rounded-xl border border-white bg-white/85 p-2 pr-3 sm:gap-3 sm:rounded-2xl sm:p-3 sm:pr-4 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:right-0"
            >
              <div className="flex gap-1 sm:gap-1.5">
                {["badge-iso9001", "badge-iso14001"].map((b) => (
                  <span key={b} className="relative h-8 w-8 shrink-0 sm:h-11 sm:w-11">
                    <Image src={`/sgp/${b}.webp`} alt="" fill sizes="44px" className="object-contain" />
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-xs font-semibold text-slate-900 sm:text-sm">ISO Certified</p>
                <p className="text-[10px] text-slate-500 sm:text-xs">9001 &amp; 14001</p>
              </div>
            </motion.div>

            {/* address chip */}
            <motion.div
              style={{ y: floatDown }}
              className="absolute right-0 top-0 max-w-[10rem] rounded-full border border-white bg-white/85 px-3 py-2 sm:top-[6%] sm:max-w-[13rem] sm:rounded-2xl sm:p-3.5 shadow-[0_20px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:right-0"
            >
              <div className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1e5eff] sm:gap-2 sm:text-[11px] sm:tracking-[0.18em]">
                <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Headquarters
              </div>
              <p className="hidden text-slate-800 sm:mt-1.5 sm:block sm:text-sm sm:font-medium sm:leading-snug">Mangolpuri Industrial Area, Phase-II, Delhi</p>
            </motion.div>

            {/* rotating seal */}
            <div className="absolute -bottom-1 left-[4%] grid h-20 w-20 place-items-center sm:-bottom-2 sm:left-[6%] sm:h-28 sm:w-28 lg:h-32 lg:w-32 rounded-full bg-[#0b1f4d] shadow-xl shadow-[#0b1f4d]/30 ">
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
                <defs>
                  <path id="seal-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text className="fill-white/80 text-[8.5px] font-semibold">
                  <textPath href="#seal-path" textLength="272" lengthAdjust="spacing">{SEAL}</textPath>
                </text>
              </svg>
              <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[#7cc242] font-serif text-sm sm:h-12 sm:w-12 sm:text-lg font-semibold italic text-[#0b1f4d]">
                SGP
              </span>
            </div>
          </div>
        </Reveal>

        {/* ---------- story ---------- */}
        <div className="lg:col-start-2 lg:row-start-2">
          <Reveal i={2}>
            <p className="max-w-xl text-base leading-relaxed lg:mt-6 text-slate-600 sm:text-lg">
              An innovative business approach lets Shri Ganesh Polymer run its operations exceptionally well and
              makes us a reliable manufacturer of PC, ABS and PBT granules — supplied for LEDs, switches, meters,
              sheets, automotive and mobile accessories.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} i={i * 0.5} className="h-full">
                <div className="group relative h-full bg-white p-5 transition-colors duration-300 hover:bg-[#f7faff] sm:p-6">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#eaf1ff] to-[#f1f8ea] text-[#1e5eff] transition duration-300 group-hover:from-[#1e5eff] group-hover:to-[#1e4fd8] group-hover:text-white">
                      <p.icon className="h-5 w-5" />
                    </span>
                    <span className="font-serif text-sm italic text-slate-300">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal i={2}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0b1f4d] py-2 pl-6 pr-2 font-semibold text-white shadow-xl shadow-[#0b1f4d]/25 transition hover:bg-[#123a8f]"
              >
                Talk to our team
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#7cc242] text-[#0b1f4d] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <a href="tel:+919818058610" className="group flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-[#1e5eff] transition group-hover:border-[#1e5eff] group-hover:bg-[#1e5eff] group-hover:text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs text-slate-500">Call us directly</span>
                  <span className="block font-semibold text-slate-900">+91 98180 58610</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
