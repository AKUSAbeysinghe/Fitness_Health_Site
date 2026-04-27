import React from 'react';

const Footer = () => {
  return (
    <footer className="px-8 py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
        
        {/* Copyright */}
        <p className="text-sm">
          © 2026 Vivara Health. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-[#2E7D56] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#2E7D56] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#2E7D56] transition-colors">Contact</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;