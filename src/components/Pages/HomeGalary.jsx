import React, { useState, useEffect } from "react";

const galleryFilters = [
  "All",
  "Living Room",
  "Bedroom",
  "Dining",
  "Decor",
  "Showroom",
];

const FurnitureGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchGalleryImages = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/food_and_restaurant/get_gallery_images.php");
      const data = await res.json();

      if (Array.isArray(data)) {
        setGalleryItems(data);
      } else {
        setError("Invalid gallery data");
      }
    } catch (err) {
      setError("Failed to load images");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-[#fdfaf6] py-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-[#d4b996] to-[#8bb174] bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Explore our beautifully designed spaces and furniture collections
          crafted to elevate your home.
        </p>

        {/* ERROR */}
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-xl">
            {error}
          </div>
        )}

        {/* LOADING */}
        {isLoading && (
          <p className="text-gray-500 mb-6">Loading gallery...</p>
        )}

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">

          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeFilter === filter
                    ? "bg-[#8bb174] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-[#8bb174]/10"
                }`}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredItems.length === 0 && !isLoading ? (
            <p className="col-span-full text-gray-500">
              No items found
            </p>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer"
              >

                {/* IMAGE */}
                <img
                  src={item.image_url || "https://via.placeholder.com/300"}
                  alt={item.category}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>

                {/* CATEGORY LABEL */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-semibold text-gray-800 shadow">
                  {item.category}
                </div>

              </div>
            ))
          )}

        </div>

      </div>
    </section>
  );
};

export default FurnitureGallery; 