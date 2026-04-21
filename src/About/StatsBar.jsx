import React from "react";

export default function StatsBar() {
  return (
    <section className="bg-[#D6C9B8] px-6 md:px-16 py-12">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-[#C8A96E]/20">
        
        {/* CARD 1 */}
        <div className="bg-[#FDFBF7] py-12 text-center">
          <h2 className="font-[Cormorant_Garamond] text-5xl font-light text-[#1C1C1A]">
            12<span className="text-[#C8A96E]">+</span>
          </h2>
          <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-[#9B8F82]">
            Years Experience
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#FDFBF7] py-12 text-center">
          <h2 className="font-[Cormorant_Garamond] text-5xl font-light text-[#1C1C1A]">
            340<span className="text-[#C8A96E]">+</span>
          </h2>
          <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-[#9B8F82]">
            Projects Completed
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#FDFBF7] py-12 text-center">
          <h2 className="font-[Cormorant_Garamond] text-5xl font-light text-[#1C1C1A]">
            98<span className="text-[#C8A96E]">%</span>
          </h2>
          <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-[#9B8F82]">
            Client Satisfaction
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#FDFBF7] py-12 text-center">
          <h2 className="font-[Cormorant_Garamond] text-5xl font-light text-[#1C1C1A]">
            24<span className="text-[#C8A96E]">+</span>
          </h2>
          <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-[#9B8F82]">
            Design Awards
          </p>
        </div>

      </div>

    </section>
  );
}