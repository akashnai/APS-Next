import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoSection } from "@/components/LogoSection";
import { Results } from "@/components/Results";
import { Features } from "@/components/Features";
import { Process } from "@/components/Process";
import { Platform } from "@/components/Platform";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoSection />
      <Results />
      <Features />
      <Process />
      {/* <Platform /> */}
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
