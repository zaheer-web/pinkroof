import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("VISIBLE:", entry.isIntersecting); // 👈 DEBUG
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        threshold: 0,
        rootMargin: "-100px", // 👈 jaldi trigger karega
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative text-center px-6 md:px-16 py-28 overflow-hidden
      bg-gradient-to-br from-[#FEFEFD] via-[#FBE6E5] to-[#f8dede]"
    >
      {/* STYLE */}
      <style>
        {`
          .fade-left {
            opacity: 0;
            transform: translateX(-80px);
          }

          .fade-right {
            opacity: 0;
            transform: translateX(80px);
          }

          .show {
            opacity: 1;
            transform: translateX(0);
            transition: all 0.9s ease;
          }
        `}
      </style>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* LABEL */}
        <div className={`flex items-center justify-center gap-3 mb-6 
        ${show ? "show" : "fade-left"}`}>
          <div className="w-8 h-[1px] bg-black"></div>
          <span className="text-[10px] tracking-[0.35em] uppercase text-black">
            Start Your Journey
          </span>
        </div>

        {/* TITLE */}
        <h2
          className={`font-heading text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-6 
          ${show ? "show" : "fade-right"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          Let’s Design <br />
          <span className="italic text-[#b88b8b]">Your Dream Space</span>
        </h2>

        {/* DESC */}
        <p
          className={`${show ? "show" : "fade-left"} text-black/70 text-sm md:text-base mb-10`}
          style={{ transitionDelay: "0.4s" }}
        >
          Every great space begins with a conversation. Share your vision with us
          and let's create something extraordinary together.
        </p>

        {/* BUTTONS */}
        <div
          className={`${show ? "show" : "fade-right"} flex flex-col sm:flex-row gap-4 justify-center`}
          style={{ transitionDelay: "0.6s" }}
        >
          <Link to="/contact">
            <button className="bg-black text-white px-8 py-3 text-xs tracking-[0.15em] uppercase 
            hover:scale-105 hover:shadow-xl transition">
              Book a Consultation
            </button>
          </Link>

          <Link to="/services">
            <button className="border border-black text-black px-8 py-3 text-xs tracking-[0.15em] uppercase 
            hover:bg-black hover:text-white hover:scale-105 transition">
              Explore Our Work
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}