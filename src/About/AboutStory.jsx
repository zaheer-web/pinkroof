import React from "react";
import img from '../img/pa-1.jpeg'
const AboutStory = () => {
  return (
    <section className="relative overflow-hidden mt-10 bg-[#fcf9f8] py-20 px-6 md:px-16 lg:px-24 font-['Bodoni_Moda',_serif]">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-100px] left-[-80px] w-96 h-96 rounded-full bg-[#db3884]/5 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-60px] w-80 h-80 rounded-full bg-[#db3884]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#db3884]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#db3884] font-semibold">
              Who We Are
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-light text-[#2a1a1a] leading-[1.1] mb-8">
            Born from a <br />
            <span className="italic text-[#db3884]">Passion</span> for <br />
            Beautiful Spaces
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-[#5a4848] text-lg leading-relaxed max-w-lg">
              I am Rukhsar Fatima Rizvi, a certified Interior Designer with over <span className="font-semibold text-[#db3884]">7 years</span> of experience in designing innovative, functional spaces focused on sustainability and creative aesthetic design.
            </p>
            <p className="text-[#5a4848] text-base leading-relaxed max-w-lg">
              My work history includes collaborating with design teams, contractors, and vendors to resolve issues, and I take pride in my background in reviewing contractor submittals for finishing materials.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 mb-12 max-w-md">
            <div className="bg-[#db3884]/5 border border-[#db3884]/20 p-6 transition-colors hover:bg-[#db3884]/10">
              <div className="flex items-baseline">
                <span className="text-4xl font-light text-[#db3884]">7</span>
                <span className="text-xl text-[#db3884] ml-1">+</span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-[#9a7a7a] mt-2">
                Years of Experience
              </p>
            </div>
            <div className="bg-[#db3884]/5 border border-[#db3884]/20 p-6 transition-colors hover:bg-[#db3884]/10">
              <div className="flex items-baseline">
                <span className="text-4xl font-light text-[#db3884]">120</span>
                <span className="text-xl text-[#db3884] ml-1">+</span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-[#9a7a7a] mt-2">
                Curated Projects
              </p>
            </div>
          </div>

          {/* Technical Expertise Tags */}
          <div className="mb-12">
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#9a7a7a] mb-4 font-semibold">
              Technical Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {["AutoCAD", "SketchUp", "Vray", "Lumion", "D5 Render"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#db3884]/10 text-[#db3884] text-xs uppercase tracking-wider rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-3 bg-[#db3884] text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase hover:bg-[#b22d6b] transition-all transform hover:-translate-y-1 w-fit shadow-lg shadow-[#db3884]/20">
            View Full Portfolio <span>→</span>
          </button>
        </div>

        {/* RIGHT VISUALS */}
        <div className="relative h-[600px] md:h-[700px]">
          {/* Main Large Image */}
          <div className="absolute top-0 right-0 w-4/5 h-[85%] overflow-hidden shadow-2xl group mr-10 md:mr-0">
            <img
              src={img}
              alt="Luxury Living Room"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a1a]/40 to-transparent" />
            
            {/* Watermark/Experience Badge */}
            

            {/* Top Badge */}
            <div className="absolute top-0 left-0 bg-[#db3884] text-white px-6 py-4 shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-widest text-white/70">Certified Professional</p>
                <p className="text-xs font-semibold">Rukhsar Fatima Rizvi</p>
              </div>
            </div>
          </div>

          {/* Small Floating Image */}
          

          {/* Experience Ribbon Detail */}
          <div className="absolute bottom-20 right-[-10px] bg-white p-4 shadow-lg border-l-4 border-[#db3884] z-30">
            <p className="text-[10px] uppercase tracking-widest text-[#9a7a7a]">Est. 2017</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;