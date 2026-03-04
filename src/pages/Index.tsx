import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import PricingSection from "@/components/PricingSection";
import ApplySection from "@/components/ApplySection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <ArchitectureSection />
    <PricingSection />
    <ApplySection />
    <FooterSection />
  </div>
);

export default Index;
