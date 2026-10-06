"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./ui";
import { products } from "@/lib/products";

export default function Products() {
  return (
    <section id="products" className="relative bg-[#f6f8fb] py-24 font-label sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="mx-auto max-w-7xl px-5">
        {/* header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#1e5eff]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">Our Products</span>
              </div>
            </Reveal>
            <Reveal i={1}>
              <h2 className="mt-5 font-serif text-3xl font-medium leading-tight tracking-tight text-[#0b1530] md:text-5xl">
                Engineering granules for every application.
              </h2>
            </Reveal>
          </div>
          <Reveal i={2}>
            <p className="max-w-md text-slate-600 lg:ml-auto">
              Three core polymers, compounded in-house and tested batch by batch — available in custom colours and
              grades to suit your moulding needs.
            </p>
          </Reveal>
        </div>

        {/* cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.code} i={i} className="h-full">
              <Link href={`/products/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.3)]">
                {/* image */}
                <div className="relative m-3 mb-0 aspect-[4/3] overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
                  <Image
                    src={p.image}
                    alt={`${p.code} granules`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 backdrop-blur">
                    {p.tag}
                  </span>
                  <span
                    className="absolute bottom-3 left-3 rounded-xl px-3 py-1.5 font-serif text-2xl font-semibold leading-none text-white shadow-lg"
                    style={{ background: p.accent }}
                  >
                    {p.code}
                  </span>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6 pt-5">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full" style={{ background: p.accent }} />
                    <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>

                  <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] leading-snug text-slate-700">
                        <span
                          className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full"
                          style={{ background: `${p.accent}1a`, color: p.accent }}
                        >
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Used in</p>
                    <p className="mt-1 text-sm leading-snug text-slate-600">{p.apps}</p>
                  </div>

                  <div className="mt-auto pt-6">
                    <span className="flex items-center justify-between rounded-full border border-slate-200 py-1.5 pl-5 pr-1.5 text-sm font-semibold text-slate-800 transition-colors group-hover:border-transparent group-hover:bg-[#0b1f4d] group-hover:text-white">
                      View {p.code} details
                      <span
                        className="grid h-8 w-8 place-items-center rounded-full text-white transition-transform duration-300 group-hover:rotate-45"
                        style={{ background: p.accent }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
