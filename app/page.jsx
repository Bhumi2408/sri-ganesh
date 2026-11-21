import VideoHero from "@/components/VideoHero";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import Products from "@/components/Products";
import ProductVideo from "@/components/ProductVideo";
import PcColours from "@/components/PcColours";
import Transformation from "@/components/Transformation";
import WhyChoose from "@/components/WhyChoose";
import PanIndia from "@/components/PanIndia";
import CertifiedTrust from "@/components/CertifiedTrust";
import Contact from "@/components/Contact";
import PackagingSection from "@/components/Packaging";
import Testimonials from "@/components/Testimonials";
import ThermalProperties from "@/components/ThermalProperties";
import Exhibition from "@/components/Exhibition";
import Gallery from "@/components/Gallery";
import LabVideo from "@/components/LabVideo";
import HomeFaq from "@/components/HomeFaq";
import ClosingCta from "@/components/ClosingCta";
import { homeSeo, homeFaqs } from "@/lib/homeContent";

export const metadata = {
  title: { absolute: homeSeo.title },
  description: homeSeo.description,
  keywords: homeSeo.keywords,
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    // flex + order lets mobile show the globe (CertifiedTrust) right after Applications
    // without rendering it twice; from sm up the source order is used
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <VideoHero />
      <About />
      <StatsBar />
      <Products />
      <ProductVideo />
      <PcColours />
      <div className="max-sm:order-1">
        <Transformation />
        <WhyChoose />
        <PanIndia />
        <ThermalProperties />
      </div>
      <CertifiedTrust />
      <div className="max-sm:order-2">
        <PackagingSection />
        <LabVideo />
        <Gallery />
        <Exhibition />
        <Testimonials />
        <HomeFaq />
        <Contact />
        <ClosingCta />
      </div>
    </div>
  );
}
