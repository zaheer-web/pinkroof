import React from "react";

export default function DesignHero() {
  return (
    <>
      {/* Google Font Inline */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&display=swap');
        `}
      </style>

      <section className="relative bg-[#1C1C1A] overflow-hidden">
        
        {/* Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">
          
          {/* Label */}
          <div className="flex items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-xs">
            <span className="w-10 h-[1px] bg-[#C8A96E]"></span>
            How We Work
          </div>

          {/* Heading */}
          <h1
            className="mt-4 text-[#F7F4EE] font-light leading-tight text-4xl sm:text-5xl md:text-7xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Design{" "}
            <span className="italic text-[#C8A96E]">Journey</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-[#9B8F82] max-w-md leading-relaxed text-sm md:text-base">
            A clear, collaborative process — from first meeting to final reveal —
            designed to be as enjoyable as the end result.
          </p>
        </div>

        {/* Right Arrow */}
        <div
          className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 text-[120px] text-[#C8A96E]/10 select-none pointer-events-none"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          →
        </div>
      </section>
    </>
  );
}