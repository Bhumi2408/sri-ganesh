"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Logo } from "./ui";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/facility", label: "Facility" },
  { href: "/exhibition", label: "Exhibition" },
  { href: "/contact", label: "Contact" },
];

const PHONE = { label: "+91 98180 58610", href: "tel:+919818058610" };
const EMAIL = { label: "info@shriganeshpolymer.in", href: "mailto:info@shriganeshpolymer.in" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // trailingSlash export gives "/about/" — compare without it
  const pathname = (usePathname() || "/").replace(/(.)\/$/, "$1");
  const active = links.find((l) => l.href === pathname)?.href ?? "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu after any navigation (incl. back/forward)
  useEffect(() => setOpen(false), [pathname]);

  // close the mobile menu when switching to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* utility strip — desktop only, folds away on scroll */}
      <motion.div
        initial={false}
        animate={{ height: scrolled ? 0 : 36, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="hidden overflow-hidden bg-[#0b1f4d] text-[13px] text-blue-100/80 md:block"
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5">
          <p className="flex items-center gap-2 text-[17px]">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
            ISO 9001 &amp; 14001 certified manufacturer of PC, ABS &amp; PBT granules
          </p>
          <div className="flex items-center gap-6 text-[17px]">
            <a href={PHONE.href} className="flex items-center gap-1.5 transition hover:text-white">
              <Phone className="h-3.5 w-3.5" /> {PHONE.label}
            </a>
            <a href={EMAIL.href} className="flex items-center gap-1.5 transition hover:text-white">
              <Mail className="h-3.5 w-3.5" /> {EMAIL.label}
            </a>
          </div>
        </div>
      </motion.div>

      {/* main bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled || open
            ? "border-slate-200/80 bg-white/90 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl"
            : "border-slate-200/60 bg-white/80 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-[85px]">
          <Link href="/" aria-label="Shri Ganesh Polymer — home" className="shrink-0">
            <Logo plain imgClass="h-12 w-auto md:h-[82px]" />
          </Link>

          {/* links */}
          <ul className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 md:flex">
            {links.map((l) => {
              const on = active === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={on ? "page" : undefined}
                    className={`relative block rounded-full px-3 py-2 text-sm font-medium transition-colors lg:px-5 ${
                      on ? "text-white" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {on && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-brand-blue shadow-md shadow-brand-blue/30"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* actions */}
          <div className="flex items-center gap-2">
            <a
              href={PHONE.href}
              aria-label={`Call ${PHONE.label}`}
              className="hidden h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-brand-blue hover:text-brand-blue lg:grid"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="group hidden items-center gap-2 rounded-full bg-brand-green py-1.5 pl-5 pr-1.5 text-sm font-semibold text-ink shadow-lg shadow-brand-green/30 transition hover:shadow-brand-green/50 md:inline-flex"
            >
              Get a Quote
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-brand-green transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-800 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* name marquee */}
        <div className="relative flex h-8 items-center overflow-hidden bg-[#0b1f4d]">
          <div className="flex w-max shrink-0 animate-marquee motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="flex items-center whitespace-nowrap">
                    <span
                      className={`px-5 text-[11px] font-semibold uppercase tracking-[0.3em] sm:text-xs ${
                        i % 2 ? "text-[#8be04e]" : "text-white"
                      }`}
                    >
                      Shri Ganesh Polymer
                    </span>
                    <span className="h-1.5 w-1.5 rotate-45 bg-[#7cc242]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="px-5 pb-6 pt-2">
                <ul className="divide-y divide-slate-100">
                  {links.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        onClick={() => setOpen(false)}
                        href={l.href}
                        aria-current={active === l.href ? "page" : undefined}
                        className={`flex items-center justify-between py-3.5 text-lg font-semibold ${
                          active === l.href ? "text-brand-blue" : "text-slate-800"
                        }`}
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="text-xs font-medium tabular-nums text-slate-400">0{i + 1}</span>
                          {l.label}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-slate-400" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-green py-3.5 font-semibold text-ink"
                >
                  Get a Quote <ArrowUpRight className="h-4 w-4" />
                </Link>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <a href={PHONE.href} className="flex items-center justify-center gap-2 rounded-full border border-slate-200 py-3 text-slate-700">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a href={EMAIL.href} className="flex items-center justify-center gap-2 rounded-full border border-slate-200 py-3 text-slate-700">
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}
