import React from 'react';
import { Link } from 'react-router-dom';   // ← Import Link
import FitnessSec from "../assets/Fitness/FitnessSec.jpg";

const FitnessSection = () => {
  const gyms = ['Planet Fitness', 'Anytime Fitness', 'Equinox', 'Crunch'];

  return (
    <section className="bg-[#FCFAF7] py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h4 className="text-[#2E7D56] font-semibold tracking-wide uppercase text-sm mb-4">
            Gyms & Fitness Clubs
          </h4>
          <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Train where it <br /> feels right.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            One membership, thousands of clubs. Drop into Planet Fitness, 
            Anytime Fitness and premium boutique studios near home, work, 
            or anywhere life takes you.
          </p>

          {/* Gym Name Chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            {gyms.map((name) => (
              <span key={name} className="px-5 py-2 bg-[#F0EFE9] rounded-full text-gray-800 font-medium">
                {name}
              </span>
            ))}
          </div>

          {/* Updated Button with Navigation */}
          <Link 
            to="/Fitness"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#E7E3D8] hover:bg-[#dcd8cc] text-gray-900 rounded-full font-medium transition-all"
          >
            Explore ↗
          </Link>
        </div>

        {/* Image Side */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img 
            src={FitnessSec}
            alt="Interior of a modern fitness gym" 
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FitnessSection;