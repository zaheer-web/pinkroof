import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-5
        md:px-16
        py-24
        md:py-32
        bg-gradient-to-br
        from-[#FEFEFD]
        via-[#FBE6E5]
        to-[#f8dede]
      "
    >
      {/* BLUR EFFECTS */}

      <div
        className="
          absolute
          top-0
          left-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-pink-300/20
          blur-[120px]
        "
      ></div>

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[320px]
          w-[320px]
          rounded-full
          bg-pink-200/30
          blur-[120px]
        "
      ></div>

      {/* GRID PATTERN */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      ></div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          text-center
        "
      >
        {/* LABEL */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="
            flex
            items-center
            justify-center
            gap-3
            mb-7
          "
        >
          <div className="w-10 h-[1px] bg-black"></div>

          <span
            className="
              text-[10px]
              tracking-[0.35em]
              uppercase
              text-[#b88b8b]
            "
          >
            Start Your Journey
          </span>

          <div className="w-10 h-[1px] bg-black"></div>
        </motion.div>

        {/* HEADING */}

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="
            font-heading
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            text-black
            leading-[1.1]
            mb-8
          "
        >
          Let’s Design <br />

          <span className="italic text-[#b88b8b]">
            Your Dream Space
          </span>
        </motion.h2>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            max-w-2xl
            mx-auto
            text-black/65
            text-sm
            md:text-lg
            leading-relaxed
            mb-12
          "
        >
          Every exceptional interior begins with a vision.
          Share your ideas with us and let’s transform them
          into timeless spaces crafted with elegance,
          functionality, and modern luxury.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
          "
        >
          {/* PRIMARY BUTTON */}

          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                relative
                overflow-hidden
                bg-black
                text-white
                px-10
                py-4
                text-[11px]
                uppercase
                tracking-[0.25em]
                shadow-xl
                transition-all
                duration-500
              "
            >
              {/* SHINE EFFECT */}

              <span
                className="
                  absolute
                  inset-0
                  translate-x-[-120%]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-all
                  duration-[1400ms]
                  group-hover:translate-x-[120%]
                "
              ></span>

              <span className="relative z-10">
                Book a Consultation
              </span>
            </motion.button>
          </Link>

          {/* SECONDARY BUTTON */}

          <Link to="/services">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                relative
                overflow-hidden
                border
                border-black
                text-black
                px-10
                py-4
                text-[11px]
                uppercase
                tracking-[0.25em]
                transition-all
                duration-500
                hover:text-white
              "
            >
              {/* BG ANIMATION */}

              <span
                className="
                  absolute
                  inset-0
                  origin-left
                  scale-x-0
                  bg-black
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              ></span>

              <span className="relative z-10">
                Explore Our Work
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* BOTTOM SMALL TEXT */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="
            mt-14
            flex
            items-center
            justify-center
            gap-4
            flex-wrap
          "
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#b88b8b] animate-pulse"></div>

            <span
              className="
                text-[11px]
                uppercase
                tracking-[3px]
                text-black/45
              "
            >
              Luxury Interiors
            </span>
          </div>

          <div className="w-[1px] h-4 bg-black/20 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#b88b8b] animate-pulse"></div>

            <span
              className="
                text-[11px]
                uppercase
                tracking-[3px]
                text-black/45
              "
            >
              Modern Architecture
            </span>
          </div>

          <div className="w-[1px] h-4 bg-black/20 hidden sm:block"></div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#b88b8b] animate-pulse"></div>

            <span
              className="
                text-[11px]
                uppercase
                tracking-[3px]
                text-black/45
              "
            >
              Premium Spaces
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}