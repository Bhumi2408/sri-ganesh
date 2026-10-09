import VideoHero from "@/components/VideoHero";
import StatsBar from "@/components/StatsBar";
import Hero from "@/components/Hero";
/* import About from "@/components/About"; */
import Products from "@/components/Products";
import ProductVideo from "@/components/ProductVideo";
import Applications from "@/components/Applications";
import Transformation from "@/components/Transformation";
import PanIndia from "@/components/PanIndia";
/* import Facility from "@/components/Facility";
 */import CertifiedTrust from "@/components/CertifiedTrust";
import Contact from "@/components/Contact";
import PackagingSection from "@/components/Packaging";
import Testimonials from "@/components/Testimonials";
import ThermalProperties from "@/components/ThermalProperties";
import Exhibition from "@/components/Exhibition";

export default function Home() {
  return (
    // flex + order lets mobile show the globe (CertifiedTrust) right after Applications
    // without rendering it twice; from sm up the source order is used
    <div className="flex flex-col">
      <VideoHero />
      <StatsBar />
{/*       <About /> */}
      <Products />
      <ProductVideo />
      <Applications />
      <div className="max-sm:order-1">
        <Transformation />
        <PanIndia />
        <ThermalProperties />
        {/* <Hero /> */}
    {/*     <Facility /> */}
      </div>
      <CertifiedTrust />
      <div className="max-sm:order-2">
        <PackagingSection />
        <Exhibition />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
