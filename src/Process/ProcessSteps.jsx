// components/services/ProcessSteps.jsx

import React from "react";
import { motion } from "framer-motion";

import img from "../img/za-1.jpeg";
import img1 from "../img/za-2.jpeg";
import img2 from "../img/za-3.jpeg";
import img3 from "../img/za-4.jpeg";

const steps = [
  {
    id: "01",
    title: "Discovery",
    highlight: " & Brief",
    desc: "We begin with a deep discovery session to understand your lifestyle, preferences, and expectations.",
    tags: [
      "Client meeting",
      "Site survey",
      "Lifestyle study",
      "Budget planning",
    ],
    duration: "1–2 weeks",
    image: img,
  },

  {
    id: "02",
    title: "Concept",
    highlight: " Development",
    desc: "We translate ideas into visual concepts through mood boards, layouts, and curated material palettes.",
    tags: [
      "Mood boards",
      "Color palette",
      "Layouts",
      "Concept presentation",
    ],
    duration: "2–3 weeks",
    image: img1,
  },

  {
    id: "03",
    title: "Design",
    highlight: " Development",
    desc: "Detailed drawings, 3D renders, and furniture specifications are created before execution begins.",
    tags: [
      "Technical drawings",
      "3D renders",
      "Furniture specs",
      "Procurement plan",
    ],
    duration: "3–5 weeks",
    image: img2,
  },

  {
    id: "04",
    title: "Execution",
    highlight: " & Reveal",
    desc: "We handle complete project execution with vendor coordination and final styling.",
    tags: [
      "Site execution",
      "Vendor coordination",
      "Quality check",
      "Final styling",
    ],
    duration: "4–16 weeks",
    image: img3,
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden bg-[#131315] py-24 px-6 md:px-16">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#db3884]/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#d6559d]/10 blur-[160px] rounded-full"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#db3884] to-transparent -translate-x-1/2"></div>

          <div className="space-y-24">

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >

                {/* CENTER NODE */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                  <div className="w-8 h-8 rotate-45 border border-[#db3884] bg-[#131315] shadow-[0_0_25px_rgba(219,56,132,0.5)] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#db3884] rounded-full -rotate-45"></div>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="w-full md:w-1/2 group">
                  <div className="relative overflow-hidden border border-white/10 shadow-2xl">

                    {/* IMAGE */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[320px] md:h-[420px] object-cover group-hover:scale-105 transition duration-700"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131315]/80 via-transparent to-transparent"></div>

                    {/* NUMBER */}
                    <div className="absolute top-6 left-6 text-5xl md:text-6xl font-serif text-white/80">
                      {step.id}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-1/2">
                  <div className="group relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 hover:border-[#db3884]/40 transition duration-500">

                    {/* HOVER BG */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#db3884] via-[#d6559d] to-[#ef91bc] opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    <div className="relative z-10">

                      {/* TITLE */}
                      <h3 className="text-3xl md:text-5xl font-serif font-light text-white leading-tight">

                        <span className="italic text-[#ef91bc] group-hover:text-white transition duration-500">
                          {step.title}
                        </span>

                        {step.highlight}
                      </h3>

                      {/* DESC */}
                      <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg group-hover:text-white/90 transition duration-500">
                        {step.desc}
                      </p>

                      {/* TAGS */}
                      <div className="flex flex-wrap gap-3 mt-8">

                        {step.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] border border-white/10 text-white/60 bg-white/5 group-hover:border-white/20 group-hover:text-white transition duration-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* DURATION */}
                      <div className="mt-8 flex items-center gap-3 text-sm text-[#ef91bc] group-hover:text-white transition duration-500">

                        <div className="w-10 h-[1px] bg-[#db3884] group-hover:bg-white"></div>

                        ⏱ {step.duration}
                      </div>
                    </div>

                    {/* BOTTOM LINE */}
                    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-white transition-all duration-700 group-hover:w-full"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}