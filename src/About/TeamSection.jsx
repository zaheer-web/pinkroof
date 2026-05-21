import React from "react";
import { ArrowUpRight, Sofa, Building2, Home, Lamp, PenTool, LayoutGrid } from "lucide-react";
import img1 from '../img/za-14.png'
import img2 from '../img/za-15.jpg'
import img3 from '../img/za-16.png'
import img4 from '../img/za-18.png'
import img5 from '../img/za-19.png'
import img6 from '../img/za-17.png'



const TeamSection = () => {
  const services = [
    {
      id: "01",
      title: "Luxury Living Rooms",
      icon: <Sofa size={24} />,
      image: img1, // Luxury Living Room
      link: "#"
    },
    {
      id: "02",
      title: "Modern Office Design",
      icon: <Building2 size={24} />,
      image: img2,
      link: "#"
    },
    {
      id: "03",
      title: "Luxury Bedroom Design",
      icon: <Home size={24} />,
      image: img3, // Luxury Bedroom
      link: "#"
    },
    {
      id: "04",
      title: "Lighting & Decor",
      icon: <Lamp size={24} />,
      image: img4,
      link: "#"
    },
    {
      id: "05",
      title: "Custom Furniture",
      icon: <PenTool size={24} />,
      image: img5,
      link: "#"
    }
  ];

  return (
    <section className="bg-[#121212] text-white py-24 px-6 md:px-16 lg:px-24 font-['Bodoni_Moda',_serif]">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#db3884]" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#db3884] font-semibold">
              Curation & Craft
            </span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-light leading-[0.95] mb-8">
            A Symphony of <br />
            <span className="italic text-[#c8a97e]">Exceptional</span> Spaces
          </h2>
          
          <p className="max-w-xl text-white/50 text-base leading-relaxed font-sans">
            We orchestrate high-end residential and commercial interiors where every line, texture, and hue is meticulously curated to reflect an ethos of ultra-luxury minimalism.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-24">
          
          {/* Main Hero Service (Service 1) */}
          <div className="lg:col-span-7 relative group overflow-hidden h-[600px]">
            <img 
              src={services[0].image} 
              alt={services[0].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div className="absolute top-8 left-8 text-white/20 text-5xl font-light">
              {services[0].id}
            </div>
            
            <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
              <h3 className="text-4xl md:text-5xl font-light tracking-tight">{services[0].title}</h3>
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#db3884] group-hover:border-[#db3884] transition-all duration-300">
                <ArrowUpRight size={20} />
              </div>
            </div>
            
            {/* Animated Pink Border Detail */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-[#db3884]/30 transition-all duration-700 m-4" />
          </div>

          {/* Service 2 */}
          <div className="lg:col-span-5 relative group overflow-hidden h-[600px]">
             <img 
              src={services[1].image} 
              alt={services[1].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
            
            <div className="absolute top-8 left-8 text-white/20 text-5xl font-light">
              {services[1].id}
            </div>
            
            <div className="absolute bottom-12 left-12 right-12">
              <h3 className="text-3xl font-light mb-4">{services[1].title}</h3>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

          {/* Secondary Row Grid */}
          <div className="lg:col-span-4 relative group overflow-hidden h-[450px]">
             <img src={services[2].image} alt={services[2].title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-[#db3884]/10 group-hover:bg-transparent transition-all" />
             <div className="absolute bottom-8 left-8">
                <span className="text-xs text-[#db3884] mb-2 block">{services[2].id}</span>
                <h3 className="text-2xl font-light">{services[2].title}</h3>
             </div>
          </div>

          <div className="lg:col-span-4 relative group overflow-hidden h-[450px]">
             <img src={services[3].image} alt={services[3].title} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all" />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-px h-12 bg-white/30 mb-6 group-hover:bg-[#db3884] transition-colors" />
                <span className="text-[10px] uppercase tracking-widest text-white/60 mb-2">{services[3].id}</span>
                <h3 className="text-3xl font-light">{services[3].title}</h3>
             </div>
          </div>

          <div className="lg:col-span-4 relative group overflow-hidden h-[450px]">
             <img src={services[4].image} alt={services[4].title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="w-12 h-px bg-white/20" />
                <h3 className="text-2xl font-light">{services[4].title}</h3>
             </div>
          </div>
        </div>

        {/* FEATURED CTA SECTION */}
        <div className="relative h-[600px] overflow-hidden flex items-center justify-center">
          <img 
            src={img6} 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" 
            alt="Full Interior"
          />
          <div className="relative z-10 text-center px-6">
            <h2 className="text-5xl md:text-7xl font-light mb-8">Complete Home Interior</h2>
            <button className="text-[10px] uppercase tracking-[0.4em] border-b border-[#db3884] pb-2 hover:text-[#db3884] transition-colors">
              Explore the Atelier
            </button>
          </div>
        </div>

        {/* FINAL CONTACT PROMPT */}
        <div className="mt-32 text-center">
          <div className="w-px h-24 bg-gradient-to-b from-[#db3884] to-transparent mx-auto mb-12" />
          <h3 className="text-4xl md:text-5xl font-light mb-12 italic">Ready to define your silhouette?</h3>
          <button className="group flex items-center gap-4 mx-auto text-[10px] uppercase tracking-[0.3em] text-[#db3884]">
            Book a Private Consultation <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;