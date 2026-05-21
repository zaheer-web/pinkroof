import React from "react";

export default function Intro() {
  return (
    <>
      {/* Font Inline */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&display=swap');
        `}
      </style>

      <section className="bg-white py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-xs">
              <span className="w-10 h-[1px] bg-[#C8A96E]"></span>
              Our Philosophy
            </div>

            {/* Heading */}
            <h2
              className="mt-6 text-4xl md:text-6xl leading-tight font-light text-[#1C1C1A]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Process is <br />
              Part of the{" "}
              <span className="italic text-[#C8A96E]">Experience</span>
            </h2>

            {/* Text */}
            <p className="mt-6 text-[#6B6056] leading-relaxed max-w-lg">
              We believe the design journey should be as pleasurable as the finished space. 
              Our process is built around clear communication, collaborative decision-making, 
              and the elimination of surprises — so you feel confident and excited at every stage.
            </p>

            <p className="mt-6 text-[#6B6056] leading-relaxed max-w-lg">
              From the first conversation to the moment you step into your completed space, 
              you will always know exactly where you are, what comes next, and why each decision 
              has been made.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#EFEAE2] p-10 text-center">
              <div
                className="text-5xl text-[#C8A96E] font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                4
              </div>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-[#9B8F82]">
                Clear Phases
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EFEAE2] p-10 text-center">
              <div
                className="text-5xl text-[#C8A96E] font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                1
              </div>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-[#9B8F82]">
                Point of Contact
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#EFEAE2] p-10 text-center">
              <div
                className="text-5xl text-[#C8A96E] font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                0
              </div>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-[#9B8F82]">
                Hidden Costs
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#EFEAE2] p-10 text-center">
              <div
                className="text-5xl text-[#C8A96E] font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ∞
              </div>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-[#9B8F82]">
                Attention to Detail
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}