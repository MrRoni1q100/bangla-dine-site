import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import riceMeal from "@/assets/rice-meal.jpg";
import biryani from "@/assets/biryani.jpg";
import roast from "@/assets/roast.jpg";
import shawarma from "@/assets/shawarma.jpg";

const menuItems = [
  { id: 1, name: "মঙ্গলবার স্পেশাল রাইস মিল", price: "২২০.০০", image: riceMeal },
  { id: 2, name: "বিরিয়ানি", price: "২২০.০০", image: biryani },
  { id: 3, name: "চিকেন রোস্ট", price: "২২০.০০", image: roast },
  { id: 4, name: "স্পাইসড রাইস, শাওয়ারমা এবং আরও অনেক কিছু", price: "২২০.০০", image: shawarma },
  { id: 5, name: "মঙ্গলবার স্পেশাল রাইস মিল", price: "২২০.০০", image: riceMeal },
  { id: 6, name: "বিরিয়ানি", price: "২২০.০০", image: biryani },
  { id: 7, name: "চিকেন রোস্ট", price: "২২০.০০", image: roast },
  { id: 8, name: "বিরিয়ানি স্পেশাল", price: "২২০.০০", image: biryani },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-bengali">
              আমাদের <span className="text-primary">মেনু</span>
            </h2>
            <p className="text-muted-foreground mt-2 font-bengali">
              স্পেশাল ভাত, শাওয়ারমা, চপ এবং আরও অনেক কিছু আপনাকে সত্যিকারের স্বাদ নিয়ে আসে
            </p>
          </div>
          <Button className="hidden md:inline-flex font-bengali bg-primary hover:bg-primary/90">
            <ShoppingCart className="mr-2 h-4 w-4" />
            অর্ডার করুন
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bengali font-semibold text-lg mb-2 line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-primary font-bold text-xl font-bengali">৳{item.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bengali">
                  কার্টে যোগ করুন
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
