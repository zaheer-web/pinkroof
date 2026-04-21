// components/services/Intro.jsx
import { motion } from "framer-motion";

// 👇 IMPORT IMAGES
import mainImg from  "../assets/hero.png";
import floatImg from "../assets/hero.png";

export default function Intro() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-20 items-center bg-[#FDFBF7] overflow-hidden">
      
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-[#C8A96E] uppercase text-xs tracking-[0.25em] mb-4 flex items-center gap-3 before:w-8 before:h-[1px] before:bg-[#C8A96E] before:content-['']">
          Our Approach
        </p>

        <h2 className="text-3xl md:text-5xl font-light mb-6 font-serif leading-tight">
          Every Service,<br />
          One <em className="text-[#C8A96E] italic">Standard</em>
        </h2>

        <p className="text-[#6B6056] mb-4 leading-relaxed">
          No matter the scope of your project, our process remains consistent:
          we listen deeply, design purposefully, and execute with precision.
        </p>

        <p className="text-[#6B6056] mb-6 leading-relaxed">
          We offer a full spectrum of interior design services tailored to your needs.
        </p>

        <button className="bg-[#1C1C1A] text-white px-6 py-3 text-xs uppercase tracking-widest border border-[#1C1C1A] hover:bg-[#C8A96E] hover:border-[#C8A96E] transition">
          Discuss Your Project
        </button>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        className="relative h-[350px] md:h-[500px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* MAIN IMAGE */}
        <img
          src={mainImg}
          alt="Interior Design"
          className="w-full h-[75%] object-cover"
        />

        {/* FLOATING IMAGE */}
        <img
          src={floatImg}
          alt="Interior Design"
          className="absolute bottom-0 right-0 w-[60%] h-[55%] object-cover border-4 border-[#FDFBF7]"
        />

        {/* TAG */}
        <div className="absolute top-6 left-0 bg-[#C8A96E] text-white px-4 py-1 text-xs tracking-widest shadow-md">
          Est. 2012
        </div>
      </motion.div>

    </section>
  );
}