import React, { useRef } from 'react';
import Banner from '../assets/Backs/Woontrends 2026_ de 10 grootste interieurtrends _ Meubeltrend_nl.jpg';

const HeroSection = () => {
    const sectionRef = useRef(null);

    const scrollToBottom = () => {
        sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // ✅ WHATSAPP CONFIG
    const whatsappNumber = "+94711234567"; // <-- CHANGE THIS
    const whatsappMessage = "Hi! I'm interested in Home Haven furniture.";

    const handleWhatsApp = () => {
        const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, "_blank");
    };

    return (
        <div
            className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: `url(${Banner})` }}
        >

            {/* 🌟 LEFT CONTENT (GLASS CARD STYLE) */}
            <div className="w-full md:w-1/2 px-6 md:px-16">
                <div className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl max-w-xl">

                    {/* SMALL TAG */}
                    <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-[#8bb174] text-white rounded-full">
                        New Collection 2026
                    </span>

                    {/* TITLE */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                        Make Your Home <br />
                        <span className="bg-gradient-to-r from-[#d4b996] to-[#8bb174] bg-clip-text text-transparent">
                            Beautiful & Comfortable
                        </span>
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        Discover thoughtfully designed furniture that blends style,
                        comfort, and functionality for modern living spaces.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-4">

                        {/* ✅ GREEN BUTTON NOW WHATSAPP */}
                        <button
                            onClick={handleWhatsApp}
                            className="px-6 py-3 rounded-xl font-semibold text-white bg-[#8bb174] hover:bg-[#6fa85e] transition shadow-lg"
                        >
                            Shop Now
                        </button>

                        <button
                            onClick={scrollToBottom}
                            className="px-6 py-3 rounded-xl font-semibold border-2 border-gray-300 hover:bg-gray-900 hover:text-white transition"
                        >
                            Explore More
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hidden md:block w-1/2"></div>

            {/* FLOATING CARD */}
            <div className="absolute bottom-10 right-6 md:right-16 bg-white p-5 rounded-2xl shadow-xl hidden md:block">
                <p className="text-sm text-gray-500">Popular Choice</p>
                <h3 className="font-semibold text-lg">Modern Sofa Set</h3>
                <p className="text-[#8bb174] font-bold mt-1">$299</p>
            </div>

            {/* SCROLL */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-white text-sm mb-2 drop-shadow">
                    Scroll
                </span>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};

const HomeHavenWebsite = () => {
    return (
        <div className="font-sans bg-[#fdfaf6] text-gray-800">

            <HeroSection />

            {/* FEATURE SECTION */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Choose Home Haven
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We combine design, quality, and comfort to create furniture
                    that truly feels like home.
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                        <p className="text-gray-600">
                            Crafted with the finest materials for long-lasting durability.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
                        <p className="text-gray-600">
                            Stylish pieces that fit perfectly in any modern home.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-3">Affordable Prices</h3>
                        <p className="text-gray-600">
                            Luxury furniture at prices that suit your budget.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default HomeHavenWebsite;