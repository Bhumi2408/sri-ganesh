"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Reveal, SectionTag } from "./ui";

const details = [
  { icon: MapPin, label: "Address", value: "E-64 & 51, Mangolpuri Industrial Area, Phase-II, Delhi-110034", href: "https://maps.google.com/?q=E-64+Mangolpuri+Industrial+Area+Phase+II+Delhi+110034" },
  { icon: Phone, label: "Phone", value: "+91 98180 58610, 98110 90445", href: "tel:+919818058610" },
  { icon: Mail, label: "Email", value: "info@shriganeshpolymer.in", href: "mailto:info@shriganeshpolymer.in" },
  { icon: Globe, label: "Website", value: "www.shriganeshpolymer.in", href: "https://www.shriganeshpolymer.in" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

 
  // Replace with an API route / form service for server-side submission.
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nCompany: ${f.get("company")}\nPhone: ${f.get("phone")}\nProduct: ${f.get("product")}\n\n${f.get("message")}`;
    window.location.href = `mailto:info@shriganeshpolymer.in?subject=${encodeURIComponent("Enquiry – " + f.get("product"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const input =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-brand-green focus:bg-white/10";

  return (
    <section id="contact" className="section-light relative overflow-hidden py-28">
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-green/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Reveal><SectionTag>Contact</SectionTag></Reveal>
          <Reveal i={1}>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Let's build something <span className="text-gradient">durable.</span>
            </h2>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-4 text-gray-400">Tell us your grade, volume and application — our team will get back with the right compound.</p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {details.map((d, i) => (
              <Reveal key={d.label} i={i}>
                <a
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-blue/15 text-blue-400 transition group-hover:bg-brand-green group-hover:text-ink">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">{d.label}</p>
                    <p className="text-sm text-gray-200 transition group-hover:text-white">{d.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal i={1} className="lg:col-span-3">
          <div className="glass relative overflow-hidden rounded-3xl p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}>
                    <CheckCircle2 className="h-16 w-16 text-brand-green" />
                  </motion.div>
                  <h3 className="mt-4 text-2xl font-bold text-white">Thank you!</h3>
                  <p className="mt-2 text-gray-400">Your email app should have opened with the enquiry ready to send.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-sm text-brand-green underline">
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="grid gap-4 sm:grid-cols-2">
                  <input required name="name" placeholder="Your name" className={input} />
                  <input name="company" placeholder="Company" className={input} />
                  <input required name="phone" type="tel" placeholder="Phone" className={input} />
                  <select name="product" className={input} defaultValue="PC Granules">
                    {["PC Granules", "PC FR Grade", "PC Extrusion Grade", "ABS Granules", "PBT Glass Filled", "Other"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <textarea required name="message" rows={6} placeholder="Requirement (grade, colour, quantity, application)" className={`${input} sm:col-span-2`} />
                  <div className="grid grid-cols-2 gap-2.5 sm:flex sm:gap-3 sm:col-span-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-brand-green px-3 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-brand-green/30 sm:px-7 sm:text-base"
                    >
                      Send Enquiry <Send className="h-4 w-4 shrink-0" />
                    </motion.button>
                    <a
                      href="https://wa.me/919818058610"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 px-3 py-3.5 text-sm font-semibold text-white transition hover:border-brand-green sm:px-7 sm:text-base"
                    >
                      <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
