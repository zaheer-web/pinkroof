import { Link } from "react-router-dom";
import img from "../img/za-2.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 
    bg-gradient-to-br from-[#FEFEFD] via-[#FBE6E5] to-[#f8dede]">

      {/* LEFT TEXT */}
      <div className="flex items-center px-6 md:px-12 lg:px-20 py-12">
        
        <div className="w-full max-w-xl">

          {/* TAG */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-black"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-black">
              Pink Roof Interiors
            </span>
          </div>

          {/* HEADING */}
          <h1 className="font-heading text-[2.4rem] md:text-[3.5rem] leading-tight text-black mb-5">
            Creative Spaces <br />
            <span className="italic text-[#b88b8b]">Designed for</span> <br />
            Modern Living
          </h1>

          {/* DESCRIPTION */}
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 font-body">
            Pink Roof Interior is a creative and client-focused design studio 
            transforming spaces into elegant, functional, and personalized environments.
          </p>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 font-body">
            From modern apartments to luxury villas, every project is crafted 
            with detail, innovation, and timeless design appeal.
          </p>

          {/* BUTTON */}
          <Link to="/portfolio">
            <button className="border border-black text-black px-6 py-3 text-xs tracking-widest uppercase 
            transition duration-300 hover:bg-black hover:text-white">
              View Portfolio
            </button>
          </Link>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#FEFEFD] via-[#FBE6E5] to-[#f8dede]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,230,229,0.35),transparent_60%)]"></div>

        <img
          src={img}
          alt="interior"
          className="relative w-full h-full object-cover opacity-95 hover:scale-105 transition duration-700"
        />

        {/* STATS */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-6 md:gap-8 
        bg-[#FEFEFD]/90 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-lg">

          <div className="text-center">
            <h3 className="text-lg md:text-xl font-heading text-black">12+</h3>
            <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-black/70">
              Years
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg md:text-xl font-heading text-black">340+</h3>
            <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-black/70">
              Projects
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg md:text-xl font-heading text-black">98%</h3>
            <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-black/70">
              Satisfaction
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}