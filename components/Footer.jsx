import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, MessageCircle, ArrowUpRight, Facebook, Instagram, Youtube } from "lucide-react";
import { Logo } from "./ui";

const company = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/facility", label: "Facility" },
  { href: "/exhibition", label: "Exhibition" },
  { href: "/contact", label: "Contact" },
];

const productLinks = [
  { href: "/products/pc", label: "PC Granules" },
  { href: "/products/abs", label: "ABS Granules" },
  { href: "/products/pbt", label: "PBT Glass Filled" },
  { href: "/products", label: "All products" },
];

// TODO: replace with the company's real profile URLs.
const socials = [
  { href: "https://www.facebook.com/shriganeshpolymer", label: "Facebook", icon: Facebook, hover: "hover:bg-[#1877f2]" },
  { href: "https://www.instagram.com/shri_ganeshpolymer/", label: "Instagram", icon: Instagram, hover: "hover:bg-[#dd2a7b]" },
  { href: "https://www.youtube.com/@GaneshPolymer", label: "YouTube", icon: Youtube, hover: "hover:bg-[#ff0000]" },
];

const badges = [
  { img: "/sgp/badge-iso9001.webp", alt: "ISO 9001:2015 certified" },
  { img: "/sgp/badge-iso14001.webp", alt: "ISO 14001:2015 certified" },
  { img: "/sgp/badge-msme.webp", alt: "MSME registered" },
  { img: "/sgp/badge-rohs.webp", alt: "RoHS compliant" },
];

function Heading({ children }) {
  return <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8be04e]">{children}</h3>;
}

function LinkList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="group inline-flex items-center gap-1.5 text-sm text-blue-100/75 transition hover:text-white">
            {l.label}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0b1f4d] font-label text-white">
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1e5eff]/30 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[#7cc242]/15 blur-3xl" />

      {/* ---------- CTA strip ---------- */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Need PC, ABS or PBT granules?</p>
            <p className="mt-1.5 text-sm text-blue-100/70">Share your grade, colour and quantity — we&apos;ll send the right compound.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#7cc242] py-2 pl-6 pr-2 font-semibold text-[#0b1f4d] transition hover:brightness-105"
            >
              Get a quote
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0b1f4d] text-[#8be04e] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            <a
              href="https://wa.me/919818058610"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ---------- main ---------- */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.3fr] lg:gap-12">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" aria-label="Shri Ganesh Polymer — home" className="inline-block">
            <Logo imgClass="h-14 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-blue-100/75">
            Manufacturer of PC, ABS and PBT engineering polymer granules — serving electrical, lighting and automotive
            industries across India.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {badges.map((b) => (
              <span key={b.img} className="relative h-12 w-12 overflow-hidden rounded-full bg-white p-0.5">
                <Image src={b.img} alt={b.alt} fill sizes="48px" className="object-contain" />
              </span>
            ))}
          </div>
          <div className="mt-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100/50">Follow us</p>
            <div className="mt-3 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:-translate-y-0.5 hover:border-transparent ${s.hover}`}
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Heading>Company</Heading>
          <LinkList items={company} />
        </div>

        <div>
          <Heading>Products</Heading>
          <LinkList items={productLinks} />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <Heading>Get in touch</Heading>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href="https://maps.google.com/?q=E-64+Mangolpuri+Industrial+Area+Phase+II+Delhi+110034"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 text-blue-100/75 transition hover:text-white"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8be04e]" />
                E-64 &amp; 51, Mangolpuri Industrial Area, Phase-II, Delhi-110034
              </a>
            </li>
            <li className="flex gap-3 text-blue-100/75">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#8be04e]" />
              <span>
                <a href="tel:+919818058610" className="transition hover:text-white">+91 98180 58610</a>
                <span className="text-blue-100/40"> · </span>
                <a href="tel:+919811090445" className="transition hover:text-white">+91 98110 90445</a>
              </span>
            </li>
            <li>
              <a href="mailto:info@shriganeshpolymer.in" className="flex gap-3 text-blue-100/75 transition hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#8be04e]" />
                <span className="[overflow-wrap:anywhere]">info@shriganeshpolymer.in</span>
              </a>
            </li>
            <li>
              <a href="https://www.shriganeshpolymer.in" target="_blank" rel="noreferrer" className="flex gap-3 text-blue-100/75 transition hover:text-white">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-[#8be04e]" />
                www.shriganeshpolymer.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- bottom bar ---------- */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-blue-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} shri Ganesh Polymer. All rights reserved. | Powered By <Link href="https://www.cybertricksmedia.com/" target="_blank">Cybertricksmedia Pvt Ltd</Link></p>
          <p>Manufacturing of Engineering Polymers · PC | ABS | PBT</p>
        </div>
      </div>
    </footer>
  );
}
