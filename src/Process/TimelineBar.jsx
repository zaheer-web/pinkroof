import React from "react";

const phases = [
  { step: "W1", title: "Discovery", time: "1–2 weeks" },
  { step: "W3", title: "Concept", time: "2–3 weeks" },
  { step: "W6", title: "Design", time: "3–5 weeks" },
  { step: "W10", title: "Procurement", time: "4–6 weeks" },
  { step: "W14", title: "Installation", time: "2–8 weeks" },
  { step: "✦", title: "Reveal", time: "Day one" },
];

export default function TimelineBar() {
  return (
    <>
      {/* Font */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&display=swap');
      `}
      </style>

      <section className="bg-[#1C1C1A] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">

          {/* Label */}
          <div className="flex justify-center items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-xs">
            <span className="w-10 h-[1px] bg-[#C8A96E]"></span>
            Typical Timeline
          </div>

          {/* Heading */}
          <h2
            className="mt-6 text-4xl md:text-6xl font-light text-[#F7F4EE]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            From Brief to{" "}
            <span className="italic text-[#C8A96E]">Reveal</span>
          </h2>

          {/* Timeline */}
          <div className="relative mt-16">

            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-[1px] bg-[#C8A96E]/20"></div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-start">
              {phases.map((item, i) => (
                <div key={i} className="group text-center relative">

                  {/* Box */}
                  <div className="w-16 h-16 mx-auto flex items-center justify-center border border-[#C8A96E]/40 text-[#C8A96E] 
                  group-hover:bg-[#C8A96E]/10 transition duration-300"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {item.step}
                  </div>

                  {/* Title */}
                  <p className="mt-4 text-sm uppercase tracking-[0.15em] text-[#F7F4EE]">
                    {item.title}
                  </p>

                  {/* Time */}
                  <p className="text-xs text-[#9B8F82] mt-1">
                    {item.time}
                  </p>

                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}