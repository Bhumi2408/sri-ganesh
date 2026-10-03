"use client";
import { Reveal, SectionTag } from "./ui";


const row1 = ["Surya", "AP", "Cervo", "Tektronics", "Addwin LED Lights", "E-Light", "A-Wins", "AMD Lighting", "Amezzon"];
const row2 = ["Camron", "Jonson", "Gingen", "Max Plus", "KDR", "GP Plast", "Volta", "Ved-G", "Cherish", "Sarv", "Tanisha", "Narayana", "Rolite", "Topclip", "BM Lite"];

function Row({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className="flex w-max animate-marquee gap-4 py-2 group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((c, i) => (
          <span
            key={i}
            className="glass whitespace-nowrap rounded-xl px-8 py-4 text-lg font-bold uppercase tracking-wide text-gray-400 transition hover:border-brand-green/50 hover:text-white"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="section-light relative py-24">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <Reveal><SectionTag>Trusted by Industry Leaders</SectionTag></Reveal>
        <Reveal i={1}>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Proudly serving <span className="text-gradient">500+ clients</span>
          </h2>
        </Reveal>
      </div>
      <div className="mt-14 space-y-4">
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>
    </section>
  );
}
