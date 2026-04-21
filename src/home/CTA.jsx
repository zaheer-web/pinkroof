import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className="relative text-center px-6 md:px-16 py-28 overflow-hidden
    bg-gradient-to-br from-white via-pink-100 to-pink-300">

      {/* SOFT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,182,193,0.25),transparent_70%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto">

        {/* LABEL */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-[1px] bg-black"></div>
          <span className="text-[10px] tracking-[0.35em] uppercase text-black">
            Start Your Journey
          </span>
        </div>

        {/* TITLE */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-6">
          Let’s Design <br />
          <span className="italic">Your Dream Space</span>
        </h2>

        {/* DESC */}
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-10">
          Every great space begins with a conversation. Share your vision with us
          and let's create something extraordinary together.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* PRIMARY */}
          <Link to="/contact">
          <button className="cursor-pointer bg-black text-white px-8 py-3 text-xs tracking-[0.15em] uppercase hover:opacity-90 transition">
            Book a Consultation
          </button>
          </Link>
          
          {/* OUTLINE */}
          <Link to="/services">
          <button className="cursor-pointer border border-black text-black px-8 py-3 text-xs tracking-[0.15em] uppercase hover:bg-black hover:text-white transition">
            Explore Our Work
          </button>
          </Link>

        </div>
      </div>
    </section>
  );
}