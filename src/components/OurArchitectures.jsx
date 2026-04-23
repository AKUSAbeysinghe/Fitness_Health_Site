import React from 'react';
import Chef1 from "../assets/Architecture/🏠✨ ¡Construye tus sueños con los materiales adecuados para un diseño de interiores impecable! 🛋️.jpg";
import Chef2 from "../assets/Architecture/Mais do que retrato!.jpg"
import Chef3 from "../assets/Architecture/download (14).jpg";

const OurDesigners = () => {

  const team = [
    { name: 'Marco De Luca', title: 'Interior Designer', image: Chef1 },
    { name: 'Isabella Rossi', title: 'Furniture Specialist', image: Chef2 },
    { name: 'Alexander Jensen', title: 'Craftsmanship Lead', image: Chef3 },
  ];

  return (
    <section className="bg-[#fdfaf6] py-20 px-4">

      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-[#d4b996] to-[#8bb174] bg-clip-text text-transparent">
            Designers
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Meet the creative minds behind our furniture collections —
          blending design, comfort, and craftsmanship into every piece.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {team.map((person) => (
            <div
              key={person.name}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden border border-gray-100"
            >

              {/* IMAGE */}
              <div className="h-80 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center space-y-1">

                <h3 className="text-xl font-bold text-gray-800">
                  {person.name}
                </h3>

                <p className="text-[#8bb174] font-medium">
                  {person.title}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurDesigners;