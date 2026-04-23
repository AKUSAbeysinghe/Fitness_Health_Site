import React, { useState, useEffect } from "react";
import LivingRoomBanner from "../../assets/LivingRoom/LivingRoom.png"; // Update with your actual banner

// Define subcategory IDs (update these according to your database)
const SUBCATEGORY_IDS = {
  SOFAS_AND_COUCHES: 1,
  COFFEE_TABLES: 2,
  TV_UNITS: 3,
  ARMCHAIRS: 4,
};

const LivingRoomHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${LivingRoomBanner || "https://via.placeholder.com/1700x900?text=Living+Room+Banner"})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-24 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-serif">
          Living Room Collection
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg font-sans text-gray-200">
          Timeless designs, premium comfort, and elegant craftsmanship for the heart of your home
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#living-room-collections"
            className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition duration-300 font-sans"
          >
            Explore Collections
          </a>
          <a
            href="/book-showroom"
            className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300 font-sans"
          >
            Book Showroom Visit
          </a>
        </div>
      </div>
    </div>
  );
};

const FurnitureCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <div className="relative">
        <img
          src={item.image_url || "https://via.placeholder.com/600x400?text=Furniture"}
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
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">{item.description || "Premium quality furniture piece"}</p>
        
        <div className="mt-4 text-xs text-gray-500">
          {item.material && <p>Material: {item.material}</p>}
        </div>

        <a
          href={`/product/${item.id}`}
          className="mt-6 w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition duration-300 block text-center"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

const SofasAndCouches = ({ items }) => (
  <div className="bg-[#f9f5f0] py-16 px-4 sm:px-6 lg:px-8" id="living-room-collections">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sofas & Couches</h2>
      <p className="mt-3 text-gray-600">Luxurious seating that becomes the centerpiece of your living room</p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.length === 0 ? (
        <p className="text-center text-gray-600 col-span-3">No items available</p>
      ) : (
        items.map((item) => <FurnitureCard key={item.id} item={item} />)
      )}
    </div>
  </div>
);

const CoffeeTables = ({ items }) => (
  <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Coffee Tables</h2>
      <p className="mt-3 text-gray-600">Elegant tables designed to complement your seating perfectly</p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => <FurnitureCard key={item.id} item={item} />)}
    </div>
  </div>
);

const TVUnits = ({ items }) => (
  <div className="bg-[#f9f5f0] py-16 px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">TV Units & Entertainment Centers</h2>
      <p className="mt-3 text-gray-600">Modern and stylish storage solutions for your entertainment space</p>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item) => <FurnitureCard key={item.id} item={item} />)}
    </div>
  </div>
);

const WhyChooseLivingRoom = () => {
  const benefits = [
    {
      title: "Premium Craftsmanship",
      description: "Handcrafted with care using the finest materials",
      icon: "🛠️",
    },
    {
      title: "Timeless Designs",
      description: "Styles that never go out of fashion",
      icon: "✨",
    },
    {
      title: "Comfort Guaranteed",
      description: "Ergonomically designed for everyday living",
      icon: "🛋️",
    },
    {
      title: "5-Year Warranty",
      description: "Peace of mind with every purchase",
      icon: "🛡️",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Our Living Room Collection?</h2>
        <p className="mt-3 text-gray-600">Quality you can see, comfort you can feel</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
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
    <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Living Room?</h2>
        <p className="mt-4 text-gray-300 text-lg">
          Visit our showroom or speak with our design consultants today
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
            Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

const LivingRoom = () => {
  const [furnitureItems, setFurnitureItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchFurnitureItems = async () => {
    setIsLoading(true);
    try {
      // Update this endpoint according to your furniture API
      const res = await fetch("http://localhost/your-furniture-api/get_furniture_items.php?category_id=1", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      
      if (data.success && Array.isArray(data.data)) {
        setFurnitureItems(data.data);
      } else {
        setError("Could not load furniture items");
      }
    } catch (e) {
      setError("Failed to fetch items. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFurnitureItems();
  }, []);

  const sofasAndCouches = furnitureItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.SOFAS_AND_COUCHES
  );
  const coffeeTables = furnitureItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.COFFEE_TABLES
  );
  const tvUnits = furnitureItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.TV_UNITS
  );

  return (
    <div className="bg-[#f9f5f0]">
      {error && <div className="p-4 bg-red-100 text-red-700 text-center">{error}</div>}
      
      {isLoading && (
        <div className="text-center py-20 text-gray-600">Loading Living Room Collection...</div>
      )}

      <LivingRoomHero />
      <SofasAndCouches items={sofasAndCouches} />
      <CoffeeTables items={coffeeTables} />
      <TVUnits items={tvUnits} />
      <WhyChooseLivingRoom />
      <CallToAction />
    </div>
  );
};

export default LivingRoom;