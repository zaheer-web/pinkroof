// components/portfolio/FeaturedProject.jsx

import img from "../img/ra-1.png";
import img1 from "../img/ra-2.png";
import img2 from "../img/ra-3.png";

export default function FeaturedProject() {
  return (
    <section className="px-6 md:px-16 py-24 bg-[#fff7fb] relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#db3884]/10 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#d6559d]/10 blur-[140px] rounded-full"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#db3884_1px,transparent_1px),linear-gradient(to_bottom,#db3884_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* TOP HEADER */}
      <div className="relative z-10 mb-16 max-w-4xl">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-[1px] bg-[#db3884]" />

          <span className="text-[11px] tracking-[0.3em] uppercase text-[#db3884]">
            Featured Commercial Project
          </span>
        </div>

        <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-serif font-light text-[#2b1120] leading-tight">
          Hotel Ranbir{" "}

          <span className="text-[#db3884] italic">
            Restaurant & Banquet
          </span>
        </h2>
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* TOP SMALL IMAGES */}
          <div className="grid grid-cols-2 gap-5 mb-5">

            <div className="overflow-hidden shadow-2xl border border-[#db3884]/10 h-[220px] group">
              <img
                src={img}
                alt="Hotel Ranbir"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[1500ms]"
              />
            </div>

            <div className="overflow-hidden shadow-2xl border border-[#db3884]/10 h-[220px] group">
              <img
                src={img1}
                alt="Hotel Ranbir"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-[1500ms]"
              />
            </div>
          </div>

          {/* LARGE IMAGE */}
          <div className="overflow-hidden shadow-2xl border border-[#db3884]/10 h-[420px] group relative">

            <img
              src={img2}
              alt="Hotel Ranbir"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-[1500ms]"
            />

            {/* TAG */}
            <div className="absolute top-6 left-6 bg-[#db3884] text-white px-5 py-2 text-[11px] tracking-[0.2em] uppercase shadow-xl">
              Commercial Project
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* PROJECT DETAILS */}
          <div className="grid md:grid-cols-2 gap-y-8 gap-x-8 mb-12">

            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#db3884] mb-2">
                Client
              </div>

              <div className="text-[#2b1120] text-lg">
                Mr. Shailendra Singh
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#db3884] mb-2">
                Profession
              </div>

              <div className="text-[#2b1120] text-lg">
                Businessman
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#db3884] mb-2">
                Location
              </div>

              <div className="text-[#2b1120] text-lg">
                Hotel Ranbir, Viraj Khand, Gomti Nagar, Lucknow
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#db3884] mb-2">
                Project Type
              </div>

              <div className="text-[#2b1120] text-lg">
                Restaurant & Banquet Design
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#db3884] mb-2">
                Area
              </div>

              <div className="text-[#2b1120] text-lg">
                Covered Area: 6600 sqft
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#db3884] mb-2">
                Theme
              </div>

              <div className="text-[#2b1120] text-lg">
                Modern Design
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#db3884] mb-2">
                Category
              </div>

              <div className="text-[#2b1120] text-lg">
                Flagship Commercial Project
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[#db3884] mb-2">
                Duration
              </div>

              <div className="text-[#2b1120] text-lg">
                5 Months
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <p className="text-[#6d4d5d] leading-[2] text-base md:text-lg mb-6">
            Our firm proudly delivered the interior design for the signature
            restaurant of Hotel Ranbir, crafting a space that embodies refined
            luxury and an exceptional guest experience.
          </p>

          <p className="text-[#6d4d5d] leading-[2] text-base md:text-lg mb-6">
            The project featured a rich palette of high-end materials including
            hand-selected onyx stone, natural oak wood, brushed brass accents,
            and custom upholstery in premium textiles.
          </p>

          <p className="text-[#6d4d5d] leading-[2] text-base md:text-lg mb-10">
            Every detail — from bespoke lighting fixtures to artisanal wall
            finishes — was thoughtfully designed to reflect the hotel’s
            distinguished identity while creating a warm and luxurious dining
            atmosphere.
          </p>

          {/* BUTTON */}
          <a
  href="https://wa.me/918563980030?text=Hello%20Pinkroof%20Interior%2C%20I%20want%20to%20start%20my%20project."
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="
      px-10
      py-4
      bg-[#db3884]
      text-white
      text-xs
      tracking-[0.25em]
      uppercase
      hover:bg-[#d6559d]
      transition
      duration-500
      shadow-[0_0_35px_rgba(219,56,132,0.25)]
    "
  >
    Start Your Project
  </button>
</a>
        </div>
      </div>
    </section>
  );
}