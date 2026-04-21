import React from "react";
import mainImg from "../assets/hero.png";
import smallImg from "../assets/hero.png";

export default function AboutStory() {
  return (
    <section className="bg-[#FDFBF7] px-6 md:px-16 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Label */}
          <div className="flex items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-[11px] mb-5">
            <span className="w-8 h-[1px] bg-[#C8A96E]"></span>
            Who We Are
          </div>

          {/* Heading */}
          <h2 className="font-[Cormorant_Garamond] text-3xl md:text-5xl font-light leading-tight text-[#1C1C1A]">
            Born from a{" "}
            <em className="text-[#C8A96E] italic">Passion</em> for Beautiful Spaces
          </h2>

          {/* Paragraphs */}
          <p className="text-[#6B6056] mt-6 leading-relaxed font-[DM_Sans]">
            Elara Interiors was founded in 2012 by Meera Kapoor, a designer with a deep belief that spaces have the power to shape how we feel, think, and live.
          </p>

          <p className="text-[#6B6056] mt-4 leading-relaxed font-[DM_Sans]">
            Our philosophy is simple: great design begins with great listening.
          </p>

          <p className="text-[#6B6056] mt-4 leading-relaxed font-[DM_Sans]">
            We work with a curated team of designers and craftspeople.
          </p>

          {/* Button */}
          <button className="mt-8 px-8 py-3 bg-[#1C1C1A] text-white text-xs tracking-wider uppercase hover:bg-[#C8A96E] transition">
            Start a Conversation
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative">

          {/* Main Image */}
          <div className="relative w-full h-[420px] overflow-hidden">
            <img
              src={mainImg}
              alt="about"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

            {/* Year */}
            <div className="absolute top-6 right-6 text-[5rem] font-[Cormorant_Garamond] text-[#C8A96E]/20">
              12
            </div>
          </div>

          {/* Floating Image */}
          <div className="absolute -bottom-10 -left-10 w-[55%] h-[200px] border-4 border-[#FDFBF7] overflow-hidden shadow-lg">
            <img
              src={smallImg}
              alt="about small"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}