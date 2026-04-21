import React, { useState } from "react";

const faqs = [
  {
    q: "How long does a typical residential project take?",
    a: "Most residential projects range from 3–6 months, depending on scope. A single room typically takes 6–10 weeks; a full home redesign can take 5–8 months. We will give you a clear timeline at the outset and keep you updated throughout.",
  },
  {
    q: "Do I need to be present during the execution phase?",
    a: "No — we handle the entire execution process. We coordinate contractors, manage deliveries, and keep you updated regularly.",
  },
  {
    q: "What is your fee structure?",
    a: "We offer fixed-fee packages and percentage-based pricing depending on the project scope. Everything is transparent from the beginning.",
  },
  {
    q: "Can I make changes during the project?",
    a: "Yes, small changes are manageable. Larger changes may impact budget and timeline, which we will clearly communicate.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* Font */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&display=swap');
      `}
      </style>

      <section className="bg-[#F7F4EE] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-xs">
              <span className="w-10 h-[1px] bg-[#C8A96E]"></span>
              Common Questions
            </div>

            <h2
              className="mt-4 text-4xl md:text-6xl font-light text-[#1C1C1A]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              FAQ
            </h2>
          </div>

          {/* FAQ LIST */}
          <div className="border-t border-[#D6C9B8]">

            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#D6C9B8] cursor-pointer"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  {/* Question */}
                  <div className="flex justify-between items-center py-6 px-4">

                    <h3
                      className="text-lg md:text-xl text-[#1C1C1A]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {item.q}
                    </h3>

                    {/* Icon */}
                    <span className="text-[#C8A96E] text-2xl">
                      {isOpen ? "×" : "+"}
                    </span>
                  </div>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 px-4 ${
                      isOpen ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-[#6B6056] leading-relaxed text-sm md:text-base">
                      {item.a}
                    </p>
                  </div>

                  {/* Active Left Border */}
                  {isOpen && (
                    <div className="absolute left-0 h-full w-[2px] bg-[#C8A96E]"></div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}