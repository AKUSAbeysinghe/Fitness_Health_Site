import React from 'react';
import MainBannerPic from "../assets/Mains/Banner.png";

const WellnessCard = () => {
  const whatsappNumber = "919876543210"; // ← Change to your actual WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="w-full bg-white overflow-hidden shadow-lg border border-gray-100 transition-transform duration-300 hover:scale-105">
      
      {/* Image */}
      <div className="w-full h-[500px] overflow-hidden">
        <img
          src={MainBannerPic}
          alt="Health and wellness concept"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full flex flex-col items-center text-center px-12 py-12">
        <h3 className="text-4xl font-bold text-gray-900 mb-5">
          Holistic Wellness
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-8">
          Integrated solutions for your physical health, combining fitness routines,
          nutritional support, and professional medical guidance in one ecosystem.
        </p>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="text-[#2E7D56] font-semibold text-lg flex items-center gap-2 hover:gap-3 transition-all"
        >
          Learn more <span>→</span>
        </button>
      </div>
      
    </div>
  );
};

export default WellnessCard;