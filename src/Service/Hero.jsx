// components/services/Hero.jsx

import { useEffect, useState } from "react";

import heroImg from "../img/zo-6.png";
import heroImg1 from "../img/zo-4.png";
import heroImg2 from "../img/zo-5.png";
import heroImg3 from "../img/zo-7.png";

export default function Hero() {
  const images = [heroImg, heroImg1, heroImg2, heroImg3];

  const [current, setCurrent] = useState(0);

  // Auto Slider
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative overflow-hidden px-6 md:px-16 pt-32 pb-24 min-h-screen flex items-center">

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Pinkroof Interior"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* DARK OVERLAY FOR TEXT VISIBILITY */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* LIGHT PINK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#db3884]/10 via-[#d6559d]/5 to-[#ef91bc]/5"></div>
      </div>

      {/* SOFT GLOW EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-[#db3884]/15 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-[#d6559d]/10 rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite]"></div>

        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-[#ef91bc]/10 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
      </div>

      {/* GRID EFFECT */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl">

        <p className="text-[#ef91bc] tracking-[0.3em] uppercase text-xs md:text-sm flex items-center gap-3 before:w-8 before:h-[1px] before:bg-[#ef91bc] before:content-['']">
          Pinkroof Interior Services
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light mt-6 leading-tight font-serif text-white drop-shadow-2xl">
          Crafting Elegant{" "}
          <span className="italic text-[#ef91bc]">
            Spaces
          </span>{" "}
          With Modern Luxury
        </h1>

        <p className="text-[#f7e8ef] mt-8 leading-relaxed max-w-2xl text-base md:text-lg drop-shadow-lg">
          Pinkroof Interior transforms homes, offices, cafes, and luxury
          spaces into visually stunning experiences. From concept planning
          and custom furniture to premium interior styling, modular kitchens,
          false ceilings, lighting, and complete turnkey interior solutions.
        </p>

        {/* SERVICES */}
        <div className="mt-10 flex flex-wrap gap-4">
          {[
            "Luxury Interiors",
            "Modular Kitchens",
            "False Ceiling",
            "Office Design",
            "Custom Furniture",
            "Space Planning",
          ].map((item, index) => (
            <div
              key={index}
              className="px-5 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white text-sm tracking-wide hover:bg-[#db3884]/20 transition duration-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* CENTER DOTS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              current === index
                ? "w-10 bg-[#db3884]"
                : "w-2 bg-white/50"
            }`}
          ></div>
        ))}
      </div>

      {/* DECORATIVE LETTER */}
      <div className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 text-[120px] md:text-[240px] font-serif text-white/5 hidden md:block select-none">
        P
      </div>
    </section>
  );
}