import { Phone } from "lucide-react";

const CALL = { href: "tel:+919818058610", label: "Call +91 98180 58610" };
const WHATSAPP = { href: "https://wa.me/919811090445", label: "Chat on WhatsApp +91 98110 90445" };

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.37 9.37 0 0 1-1.44-5c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.65 2.76a9.34 9.34 0 0 1 2.75 6.65c0 5.18-4.22 9.4-9.4 9.4zm8-17.4A11.27 11.27 0 0 0 12.05.75C5.82.75.75 5.82.75 12.05c0 1.99.52 3.93 1.51 5.65L.65 23.25l5.68-1.49a11.3 11.3 0 0 0 5.4 1.37h.01c6.23 0 11.3-5.07 11.3-11.3 0-3.02-1.18-5.86-3.31-7.99z" />
    </svg>
  );
}

// mobile: two halves of a bottom bar — md+: round floating buttons in the bottom corners
const half =
  "flex flex-1 items-center justify-center gap-2.5 py-3.5 text-base font-semibold text-white transition hover:brightness-110 md:fixed md:bottom-6 md:grid md:h-14 md:w-14 md:flex-none md:place-items-center md:rounded-full md:p-0 md:shadow-[0_12px_30px_-8px_rgba(15,23,42,0.45)] md:ring-4 md:ring-white md:hover:-translate-y-1 md:hover:scale-105";

// Call on the left, WhatsApp on the right, on every page.
export default function FloatingContact() {
  return (
    <>
      {/* keeps the footer clear of the bar */}
      <div aria-hidden="true" className="h-[calc(52px+env(safe-area-inset-bottom))] md:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-[90] flex pb-[env(safe-area-inset-bottom)] font-label shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.4)] md:static md:block md:pb-0 md:shadow-none">
        <a href={CALL.href} aria-label={CALL.label} className={`${half} bg-[#1e5eff] md:left-6 md:z-[90]`}>
          <Phone className="h-5 w-5 md:h-6 md:w-6" />
          <span className="md:sr-only">Call Now</span>
        </a>
        <a href={WHATSAPP.href} target="_blank" rel="noreferrer" aria-label={WHATSAPP.label} className={`${half} bg-[#25d366] md:right-6 md:z-[90]`}>
          <WhatsAppIcon className="h-5 w-5 md:h-7 md:w-7" />
          <span className="md:sr-only">WhatsApp</span>
        </a>
      </div>
    </>
  );
}
