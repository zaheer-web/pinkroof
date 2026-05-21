export default function StudiosSection() {
  return (
    <section className="bg-[#1C1C1A] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-20">

      {/* HEADER */}
      <div className="text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-[#C8A96E]" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#C8A96E]">
            Our Studios
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light font-[Cormorant_Garamond]">
          Visit{" "}
          <em className="text-[#C8A96E] italic not-italic font-normal">
            Us
          </em>
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 border-t border-[#C8A96E]/20">

        {[
          {
            city: "Mumbai",
            type: "Principal Studio",
            addr: "12A, Carter Road\nBandra West, Mumbai 400 050",
            time: "Mon – Sat: 9:30 AM – 6:30 PM",
          },
          {
            city: "Delhi",
            type: "Design Studio",
            addr: "B-47, Hauz Khas Village\nNew Delhi 110 016",
            time: "Mon – Fri: 10:00 AM – 6:00 PM",
          },
          {
            city: "Bangalore",
            type: "Project Office",
            addr: "No. 22, Indiranagar\n100 Feet Road, Bangalore 560 038",
            time: "By appointment only",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`group relative px-6 sm:px-10 py-10 md:py-12 border-b md:border-b-0 border-[#C8A96E]/10 
            ${i !== 2 ? "md:border-r border-[#C8A96E]/10" : ""} 
            overflow-hidden cursor-pointer`}
          >

            {/* 🔥 HOVER BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96E]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* CITY */}
              <h3 className="text-xl sm:text-2xl font-[Cormorant_Garamond] font-light mb-2 group-hover:text-[#E8D5A8] transition">
                {item.city}
              </h3>

              {/* TYPE */}
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96E] mb-6">
                {item.type}
              </div>

              {/* ADDRESS */}
              <p className="text-[#9B8F82] leading-relaxed whitespace-pre-line mb-6 text-sm sm:text-base group-hover:text-[#D6C9B8] transition">
                {item.addr}
              </p>

              {/* TIME */}
              <p className="text-[#9B8F82] text-sm sm:text-base group-hover:text-[#D6C9B8] transition">
                {item.time}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}