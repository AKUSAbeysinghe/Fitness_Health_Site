import React from 'react';

const PartnerCTA = () => {
  const whatsappNumber = "919876543210"; // ← Change to your actual WhatsApp number

  const openWhatsApp = (message = "") => {
    const encodedMessage = encodeURIComponent(message);
    const url = encodedMessage 
      ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}` 
      : `https://wa.me/${whatsappNumber}`;
    window.open(url, '_blank');
  };

  return (
    <section className="bg-[#FCFAF7] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* CTA Container */}
        <div className="bg-[#2E7D56] rounded-3xl py-20 px-8 md:px-16 text-center text-white">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Become a Vivara partner.
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-green-50 opacity-90 leading-relaxed max-w-2xl mx-auto mb-10">
            Join 350+ leading brands reaching millions of wellness-focused
            customers every day. Grow with the platform built for health.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary Button - Apply Now */}
            <button 
              onClick={() => openWhatsApp("Hi, I want to apply as a Vivara partner.")}
              className="px-8 py-4 bg-white text-[#2E7D56] rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Apply now →
            </button>

            {/* Secondary Button - Talk to Sales */}
            <button 
              onClick={() => openWhatsApp("Hi, I'd like to talk to the sales team about partnership opportunities.")}
              className="px-8 py-4 text-white font-semibold hover:underline"
            >
              Talk to sales
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;