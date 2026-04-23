import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/gallery" },
    ];

    const menuItems = [
        { name: "Living Room", path: "/living-room" },
        { name: "Bedroom", path: "/bedroom" },
        { name: "Dining Room", path: "/dining-room" },
        { name: "Kitchen", path: "/kitchen" },
        { name: "Outdoor", path: "/outdoor" },
        { name: "Home Decor", path: "/home-decor" },
    ];

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const whatsappNumber = "+94711234567";
    const whatsappMessage = "Hi! I'm interested in Home Haven furniture 🏡";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleWhatsApp = () => {
        const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, "_blank");
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* NAVBAR */}
            <nav className="w-full px-4 lg:px-10 py-4 bg-[#fdfaf6] shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* LOGO */}
                    <Link to="/" className="text-2xl sm:text-3xl font-extrabold">
                        <span className="text-gray-800">Home</span>
                        <span className="bg-gradient-to-r from-[#d4b996] to-[#8bb174] bg-clip-text text-transparent">
                            Haven
                        </span>
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center gap-8">

                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-gray-700 font-medium hover:text-[#8bb174] transition"
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* DROPDOWN */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#8bb174]"
                            >
                                Collections
                                <span className={`transition ${isDropdownOpen ? "rotate-180" : ""}`}>⌄</span>
                            </button>

                            <div
                                className={`absolute top-10 left-0 w-60 bg-white rounded-2xl shadow-xl border transition-all duration-300 ${
                                    isDropdownOpen
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                }`}
                            >
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="block px-5 py-3 text-gray-700 hover:bg-[#f5f5f5] hover:text-[#8bb174] rounded-xl transition"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA BUTTON */}
                        <button
                            onClick={handleWhatsApp}
                            className="bg-[#8bb174] hover:bg-[#6fa85e] text-white font-semibold px-6 py-2.5 rounded-xl transition shadow-md"
                        >
                            Book Visit
                        </button>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        className="lg:hidden text-3xl text-gray-800"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-[#fdfaf6] z-50 flex flex-col">

                    {/* HEADER */}
                    <div className="p-5 flex justify-between items-center border-b">
                        <div className="text-2xl font-bold">
                            <span className="text-gray-800">Home</span>
                            <span className="text-[#8bb174]">Haven</span>
                        </div>
                        <button onClick={toggleMobileMenu} className="text-3xl">✕</button>
                    </div>

                    {/* MENU */}
                    <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">

                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="block py-3 px-4 text-lg rounded-xl hover:bg-white shadow-sm"
                                onClick={toggleMobileMenu}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* COLLECTIONS */}
                        <div className="pt-6">
                            <p className="text-gray-500 font-semibold px-2 mb-2">
                                Collections
                            </p>

                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block py-3 px-4 text-lg rounded-xl hover:bg-white shadow-sm"
                                    onClick={toggleMobileMenu}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="p-5 border-t">
                        <button
                            onClick={handleWhatsApp}
                            className="w-full py-4 bg-[#8bb174] hover:bg-[#6fa85e] text-white font-semibold text-lg rounded-2xl transition"
                        >
                            Book Showroom Visit
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;