import brand1 from "@/assets/brand-1.jpg";
import brand2 from "@/assets/brand-2.jpg";
import brand3 from "@/assets/brand-3.jpg";

const brands = [
  { id: 1, name: "Town Chicken", image: brand1 },
  { id: 2, name: "Sadia's Kitchen", image: brand2 },
  { id: 3, name: "Premium Chicken", image: brand3 },
];

const BrandSection = () => {
  return (
    <section id="brands" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-bengali">
            স্বাগতম <span className="text-primary">SK Group</span>
          </h2>
          <p className="text-lg text-muted-foreground font-bengali max-w-2xl mx-auto">
            উদ্ভাবনী স্বাদ, মান এবং প্রতিটি প্লেটে পরিষেবা আমরা পরিবেশন করি
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-48 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
