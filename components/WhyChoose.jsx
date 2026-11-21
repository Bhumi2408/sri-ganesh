"use client";
import { FlaskConical, Palette, BadgeCheck, Factory, Truck, Headset } from "lucide-react";
import { Reveal } from "./ui";

const reasons = [
  { icon: FlaskConical, title: "Consistent quality", text: "Every batch is tested in our in-house lab for colour, impact strength, melt flow index and tensile strength before dispatch." },
  { icon: Palette, title: "Custom colour matching", text: "Shades matched to your sample for uniform moulded parts." },
  { icon: BadgeCheck, title: "Certified and compliant", text: "ISO 9001:2015, ISO 14001:2015, MSME registered and RoHS compliant." },
  { icon: Factory, title: "Scale you can rely on", text: "5000+ MT annual capacity with twin and single screw extrusion." },
  { icon: Truck, title: "Pan-India supply", text: "105+ distributors keep your material moving to every region." },
  { icon: Headset, title: "Application support", text: "Tell us your part and working temperature, and we will suggest the right PC, ABS or PBT grade." },
];

export default function WhyChoose() {
  return (
    <section id="why-us" className="relative bg-[#f6f8fb] py-16 font-label sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#1e5eff]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Why choose us</span>
              <span className="h-px w-10 bg-[#1e5eff]" />
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-[#0b1530] sm:text-4xl">
              Why Choose Shri Ganesh Polymer As Your{" "}
              <span className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text text-transparent">
                Engineering Polymer Manufacturer
              </span>{" "}
              In Delhi
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} i={(i % 3) * 0.5} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)] sm:p-7">
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#1e5eff] to-[#4caf27] transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef4ff] text-[#1e5eff] transition-colors duration-300 group-hover:bg-[#1e5eff] group-hover:text-white">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
