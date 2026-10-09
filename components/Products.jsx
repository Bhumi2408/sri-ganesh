"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui";
import { products } from "@/lib/products";

function ProductCard({ p, hidden = false }) {
  return (
    <Link
      href={`/products/${p.slug}`}
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.3)]"
    >
      {/* image */}
      <div className="relative m-3 mb-0 aspect-[4/3] overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
        <Image
          src={p.image}
          alt={hidden ? "" : `${p.code} granules`}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 64vw"
          className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute left-3 top-3 hidden rounded-full border border-slate-200 md:block bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 backdrop-blur">
          {p.tag}
        </span>
        <span
          className="absolute bottom-3 left-3 hidden rounded-xl px-3 py-1.5 md:block font-display text-2xl font-semibold leading-none text-white shadow-lg"
          style={{ background: p.accent }}
        >
          {p.code}
        </span>
      </div>

      {/* name */}
      <div className="flex items-center justify-between gap-3 px-6 py-5">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full" style={{ background: p.accent }} />
          <h3 className="text-lg font-semibold text-slate-900">
            <span className="font-display text-xl md:hidden" style={{ color: p.accent }}>{p.code}</span>
            <span className="hidden md:inline">{p.name}</span>
          </h3>
        </div>
        <span
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white transition-transform duration-300 group-hover:rotate-45"
          style={{ background: p.accent }}
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

const N = products.length;
// three copies of the list: the slider lives in the middle copy and quietly jumps back
// to it when it drifts into a neighbour, so it can move forward forever without rewinding
const LOOP = [0, 1, 2].flatMap((copy) => products.map((p) => ({ p, copy })));

export default function Products() {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(N);
  const pausedUntil = useRef(0);
  const settle = useRef(null);

  const scrollToIndex = (i, smooth = true) => {
    const el = track.current;
    const card = el?.children[i];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2, behavior: smooth ? "smooth" : "auto" });
  };

  // active card = the one whose centre is closest to the track's centre
  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestD = Infinity;
    [...el.children].forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    activeRef.current = best;
    setActive(best % N);

    // once scrolling settles in an outer copy, jump to the same card in the middle copy
    clearTimeout(settle.current);
    settle.current = setTimeout(() => {
      const i = activeRef.current;
      if (i < N || i >= 2 * N) {
        const j = (i % N) + N;
        activeRef.current = j;
        scrollToIndex(j, false);
      }
    }, 150);
  };
  // a touch or tap pauses auto-scroll for a few seconds
  const pause = () => (pausedUntil.current = Date.now() + 6000);

  // start on the middle copy; auto-advance on mobile only
  useEffect(() => {
    scrollToIndex(N, false);
    const mobile = window.matchMedia("(max-width: 767px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const id = setInterval(() => {
      if (!mobile.matches || calm.matches || document.hidden || Date.now() < pausedUntil.current) return;
      scrollToIndex(activeRef.current + 1);
    }, 3000);
    return () => {
      clearInterval(id);
      clearTimeout(settle.current);
    };
  }, []);

  return (
    <section id="products" className="relative bg-white pb-16 pt-8 font-label sm:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="mx-auto max-w-7xl px-5">
        {/* header */}
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#1e5eff]" />
              <span className="text-base font-bold uppercase tracking-[0.2em] text-[#1e5eff] md:text-xs md:font-semibold md:tracking-[0.3em]">Our Products</span>
              <span className="h-px w-10 bg-[#1e5eff]" />
            </div>
          </Reveal>
          <Reveal i={1}>
            <h2 className="mt-3 whitespace-nowrap font-display text-[clamp(11px,3.5vw,14px)] font-normal leading-snug text-[#0b1530] md:mt-5 md:whitespace-normal md:text-4xl md:font-medium md:leading-tight md:tracking-tight">
              Engineering granules for every application.
            </h2>
          </Reveal>
        </div>

        {/* mobile: swipeable slider that loops endlessly */}
        <Reveal i={1} className="md:hidden">
          <div
            ref={track}
            onScroll={onScroll}
            onTouchStart={pause}
            onPointerDown={pause}
            className="relative -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {LOOP.map(({ p, copy }) => (
              <div key={`${copy}-${p.code}`} className="w-[64%] shrink-0 snap-center">
                <ProductCard p={p} hidden={copy !== 1} />
              </div>
            ))}
          </div>

          {/* slider dots */}
          <div className="mt-5 flex justify-center gap-2">
            {products.map((p, i) => (
              <button
                key={p.code}
                type="button"
                aria-label={`Show ${p.code}`}
                onClick={() => {
                  pause();
                  scrollToIndex(N + i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-[#1e5eff]" : "w-2 bg-slate-300"}`}
              />
            ))}
          </div>
        </Reveal>

        {/* tablet & desktop: grid */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.code} i={i} className="h-full">
              <ProductCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
