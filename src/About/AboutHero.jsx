import React from "react";
import { useNavigate } from "react-router-dom";
export default function AboutHero() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#fcf9f8] overflow-hidden py-20 px-6 md:px-16 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative group">
          
          {/* Border Effect */}
          <div className="absolute -inset-4 border border-[#db3884]/20 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-700"></div>

          {/* Main Image */}
          <div className="overflow-hidden  ">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Interior"
              className="w-full h-[550px] object-cover transition-all duration-1000 group-hover:scale-105"
            />
          </div>

         
        </div>

        {/* RIGHT CONTENT */}
        <div>
          
          {/* Subtitle */}
          <p className="uppercase tracking-[4px] text-[#db3884] text-sm font-semibold mb-5">
            Luxury Interior
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#db3884] mb-8">
            Designing Spaces That Feel Beautiful
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-9 mb-12">
            At Pink Roof Interior, we curate bespoke living experiences.
            Our approach combines the precision of modern architecture
            with luxurious aesthetics and timeless elegance.
          </p>

          {/* Features */}
          <div className="space-y-8 mb-12">
            
            {[
              "Premium Interior Concepts",
              "Modern Luxury Aesthetics",
              "Elegant Space Planning",
            ].map((item, index) => (
              <div key={index} className="group">
                
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#db3884] transition">
                    {item}
                  </h3>

                  
                </div>

                <div className="h-[1px] bg-gray-200 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-0 bg-[#db3884] group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">
            
           <button
  onClick={() => navigate("/#projects")}
  className="
    bg-[#db3884]
    hover:bg-[#c72f76]
    text-white
    px-10
    py-4
    uppercase
    tracking-[2px]
    text-sm
    font-semibold
    transition-all
    duration-300
    hover:shadow-xl
  "
>
  Explore Design
</button>

           <button
  onClick={() => navigate("/contact")}
  className="
    border
    border-[#db3884]
    text-[#db3884]
    hover:bg-[#db3884]
    hover:text-white
    px-10
    py-4
    uppercase
    tracking-[2px]
    text-sm
    font-semibold
    transition-all
    duration-300
  "
>
  Contact Us
</button>

          </div>
        </div>
      </div>
    </section>
  );
}