import React from "react";

export default function ValuesSection() {
  const values = [
    {
      num: "01",
      title: "Intentionality",
      desc: "Every design decision is made with purpose, balancing aesthetics, comfort and functionality in perfect harmony.",
    },
    {
      num: "02",
      title: "Authenticity",
      desc: "We create spaces that reflect your personality and lifestyle instead of simply following trends.",
    },
    {
      num: "03",
      title: "Craftsmanship",
      desc: "From premium materials to expert detailing, we focus on timeless quality and refined execution.",
    },
    {
      num: "04",
      title: "Transparency",
      desc: "Clear communication, thoughtful planning and a seamless process from concept to completion.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24 md:py-28
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
          w-[260px]
          md:w-[340px]
          h-[260px]
          md:h-[340px]
          bg-[#b88b8b]/10
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[240px]
          md:w-[320px]
          h-[240px]
          md:h-[320px]
          bg-[#d8bcbc]/20
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
          mb-16
        "
      >

        {/* LEFT */}
        <div className="max-w-2xl">

          {/* LABEL */}
          <div className="flex items-center gap-4 mb-5">

            <div className="w-10 md:w-12 h-[1px] bg-black"></div>

            <span
              className="
                text-[9px]
                md:text-[10px]
                uppercase
                tracking-[0.35em]
                text-black
              "
            >
              What Guides Us
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-heading
              text-[2.5rem]
              sm:text-[3rem]
              md:text-[5rem]
              leading-[1.05]
              text-black
            "
          >
            Our Core
            <span className="italic text-[#b88b8b]">
              {" "}Values
            </span>
          </h2>

        </div>

        {/* RIGHT TEXT */}
        <p
          className="
            max-w-xl
            text-gray-600
            leading-relaxed
            text-sm
            md:text-base
          "
        >
          Our philosophy is rooted in timeless aesthetics,
          thoughtful functionality and creating meaningful
          spaces that truly elevate modern living.
        </p>

      </div>

      {/* VALUES GRID */}
      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6 md:gap-8
        "
      >

        {values.map((item, index) => (

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
              
              p-8 md:p-10
              shadow-lg
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
              transition-all
              duration-500
              hover:-translate-y-3
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
                via-[#d9bcbc]
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
              "
            />

            {/* NUMBER */}
            <div
              className="
                text-[3.5rem]
                md:text-[4.5rem]
                leading-none
                font-heading
                text-[#b88b8b]/20
                group-hover:text-[#b88b8b]
                transition-all
                duration-500
              "
            >
              {item.num}
            </div>

            {/* TITLE */}
            <h3
              className="
                text-2xl
                md:text-3xl
                font-heading
                text-black
                mt-5
                group-hover:translate-x-1
                transition-all
                duration-300
              "
            >
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                text-gray-600
                text-sm
                md:text-[15px]
                leading-relaxed
                mt-5
              "
            >
              {item.desc}
            </p>

            {/* HOVER CIRCLE */}
            <div
              className="
                absolute
                -bottom-14
                -right-14
                w-36
                h-36
                rounded-full
                bg-[#b88b8b]/10
                scale-0
                group-hover:scale-100
                transition-all
                duration-700
              "
            />

            {/* HOVER ICON */}
            <div
              className="
                absolute
                top-6
                right-6
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