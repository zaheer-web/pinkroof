import { Link } from "react-router-dom";
import img from "../img/za-1.jpeg"


export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 pt-20 
    bg-gradient-to-br from-white via-pink-100 to-pink-300">

      {/* LEFT TEXT */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 relative">

        {/* SOFT PINK LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,182,193,0.15),transparent_60%)]"></div>

        <div className="relative z-10">

          {/* TOP TAG */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[1px] bg-black"></div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-black">
              Pink Roof Interiors
            </span>
          </div>

          {/* HEADING */}
          <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-tight text-black mb-6">
            Creative Spaces <br />
            <span className="italic">Designed for</span> <br />
            Modern Living
          </h1>

          {/* UPDATED DESCRIPTION */}
          <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mb-10 text-black font-medium">
            Pink Roof Interior is a creative and client-focused interior design firm dedicated 
            to transforming spaces into elegant, functional, and personalized environments. 
            Specializing in residential projects, we bring style and comfort together to craft 
            homes that truly reflect our clients’ lifestyles and aspirations.
          </p>

          {/* EXTRA LINE (SECOND PART SPLIT FOR READABILITY) */}
          <p className="text-sm md:text-base text-black leading-relaxed max-w-xl mb-10">
            From modern apartments to luxurious villas, every project is thoughtfully curated 
            with attention to detail, innovative solutions, and timeless design appeal.
          </p>

          {/* BUTTONS */}
          
          <div className="flex gap-4 flex-wrap">
            <Link to="/portfolio">
            <button className="cursor-pointer bg-black text-white px-6 py-3 text-xs tracking-widest uppercase hover:opacity-90 transition">
              View Portfolio
            </button>
            </Link>

            
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-100 to-pink-200"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,192,203,0.25),transparent_60%)]"></div>

        <img
          src={img}
          alt="interior"
          className="relative w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-105 transition duration-700"
        />

        {/* STATS */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-6 md:gap-8 
        bg-white/90 backdrop-blur-lg px-4 md:px-6 py-3 md:py-4 rounded-md shadow-lg">

          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-serif text-black">12+</h3>
            <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-black">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-serif text-black">340+</h3>
            <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-black">
              Projects
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-serif text-black">98%</h3>
            <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-black">
              Satisfaction
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}