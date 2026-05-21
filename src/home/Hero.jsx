import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../img/za-2.jpeg";

export default function Hero() {
  return (
    <section
      className="min-h-screen grid md:grid-cols-2 
      overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center px-6 md:px-12 lg:px-20 py-12"
      >
        <div className="w-full max-w-xl">
          
          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="w-10 h-[1px] bg-[#db3884]"></div>

            <span className="text-[10px] tracking-[0.3em] uppercase text-[#db3884]">
              Pink Roof Interiors
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-heading text-[2.5rem] md:text-[4rem] leading-tight text-[#2b0f1d] mb-5"
          >
            Creative Spaces <br />

            <span className="italic text-[#db3884]">
              Designed for
            </span>

            <br />

            Modern Living
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="text-base md:text-lg text-[#4a2b3a] leading-relaxed mb-4 font-body"
          >
            Pink Roof Interior is a creative and client-focused design studio
            transforming spaces into elegant, functional, and personalized
            environments.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="text-sm md:text-base text-[#5f4150] leading-relaxed mb-8 font-body"
          >
            From modern apartments to luxury villas, every project is crafted
            with detail, innovation, and timeless design appeal.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/portfolio">
              <button
                className="border border-[#db3884] text-[#db3884] px-6 py-3 text-xs tracking-widest uppercase 
                transition-all duration-300 hover:bg-[#db3884] hover:text-white hover:scale-105
                shadow-lg hover:shadow-[#db3884]/40"
              >
                View Portfolio
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative overflow-hidden min-h-[500px]"
      >
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f7] via-[#ef91bc]/40 to-[#fce4f1]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(219,56,132,0.25),transparent_60%)]"></div>

        {/* IMAGE */}
        <motion.img
          src={img}
          alt="interior"
          initial={{ scale: 1.3 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3 }}
          className="relative w-full h-full object-cover opacity-95 hover:scale-105 transition duration-700"
        />

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0 
          flex gap-6 md:gap-8 bg-white/75 backdrop-blur-md 
          px-4 md:px-6 py-3 md:py-4 rounded-2xl shadow-2xl
          border border-[#db3884]/10"
        >
          <div className="text-center">
            <h3 className="text-lg md:text-2xl font-heading text-[#db3884]">
              7+
            </h3>

            <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-[#2b0f1d]/70">
              Years
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg md:text-2xl font-heading text-[#d6559d]">
              340+
            </h3>

            <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-[#2b0f1d]/70">
              Projects
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg md:text-2xl font-heading text-[#d67eb3]">
              98%
            </h3>

            <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-[#2b0f1d]/70">
              Satisfaction
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}