import React from 'react';
import { Link } from 'react-router-dom';
import SupplimentSecpic from "../assets/Suppliments/The Gut-Skin Axis + Acne Breakouts _ CLEARSTEM Skincare.jpg";

const SupplementsSection = () => {
  const brands = ['GNC', 'Vitamin Shoppe', 'Holland & Barrett', 'Optimum Nutrition'];

  return (
    <section className="bg-[#FCFAF7] py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={SupplimentSecpic}
            alt="Supplement bottles on shelves" 
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h4 className="text-[#2E7D56] font-semibold tracking-wide uppercase text-sm mb-4">
            Fitness & Wellness Retail
          </h4>
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Fuel your body <br /> with the very best.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Curated vitamins, proteins, and clean supplements from category 
            leaders like GNC and Vitamin Shoppe. Every bottle vetted for 
            purity, potency, and performance.
          </p>

          {/* Brand Chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            {brands.map((brand) => (
              <span key={brand} className="px-5 py-2 bg-[#F0EFE9] rounded-full text-gray-800 font-medium">
                {brand}
              </span>
            ))}
          </div>

          {/* Updated Button with Navigation */}
          <Link 
            to="/Supplements"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E7E3D8] hover:bg-[#dcd8cc] text-gray-900 rounded-full font-medium transition-all"
          >
            Explore ↗
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SupplementsSection;