const CustomerSection = () => {
  // Generate placeholder customer images using gradients
  const customerImages = Array.from({ length: 12 }, (_, i) => {
    const colors = [
      "from-red-400 to-orange-400",
      "from-blue-400 to-cyan-400",
      "from-purple-400 to-pink-400",
      "from-green-400 to-emerald-400",
      "from-yellow-400 to-amber-400",
      "from-indigo-400 to-purple-400",
    ];
    return {
      id: i + 1,
      gradient: colors[i % colors.length],
    };
  });

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-bengali mb-4">
            আমাদের <span className="text-primary">সন্তুষ্ট</span> গ্রাহকরা
          </h2>
          <p className="text-muted-foreground font-bengali">
            প্রকৃত গল্প, সৎ হাসি, এবং অবিস্মরণীয় স্বাদ যারা আমাদের ভালবাসেন তাদের দ্বারা ভাগ করা হয়েছে
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {customerImages.map((item) => (
            <div
              key={item.id}
              className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">😊</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
