// components/portfolio/PageHero.jsx

import React from "react";
import { motion } from "framer-motion";

import img from "../img/za-9.jpeg";
import img1 from "../img/za-10.jpeg";

const PageHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0f0a0d] text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Background"
          className="w-full h-full object-cover opacity-20 scale-110"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#0f0a0d]/85"></div>

        {/* PINK GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#db388430,transparent_40%),radial-gradient(circle_at_bottom_right,#d6559d20,transparent_40%)]"></div>
      </div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#db3884]/15 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#d6559d]/10 blur-[170px] rounded-full"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-[180px] pb-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* TOP LABEL */}
            <div className="flex items-center gap-4 text-[#ef91bc] uppercase tracking-[0.35em] text-xs font-semibold mb-8">

              <span className="w-12 h-[1px] bg-[#ef91bc]"></span>

              Portfolio Archive
            </div>

            {/* TITLE */}
            <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.95] font-light font-serif text-white">

              Work We're{" "}

              <span className="italic text-[#ef91bc] drop-shadow-[0_0_30px_rgba(219,56,132,0.7)]">
                Proud
              </span>{" "}

              Of
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-10 max-w-xl text-white/65 text-lg md:text-xl leading-relaxed">
              Every project reflects a balance of luxury, functionality,
              and timeless elegance. We craft spaces that feel deeply
              personal while maintaining a refined modern aesthetic.
            </p>

            {/* STATS */}
            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <h3 className="text-5xl font-light text-white">
                  120+
                </h3>

                <p className="mt-2 text-[#ef91bc] uppercase tracking-[0.2em] text-xs">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-light text-white">
                  08+
                </h3>

                <p className="mt-2 text-[#ef91bc] uppercase tracking-[0.2em] text-xs">
                  Years
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-light text-white">
                  95%
                </h3>

                <p className="mt-2 text-[#ef91bc] uppercase tracking-[0.2em] text-xs">
                  Satisfaction
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-6 mt-14">

              <button
  onClick={() => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  className="
    group
    px-10
    py-4
    bg-[#db3884]
    hover:bg-[#d6559d]
    text-white
    uppercase
    tracking-[0.25em]
    text-xs
    transition
    duration-500
    shadow-[0_0_40px_rgba(219,56,132,0.35)]
  "
>
  Explore Projects
</button>

              <div className="flex items-center gap-3 text-white/30 uppercase tracking-[0.25em] text-[11px]">

                <span className="w-8 h-[1px] bg-white/20"></span>

                Pink Roof Interior
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUALS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:flex justify-center items-center h-[700px]"
          >

            {/* MAIN IMAGE */}
            <div className="absolute top-0 right-0 w-[420px] h-[560px] overflow-hidden border border-white/10 shadow-2xl group">

              <img
                src={img}
                alt="Portfolio"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition duration-[1500ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* TEXT */}
            
            </div>

            {/* SECONDARY IMAGE */}
            <div className="absolute left-0 bottom-0 w-[280px] h-[360px] overflow-hidden border border-white/10 shadow-2xl group bg-white/5 backdrop-blur-xl">

              <img
                src={img1}
                alt="Interior"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition duration-[1500ms]"
              />

              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* FLOATING GLASS CARD */}
           

            {/* FLOATING ICON */}
           
          </motion.div>
        </div>
      </div>

      {/* HUGE LETTER */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-[20rem] md:text-[35rem] leading-none font-serif text-white/[0.03] italic select-none pointer-events-none">
        P
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-white/20">

        <div className="h-16 w-[1px] bg-gradient-to-b from-white/30 to-transparent"></div>

        Scroll
      </div>
    </section>
  );
};

export default PageHero;