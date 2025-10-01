import { Facebook, Youtube, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-bengali">SK</span>
              </div>
              <span className="text-2xl font-bold font-bengali">সাদিয়ার কিচেন</span>
            </div>
            <p className="text-background/80 mb-4 font-bengali">
              চট্টগ্রামের হৃদয়ে অবস্থিত। ২০২৫ সাল থেকে, আমরা আমাদের টেবিলে স্বপ্ন এবং সুস্বাদু খাবার নিয়ে আসছি।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-bengali">গুরুত্বপূর্ণ লিঙ্ক</h3>
            <ul className="space-y-2 font-bengali">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
                  হোম
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#menu" className="text-background/80 hover:text-background transition-colors">
                  আমাদের মেনু
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  যোগাযোগ করুন
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-bengali">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-background/80 font-bengali">
                  চট্টগ্রাম, বাংলাদেশ
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-background/80">+880 1XXX-XXXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-background/80">info@sadiaskitchen.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-bengali">আমাদের অবস্থান</h3>
            <div className="bg-background/10 rounded-lg h-48 flex items-center justify-center">
              <MapPin size={48} className="text-primary" />
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/80 font-bengali">
            কপিরাইট ©২০২৫ সাদিয়ার কিচেন সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
