import React from "react";

export default function ValuesSection() {
  const values = [
    {
      num: "01",
      title: "Intentionality",
      desc: "Every decision, from material selection to spatial flow, is made with deliberate purpose. Nothing is arbitrary.",
    },
    {
      num: "02",
      title: "Authenticity",
      desc: "We design for the people who will live in the space, not for trends. Each project is uniquely theirs.",
    },
    {
      num: "03",
      title: "Craftsmanship",
      desc: "We partner with master craftspeople and source materials that will age with beauty and tell their own story.",
    },
    {
      num: "04",
      title: "Transparency",
      desc: "Clear communication, honest budgets, and a process that keeps you informed and in control throughout.",
    },
  ];

  return (
    <section className="bg-[#F7F4EE] px-6 md:px-16 py-20">
      
      {/* HEADER */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-[11px] mb-4">
          <span className="w-8 h-[1px] bg-[#C8A96E]"></span>
          What Guides Us
        </div>

        <h2 className="font-[Cormorant_Garamond] text-3xl md:text-5xl font-light text-[#1C1C1A]">
          Our Core <em className="text-[#C8A96E] italic">Values</em>
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {values.map((item, index) => (
          <div
            key={index}
            className="bg-[#FDFBF7] p-8 border-b-2 border-[#D6C9B8] hover:border-[#C8A96E] transition-all duration-300 hover:-translate-y-2"
          >
            {/* Number */}
            <div className="font-[Cormorant_Garamond] text-4xl text-[#E8D5A8] mb-4">
              {item.num}
            </div>

            {/* Title */}
            <h3 className="font-[Cormorant_Garamond] text-xl text-[#1C1C1A] mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#6B6056] text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}