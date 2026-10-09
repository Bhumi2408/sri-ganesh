"use client";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Reveal({ children, className = "", i = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      custom={i}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
      {children}
    </span>
  );
}

export function Counter({ to, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

// `plain` drops the white card — use it on light backgrounds.
// SGP mark with the company name set to its right.
export function Logo({ className = "", plain = false, imgClass = "h-10 w-auto sm:h-11", nameClass = "text-sm sm:text-base", stack = false }) {
  const card = plain ? "" : "rounded-xl bg-white px-2.5 py-1.5 shadow-lg shadow-black/20";
  return (
    <span className={`inline-flex items-center gap-2.5 ${card} ${className}`}>
      <Image
        src="/logo-mark.webp"
        alt="SGP Premium Polymer"
        width={308}
        height={158}
        priority
        sizes="120px"
        className={imgClass}
      />
      <span className={`whitespace-nowrap font-display font-extrabold uppercase leading-none tracking-[0.04em] text-[#1b3fa0] ${nameClass}`}>
        Shri Ganesh <span className={stack ? "md:block xl:inline" : ""}>Polymer</span>
      </span>
    </span>
  );
}
