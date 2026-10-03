"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import india from "@svg-maps/india";

// Dealer density per state, as shown on the brochure map.
// "low" = less than 20 dealers, "mid" = 20–100, "high" = more than 100.
const GREEN = "#7cc242";
const BLUE = "#2447a8";
const YELLOW = "#facc15";
const ISLAND = "#4b5563";

const tiers = {
  mid: ["jk", "hp", "ut", "hr", "rj", "gj", "mp", "mh", "tg", "br", "or", "as", "tn", "kl", "ga", "mz"],
  low: ["pb", "ch", "dl", "up", "jh", "wb", "ct", "ka", "ap", "ar", "ml", "nl", "mn", "tr", "sk", "dn", "dd", "py"],
  high: [],
};
const colorFor = (id) =>
  tiers.high.includes(id) ? YELLOW : tiers.mid.includes(id) ? GREEN : tiers.low.includes(id) ? BLUE : ISLAND;

// States big enough to carry a label on the map
const LABELS = {
  jk: "JAMMU - KASHMIR", hp: "HIMACHAL PRADESH", pb: "PUNJAB", ut: "UTTARAKHAND", rj: "RAJASTHAN",
  up: "UTTAR PRADESH", br: "BIHAR", gj: "GUJARAT", mp: "MADHYA PRADESH", jh: "JHARKHAND",
  wb: "WEST BENGAL", ct: "CHHATTISGARH", or: "ODISHA", mh: "MAHARASHTRA", tg: "TELANGANA",
  ka: "KARNATAKA", ap: "ANDHRA PRADESH", tn: "TAMIL NADU", as: "ASSAM", ar: "ARUNACHAL PRADESH",
};

export const legend = [
  { color: BLUE, label: "Less than 20" },
  { color: GREEN, label: "20 to 100" },
  { color: YELLOW, label: "More than 100" },
];

export default function IndiaMap() {
  const svgRef = useRef(null);
  const [centers, setCenters] = useState({});
  const [hover, setHover] = useState(null);

  // measure each labelled state once rendered, to place its label at the centre
  useEffect(() => {
    const out = {};
    Object.keys(LABELS).forEach((id) => {
      const el = svgRef.current?.querySelector(`[data-id="${id}"]`);
      if (!el) return;
      const b = el.getBBox();
      out[id] = { x: b.x + b.width / 2, y: b.y + b.height / 2, w: b.width };
    });
    setCenters(out);
  }, []);

  return (
    <div className="relative">
      <svg ref={svgRef} viewBox={india.viewBox} className="h-auto w-full" role="img" aria-label="Map of India showing Shri Ganesh Polymer dealer reach">
        {india.locations.map((loc, i) => (
          <motion.path
            key={loc.id}
            data-id={loc.id}
            d={loc.path}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.03, duration: 0.5 }}
            style={{ transformOrigin: "center", transformBox: "fill-box" }}
            fill={colorFor(loc.id)}
            stroke="#0a1a5c"
            strokeWidth={hover === loc.id ? 2 : 0.8}
            className="cursor-pointer transition-[filter] duration-200 hover:brightness-125"
            onMouseEnter={() => setHover(loc.id)}
            onMouseLeave={() => setHover(null)}
          >
            <title>{loc.name}</title>
          </motion.path>
        ))}
        {Object.entries(centers).map(([id, c]) => (
          <text
            key={id}
            x={c.x}
            y={c.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={c.w > 90 ? 11 : 7.5}
            fontWeight="700"
            fill="#fff"
            className="pointer-events-none select-none"
          >
            {LABELS[id]}
          </text>
        ))}
      </svg>

      {hover && (
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded-md bg-white px-3 py-1 text-xs font-semibold text-[#000021] shadow-lg">
          {india.locations.find((l) => l.id === hover)?.name}
        </div>
      )}
    </div>
  );
}
