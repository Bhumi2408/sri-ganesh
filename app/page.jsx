import VideoHero from "@/components/VideoHero";
import StatsBar from "@/components/StatsBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Facility from "@/components/Facility";
import CertifiedTrust from "@/components/CertifiedTrust";
import Contact from "@/components/Contact";
import PackagingSection from "@/components/Packaging";
import Testimonials from "@/components/Testimonials";
import ThermalProperties from "@/components/ThermalProperties";

export default function Home() {
  return (
    <>
      <VideoHero />
      <StatsBar />
      <About />
      <Products />
      <ThermalProperties />
      {/* <Hero /> */}
      <Facility />
      <CertifiedTrust />
      <PackagingSection />
      <Testimonials />
      <Contact />
    </>
  );
}
