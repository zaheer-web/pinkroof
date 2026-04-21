import React from "react";

export default function AwardsSection() {
  const awards = [
    {
      year: "2024",
      title: "Design Excellence Award",
      org: "Architectural Digest India",
    },
    {
      year: "2023",
      title: "Best Luxury Residential",
      org: "Elle Décor Awards",
    },
    {
      year: "2022",
      title: "Top Interior Studio",
      org: "Condé Nast Traveller",
    },
    {
      year: "2021",
      title: "Innovation in Design",
      org: "India Design Awards",
    },
    {
      year: "2020",
      title: "Best Commercial Project",
      org: "The Design Institute",
    },
    {
      year: "2019",
      title: "Rising Studio of the Year",
      org: "Dezeen Awards",
    },
  ];

  return (
    <section className="bg-[#1C1C1A] px-6 md:px-16 py-20 text-center">
      
      {/* HEADER */}
      <div className="max-w-xl mx-auto mb-16">
        <div className="flex justify-center items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-[11px] mb-4">
          <span className="w-8 h-[1px] bg-[#C8A96E]"></span>
          Recognition
        </div>

        <h2 className="font-[Cormorant_Garamond] text-3xl md:text-5xl font-light text-[#F7F4EE]">
          Awards & <em className="text-[#C8A96E] italic">Accolades</em>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 border-t border-[#C8A96E]/20">
        
        {awards.map((item, i) => (
          <div
            key={i}
            className="py-10 px-4 border-b md:border-b-0 md:border-r border-[#C8A96E]/20 hover:bg-[#C8A96E]/5 transition"
          >
            {/* YEAR */}
            <p className="text-[#C8A96E] text-[11px] tracking-[0.2em] uppercase mb-3">
              {item.year}
            </p>

            {/* TITLE */}
            <h3 className="text-[#F7F4EE] font-[Cormorant_Garamond] text-lg mb-2">
              {item.title}
            </h3>

            {/* ORG */}
            <p className="text-[#9B8F82] text-sm">
              {item.org}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}