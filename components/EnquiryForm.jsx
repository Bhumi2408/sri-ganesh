"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";

export const ENQUIRY_EMAIL = "info@shriganeshpolymer.in";
export const WHATSAPP_URL = "https://wa.me/919818058610";
export const PRODUCT_OPTIONS = ["PC Granules", "PC FR Grade", "PC Extrusion Grade", "ABS Granules", "PBT Glass Filled", "Other"];

// Static site: opens the visitor's mail app with the enquiry pre-filled.
// Swap for a form service (Formspree, Web3Forms…) for direct submission.
export function sendEnquiry(form) {
  const f = new FormData(form);
  const lines = [
    `Name: ${f.get("name")}`,
    `Company: ${f.get("company") || "-"}`,
    `Phone: ${f.get("phone")}`,
    f.get("email") ? `Email: ${f.get("email")}` : null,
    `Product: ${f.get("product")}`,
    f.get("quantity") ? `Quantity: ${f.get("quantity")}` : null,
    "",
    f.get("message"),
  ].filter((l) => l !== null);
  window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(
    "Enquiry – " + f.get("product")
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}

const field =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#1e5eff] focus:bg-white focus:ring-4 focus:ring-[#1e5eff]/10";
const label = "mb-1.5 block text-xs font-semibold text-slate-600";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="ok"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex min-h-[420px] flex-col items-center justify-center text-center"
        >
          <CheckCircle2 className="h-14 w-14 text-[#4caf27]" />
          <h3 className="mt-4 text-2xl font-semibold text-slate-900">Thank you!</h3>
          <p className="mt-2 max-w-sm text-slate-500">
            Your email app should have opened with the enquiry ready to send. Prefer chatting? Reach us on WhatsApp.
          </p>
          <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-[#1e5eff] underline-offset-4 hover:underline">
            Send another enquiry
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0 }}
          onSubmit={(e) => {
            e.preventDefault();
            sendEnquiry(e.currentTarget);
            setSent(true);
          }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <div>
            <label htmlFor="eq-name" className={label}>Full name *</label>
            <input id="eq-name" required name="name" autoComplete="name" placeholder="Your name" className={field} />
          </div>
          <div>
            <label htmlFor="eq-company" className={label}>Company</label>
            <input id="eq-company" name="company" autoComplete="organization" placeholder="Company name" className={field} />
          </div>
          <div>
            <label htmlFor="eq-phone" className={label}>Phone *</label>
            <input id="eq-phone" required name="phone" type="tel" autoComplete="tel" placeholder="+91" className={field} />
          </div>
          <div>
            <label htmlFor="eq-email" className={label}>Email</label>
            <input id="eq-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" className={field} />
          </div>
          <div>
            <label htmlFor="eq-product" className={label}>Product</label>
            <select id="eq-product" name="product" defaultValue={PRODUCT_OPTIONS[0]} className={field}>
              {PRODUCT_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="eq-qty" className={label}>Approx. quantity</label>
            <input id="eq-qty" name="quantity" placeholder="e.g. 2 MT / month" className={field} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="eq-msg" className={label}>Requirement *</label>
            <textarea
              id="eq-msg"
              required
              name="message"
              rows={5}
              placeholder="Grade, colour, application and any specification you need"
              className={field}
            />
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:col-span-2 sm:flex sm:gap-3">
            <button className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#0b1f4d] px-3 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0b1f4d]/25 transition hover:bg-[#123a8f] sm:px-7 sm:text-base">
              Send Enquiry <Send className="h-4 w-4 shrink-0" />
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#25d366] px-3 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#25d366]/25 transition hover:brightness-105 sm:px-7 sm:text-base"
            >
              <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp
            </a>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
