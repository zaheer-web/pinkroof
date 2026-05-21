import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Intro = () => {
  const services = [
    {
      id: "01",
      title: "Residential Transformation",
      desc: "Crafting deeply personal habitats that balance function with aesthetic silence. We reimagine private living through bespoke spatial planning and material poetry.",
      image: "{{DATA:IMAGE:IMAGE_15}}",
      tags: ["Master Planning", "Custom Millwork"]
    },
    {
      id: "02",
      title: "Private Office Curation",
      desc: "Elevating the professional environment into a sanctuary of focus. We design executive suites that reflect individual leadership through ergonomic sophistication and acoustic design.",
      image: "{{DATA:IMAGE:IMAGE_10}}",
      tags: ["Ergonomic Sophistication", "Acoustic Design"]
    },
    {
      id: "03",
      title: "Hospitality & Boutique",
      desc: "Creating destination experiences that tell a brand's story. From high-fashion retail to boutique lounges, we design for impact and operational excellence.",
      image: "{{DATA:IMAGE:IMAGE_6}}",
      tags: ["Brand Environments", "Lighting Strategy"]
    }
  ];

  return (
    <section className="bg-[#fcf9f8] text-[#2a1a1a] font-['Bodoni_Moda',_serif] overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#db3884]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#db3884] font-semibold">Methodology & Craft</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-light leading-tight">
            Architecture for the <br />
            <span className="italic text-[#db3884]">Private Soul.</span>
          </h2>
          <p className="max-w-xl text-[#5a4848] text-lg leading-relaxed font-sans border-l border-[#db3884]/20 pl-8 mt-8">
            We specialize in highly personalized spatial narratives. From silent residential sanctuaries to high-performance retail ecosystems, our approach is defined by architectural precision and a signature pink atmospheric tint.
          </p>
        </div>

        {/* HORIZONTAL SCROLL / CARDS SECTION */}
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-12 overflow-x-auto no-scrollbar pb-12">
            {services.map((service, index) => (
              <div key={index} className="min-w-full md:min-w-[600px] group">
                <div className="relative aspect-[16/10] overflow-hidden mb-10 shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#db3884]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex gap-8 items-start">
                  <span className="text-4xl font-light text-[#db3884]/20">{service.id}</span>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-light underline decoration-[#db3884]/20 underline-offset-8 group-hover:decoration-[#db3884] transition-all duration-500">
                      {service.title}
                    </h3>
                    <p className="text-[#5a4848] text-base leading-relaxed max-w-md font-sans">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                      {service.tags.map(tag => (
                        <div key={tag} className="flex items-center gap-2">
                          <div className="w-6 h-px bg-[#db3884]/30" />
                          <span className="text-[9px] uppercase tracking-widest text-[#9a7a7a]">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SCROLL INDICATOR */}
          <div className="mt-12 flex items-center justify-between">
             <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-[#2a1a1a]/10 flex items-center justify-center hover:bg-[#db3884] hover:text-white transition-all">
                  ←
                </button>
                <button className="w-12 h-12 rounded-full border border-[#2a1a1a]/10 flex items-center justify-center hover:bg-[#db3884] hover:text-white transition-all">
                  →
                </button>
             </div>
             <div className="hidden md:flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#9a7a7a]">Swipe to Explore</span>
                <div className="w-32 h-px bg-gradient-to-r from-[#db3884]/20 to-[#db3884]" />
             </div>
          </div>
        </div>
      </div>

      {/* DETAILED SERVICE BREAKDOWN SECTION */}
      <div className="bg-white/50 py-32 border-t border-[#db3884]/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#db3884] font-semibold">The Sensory Core</span>
                </div>
                <h2 className="text-7xl md:text-8xl font-light leading-tight">
                  Lighting & <br />
                  Material <br />
                  <span className="italic text-[#db3884]">Sourcing.</span>
                </h2>
                <p className="max-w-md text-[#5a4848] text-lg leading-relaxed font-sans">
                  We travel the globe to source the rare and the resonant. Our library of materials—from honed pink marble to hand-woven linens—forms the tactile foundation of every Pink Roof project.
                </p>
                <div className="flex gap-4">
                   {["Honed Pink Marble", "Brushed Champagne", "Fluted Glass"].map(mat => (
                     <div key={mat} className="px-6 py-3 bg-white border border-[#db3884]/10 text-[10px] uppercase tracking-widest text-[#9a7a7a]">
                       {mat}
                     </div>
                   ))}
                </div>
                <button className="group flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase font-bold text-[#db3884] pt-8">
                   View Material Journal <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
             </div>

             <div className="relative">
                <div className="aspect-[4/5] bg-[#db3884]/5 absolute -top-12 -left-12 w-full h-full -z-10" />
                <div className="relative aspect-[4/5] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                   <img 
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1400&auto=format&fit=crop" 
                    alt="Material Palette" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-12 shadow-2xl max-w-xs border border-[#db3884]/10 hidden xl:block">
                   <p className="italic text-2xl font-light leading-snug text-[#2a1a1a] mb-6">
                     "Materials are the <span className="text-[#db3884]">vocabulary</span> of a space."
                   </p>
                   <span className="text-[10px] tracking-widest uppercase text-[#9a7a7a]">Rukhsar Fatima Rizvi</span>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="py-40 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#db3884]/5 blur-[120px] rounded-full pointer-events-none" />
        <h2 className="text-6xl md:text-8xl font-light mb-12 relative z-10">Ready to redefine <br /><span className="italic">your space?</span></h2>
        <p className="max-w-2xl mx-auto text-[#5a4848] text-lg font-sans mb-16 relative z-10">
          Our studio takes on a limited number of projects each year to ensure uncompromising attention to detail. Let's discuss your vision.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
          <button className="px-12 py-6 bg-[#db3884] text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:shadow-2xl hover:shadow-[#db3884]/30 transition-all">
            Inquire Now
          </button>
          <button className="px-12 py-6 border border-[#db3884] text-[#db3884] text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-[#db3884]/5 transition-all">
            Download Studio Kit
          </button>
        </div>
      </div>

    </section>
  );
};

export default Intro;
