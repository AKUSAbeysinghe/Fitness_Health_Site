import React, { useEffect, useState } from 'react';
import BedroomBanner from "../../assets/BedRoom/BedroomBanner.png"; // Update with your actual banner image

// Define subcategory IDs (update according to your database)
const SUBCATEGORY_IDS = {
  BEDS_AND_FRAMES: 1,
  WARDROBES: 2,
  NIGHTSTANDS: 3,
  DRESSERS: 4,
};

const BedroomHero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BedroomBanner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 md:px-24 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Bedroom Collection
        </h1>
        <p className="mt-4 max-w-lg text-base md:text-lg text-gray-200">
          Create your perfect sanctuary with elegant, comfortable, and timeless bedroom furniture
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#bedroom-collections"
            className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-600 transition duration-300"
          >
            Explore Bedroom Collection
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

const BedroomCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
      <div className="relative">
        <img
          src={item.image_url || "https://via.placeholder.com/600x400?text=Bedroom+Furniture"}
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
          {item.description || "Premium bedroom furniture crafted for comfort and style"}
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

const BedsAndFrames = ({ items }) => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="bedroom-collections">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Beds & Bed Frames</h2>
        <p className="mt-3 text-gray-600">Luxurious beds designed for restful sleep and elegant style</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.length === 0 ? (
          <p className="text-center text-gray-600 col-span-3">No items available in this category</p>
        ) : (
          items.map((item) => <BedroomCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

const Wardrobes = ({ items }) => {
  return (
    <div className="bg-[#f9f5f0] py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Wardrobes & Closets</h2>
        <p className="mt-3 text-gray-600">Spacious and stylish storage solutions for your bedroom</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => <BedroomCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const NightstandsAndDressers = ({ items }) => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nightstands & Dressers</h2>
        <p className="mt-3 text-gray-600">Functional and beautiful pieces to complete your bedroom</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => <BedroomCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

const WhyChooseBedroom = () => {
  const benefits = [
    {
      title: "Supreme Comfort",
      description: "Designed for the best sleep and relaxation",
      icon: "🛏️",
    },
    {
      title: "Durable Craftsmanship",
      description: "Built with premium solid wood and quality materials",
      icon: "🪵",
    },
    {
      title: "Elegant Designs",
      description: "From modern minimal to classic luxury styles",
      icon: "✨",
    },
    {
      title: "5-Year Warranty",
      description: "Long-term quality guarantee on all pieces",
      icon: "🛡️",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Our Bedroom Collection?</h2>
        <p className="mt-3 text-gray-600">Where comfort meets timeless elegance</p>

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
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Create Your Dream Bedroom?</h2>
        <p className="mt-4 text-gray-300 text-lg">
          Visit our showroom or consult with our experts to design your perfect bedroom.
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
            Get Free Design Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

const Bedroom = () => {
  const [furnitureItems, setFurnitureItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchFurnitureItems = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost/your-furniture-api/get_furniture_items.php?category_id=2", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        setFurnitureItems(data.data);
      } else {
        setError("Could not load bedroom items");
      }
    } catch (e) {
      setError("Failed to fetch items. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFurnitureItems();
  }, []);

  const bedsAndFrames = furnitureItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.BEDS_AND_FRAMES
  );
  const wardrobes = furnitureItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.WARDROBES
  );
  const nightstandsAndDressers = furnitureItems.filter(item => 
    item.sub_category_id === SUBCATEGORY_IDS.NIGHTSTANDS || 
    item.sub_category_id === SUBCATEGORY_IDS.DRESSERS
  );

  return (
    <div className="bg-[#f9f5f0]">
      {error && (
        <div className="p-4 bg-red-100 text-red-700 text-center font-medium">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="text-center py-20 text-gray-600">Loading Bedroom Collection...</div>
      )}

      <BedroomHero />
      <BedsAndFrames items={bedsAndFrames} />
      <Wardrobes items={wardrobes} />
      <NightstandsAndDressers items={nightstandsAndDressers} />
      <WhyChooseBedroom />
      <CallToAction />
    </div>
  );
};

export default Bedroom;