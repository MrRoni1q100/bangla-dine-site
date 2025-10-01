import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl font-bengali">SK</span>
            </div>
            <span className="text-2xl font-bold font-bengali text-foreground">সাদিয়ার কিচেন</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-bengali text-foreground hover:text-primary transition-colors">
              হোম
            </a>
            <a href="#brands" className="font-bengali text-foreground hover:text-primary transition-colors">
              আমাদের ব্র্যান্ড
            </a>
            <a href="#menu" className="font-bengali text-foreground hover:text-primary transition-colors">
              মেনু
            </a>
            <a href="#about" className="font-bengali text-foreground hover:text-primary transition-colors">
              আমাদের সম্পর্কে
            </a>
            <a href="#contact" className="font-bengali text-foreground hover:text-primary transition-colors">
              যোগাযোগ
            </a>
          </div>

          {/* Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="font-bengali bg-primary hover:bg-primary/90 text-primary-foreground">
              <ShoppingCart className="mr-2 h-4 w-4" />
              অর্ডার করুন
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="font-bengali text-foreground hover:text-primary transition-colors">
                হোম
              </a>
              <a href="#brands" className="font-bengali text-foreground hover:text-primary transition-colors">
                আমাদের ব্র্যান্ড
              </a>
              <a href="#menu" className="font-bengali text-foreground hover:text-primary transition-colors">
                মেনু
              </a>
              <a href="#about" className="font-bengali text-foreground hover:text-primary transition-colors">
                আমাদের সম্পর্কে
              </a>
              <a href="#contact" className="font-bengali text-foreground hover:text-primary transition-colors">
                যোগাযোগ
              </a>
              <Button className="font-bengali bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                অর্ডার করুন
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
