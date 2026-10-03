"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layers, Gem, ScanLine, Settings2, ShieldCheck, Factory, Truck } from "lucide-react";
import { Reveal, SectionTag } from "./ui";

const benefits = [
  { icon: Layers, title: "High Structural Stiffness", text: "Strong and rigid material suited to demanding applications." },
  { icon: Gem, title: "Premium Aesthetic Finish", text: "Smooth surface quality with an attractive, professional appearance." },
  { icon: ScanLine, title: "Surface Compliance", text: "High-quality external finish that meets industrial standards." },
  { icon: Settings2, title: "Easy Processing", text: "Optimised for efficient moulding and manufacturing operations." },
  { icon: ShieldCheck, title: "Premium Polymer Quality", text: "Virgin-grade raw materials with international quality standards." },
  { icon: Factory, title: "Advanced Manufacturing", text: "High-capacity automated production with modern machinery." },
  { icon: Truck, title: "Pan India Supply", text: "Strong distribution network across all major states in India." },
];

function TiltCard({ b }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className="glass group relative h-full overflow-hidden rounded-2xl p-7"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-green/0 transition duration-500 group-hover:from-brand-blue/10 group-hover:to-brand-green/10" />
      <div className="relative">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-blue to-blue-800 text-white shadow-lg shadow-brand-blue/30">
          <b.icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-white">{b.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">{b.text}</p>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <Reveal><SectionTag>Key Benefits</SectionTag></Reveal>
          <Reveal i={1}>
            <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Why manufacturers choose SGP</h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} i={i % 4} className={i === 6 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <TiltCard b={b} />
            </Reveal>
          ))}
          <Reveal i={3}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-brand-green to-emerald-600 p-7 text-ink">
              <p className="text-5xl font-extrabold">15+</p>
              <p className="mt-2 font-semibold">Years of excellence in engineering polymers</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
