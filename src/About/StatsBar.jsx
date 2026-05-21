import React from "react";

export default function StatsBar() {
  const stats = [
    {
      number: "12+",
      label: "Years Experience",
    },
    {
      number: "340+",
      label: "Projects Completed",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
    },
    {
      number: "24+",
      label: "Design Awards",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        py-20 md:py-24 lg:py-28
        px-5 sm:px-6 md:px-12 lg:px-20
        bg-gradient-to-br
        from-[#FEFEFD]
        via-[#FBE6E5]
        to-[#f7dddd]
      "
    >

      {/* BACKGROUND BLUR */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[220px]
          md:w-[320px]
          h-[220px]
          md:h-[320px]
          bg-[#b88b8b]/10
          blur-[100px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[220px]
          md:w-[320px]
          h-[220px]
          md:h-[320px]
          bg-[#d9c2c2]/20
          blur-[100px]
          rounded-full
        "
      />

      {/* HEADER */}
      <div className="relative z-10 text-center mb-14 md:mb-20">

        {/* TOP LABEL */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-3 md:gap-4
            mb-5
          "
        >

          <div className="w-8 md:w-12 h-[1px] bg-black"></div>

          <span
            className="
              text-[9px]
              md:text-[10px]
              uppercase
              tracking-[0.28em]
              md:tracking-[0.35em]
              text-black
            "
          >
            Our Achievements
          </span>

          <div className="w-8 md:w-12 h-[1px] bg-black"></div>

        </div>

        {/* HEADING */}
        <h2
          className="
            font-heading
            text-[2.3rem]
            sm:text-[3rem]
            md:text-[4.5rem]
            lg:text-[5rem]
            leading-[1.05]
            text-black
          "
        >
          Numbers That
          <span className="italic text-[#b88b8b]">
            {" "}Define Us
          </span>
        </h2>

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
          gap-5
          md:gap-7
          lg:gap-8
        "
      >

        {stats.map((item, index) => (

          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              bg-white/70
              backdrop-blur-xl
              border
              border-white/40
             
            
              p-7
              sm:p-8
              md:p-10
              shadow-lg
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
              transition-all
              duration-500
              hover:-translate-y-2
              md:hover:-translate-y-3
              cursor-pointer
            "
          >

            {/* TOP GRADIENT */}
            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-[3px]
                bg-gradient-to-r
                from-[#b88b8b]
                via-[#d6b3b3]
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
              "
            />

            {/* NUMBER */}
            <h2
              className="
                font-heading
                text-[3.2rem]
                sm:text-[4rem]
                md:text-[5rem]
                leading-none
                text-black
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:text-[#b88b8b]
              "
            >
              {item.number}
            </h2>

            {/* LABEL */}
            <p
              className="
                mt-4 md:mt-5
                text-[10px]
                md:text-[11px]
                uppercase
                tracking-[0.22em]
                md:tracking-[0.3em]
                text-gray-500
                leading-relaxed
              "
            >
              {item.label}
            </p>

            {/* DECORATIVE CIRCLE */}
            <div
              className="
                absolute
                -bottom-12
                -right-12
                w-28
                md:w-36
                h-28
                md:h-36
                rounded-full
                bg-[#b88b8b]/10
                scale-0
                group-hover:scale-100
                transition-all
                duration-700
              "
            />

            {/* SMALL ICON */}
            <div
              className="
                absolute
                top-5
                right-5
                w-10
                h-10
                rounded-full
                bg-white/70
                backdrop-blur-md
                flex
                items-center
                justify-center
                text-[#b88b8b]
                text-lg
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            >
              ✦
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}