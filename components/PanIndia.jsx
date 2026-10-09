"use client";
import { FlaskConical, Palette, Truck, Handshake, Layers, Lightbulb, Plug, Gauge, Smartphone } from "lucide-react";
import { Reveal } from "./ui";
import PolymerMap from "./PolymerMap";

const points = [
  { icon: Layers, title: "Three core polymers", text: "PC, ABS and PBT — standard, FR, extrusion and glass-filled grades." },
  { icon: FlaskConical, title: "Lab-tested batches", text: "Every lot is checked in our in-house lab before it ships." },
  { icon: Palette, title: "Custom colours", text: "Shades matched to your sample for consistent moulded parts." },
  { icon: Truck, title: "Pan-India supply", text: "105+ distributors keep granules moving to every region." },
  { icon: Handshake, title: "Long-term partner", text: "15+ years and 500+ clients who reorder batch after batch." },
];

const industries = [
  { icon: Lightbulb, label: "LED & Lighting" },
  { icon: Plug, label: "Electrical" },
  { icon: Gauge, label: "Meters" },
  { icon: Smartphone, label: "Consumer Electronics" },
];

export default function PanIndia() {
  return (
    <section id="pan-india" className="relative bg-white py-16 font-label sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1f4d] px-5 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
            {/* mobile: heading, map, points — desktop: map on the left, heading + points on the right */}
            <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-x-14 lg:gap-y-0">
              <div className="lg:col-start-2 lg:row-start-1 lg:self-end">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8be04e]">Pan-India reach</p>
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  Compounded in Delhi, <span className="text-[#60a5fa]">delivered across India.</span>
                </h2>
                <span className="mt-5 block h-0.5 w-16 bg-[#60a5fa]" />
              </div>

              {/* ---------- map ---------- */}
              <div className="lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
                <PolymerMap className="mx-auto max-w-[520px]" />
                <div className="mt-6">
                  <span className="block h-0.5 w-10 bg-[#8be04e]" />
                  <p className="mt-3 font-display text-lg font-medium uppercase leading-snug tracking-wide">
                    Granules that build India&apos;s <span className="text-[#8be04e]">everyday products</span>
                  </p>
                </div>
              </div>

              {/* ---------- points ---------- */}
              <ul className="divide-y divide-white/10 lg:col-start-2 lg:row-start-2 lg:mt-8 lg:self-start">
                {points.map((p) => (
                  <li key={p.title} className="flex items-start gap-4 py-4 first:pt-0">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full ring-1 ring-white/25">
                      <p.icon className="h-5 w-5 text-blue-100" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-wide">{p.title}</span>
                      <span className="mt-0.5 block text-sm leading-snug text-blue-100/70">{p.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------- industries ---------- */}
            <ul className="mt-10 grid grid-cols-2 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
              {industries.map((ind) => (
                <li key={ind.label} className="flex flex-col items-center gap-2 text-center">
                  <ind.icon className="h-7 w-7 text-blue-100/80" strokeWidth={1.5} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-100/80">{ind.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
