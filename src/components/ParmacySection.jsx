import React from 'react';
import { useNavigate } from 'react-router-dom';   // ← Add this
import ParamacyPic from "../assets/Parmacy/Parmacy.jpg";

const PharmacySection = () => {
  const navigate = useNavigate();   // ← Add this

  const partners = ['Walgreens', 'CVS', 'Boots', 'Rite Aid'];

  const handleExplore = () => {
    navigate('/pharmacy');   // Change this path if your route is different
  };

  return (
    <section className="bg-[#FCFAF7] py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h4 className="text-[#2E7D56] font-semibold tracking-wide uppercase text-sm mb-4">
            Pharmacies & Drugstores
          </h4>
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Care that's always <br /> within reach.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Refill prescriptions, schedule vaccinations, and shop everyday 
            essentials from the names you trust — Walgreens, CVS, Boots 
            and more — with same-day delivery to your door.
          </p>

          {/* Partner Chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            {partners.map((name) => (
              <span 
                key={name} 
                className="px-5 py-2 bg-[#F0EFE9] rounded-full text-gray-800 font-medium"
              >
                {name}
              </span>
            ))}
          </div>

          <button 
            onClick={handleExplore}
            className="flex items-center gap-2 px-6 py-3 bg-[#E7E3D8] hover:bg-[#dcd8cc] text-gray-900 rounded-full font-medium transition-all"
          >
            Explore ↗
          </button>
        </div>

        {/* Image Side */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={ParamacyPic}
            alt="Pharmacy interior" 
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PharmacySection;