import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandSection from "@/components/BrandSection";
import MenuSection from "@/components/MenuSection";
import CustomerSection from "@/components/CustomerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-bengali">
      <Navigation />
      <HeroSection />
      <BrandSection />
      <MenuSection />
      <CustomerSection />
      <Footer />
    </div>
  );
};

export default Index;
