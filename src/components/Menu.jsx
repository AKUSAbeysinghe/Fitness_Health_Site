import React from 'react';
import LivingRoomImg from '../assets/Backs/Boho Living Room Overflowing with Greenery.jpg';
import BedroomImg from '../assets/Backs/GreenBedroom.jpg';
import DecorImg from '../assets/Backs/Mirror decor.jpg';

const MenuItemCard = ({ category, price, title, description, imageUrl }) => {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">

            {/* IMAGE */}
            <div className="relative h-72 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* PRICE BADGE */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow text-sm font-semibold text-[#8bb174]">
                    Rs. {price}
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-6 text-left space-y-3">

                {/* CATEGORY */}
                <p className="text-xs tracking-widest uppercase text-[#8bb174] font-semibold">
                    {category}
                </p>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-gray-800 leading-snug">
                    {title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm leading-relaxed min-h-[60px]">
                    {description}
                </p>

                {/* BUTTON */}
                <button className="mt-3 w-full py-3 rounded-xl bg-[#8bb174] hover:bg-[#6fa85e] text-white font-semibold transition">
                    View Details
                </button>
            </div>
        </div>
    );
};

const FeaturedMenuSection = () => {

    const featuredItems = [
        {
            category: 'Living Room',
            price: '145,000',
            title: 'Modern L-Shape Sofa Set',
            description: 'Luxurious fabric upholstery with premium foam cushioning and solid wood frame',
            imageUrl: LivingRoomImg,
        },
        {
            category: 'Bedroom',
            price: '89,000',
            title: 'King Size Bed Frame',
            description: 'Elegant wooden bed with upholstered headboard and built-in storage',
            imageUrl: BedroomImg,
        },
        {
            category: 'Decor',
            price: '24,500',
            title: 'Decorative Mirror Set',
            description: 'Handcrafted mirrors with soft gold finish for modern interiors',
            imageUrl: DecorImg,
        },
    ];

    return (
        <section className="bg-[#fdfaf6] py-24 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                {/* TITLE */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    Featured{" "}
                    <span className="bg-gradient-to-r from-[#d4b996] to-[#8bb174] bg-clip-text text-transparent">
                        Collections
                    </span>
                </h2>

                {/* SUBTITLE */}
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-14">
                    Handpicked furniture pieces designed to bring comfort, elegance,
                    and modern style into your home.
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {featuredItems.map((item, index) => (
                        <MenuItemCard
                            key={index}
                            {...item}
                        />
                    ))}

                </div>

                {/* CTA */}
                <div className="mt-14">
                    <a
                        href="/collections"
                        className="inline-block px-10 py-4 rounded-2xl bg-white border border-[#8bb174] text-[#8bb174] font-semibold hover:bg-[#8bb174] hover:text-white transition shadow-sm"
                    >
                        View All Collections
                    </a>
                </div>

            </div>
        </section>
    );
};

export default FeaturedMenuSection;