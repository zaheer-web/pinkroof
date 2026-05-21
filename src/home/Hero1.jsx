import { motion } from "framer-motion";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

import heroMain from "../img/za-1.jpeg";
import thumb1 from "../img/za-2.jpeg";
import thumb2 from "../img/za-3.jpeg";
import thumb3 from "../img/za-4.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },

  show: (i = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero1() {

  return (

    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#FBE6E5]
        text-[#1a1410]
      "
    >

      {/* DECORATIVE BLOBS */}
      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -right-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#d7b1b1]/30
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          -left-32
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#b88b8b]/25
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          [background-image:radial-gradient(#1a1410_1px,transparent_1px)]
          [background-size:22px_22px]
        "
      />

      {/* MAIN */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-12
          px-6
          pb-20
          pt-32
          md:px-10
          lg:grid-cols-12
          lg:gap-8
        "
      >

        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">

          {/* TAG */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#b88b8b]/30
              bg-white/60
              px-4
              py-1.5
              text-xs
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#1a1410]/70
              backdrop-blur
            "
          >
            <Sparkles className="h-3.5 w-3.5 text-[#b88b8b]" />

            Pink Roof Interior Studio
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="
              font-serif
              text-[44px]
              leading-[1.02]
              tracking-[-0.02em]
              sm:text-6xl
              lg:text-[88px]
            "
          >

            Pink Roof

            <br />

            <span className="italic text-[#b88b8b]">
              Interior
            </span>

            <br />

            Design Studio

            <span className="relative inline-block ml-3">

              .

              <motion.svg
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 h-3 w-full"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                <motion.path
                  d="M2 8 Q 150 -2 298 6"
                  fill="none"
                  stroke="#b88b8b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </motion.svg>

            </span>

          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="
              mt-8
              max-w-lg
              text-base
              leading-relaxed
              text-[#1a1410]/70
              md:text-lg
            "
          >
            Pink Roof Interior transforms homes,
            cafés, villas, salons, and commercial
            spaces into luxurious environments with
            timeless elegance and modern creativity.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-4
            "
          >

            <button
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#b88b8b]
                px-7
                py-4
                text-sm
                font-medium
                text-white
                transition-all
                hover:gap-4
                hover:bg-[#a67878]
              "
            >
              Explore Projects

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  transition-transform
                  group-hover:rotate-45
                "
              />
            </button>

            <button
              className="
                group
                inline-flex
                items-center
                gap-3
                text-sm
                font-medium
                text-[#1a1410]
              "
            >

              <span
                className="
                  grid
                  h-12
                  w-12
                  place-items-center
                  rounded-full
                  border
                  border-[#b88b8b]/30
                  transition-all
                  group-hover:border-[#b88b8b]
                  group-hover:bg-[#b88b8b]
                  group-hover:text-white
                "
              >
                <Play className="h-4 w-4 fill-current" />
              </span>

              Watch Showreel

            </button>

          </motion.div>

          {/* STATS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="
              mt-14
              grid
              max-w-lg
              grid-cols-3
              gap-6
              border-t
              border-[#b88b8b]/20
              pt-8
            "
          >

            {[
              { n: "340+", l: "Projects" },
              { n: "7+", l: "Years Experience" },
              { n: "98%", l: "Client Satisfaction" },
            ].map((s) => (

              <div key={s.l}>

                <div className="font-serif text-3xl md:text-4xl">
                  {s.n}
                </div>

                <div
                  className="
                    mt-1
                    text-xs
                    uppercase
                    tracking-widest
                    text-[#1a1410]/60
                  "
                >
                  {s.l}
                </div>

              </div>

            ))}

          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative lg:col-span-5">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 40,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="relative"
          >

            {/* MAIN IMAGE */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                shadow-2xl
                ring-1
                ring-black/5
              "
            >

              <motion.img
                src={heroMain}
                alt="Pink Roof Interior"

                className="
                  h-[560px]
                  w-full
                  object-cover
                "

                initial={{ scale: 1.15 }}

                animate={{ scale: 1 }}

                transition={{
                  duration: 1.8,
                  ease: "easeOut",
                }}
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#00000020]
                  via-transparent
                  to-transparent
                "
              />

              {/* FLOATING TAG */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{
                  delay: 1,
                  duration: 0.6,
                }}

                className="
                  absolute
                  left-5
                  top-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/90
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-[#1a1410]
                  backdrop-blur
                "
              >

                <span
                  className="
                    h-2
                    w-2
                    animate-pulse
                    rounded-full
                    bg-[#b88b8b]
                  "
                />

                Pink Roof Featured Project

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}