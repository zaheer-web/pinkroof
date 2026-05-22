// components/services/Intro.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// IMAGES
import mainImg from "../img/3image/th-1.png";
import floatImg from "../img/3image/th-2.png";

export default function Intro() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-[#fff7fb] py-24 px-6 md:px-16">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#db3884]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#ef91bc]/10 blur-3xl rounded-full"></div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#db3884_1px,transparent_1px),linear-gradient(to_bottom,#db3884_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* TOP LABEL */}
          <p className="text-[#db3884] uppercase text-xs tracking-[0.3em] mb-5 flex items-center gap-3 before:w-10 before:h-[1px] before:bg-[#db3884] before:content-['']">
            Our Approach
          </p>

          {/* HEADING */}
          <h2 className="text-4xl md:text-6xl leading-tight font-light font-serif text-[#2b1120]">
            Every Service,
            <br />
            One{" "}
            <span className="italic text-[#db3884]">
              Standard
            </span>
          </h2>

          {/* TEXT */}
          <p className="text-[#6d4d5d] mt-8 text-base md:text-lg leading-relaxed max-w-xl">
            No matter the scale of your project, Pinkroof Interior follows
            one timeless philosophy — combining creativity, functionality,
            and elegance to craft luxurious living experiences.
          </p>

          <p className="text-[#6d4d5d] mt-5 text-base md:text-lg leading-relaxed max-w-xl">
            From modern residential interiors to premium office spaces,
            modular kitchens, false ceilings, lighting concepts, and custom
            furniture — every detail is thoughtfully designed to reflect
            sophistication and comfort.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">

            {[
              "Luxury Interior Design",
              "Modular Kitchen",
              "Custom Furniture",
              "False Ceiling Design",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-md border border-[#db3884]/10 px-5 py-4  shadow-sm hover:-translate-y-1 transition duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#db3884]"></div>

                <span className="text-[#2b1120] text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
         <button
  onClick={() => navigate("/contact")}
  className="
    mt-10
    px-8
    py-4
    bg-[#db3884]
    text-white
    uppercase
    tracking-[0.2em]
    text-xs
    hover:bg-[#c12f73]
    transition
    duration-300
    shadow-lg
    shadow-[#db3884]/20
  "
>
  Discuss Your Project
</button>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="relative h-[420px] md:h-[650px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* MAIN IMAGE */}
          <div className="relative w-[85%] h-[80%]  overflow-hidden shadow-2xl">
            
            {/* Glow Border */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[#db3884] via-[#ef91bc] to-[#d6559d] opacity-30 blur-xl"></div>

            <img
              src={mainImg}
              alt="Interior Design"
              className="relative w-full h-full object-cover "
            />
          </div>

          {/* FLOATING IMAGE */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: [20, 0, 20] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-2 right-0 w-[55%] h-[45%]  overflow-hidden border-[6px] border-[#fff7fb] shadow-2xl"
          >
            <img
              src={floatImg}
              alt="Interior Design"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* EXPERIENCE TAG */}
          <div className="absolute top-10 left-0 bg-[#db3884] text-white px-6 py-3 rounded-full shadow-xl backdrop-blur-md">
            <p className="text-xs tracking-[0.25em] uppercase">
              Premium Design
            </p>
          </div>

          {/* SMALL DECORATION */}
          
        </motion.div>
      </div>
    </section>
  );
}