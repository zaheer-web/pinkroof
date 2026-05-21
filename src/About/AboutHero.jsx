import React from "react";

// BACKGROUND IMAGE
import bgImg from "../img/za-4.jpeg";

export default function AboutHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        px-6 md:px-12 lg:px-20
        py-24
      "
    >

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img
          src={bgImg}
          alt="Interior Background"
          className="
            w-full
            h-full
            object-cover
          "
        />

        {/* DARK OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-black/35
          "
        />

        {/* GRADIENT OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#FEFEFD]/5
            via-[#FBE6E5]/5
            to-[#f8dede]/0
          "
        />

      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          grid
          lg:grid-cols-2
          gap-16
          items-center
          w-full
        "
      >

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          {/* TAG */}
          <div className="flex items-center gap-3 mb-6">

            <div className="w-10 h-[1px] bg-black"></div>

            <span
              className="
                text-[10px]
                tracking-[0.35em]
                uppercase
                text-black
              "
            >
              About Pink Roof
            </span>

          </div>

          {/* HEADING */}
          <h1
            className="
              font-heading
              text-[2.8rem]
              md:text-[5rem]
              leading-[1]
              text-black
            "
          >
            Crafting Spaces
            <br />

            <span className="italic text-[#b88b8b]">
              With Elegance
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-base
              md:text-lg
              text-black
              leading-relaxed
              mt-8
              max-w-xl
              font-body
            "
          >
            Pink Roof Interior is a creative and client-focused
            design studio transforming interiors into elegant,
            functional and emotionally engaging experiences.
          </p>

          <p
            className="
              text-sm
              md:text-base
              text-black
              leading-relaxed
              mt-5
              max-w-xl
              font-body
            "
          >
            From modern apartments to luxury villas, we blend
            innovation, comfort and timeless aesthetics to create
            spaces that truly feel personal and inspiring.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-10">

            <button
              className="
                border
                border-black
                text-black
                px-7
                py-4
                text-xs
                tracking-[0.25em]
                uppercase
                transition-all
                duration-300
                hover:bg-black
                hover:text-white
              "
            >
              Explore Projects
            </button>

            <button
              className="
                bg-black
                text-white
                px-7
                py-4
                text-xs
                tracking-[0.25em]
                uppercase
                transition-all
                duration-300
                hover:bg-[#b88b8b]
              "
            >
              Contact Us
            </button>

          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <div className="relative flex justify-center lg:justify-end">

          {/* MAIN CARD */}
          <div
            className="
              relative
              bg-[#FEFEFD]/75
              backdrop-blur-xl
              border
              border-white/50
              
              p-10
              shadow-2xl
              max-w-[420px]
            "
          >

            {/* NUMBER */}
            <h2
              className="
                text-[6rem]
                md:text-[8rem]
                font-heading
                leading-none
                text-[#b88b8b]/20
              "
            >
              12
            </h2>

            {/* CONTENT */}
            <div className="-mt-3">

              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-heading
                  text-black
                "
              >
                Years
              </h3>

              <p
                className="
                  text-gray-900
                  leading-relaxed
                  mt-5
                "
              >
                Delivering premium interior and architectural
                solutions with creativity, passion and timeless
                sophistication.
              </p>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div
                className="
                  bg-white
                  rounded-2xl
                  p-5
                  shadow-md
                "
              >

                <h4
                  className="
                    text-3xl
                    font-heading
                    text-black
                  "
                >
                  340+
                </h4>

                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-gray-500
                    mt-2
                  "
                >
                  Projects
                </p>

              </div>

              <div
                className="
                  bg-white
                  rounded-2xl
                  p-5
                  shadow-md
                "
              >

                <h4
                  className="
                    text-3xl
                    font-heading
                    text-black
                  "
                >
                  98%
                </h4>

                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-gray-500
                    mt-2
                  "
                >
                  Satisfaction
                </p>

              </div>

            </div>

          </div>

          {/* FLOATING BADGE */}
          <div
            className="
              absolute
              -top-6
              right-0
              bg-black
              text-white
              px-6
              py-4
              rounded-2xl
              shadow-xl
            "
          >

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/60
              "
            >
              Premium Studio
            </span>

            <h4 className="text-lg font-semibold mt-1">
              Interior Design
            </h4>

          </div>

        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/10"></div>

    </section>
  );
}