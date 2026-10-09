"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Expand, Building2, Factory, PackageCheck, LayoutGrid } from "lucide-react";
import { Reveal } from "./ui";

// Web-sized copies of the photos in /company live in /gallery (company-N.webp + company-N-sm.webp).
// `span` is the bento footprint: desktop rows are 100px, so a standard tile is row-span-2 and
// "Ready for dispatch" gets row-span-3 (~1.5× taller). Tiles pack densely, so filtered views stay gap-free.
const photos = [
  { n: 10, cat: "dispatch", title: "Shri Ganesh Polymer, Mangolpuri", text: "Our manufacturing unit in Mangolpuri Industrial Area, Delhi", span: "col-span-2 lg:col-span-2 lg:row-span-4" },
  { n: 2, cat: "office", title: "Reception", text: "Where clients and partners are welcomed", span: "lg:row-span-2" },
  { n: 8, cat: "production", title: "Extrusion line", text: "Twin screw compounding in progress", span: "lg:row-span-4" },
  { n: 3, cat: "office", title: "Client lounge", text: "A calm space for discussions and sampling", span: "lg:row-span-2" },
  { n: 7, cat: "production", title: "Strand cooling bath", text: "Polymer strands cooled before pelletising", span: "lg:row-span-2" },
  { n: 1, cat: "office", title: "Conference room", text: "Planning, reviews and customer meetings", span: "lg:col-span-2 lg:row-span-2" },
  { n: 5, cat: "production", title: "Production floor", text: "Feeding, compounding and pelletising under one roof", span: "lg:row-span-2" },
  { n: 9, cat: "dispatch", title: "Ready for dispatch", text: "Branded bags of PC, ABS and PBT granules", span: "col-span-2 lg:col-span-2 lg:row-span-3" },
  { n: 6, cat: "dispatch", title: "Finished goods store", text: "Packed, labelled and stacked by grade", span: "col-span-2 lg:col-span-2 lg:row-span-3" },
];

const cats = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "office", label: "Office", icon: Building2 },
  { id: "production", label: "Production", icon: Factory },
  { id: "dispatch", label: "Stock & dispatch", icon: PackageCheck },
];
const catLabel = Object.fromEntries(cats.map((c) => [c.id, c.label]));

const big = (n) => `/gallery/company-${n}.webp`;
const small = (n) => `/gallery/company-${n}-sm.webp`;

