// components/services/ServicesList.jsx

import { motion } from "framer-motion";
import img from "../img/za-6.jpeg";

const services = [
  {
    title: "Residential Interior Design",
    desc: "Complete home design services — from a single room refresh to a full luxury home transformation.",
  },
  {
    title: "Commercial & Office Design",
    desc: "Modern office and commercial interiors designed to elevate productivity and brand identity.",
  },
  {
    title: "Hospitality Design",
    desc: "Elegant hotels, cafes, restaurants, and resorts designed for memorable guest experiences.",
  },
  {
    title: "Full-Scale Renovation",
    desc: "End-to-end renovation solutions blending modern functionality with timeless aesthetics.",
  },
  {
    title: "Space Planning & Consultation",
    desc: "Expert layout planning and interior consultation tailored for comfort and efficiency.",
  },
  {
    title: "3D Visualisation & Renders",
    desc: "Photorealistic 3D renders helping you visualize your dream space before execution.",
  },
];

export default function ServicesList() {
  return (
    <section className="relative overflow-hidden px-6 md:px-16 py-24">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#140811]/30"></div>

        {/* PINK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#db3884]/20 via-[#d6559d]/10 to-[#ef91bc]/10"></div>
      </div>

      {/* PATTERN OVERLAY */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>
      </div>

      {/* EXTRA PATTERN CIRCLES */}
      <div className="absolute top-20 left-10 w-72 h-72 border border-white/10 rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 border border-[#db3884]/20 rounded-full"></div>

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#db3884]/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#ef91bc]/20 rounded-full blur-3xl"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div>
            <p className="text-[#ef91bc] text-[11px] tracking-[0.3em] uppercase flex items-center gap-3 before:w-8 before:h-[1px] before:bg-[#ef91bc] before:content-[''] mb-4">
              All Services
            </p>

            <h2 className="text-4xl md:text-6xl font-light font-serif leading-tight text-white">
              What We{" "}
              <span className="italic text-[#ef91bc]">
                Create
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-[#f5d8e7] leading-relaxed text-base md:text-lg">
            Pinkroof Interior delivers premium design experiences crafted
            with elegance, innovation, and timeless aesthetics for every
            type of modern space.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid gap-6">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden  border border-white/10 bg-white/10 backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#db3884]/40 hover:bg-white/15"
            >

              {/* HOVER GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#db3884] via-[#d6559d] to-[#ef91bc] opacity-0 group-hover:opacity-90 transition duration-500"></div>

              {/* CONTENT */}
              <div className="relative z-10 grid md:grid-cols-[90px_1fr_auto] gap-8 items-center">

                {/* NUMBER */}
                <div className="text-4xl md:text-5xl font-serif font-light text-[#ef91bc] transition duration-500 group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-4 transition duration-500">
                    {item.title}
                  </h3>

                  <p className="text-[#f5d8e7] leading-relaxed text-sm md:text-base max-w-2xl transition duration-500 group-hover:text-white">
                    {item.desc}
                  </p>
                </div>

                {/* ICON */}
                
              </div>

              {/* BOTTOM LINE */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-white transition-all duration-700 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}