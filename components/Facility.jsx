"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FlaskConical, Gauge, Flame, Hammer, Scale, Activity, Syringe, Palette, Eye, Globe2 } from "lucide-react";
import { Reveal, SectionTag, Counter } from "./ui";

const tests = [
  { icon: Gauge, label: "Melt Flow Index Tester" },
  { icon: Flame, label: "Muffle Furnace" },
  { icon: Hammer, label: "Digital IZOD / Charpy Impact Tester" },
  { icon: Scale, label: "Digital Specific Gravity Balance" },
  { icon: Activity, label: "Computerized Tensile Testing Machine" },
  { icon: Syringe, label: "Test Specimen Injection Moulding Machine" },
  { icon: Eye, label: "Spectrophotometer" },
  { icon: Palette, label: "Colour Matching Cabinet" },
];

const reach = ["Global Supply", "Worldwide Export", "International Reach", "Export Quality", "Overseas Network", "Global Distribution"];

function Extruder() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent px-4 pb-4 pt-8">
      <div className="absolute inset-x-10 bottom-3 h-6 rounded-full bg-black/60 blur-xl" />
      <Image
        src="/sgp/machineimage.webp"
        alt="Twin screw extruder used for polymer compounding"
        width={2073}
        height={758}
        sizes="(min-width: 1024px) 600px, 100vw"
        className="relative h-auto w-full"
      />
    </div>
  );
}

export default function Facility() {
  return (
    <section id="facility" className="section-light relative overflow-hidden py-28">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Manufacturing */}
          <div>
            <Reveal><SectionTag>Manufacturing Setup</SectionTag></Reveal>
            <Reveal i={1}>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">Advanced extrusion technology</h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-4 text-gray-400">
                Powered by <span className="text-white">2 Twin Screw Extruders</span> and{" "}
                <span className="text-white">2 Single Screw Extruders</span>, we deliver high-quality polymer compounds
                with precision, consistency and efficiency.
              </p>
            </Reveal>
            <Reveal i={3} className="mt-8"><Extruder /></Reveal>

            <Reveal i={4}>
              <div className="glass mt-8 rounded-2xl p-8">
                <p className="text-sm uppercase tracking-widest text-gray-500">Annual Production Capacity</p>
                <Counter to={5000} suffix="+ MT" className="mt-2 block text-5xl font-extrabold text-gradient sm:text-6xl" />
                <p className="mt-4 text-sm text-gray-400">
                  Modern extrusion and a streamlined process let us meet large-scale demand with superior quality in
                  every batch — and timely delivery to clients across India.
                </p>
              </div>
            </Reveal>

            <div className="mt-6 flex flex-wrap gap-2">
              {reach.map((r, i) => (
                <Reveal key={r} i={i}>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                    <Globe2 className="h-3.5 w-3.5 text-brand-green" /> {r}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Lab */}
          <div>
            <Reveal><SectionTag>Lab · Quality Control</SectionTag></Reveal>
            <Reveal i={1}>
              <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">In-house polymer testing lab</h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-4 text-gray-400">
                Every material undergoes precise laboratory testing for quality, durability and performance. Skilled
                professionals ensure strict quality control from raw materials to finished products.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {tests.map((t, i) => (
                <Reveal key={t.label} i={i * 0.5}>
                  <motion.div
                    whileHover={{ scale: 1.03, x: 4 }}
                    className="glass group flex items-center gap-4 rounded-xl p-4"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-blue/15 text-blue-400 transition group-hover:bg-brand-green group-hover:text-ink">
                      <t.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-gray-300">{t.label}</span>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <Reveal i={3}>
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-brand-green/20 bg-brand-green/5 p-6">
                <FlaskConical className="h-8 w-8 shrink-0 text-brand-green" />
                <p className="text-sm text-gray-300">
                  Our advanced testing process guarantees reliable, industry-standard polymer solutions — batch after batch.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
