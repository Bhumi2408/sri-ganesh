import PageHeader from "@/components/PageHeader";
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Contact",
  description:
    "Get a quote for PC, ABS or PBT granules. E-64 & 51, Mangolpuri Industrial Area, Phase-II, Delhi-110034 · +91 98180 58610.",
};

export default function Contact() {
  return (
    <>
      <PageHeader
        crumb="Contact"
        eyebrow="Get in Touch"
        title="Let's talk"
        accent="polymers."
        subtitle="Reach us by phone, email or WhatsApp — or send an enquiry using the form below."
      />
      <ContactPage />
    </>
  );
}
