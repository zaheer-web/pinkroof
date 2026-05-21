import React from "react";
import {
  Sofa,
  Building2,
  PenTool,
  LampFloor,
  ArrowRight,
  Home,
} from "lucide-react";

export default function TeamSection() {
  const services = [
    {
      icon: <Sofa size={34} />,
      title: "Luxury Living Rooms",
      desc: "Elegant and timeless living spaces crafted with modern aesthetics and premium comfort.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    },
    {
      icon: <Building2 size={34} />,
      title: "Modern Office Design",
      desc: "Creative office interiors designed to improve productivity and create premium workspaces.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",
    },
    {
      icon: <Home size={34} />,
      title: "Luxury Bedroom Design",
      desc: "Sophisticated bedroom interiors that combine comfort, warmth and luxury.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    },
    {
      icon: <LampFloor size={34} />,
      title: "Lighting & Decor",
      desc: "Premium lighting concepts and decorative styling to elevate every corner beautifully.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
    },
    {
      icon: <PenTool size={34} />,
      title: "Custom Furniture",
      desc: "Tailor-made furniture solutions crafted to perfectly match your interior vision.",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
    },
    {
      icon: <Sofa size={34} />,
      title: "Complete Home Interior",
      desc: "End-to-end interior design services for apartments, villas and luxury homes.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24 md:py-28
        px-5 sm:px-6 md:px-12 lg:px-20
        bg-[#1E1E1E]
      "
    >
      {/* BLUR EFFECTS */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[320px]
          h-[320px]
          bg-[#C8A97E]/20
          blur-[130px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[320px]
          h-[320px]
          bg-[#C8A97E]/10
          blur-[120px]
          rounded-full
        "
      />

      {/* HEADER */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-10
          mb-20
        "
      >
        {/* LEFT */}
        <div className="max-w-3xl">
          {/* SMALL LABEL */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#C8A97E]" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-[#C8A97E]
              "
            >
              INTERIOR SERVICES
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              text-[2.7rem]
              sm:text-[3.5rem]
              md:text-[5rem]
              leading-[1]
              font-semibold
              text-white
            "
          >
            Crafting Luxury
            <span className="italic text-[#C8A97E]">
              {" "}Interior Spaces
            </span>
          </h2>
        </div>

        {/* RIGHT TEXT */}
        <p
          className="
            max-w-xl
            text-gray-400
            leading-relaxed
            text-sm
            md:text-base
          "
        >
          We create elegant and functional interiors that reflect
          luxury, comfort and timeless sophistication for modern living.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              bg-white/[0.03]
              border
              border-white/10
              hover:border-[#C8A97E]/50
              transition-all
              duration-500
              hover:-translate-y-3
            "
          >
            {/* IMAGE */}
            <div className="relative h-[420px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/40
                  to-transparent
                "
              />

              {/* TOP NUMBER */}
              <div
                className="
                  absolute
                  top-6
                  right-6
                  text-[4rem]
                  font-semibold
                  text-white/10
                "
              >
                0{i + 1}
              </div>

              {/* ICON */}
              <div
                className="
                  absolute
                  top-6
                  left-6
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#C8A97E]/10
                  border
                  border-[#C8A97E]/20
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-[#C8A97E]
                "
              >
                {service.icon}
              </div>

              {/* CONTENT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-7
                "
              >
                <h3
                  className="
                    text-white
                    text-2xl
                    font-semibold
                    mb-4
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-gray-300
                    text-sm
                    leading-relaxed
                  "
                >
                  {service.desc}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-full
                    bg-[#C8A97E]
                    text-black
                    text-sm
                    font-medium
                    hover:bg-white
                    transition-all
                    duration-300
                  "
                >
                  Explore Design
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* BOTTOM LINE */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-[4px]
                w-0
                bg-[#C8A97E]
                group-hover:w-full
                transition-all
                duration-500
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}