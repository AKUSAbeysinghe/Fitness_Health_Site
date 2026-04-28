import React from 'react';
import Mains from '../assets/Mains/Banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#FCFAF7] px-8 py-20 overflow-hidden">

      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-40 blur-xl scale-110"
        style={{
          backgroundImage: `url(${Mains})`,
        }}
      />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-gray-200 rounded-full text-sm text-gray-700 bg-white shadow-sm">
          <span>✨</span>
          <span>Your wellness, simplified</span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Health & wellness, <br />
          <span className="text-[#2E7D56]">
            all in one place.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
          From trusted pharmacies and premium supplements to modern fitness
          clubs — Vivara connects you with everything you need to feel your best.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#2E7D56] text-white rounded-full font-medium hover:bg-[#256a47] transition-all">
            Explore wellness <span>→</span>
          </button>

          <button className="px-6 py-3 bg-[#F0EFE9] text-gray-800 rounded-full font-medium hover:bg-[#e4e2da] transition-all">
            For partners
          </button>
        </div>

        {/* Trust Indicator */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex text-orange-400 text-xl">
            ★★★★★
          </div>

          <span className="text-gray-600 font-medium">
            Trusted by <span className="font-bold">2M+</span> members worldwide
          </span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;