import React from "react";

export default function StatsBar() {
  const stats = [
    {
      number: "07+",
      label: "Years Experience",
    },
    {
      number: "120+",
      label: "Projects Completed",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
    },
    {
      number: "24+",
      label: "Luxury Designs",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24 md:py-32
        px-6 md:px-14 lg:px-24
        bg-gradient-to-br
        from-[#fff7fb]
        via-[#fff0f7]
        to-[#fffafb]
      "
    >
      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute top-[-140px] left-[-120px] w-[380px] h-[380px] bg-[#db3884]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-140px] right-[-120px] w-[380px] h-[380px] bg-[#d6559d]/20 blur-[120px] rounded-full"></div>

      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-[#ef91bc]/10 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-20">
        
        {/* TOP LABEL */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-14 h-[1px] bg-[#db3884]"></div>

          <span
            className="
              uppercase
              tracking-[0.4em]
              text-[11px]
              font-semibold
              text-[#db3884]
            "
          >
            OUR ACHIEVEMENTS
          </span>

          <div className="w-14 h-[1px] bg-[#db3884]"></div>
        </div>

        {/* HEADING */}
        <h2
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
            text-[#1d1d1d]
          "
        >
          Numbers That
          <span className="italic text-[#db3884]">
            {" "}Define Luxury
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-8
            text-gray-600
            text-lg
            leading-9
            max-w-3xl
            mx-auto
          "
        >
          Crafting elegant interiors with timeless aesthetics,
          luxurious concepts, and beautifully designed living
          experiences for modern lifestyles.
        </p>
      </div>

      {/* STATS GRID */}
      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-8
        "
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              
              border
              border-white/50
              bg-white/50
              backdrop-blur-2xl
              p-8
              md:p-9
              shadow-[0_15px_50px_rgba(219,56,132,0.08)]
              hover:shadow-[0_30px_80px_rgba(219,56,132,0.18)]
              transition-all
              duration-700
              hover:-translate-y-4
            "
          >
            {/* CARD GLOW */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
                bg-gradient-to-br
                from-[#db3884]/5
                via-[#ef91bc]/5
                to-[#d6559d]/5
              "
            />

            {/* TOP LINE */}
            <div
              className="
                absolute
                top-0
                left-0
                h-[4px]
                w-full
                bg-gradient-to-r
                from-[#db3884]
                via-[#d6559d]
                to-[#ef91bc]
                scale-x-0
                origin-left
                group-hover:scale-x-100
                transition-transform
                duration-700
              "
            />

            {/* ICON */}
            <div
              className="
                absolute
                top-6
                right-6
                w-12
                h-12
                rounded-full
                bg-white/80
                backdrop-blur-xl
                flex
                items-center
                justify-center
                text-[#db3884]
                shadow-lg
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            >
              ✦
            </div>

            {/* NUMBER */}
            <div className="relative z-10">
              <h2
                className="
                  text-[2.8rem]
                  md:text-[3.5rem]
                  font-bold
                  leading-none
                  text-[#1d1d1d]
                  transition-all
                  duration-500
                  group-hover:text-[#db3884]
                "
              >
                {item.number}
              </h2>

              {/* SMALL LABEL */}
              <p
                className="
                  mt-5
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  font-medium
                  text-gray-500
                  leading-relaxed
                "
              >
                {item.label}
              </p>
            </div>

            {/* DECORATIVE CIRCLE */}
            <div
              className="
                absolute
                -bottom-20
                -right-20
                w-44
                h-44
                rounded-full
                bg-gradient-to-br
                from-[#db3884]/10
                to-[#ef91bc]/10
                scale-0
                group-hover:scale-100
                transition-all
                duration-700
              "
            />

            {/* FLOATING BLUR */}
            <div
              className="
                absolute
                top-10
                left-10
                w-20
                h-20
                rounded-full
                bg-[#ef91bc]/10
                blur-2xl
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-700
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}