function Lightbox({ list, index, onClose, onGo }) {
  const p = list[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onGo(1);
      if (e.key === "ArrowLeft") onGo(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onGo]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${p.title} — photo ${index + 1} of ${list.length}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col bg-[#050b1c]/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* top bar */}
      <div className="flex items-center justify-between px-4 py-3 text-white sm:px-6 sm:py-4" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm tabular-nums text-white/60">
          <span className="font-semibold text-white">{String(index + 1).padStart(2, "0")}</span> / {String(list.length).padStart(2, "0")}
        </p>
        <button onClick={onClose} aria-label="Close gallery" className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* stage */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={p.n}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) onGo(1);
              else if (info.offset.x > 70) onGo(-1);
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-full max-h-[72vh] w-full max-w-6xl touch-pan-y"
          >
            <Image src={big(p.n)} alt={`${p.title} — ${p.text}`} fill sizes="100vw" className="object-contain" priority />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={(e) => { e.stopPropagation(); onGo(-1); }}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:grid"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onGo(1); }}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-[#7cc242] text-[#0b1f4d] transition hover:brightness-110 sm:grid"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* caption + thumbnails */}
      <div className="px-4 pb-4 pt-3 text-center sm:pb-6" onClick={(e) => e.stopPropagation()}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8be04e]">{catLabel[p.cat]}</p>
        <p className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">{p.title}</p>
        <p className="mt-0.5 text-sm text-white/60">{p.text}</p>
        <div className="mx-auto mt-4 flex max-w-full justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
          {list.map((t, i) => (
            <button
              key={t.n}
              onClick={() => onGo(i - index)}
              aria-label={`Show ${t.title}`}
              className={`relative h-12 w-[4.5rem] shrink-0 overflow-hidden rounded-lg transition ${
                i === index ? "ring-2 ring-[#8be04e]" : "opacity-50 hover:opacity-100"
              }`}
            >
              <Image src={small(t.n)} alt="" fill sizes="72px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(null); // index into `list`
  const list = cat === "all" ? photos : photos.filter((p) => p.cat === cat);

  const go = useCallback((d) => setOpen((i) => (i + d + list.length) % list.length), [list.length]);
  const close = useCallback(() => setOpen(null), []);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#f6f8fb] py-16 font-label sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div aria-hidden="true" className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1e5eff]/[0.07] blur-3xl" />
      <div aria-hidden="true" className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#7cc242]/[0.10] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        {/* ---------- header ---------- */}
        <div className="flex flex-col gap-7">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#1e5eff]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Gallery</span>
              </div>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-[#0b1530] sm:text-4xl lg:text-5xl">
                Step inside{" "}
                <span className="bg-gradient-to-r from-[#1e5eff] via-[#16a3c4] to-[#4caf27] bg-clip-text text-transparent">
                  Shri Ganesh Polymer.
                </span>
              </h2>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-4 leading-relaxed text-slate-600">
                From our office to the extrusion line to the dispatch bay — a quick tour of where your granules are made.
              </p>
            </Reveal>
          </div>

          <Reveal i={2}>
            <div role="tablist" aria-label="Filter photos" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
              {cats.map((c) => {
                const on = cat === c.id;
                const count = c.id === "all" ? photos.length : photos.filter((p) => p.cat === c.id).length;
                return (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setCat(c.id)}
                    className={`relative inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      on ? "text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="gallery-pill"
                        className="absolute inset-0 rounded-full bg-[#0b1f4d] shadow-lg shadow-[#0b1f4d]/25"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <c.icon className="relative h-4 w-4" />
                    <span className="relative">{c.label}</span>
                    <span className={`relative text-xs tabular-nums ${on ? "text-[#8be04e]" : "text-slate-400"}`}>{count}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* ---------- bento grid ---------- */}
        <LayoutGroup>
          {/* "All" is a 4-col bento; a filtered set fills the row instead (3 → 3 across, 4 → 2×2) */}
          <motion.ul
            layout
            className={`mt-10 grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 ${
              cat === "all"
                ? "lg:grid-cols-4 lg:auto-rows-[100px]"
                : list.length % 3 === 0
                  ? "lg:grid-cols-3 lg:auto-rows-[260px]"
                  : "lg:grid-cols-2 lg:auto-rows-[280px]"
            }`}
          >
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.li
                  key={p.n}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className={cat === "all" ? p.span : list.length % 2 && i === 0 ? "max-lg:col-span-2" : ""}
                >
                  <button
                    onClick={() => setOpen(i)}
                    aria-label={`Open ${p.title}`}
                    className="group relative block h-full w-full overflow-hidden rounded-2xl bg-slate-200 text-left shadow-[0_20px_40px_-30px_rgba(15,23,42,0.5)] sm:rounded-3xl"
                  >
                    {/* wide/tall tiles get the sharp copy, the rest the 640px thumbnail */}
                    <Image
                      src={cat === "all" && p.span.includes("col-span-2") ? big(p.n) : small(p.n)}
                      alt={`${p.title} — ${p.text}`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                    />

                    <span className="absolute inset-0 bg-gradient-to-t from-[#050b1c]/85 via-[#050b1c]/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                    {/* corner frame marks */}
                    <span className="pointer-events-none absolute inset-3 opacity-0 transition duration-500 group-hover:inset-4 group-hover:opacity-100">
                      <span className="absolute left-0 top-0 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-white/80" />
                      <span className="absolute right-0 top-0 h-5 w-5 rounded-tr-lg border-r-2 border-t-2 border-white/80" />
                      <span className="absolute bottom-0 left-0 h-5 w-5 rounded-bl-lg border-b-2 border-l-2 border-white/80" />
                      <span className="absolute bottom-0 right-0 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-white/80" />
                    </span>

                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#0b1f4d] opacity-0 shadow-lg transition duration-300 group-hover:opacity-100 sm:right-4 sm:top-4">
                      <Expand className="h-4 w-4" />
                    </span>

                    <span className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                      <span className="mb-1.5 hidden rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8be04e] backdrop-blur-sm sm:inline-block">
                        {catLabel[p.cat]}
                      </span>
                      <span className="block font-display text-sm font-semibold leading-snug text-white sm:text-lg">{p.title}</span>
                      <span className="mt-0.5 hidden max-h-0 overflow-hidden text-xs text-white/75 transition-all duration-500 group-hover:max-h-10 sm:block sm:text-sm">
                        {p.text}
                      </span>
                    </span>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </LayoutGroup>
      </div>

      <AnimatePresence>
        {open !== null && <Lightbox list={list} index={open} onClose={close} onGo={go} />}
      </AnimatePresence>
    </section>
  );
}
