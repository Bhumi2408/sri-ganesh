import Navbar from "@/components/Navbar";
import BannerSlider from "@/components/BannerSlider";
import StatsBar from "@/components/StatsBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Facility from "@/components/Facility";
import CertifiedTrust from "@/components/CertifiedTrust";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PackagingSection from "@/components/Packaging";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <BannerSlider />
      <StatsBar />
      <About />
      <Products />
      <Hero />
      
      <Facility />
      <CertifiedTrust />
      <Clients />
      <PackagingSection />
      <Contact />
      <Footer />
    </main>
  );
}
