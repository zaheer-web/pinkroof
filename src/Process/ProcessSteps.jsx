import React from "react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    highlight: " & Brief",
    desc: "We begin with a deep discovery session to understand your lifestyle, preferences, and expectations. This stage sets the foundation for the entire project by aligning vision, function, and aesthetics.",
    tags: ["Client meeting", "Site survey", "Lifestyle study", "Budget planning"],
    duration: "1–2 weeks",
  },
  {
    id: "02",
    title: "Concept",
    highlight: " Development",
    desc: "We translate ideas into visual concepts through mood boards, layouts, and curated material palettes. Every design decision is explained and refined collaboratively with you.",
    tags: ["Mood boards", "Color palette", "Layouts", "Concept presentation"],
    duration: "2–3 weeks",
  },
  {
    id: "03",
    title: "Design",
    highlight: " Development",
    desc: "Detailed drawings, 3D renders, and furniture specifications are created to visualize the final outcome. This ensures clarity and confidence before execution begins.",
    tags: ["Technical drawings", "3D renders", "Furniture specs", "Procurement plan"],
    duration: "3–5 weeks",
  },
  {
    id: "04",
    title: "Execution",
    highlight: " & Reveal",
    desc: "We handle complete project execution — managing vendors, quality checks, and installation. The final reveal delivers a fully finished, styled, and ready-to-live space.",
    tags: ["Site execution", "Vendor coordination", "Quality check", "Final styling"],
    duration: "4–16 weeks",
  },
];

export default function ProcessSteps() {
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&display=swap');
      `}
      </style>

      <section className="bg-[#F7F4EE] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-16">
            <div className="flex items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-xs">
              <span className="w-10 h-[1px] bg-[#C8A96E]"></span>
              Step by Step
            </div>

            <h2
              className="mt-4 text-4xl md:text-6xl font-light text-[#1C1C1A]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Four <span className="italic text-[#C8A96E]">Phases</span>
            </h2>
          </div>

          {/* TIMELINE */}
          <div className="relative">
            
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C8A96E] to-transparent"></div>

            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={i} className="group flex gap-10 items-start">

                  {/* NUMBER BOX */}
                  <div className="relative z-10">
                    <div
                      className="w-20 h-20 flex items-center justify-center border border-[#D6C9B8] bg-[#EFEAE2] text-[#C8A96E] 
                      group-hover:bg-[#1C1C1A] group-hover:text-[#C8A96E] group-hover:border-[#1C1C1A] 
                      transition-all duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="max-w-xl">
                    
                    <h3
                      className="text-2xl md:text-3xl font-light text-[#1C1C1A]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      <span className="italic text-[#C8A96E]">
                        {step.title}
                      </span>
                      {step.highlight}
                    </h3>

                    <p className="mt-4 text-[#6B6056] leading-relaxed">
                      {step.desc}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {step.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] uppercase tracking-[0.15em] px-3 py-1 border border-[#D6C9B8] text-[#9B8F82] 
                          group-hover:border-[#C8A96E] group-hover:text-[#C8A96E] transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* DURATION */}
                    <div className="mt-4 text-sm text-[#9B8F82] flex items-center gap-2">
                      ⏱ {step.duration}
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}