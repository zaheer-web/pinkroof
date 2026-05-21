// components/services/ServicesList.jsx

const services = [
  {
    title: "Residential Interior Design",
    desc: "Complete home design services — from a single room refresh to a full home transformation.",
  },
  {
    title: "Commercial & Office Design",
    desc: "We design workplaces that inspire productivity and reflect your brand identity.",
  },
  {
    title: "Hospitality Design",
    desc: "Hotels, restaurants, and resorts designed for experience and comfort.",
  },
  {
    title: "Full-Scale Renovation",
    desc: "Structural and aesthetic renovation projects managed end-to-end.",
  },
  {
    title: "Space Planning & Consultation",
    desc: "Expert guidance on layout, flow, and spatial strategy.",
  },
  {
    title: "3D Visualisation & Renders",
    desc: "Photorealistic renders to visualize your space before execution.",
  },
];

export default function ServicesList() {
  return (
    <section className="bg-[#F7F4EE] px-6 md:px-16 py-20">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <div>
          <p className="text-[#C8A96E] text-[11px] tracking-[0.25em] uppercase flex items-center gap-3 before:w-8 before:h-[1px] before:bg-[#C8A96E] before:content-[''] mb-3">
            All Services
          </p>

          <h2 className="text-3xl md:text-5xl font-light font-serif leading-tight">
            What We <em className="text-[#C8A96E] italic">Do</em>
          </h2>
        </div>
      </div>

      {/* LIST */}
      <div className="flex flex-col gap-[2px] bg-[#D6C9B8] mt-6">
        {services.map((item, i) => (
          <div
            key={i}
            className="group bg-[#FDFBF7] border-l-4 border-transparent hover:border-[#C8A96E]
            grid md:grid-cols-[80px_1fr_auto] gap-6 items-center
            px-6 md:px-10 py-8
            transition-all duration-300 cursor-pointer min-h-[120px]
            hover:bg-[#1C1C1A]"
          >
            {/* NUMBER */}
            <div className="text-[#C8A96E] text-2xl font-serif font-light transition-colors duration-300 group-hover:text-white">
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-light text-[#1C1C1A] mb-2 transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>

              <p className="text-sm md:text-[0.85rem] leading-relaxed text-[#6B6056] transition-colors duration-300 group-hover:text-white">
                {item.desc}
              </p>
            </div>

            {/* ARROW */}
            <div className="text-2xl text-[#D6C9B8] transition-colors duration-300 group-hover:text-[#C8A96E]">
              →
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}