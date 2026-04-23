import React from 'react';
import { RiTimeLine, RiAwardLine, RiGroupLine } from 'react-icons/ri';

const StorySection = () => {

    const stats = [
        { icon: RiTimeLine, value: '14+', label: 'Years of Excellence' },
        { icon: RiAwardLine, value: '35+', label: 'Design Awards' },
        { icon: RiGroupLine, value: '8,500+', label: 'Happy Homes' },
    ];

    return (
        <section className="bg-[#fdfaf6] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-10">

                    {/* HEADER */}
                    <div className="space-y-5">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
                            Our Story
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                            Founded in 2012,{" "}
                            <span className="text-[#8bb174] font-semibold">
                                Home Haven
                            </span>{" "}
                            began with a simple vision — to craft beautiful furniture
                            and home décor that transforms houses into warm,
                            inviting homes.
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                            From a small showroom to a trusted name across Sri Lanka,
                            we continue to design timeless pieces that blend comfort,
                            elegance, and everyday living.
                        </p>
                    </div>

                    {/* STATS */}
                    <div className="flex flex-wrap gap-x-12 gap-y-10 pt-6">

                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">

                                {/* ICON */}
                                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-3 rounded-full bg-[#8bb174]/10 group-hover:bg-[#8bb174]/20 transition">
                                    <stat.icon className="w-7 h-7 text-[#8bb174]" />
                                </div>

                                {/* VALUE */}
                                <p className="text-3xl font-bold text-gray-800">
                                    {stat.value}
                                </p>

                                {/* LABEL */}
                                <p className="text-sm text-gray-500">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-8">

                    {/* MISSION */}
                    <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition border-l-4 border-[#8bb174]">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            To create furniture and home décor that blends timeless
                            design, comfort, and quality — helping every family build
                            a space they truly love.
                        </p>
                    </div>

                    {/* VALUES */}
                    <div className="bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition border-l-4 border-[#d4b996]">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                            Our Values
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Craftsmanship, sustainability, thoughtful design, and
                            customer care are at the heart of everything we create.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StorySection;