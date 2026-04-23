import React from 'react';
import showroomOne from "../assets/Backs/product1.jpg";
import interiorTwo from "../assets/Backs/product2.jpg";
import interiorThree from "../assets/Backs/dec.jpg";
import interiorFour from "../assets/Backs/Rustic Patio with Stone Walls and Boho Vibes – Outdoor Retreat Inspiration.jpg";
import interiorFive from "../assets/Backs/Upcycle & Inspire - This is so awesome! _ Facebook.jpg";
import interiorSix from "../assets/Backs/modernkitchen.jpg";

const images = [
    { src: showroomOne, label: "Showroom", height: "h-[420px]" },
    { src: interiorTwo, label: "Living Room", height: "h-[300px]" },
    { src: interiorThree, label: "Decor", height: "h-[360px]" },
    { src: interiorFour, label: "Outdoor", height: "h-[280px]" },
    { src: interiorFive, label: "Creative", height: "h-[340px]" },
    { src: interiorSix, label: "Kitchen", height: "h-[400px]" },
];

const ExperienceSection = () => {
    return (
        <section className="bg-[#fdfaf6] py-24 px-4 sm:px-6 lg:px-8">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    Experience{" "}
                    <span className="bg-gradient-to-r from-[#d4b996] to-[#8bb174] bg-clip-text text-transparent">
                        Home Haven
                    </span>
                </h2>

                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover beautifully styled interiors and furniture collections
                    designed to inspire your perfect home.
                </p>
            </div>

            {/* MASONRY GRID */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto">

                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`mb-6 break-inside-avoid rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition group relative ${img.height}`}
                    >

                        {/* IMAGE */}
                        <img
                            src={img.src}
                            alt={img.label}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>

                        {/* LABEL */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-semibold shadow">
                            {img.label}
                        </div>

                    </div>
                ))}

            </div>

            {/* FOOTER */}
            <p className="text-center text-gray-500 text-sm mt-10">
                Explore endless inspiration for your dream home
            </p>

        </section>
    );
};

export default ExperienceSection;