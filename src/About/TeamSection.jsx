import React from "react";

export default function TeamSection() {
  const team = [
    {
      name: "Meera Kapoor",
      role: "Founder & Principal Designer",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
    {
      name: "Arjun Sethi",
      role: "Senior Interior Designer",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      name: "Priya Nair",
      role: "Lead Spatial Designer",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    },
    {
      name: "Rohan Desai",
      role: "3D Visualisation Lead",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
    },
  ];

  return (
    <section className="bg-[#FDFBF7] px-6 md:px-16 py-20">

      {/* HEADER */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-[#C8A96E] uppercase tracking-[0.25em] text-[11px] mb-4">
          <span className="w-8 h-[1px] bg-[#C8A96E]"></span>
          The People
        </div>

        <h2 className="font-[Cormorant_Garamond] text-3xl md:text-5xl font-light text-[#1C1C1A]">
          Meet the <em className="text-[#C8A96E] italic">Team</em>
        </h2>
      </div>

      {/* TEAM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {team.map((member, i) => (
          <div key={i} className="relative group overflow-hidden cursor-pointer">

            {/* IMAGE */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 transition-all duration-500">

              <h3 className="text-white font-[Cormorant_Garamond] text-lg">
                {member.name}
              </h3>

              <p className="text-[#C8A96E] text-[10px] tracking-[0.15em] uppercase mt-1">
                {member.role}
              </p>

              {/* HIDDEN TEXT (hover pe dikhega) */}
              <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                With years of experience in luxury interiors, {member.name.split(" ")[0]} brings creativity and precision to every project.
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}