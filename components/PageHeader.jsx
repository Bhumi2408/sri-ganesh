import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Title band for inner pages. Top padding clears the fixed navbar
// (97px mobile, 137px desktop — incl. utility strip and name marquee).
export default function PageHeader({ eyebrow, title, accent, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-white pb-14 pt-[calc(97px+3.5rem)] font-label md:pb-20 md:pt-[calc(137px+4.5rem)]">

      <div className="relative mx-auto max-w-7xl px-5">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-500">
          <Link href="/" className="transition hover:text-[#1e5eff]">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="font-medium text-slate-800" aria-current="page">
            {crumb}
          </span>
        </nav>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#1e5eff]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1e5eff]">{eyebrow}</span>
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#0b1530] sm:text-5xl lg:text-6xl">
          {title}{" "}
          {accent && (
            <span className="bg-gradient-to-r from-[#1e5eff] to-[#4caf27] bg-clip-text font-normal text-transparent">
              {accent}
            </span>
          )}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
