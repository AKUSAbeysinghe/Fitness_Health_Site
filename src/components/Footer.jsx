import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {

    const quickLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Our Collections', path: '/collections' },
        { name: 'Living Room', path: '/living-room' },
        { name: 'Bedroom Furniture', path: '/bedroom' },
        { name: 'Dining & Kitchen', path: '/dining-kitchen' },
        { name: 'Home Decor', path: '/home-decor' },
        { name: 'Interior Design', path: '/interior-design' },
    ];

    const policyLinks = [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'Shipping', path: '/shipping' },
        { name: 'FAQ', path: '/faq' },
    ];

    return (
        <footer className="bg-[#fdfaf6] text-gray-700 border-t border-gray-200">

            {/* MAIN */}
            <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div className="lg:col-span-2 space-y-5">

                        <div className="text-3xl font-extrabold">
                            <span className="text-gray-800">Home</span>
                            <span className="bg-gradient-to-r from-[#d4b996] to-[#8bb174] bg-clip-text text-transparent">
                                Haven
                            </span>
                        </div>

                        <p className="text-gray-600 leading-relaxed max-w-md">
                            Since 2012, Home Haven has been creating elegant furniture
                            and timeless décor that transforms houses into warm,
                            beautiful homes with comfort and style.
                        </p>

                        {/* SOCIAL */}
                        <div className="flex gap-4 pt-2">

                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#8bb174] hover:text-white transition">
                                <FaFacebookF />
                            </a>

                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#8bb174] hover:text-white transition">
                                <FaInstagram />
                            </a>

                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#8bb174] hover:text-white transition">
                                <FaTwitter />
                            </a>

                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow hover:bg-[#8bb174] hover:text-white transition">
                                <FaYoutube />
                            </a>

                        </div>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                            Quick Links
                        </h4>

                        <ul className="space-y-2 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.path}
                                        className="hover:text-[#8bb174] transition"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4">
                            Contact
                        </h4>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-[#8bb174] mt-1" />
                                <div>
                                    <p>123 Heritage Avenue</p>
                                    <p>Colombo 05, Sri Lanka</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhone className="text-[#8bb174]" />
                                <p>+94 11 234 5678</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-[#8bb174]" />
                                <p>info@homehaven.lk</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-200">

                <div className="max-w-7xl mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">

                    <p className="text-gray-500">
                        © 2026 Home Haven. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-6 text-gray-500">
                        {policyLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="hover:text-[#8bb174] transition"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;