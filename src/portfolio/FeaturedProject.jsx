export default function FeaturedProject() {
  return (
    <section className="px-16 py-24 bg-[#F7F4EE]">

      {/* 🔝 TOP HEADER */}
      <div className="mb-16">

        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[#C8A96E]" />
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#C8A96E]">
            Featured Project
          </span>
        </div>

        <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-serif font-light text-[#1C1C1A] leading-tight">
          The Meridian{" "}
          <em className="text-[#C8A96E] not-italic font-normal italic">
            Penthouse
          </em>
        </h2>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE (IMAGES) */}
        <div className="relative h-[520px]">

          <div className="w-full h-[80%] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-[-2rem] w-[50%] h-[45%] border-4 border-[#F7F4EE] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-6 left-6 bg-[#C8A96E] text-white px-4 py-2 text-xs tracking-[0.15em] uppercase">
            Featured 2024
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>

          <p className="text-[#6B6056] leading-[1.9] mb-6">
            A 4,200 sq ft penthouse in South Mumbai, designed for a young family
            who wanted a home that felt both luxurious and genuinely lived-in.
            The brief was to honour the spectacular sea views while creating
            distinct zones for work, family life, and entertaining.
          </p>

          <p className="text-[#6B6056] leading-[1.9] mb-6">
            We anchored the design in a palette of warm creams, aged brass, and
            dark walnut — materials that become more beautiful with time.
          </p>

          <div className="border-t border-[#D6C9B8] my-8"></div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-[#9B8F82] mb-1">
                Location
              </div>
              <div>Worli, Mumbai</div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-[#9B8F82] mb-1">
                Area
              </div>
              <div>4,200 sq ft</div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-[#9B8F82] mb-1">
                Duration
              </div>
              <div>14 months</div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-[#9B8F82] mb-1">
                Category
              </div>
              <div>Residential</div>
            </div>
          </div>

          <button className="mt-10 px-10 py-4 bg-black text-white text-xs tracking-[0.15em] uppercase hover:bg-[#C8A96E] transition">
            Start Your Project
          </button>

        </div>

      </div>
    </section>
  );
}