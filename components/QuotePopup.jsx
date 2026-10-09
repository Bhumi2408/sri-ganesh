"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { Logo } from "./ui";
import { sendEnquiry, PRODUCT_OPTIONS, WHATSAPP_URL } from "./EnquiryForm";

const OPEN_EVENT = "sgp:open-quote";
const SEEN_KEY = "sgp-quote-popup-seen";
const AUTO_OPEN_MS = 8000;

// Call from any button to show the popup.
export function openQuote() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

const points = ["Every batch tested in our in-house lab", "5000+ MT annual production capacity", "Custom grades & colour matching"];

const field =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#1e5eff] focus:ring-4 focus:ring-[#1e5eff]/10";

export default function QuotePopup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const firstField = useRef(null);
  const pathname = usePathname() || "/";

  // open on demand from any "Get a Quote" button
  useEffect(() => {
    const show = () => {
      setSent(false);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, show);
    return () => window.removeEventListener(OPEN_EVENT, show);
  }, []);

  // auto-open once per browser session — never on the contact page, which already has the form
  useEffect(() => {
    if (pathname.startsWith("/contact")) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    if (seen) return;
    const t = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, AUTO_OPEN_MS);
    return () => clearTimeout(t);
  }, [pathname]);

  // Esc to close, lock page scroll, focus the first field
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstField.current?.focus(), 250);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="quote-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05070d]/60 p-4 font-label backdrop-blur-sm"
          onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid max-h-[92svh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40 md:grid-cols-[0.85fr_1fr]"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <X className="h-5 w-5" />
            </button>

            {/* ---------- brand panel (desktop) ---------- */}
            <div className="hidden flex-col bg-[#0b1f4d] p-9 text-white md:flex">
              <Logo className="self-start" imgClass="h-12 w-auto" />
              <h2 className="mt-8 font-display text-3xl font-semibold leading-tight">Engineering polymers, built to last.</h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-100/80">
                Premium PC, ABS &amp; PBT granules from an ISO 9001 &amp; 14001 certified manufacturer in Delhi.
              </p>
              <ul className="mt-auto space-y-3.5 pt-10">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#7cc242] text-[#0b1f4d]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------- form ---------- */}
            <div className="overflow-y-auto p-6 sm:p-9">
              {sent ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-14 w-14 text-[#4caf27]" />
                  <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900">Thank you!</h3>
                  <p className="mt-2 max-w-xs text-sm text-slate-500">
                    Your email app should have opened with the enquiry ready to send. Prefer chatting? Reach us on WhatsApp.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-6 py-3 text-sm font-semibold text-white"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp us
                  </a>
                </div>
              ) : (
                <>
                  <h2 id="quote-title" className="pr-10 font-display text-2xl font-semibold text-[#0b1530] sm:text-3xl">
                    Request a Quote
                  </h2>
                  <p className="mt-1.5 text-sm text-slate-500">Share your requirement — our team will get back to you shortly.</p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendEnquiry(e.currentTarget);
                      setSent(true);
                    }}
                    className="mt-6 grid gap-3.5 sm:grid-cols-2"
                  >
                    <input ref={firstField} required name="name" autoComplete="name" placeholder="Full name *" aria-label="Full name" className={field} />
                    <input required name="phone" type="tel" autoComplete="tel" placeholder="Phone number *" aria-label="Phone number" className={field} />
                    <input name="email" type="email" autoComplete="email" placeholder="Email address" aria-label="Email address" className={`${field} sm:col-span-2`} />
                    <select name="product" defaultValue="" required aria-label="Product" className={`${field} sm:col-span-2`}>
                      <option value="" disabled>
                        Select product *
                      </option>
                      {PRODUCT_OPTIONS.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <textarea
                      required
                      name="message"
                      rows={3}
                      placeholder="Grade, colour, quantity or any specification *"
                      aria-label="Requirement"
                      className={`${field} resize-none sm:col-span-2`}
                    />
                    <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#0b1f4d] py-3.5 font-semibold text-white shadow-lg shadow-[#0b1f4d]/25 transition hover:bg-[#123a8f] sm:col-span-2">
                      Get a Quote <Send className="h-4 w-4" />
                    </button>
                    <p className="text-center text-xs text-slate-400 sm:col-span-2">We only use your details to reply to this enquiry.</p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
