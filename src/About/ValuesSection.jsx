import React from "react";

const ValuesSection = () => {
  const values = [
    {
      num: "01",
      title: "Intentionality",
      desc: "Every design decision is made with purpose, balancing aesthetics, comfort and functionality in perfect harmony.",
    },
    {
      num: "02",
      title: "Authenticity",
      desc: "We create spaces that reflect your personality and lifestyle instead of simply following trends.",
    },
    {
      num: "03",
      title: "Craftsmanship",
      desc: "From premium materials to expert detailing, we focus on timeless quality and refined execution.",
    },
    {
      num: "04",
      title: "Transparency",
      desc: "Clear communication, thoughtful planning and a seamless process from concept to completion.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#fcf9f8] font-['Bodoni_Moda',_serif]">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#db3884]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#db3884]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#2a1a1a]" />
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#2a1a1a] font-semibold">
                What Guides Us
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-light text-[#2a1a1a] leading-tight">
              Our Core <br />
              <span className="italic text-[#db3884]">Values</span>
            </h2>
          </div>

          <p className="max-w-md text-[#5a4848] text-lg leading-relaxed font-sans">
            Our philosophy is rooted in timeless aesthetics, thoughtful functionality, and creating meaningful spaces that truly elevate modern living.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/40 backdrop-blur-xl border border-white/60 p-10 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#db3884]/10 hover:-translate-y-4 cursor-default overflow-hidden"
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#db3884] transition-all duration-700 group-hover:w-full" />
              
              {/* Number Watermark */}
              <div className="text-7xl font-light text-[#db3884]/10 group-hover:text-[#db3884]/30 transition-colors duration-500 leading-none">
                {item.num}
              </div>

              {/* Card Content */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-[#2a1a1a] mb-5 group-hover:text-[#db3884] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#5a4848] text-sm leading-relaxed font-sans group-hover:text-[#2a1a1a] transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#db3884] opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-0">
                <span className="text-xl">✦</span>
              </div>

              {/* Interactive Bloom Effect */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#db3884]/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
