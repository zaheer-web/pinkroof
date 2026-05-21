import { motion } from "framer-motion";

export default function View360() {
  const views = [
    {
      title: "Office 360 View",
      desc: "Explore our premium workspace with immersive architecture and elegant modern interiors.",
      link: "https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO3GY4DJN3P&locale=en_US&utm_source=light720_share&utm_medium=linkcopy&utm_content=3FO3GY4DJN3P",
    },

    {
      title: "Interior 360 View",
      desc: "Walk through luxury interior concepts crafted with warmth, detail, and functionality.",
      link: "https://www.coohom.com/pub/tool/panorama/show?obsPlanId=3FO3MHOP9AW4&locale=en_US&utm_source=light720_share&utm_medium=linkcopy&utm_content=3FO3MHOP9AW4",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        w-full
        py-20
        md:py-28
        px-5
        md:px-10
        lg:px-20
        bg-gradient-to-br
        from-[#fffafd]
        via-[#fff1f8]
        to-[#fdebf4]
      "
    >
      {/* BG GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-0
          w-[320px]
          h-[320px]
          bg-[#ef91bc]/20
          blur-[120px]
          rounded-full
        "
      ></div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          w-[320px]
          h-[320px]
          bg-[#d67eb3]/20
          blur-[120px]
          rounded-full
        "
      ></div>

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="
          relative
          z-10
          text-center
          max-w-4xl
          mx-auto
          mb-16
        "
      >
        {/* TOP LABEL */}

        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-10 h-[1px] bg-[#db3884]"></div>

          <p
            className="
              text-[10px]
              uppercase
              tracking-[4px]
              text-[#db3884]
            "
          >
            Interactive Experience
          </p>

          <div className="w-10 h-[1px] bg-[#db3884]"></div>
        </div>

        {/* HEADING */}

        <h2
          className="
            text-4xl
            md:text-6xl
            font-heading
            text-[#2a0f1f]
            leading-none
            mb-6
          "
        >
          Explore Our{" "}

          <span className="italic text-[#db3884]">
            360° Designs
          </span>
        </h2>

        {/* DESC */}

        <p
          className="
            text-[#4b2d3d]
            text-sm
            md:text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
          "
        >
          Step inside our immersive interiors and experience every
          corner through realistic 360° walkthroughs crafted for
          modern luxury spaces.
        </p>
      </motion.div>

      {/* GRID */}

      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-8
        "
      >
        {views.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: index * 0.2,
            }}
            className="
              group
              relative
              overflow-hidden
              border
              border-[#ef91bc]/30
              bg-white/70
              backdrop-blur-xl
              shadow-[0_15px_40px_rgba(219,56,132,0.08)]
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(219,56,132,0.18)]
            "
          >
            {/* TOP GLOW */}

            <div
              className="
                absolute
                top-0
                left-0
                h-[3px]
                w-0
                bg-gradient-to-r
                from-[#db3884]
                via-[#d6559d]
                to-[#ef91bc]
                transition-all
                duration-700
                group-hover:w-full
              "
            ></div>

            {/* HEADER */}

            <div
              className="
                px-5
                md:px-7
                py-5
                border-b
                border-[#ef91bc]/20
                bg-white/50
                backdrop-blur-md
              "
            >
              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-4
                "
              >
                <div>
                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-heading
                      text-[#2a0f1f]
                      mb-2
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-sm
                      md:text-base
                      text-[#5f4150]
                      leading-relaxed
                      max-w-xl
                    "
                  >
                    {item.desc}
                  </p>
                </div>

                {/* LIVE BADGE */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    border
                    border-[#ef91bc]/40
                    bg-white/80
                    px-4
                    py-2
                    backdrop-blur-md
                    shrink-0
                    shadow-md
                  "
                >
                  <span
                    className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-[#db3884]
                      animate-pulse
                    "
                  ></span>

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[3px]
                      text-[#db3884]
                    "
                  >
                    Live View
                  </span>
                </div>
              </div>
            </div>

            {/* IFRAME */}

            <div
              className="
                relative
                w-full
                h-[280px]
                sm:h-[360px]
                md:h-[500px]
                overflow-hidden
              "
            >
              {/* LOADING SHINE */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  translate-x-[-100%]
                  group-hover:translate-x-[100%]
                  transition-all
                  duration-[1800ms]
                  z-20
                "
              ></div>

              <iframe
                src={item.link}
                title={item.title}
                loading="lazy"
                allowFullScreen
                className="
                  w-full
                  h-full
                  transition-all
                  duration-700
                  group-hover:scale-[1.01]
                "
              ></iframe>
            </div>

            {/* BOTTOM */}

            <div
              className="
                flex
                items-center
                justify-between
                px-5
                md:px-7
                py-4
                border-t
                border-[#ef91bc]/20
                bg-white/40
              "
            >
              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[3px]
                  text-[#5f4150]/70
                "
              >
                Premium 360 Experience
              </p>

              <motion.a
                whileHover={{ x: 5 }}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  text-[#db3884]
                  hover:text-[#d6559d]
                  transition
                  font-medium
                "
              >
                Open Full View →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}