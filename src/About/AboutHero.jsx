import React from "react";

export default function AboutHero() {
  return (
    <section className="relative bg-[#1C1C1A] text-white overflow-hidden px-6 md:px-16 pt-[140px] pb-16">
      
      {/* Content */}
      <div className="max-w-2xl">
        
        {/* Label */}
        <div className="flex items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-xs mb-5">
          <span className="w-8 h-[1px] bg-[#C8A96E]"></span>
          Our Story
        </div>

        {/* Heading */}
        <h1 className="text-[2.5rem] md:text-[4.5rem] font-light leading-tight font-serif">
          Design with{" "}
          <em className="text-[#C8A96E] italic">Soul</em>
        </h1>

        {/* Paragraph */}
        <p className="text-[#9B8F82] mt-6 max-w-md leading-relaxed">
          For over a decade, we have transformed spaces into stories —
          each project a reflection of the people who inhabit it.
        </p>
      </div>

      {/* Right Side Big Number */}
      <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 text-[10rem] font-serif text-[#C8A96E]/10">
        12
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C8A96E]/20"></div>
    </section>
  );
}