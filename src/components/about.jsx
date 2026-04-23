import React from 'react';
import ProductShows from "../components/ProductShowcase";

// You would typically have the image imported or hosted
// For this example, I'll use a placeholder URL or a simple div with a gradient/color
// If you have the specific image hosted, replace '/path-to-your-burger-image.jpg'

const Navbar = () => {
    const navItems = ['Home', 'About', 'Menu', 'Gallery', 'Contact'];

    return (
        <nav className="container mx-auto flex justify-between items-center px-4 py-4 text-white z-10 relative">
            {/* Logo/Brand Name */}
            <div className="text-2xl font-bold">
                <span className="text-white">Flavor</span>
                <span className="text-yellow-500">Haven</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8 items-center">
                {navItems.map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-white hover:text-yellow-400 transition duration-300"
                    >
                        {item}
                    </a>
                ))}
                {/* Order Now Button */}
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded shadow-lg transition duration-300 border-2 border-yellow-500">
                    Order Now
                </button>
            </div>

            {/* Placeholder for mobile menu button (optional) */}
            {/* <button className="md:hidden text-white text-2xl">☰</button> */}
        </nav>
    );
};

const HeroSection = () => {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ 
             // Replace this with your actual image path or import
             backgroundImage: "url('https://images.unsplash.com/photo-1551782450-a2132b4fd389?fit=crop&w=1920&q=80')" 
             // Note: The provided image is a close-up, so for a full screen, you might need a different aspect ratio or technique.
        }}>
            {/* Overlay to darken the image slightly and help text stand out */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Navbar rendered on top of the overlay */}
            <Navbar />

            {/* Hero Content */}
            <div className="relative flex flex-col items-center justify-center text-center h-[calc(100vh-80px)] px-4 pb-20">
                <h1 className="text-7xl font-extrabold text-white mb-4 z-10">
                    <span className="text-white">Flavor</span>
                    <span className="text-yellow-500">Haven</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white max-w-2xl mb-10 z-10 font-medium tracking-wide leading-relaxed">
                    Where every bite tells a story of passion, quality, and unforgettable taste experiences
                </p>

                <div className="flex space-x-6 z-10">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg shadow-xl text-lg transition duration-300 transform hover:scale-105 border-2 border-yellow-500">
                        Explore Our Menu
                    </button>
                    <button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-lg shadow-xl text-lg transition duration-300 transform hover:scale-105">
                        Find Locations
                    </button>
                </div>

                {/* Scroll Indicator Dot */}
                <div className="absolute bottom-5 z-10">
                    <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
                </div>
            </div>
        </div>
    );
};

// Main App Component
const FlavorHavenWebsite = () => {
    return (
        <div className="font-sans">
            <HeroSection />
            {/* Other sections of the website would go here */}
            <ProductShows />
        </div>
    );
};

export default FlavorHavenWebsite;
