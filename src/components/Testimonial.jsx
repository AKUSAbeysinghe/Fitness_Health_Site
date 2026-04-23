import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating = 5 }) => {
    return (
        <div className="flex gap-1 mb-4">
            {Array.from({ length: rating }).map((_, index) => (
                <FaStar key={index} className="w-5 h-5 text-[#8bb174]" />
            ))}
        </div>
    );
};

const TestimonialCard = ({ quote, author, title }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">

            <StarRating />

            {/* QUOTE */}
            <p className="text-gray-600 text-lg italic mb-6 flex-grow leading-relaxed">
                “{quote}”
            </p>

            {/* LINE */}
            <div className="border-t border-gray-100 mb-5"></div>

            {/* AUTHOR */}
            <div>
                <p className="text-gray-800 font-semibold text-lg mb-1">
                    {author}
                </p>
                <p className="text-gray-500 text-sm">
                    {title}
                </p>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {

    const testimonialsData = [
        {
            quote: "The quality of the furniture is outstanding. Our living room set has become the heart of our home.",
            author: "Nadia Perera",
            title: "Homeowner, Colombo 05",
        },
        {
            quote: "We furnished our entire house with Home Haven. Elegant designs and premium quality throughout.",
            author: "Dr. Rajith Fernando",
            title: "Architect & Homeowner",
        },
        {
            quote: "The team helped us choose perfect pieces that match our interior style beautifully.",
            author: "Anushka Wijesinghe",
            title: "Interior Designer",
        },
    ];

    return (
        <section className="bg-[#fdfaf6] py-20 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto text-center">

                {/* TITLE */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
                    What Our Customers Say
                </h2>

                {/* SUBTITLE */}
                <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
                    Real experiences from families who transformed their homes with
                    Home Haven furniture and décor.
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            title={testimonial.title}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default TestimonialsSection;