import React, { useState, useEffect } from "react";
import DecorBanner from "../../assets/LivingRoom/Living.png"; // Replace with your actual banner

// Define subcategory IDs (update according to your database)
const SUBCATEGORY_IDS = {
  WALL_ART_MIRRORS: 1,
  LIGHTING: 2,
  VASES_DECOR: 3,
  CUSHIONS_THROWS: 4,
};

const DecorHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${DecorBanner || "https://via.placeholder.com/1700x900?text=Home+Decor+Banner"})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-24 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Home Decor Collection
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg text-gray-200">
          Beautiful finishing touches that transform your house into a warm, stylish home
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#decor-collections"
            className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-600 transition duration-300"
          >
            Explore Decor Collection
          </a>
          <a
            href="/book-showroom"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            Book Showroom Visit
          </a>
        </div>
      </div>
    </div>
  );
};

const DecorCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="relative">
        <img
          src={item.image_url || "https://via.placeholder.com/600x400?text=Home+Decor"}
          alt={item.name}
          className="w-full h-72 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x400?text=No+Image";
          }}
        />
        {item.popular && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Best Seller
          </div>
        )}
        <div className="absolute top-3 right-3 bg-gray-900 bg-opacity-80 text-white text-sm font-bold px-4 py-1.5 rounded-full">
          Rs. {new Intl.NumberFormat("en-LK").format(item.price)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
          {item.description || "Elegant home decor piece to enhance your space"}
        </p>
        <a
          href={`/product/${item.id}`}
          className="mt-6 w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl transition duration-300 block text-center"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

const WallArtAndMirrors = ({ items }) => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="decor-collections">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Wall Art & Mirrors</h2>
        <p className="mt-3 text-gray-600">Statement pieces that bring personality and elegance to your walls</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.length === 0 ? (
          <p className="text-center text-gray-600 col-span-3">No items available in this category</p>
        ) : (
          items.map((item) => <DecorCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

const Lighting = ({ items }) => {
  return (
    <div className="bg-[#f9f5f0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lighting</h2>
        <p className="mt-3 text-gray-600">Beautiful lamps, chandeliers, and lights to create the perfect ambiance</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => <DecorCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const VasesAndDecor = ({ items }) => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Vases & Decorative Objects</h2>
        <p className="mt-3 text-gray-600">Stylish accents and finishing touches for shelves and tables</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => <DecorCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const CushionsAndThrows = ({ items }) => {
  return (
    <div className="bg-[#f9f5f0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Cushions & Throws</h2>
        <p className="mt-3 text-gray-600">Soft textures and luxurious fabrics to add comfort and color</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => <DecorCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const WhyChooseDecor = () => {
  const benefits = [
    {
      title: "Curated Selection",
      description: "Handpicked pieces that add character and warmth to your home",
      icon: "✨",
    },
    {
      title: "Premium Quality",
      description: "High-quality materials and excellent craftsmanship",
      icon: "🪵",
    },
    {
      title: "Perfect Finishing Touch",
      description: "Transform any room with elegant decorative accents",
      icon: "🖼️",
    },
    {
      title: "5-Year Warranty",
      description: "Long-term quality guarantee on all decor items",
      icon: "🛡️",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Our Home Decor?</h2>
        <p className="mt-3 text-gray-600">The perfect details that make a house feel like home</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              <p className="mt-3 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Add the Perfect Finishing Touches?</h2>
        <p className="mt-4 text-gray-300 text-lg">
          Complete the look of your home with our carefully curated decor collection.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/book-showroom"
            className="px-10 py-4 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-600 transition"
          >
            Book Showroom Visit
          </a>
          <a
            href="tel:+94112345678"
            className="px-10 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition"
          >
            Get Free Styling Advice
          </a>
        </div>
      </div>
    </div>
  );
};

const HomeDecor = () => {
  const [decorItems, setDecorItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchDecorItems = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost/your-furniture-api/get_furniture_items.php?category_id=6", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        setDecorItems(data.data);
      } else {
        setError("Could not load home decor items");
      }
    } catch (e) {
      setError("Failed to fetch items. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDecorItems();
  }, []);

  const wallArt = decorItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.WALL_ART_MIRRORS
  );
  const lighting = decorItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.LIGHTING
  );
  const vasesDecor = decorItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.VASES_DECOR
  );
  const cushionsThrows = decorItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.CUSHIONS_THROWS
  );

  return (
    <div className="bg-[#f9f5f0]">
      {error && (
        <div className="p-4 bg-red-100 text-red-700 text-center font-medium">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="text-center py-20 text-gray-600">Loading Home Decor Collection...</div>
      )}

      <DecorHero />
      <WallArtAndMirrors items={wallArt} />
      <Lighting items={lighting} />
      <VasesAndDecor items={vasesDecor} />
      <CushionsAndThrows items={cushionsThrows} />
      <WhyChooseDecor />
      <CallToAction />
    </div>
  );
};

export default HomeDecor;