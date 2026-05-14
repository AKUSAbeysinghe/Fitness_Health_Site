import React from 'react';

const Navbar = () => {
  const whatsappNumber = "919876543210"; // ← Change this to your WhatsApp number (with country code, no + or spaces)

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2E7D56]">
          <span className="text-white text-xl">🍃</span>
        </div>
        <span className="text-2xl font-semibold text-gray-900">Vivara</span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8 text-gray-600 font-medium">
        <a href="/" className="hover:text-[#2E7D56] transition-colors">
          Home
        </a>
        <a href="/pharmacy" className="hover:text-[#2E7D56] transition-colors">
          Pharmacy
        </a>
        <a href="/supplements" className="hover:text-[#2E7D56] transition-colors">
          Supplements
        </a>
        <a href="/fitness" className="hover:text-[#2E7D56] transition-colors">
          Fitness
        </a>
        <a href="/contact" className="hover:text-[#2E7D56] transition-colors">
          Contact
        </a>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="px-6 py-2 bg-[#2E7D56] text-white rounded-full font-semibold hover:bg-[#256a47] transition-all flex items-center gap-2"
      >
       Talk To Us
         
      </button>
    </nav>
  );
};

export default Navbar;