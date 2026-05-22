import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../img/za-2.jpeg";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        grid
        lg:grid-cols-2
        overflow-hidden
        bg-[#fffafd]
      "
    >
      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="
          flex
          items-center

          order-2
          lg:order-1

          px-5
          sm:px-7
          md:px-10
          lg:px-16
          xl:px-20

          py-14
          sm:py-16
          lg:py-20
        "
      >
        <div className="w-full max-w-2xl mx-auto lg:mx-0">
          {/* TAG */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="
              flex
              items-center
              justify-center
              lg:justify-start
              gap-3
              mb-5
            "
          >
            <div className="w-8 sm:w-10 h-[1px] bg-[#db3884]"></div>

            <span
              className="
                text-[9px]
                sm:text-[10px]
                tracking-[0.25em]
                uppercase
                text-[#db3884]
                text-center
              "
            >
              Pink Roof Interiors
            </span>
          </motion.div>

          {/* HEADING */}

          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 1 }}
            className="
              font-heading

              text-[2.3rem]
              sm:text-[3rem]
              md:text-[4rem]
              lg:text-[4.6rem]

              leading-[1.05]

              text-[#2b0f1d]

              mb-5

              text-center
              lg:text-left
            "
          >
            Creative Spaces <br />

            <span className="italic text-[#db3884]">
              Designed for
            </span>

            <br />

            Modern Living
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="
              text-[15px]
              sm:text-base
              md:text-lg

              text-[#4a2b3a]

              leading-relaxed

              mb-4

              font-body

              text-center
              lg:text-left
            "
          >
            Pink Roof Interior is a creative and client-focused design studio
            transforming spaces into elegant, functional, and personalized
            environments.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="
              text-[13px]
              sm:text-sm
              md:text-base

              text-[#5f4150]

              leading-relaxed

              mb-8

              font-body

              text-center
              lg:text-left
            "
          >
            From modern apartments to luxury villas, every project is crafted
            with detail, innovation, and timeless design appeal.
          </motion.p>

          {/* BUTTON */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="
              flex
              justify-center
              lg:justify-start
            "
          >
            <Link to="/portfolio">
              <button
                className="
                  border
                  border-[#db3884]

                  text-[#db3884]

                  px-6
                  sm:px-7

                  py-3

                  

                  text-[10px]
                  sm:text-xs

                  tracking-[0.2em]
                  uppercase

                  transition-all
                  duration-300

                  hover:bg-[#db3884]
                  hover:text-white
                  hover:scale-105

                  shadow-lg
                  hover:shadow-[#db3884]/40
                "
              >
                View Portfolio
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}

      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          relative
          overflow-hidden

          order-1
          lg:order-2

          min-h-[380px]
          sm:min-h-[500px]
          md:min-h-[650px]
          lg:min-h-screen
        "
      >
        {/* BG */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#fff0f7] via-[#ef91bc]/40 to-[#fce4f1]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(219,56,132,0.25),transparent_60%)]"></div>

        {/* IMAGE */}

        <motion.img
          src={img}
          alt="interior"
          initial={{ scale: 1.3 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.3 }}
          className="
            relative
            w-full
            h-full
            object-cover
            opacity-95

            hover:scale-105
            transition
            duration-700
          "
        />

        {/* STATS */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          className="
            absolute

            bottom-5
            sm:bottom-6
            md:bottom-8

            left-1/2
            -translate-x-1/2

            lg:left-8
            lg:translate-x-0

            flex
            items-center

            gap-4
            sm:gap-6
            md:gap-8

            bg-white/75
            backdrop-blur-md

            px-4
            sm:px-5
            md:px-6

            py-3
            md:py-4

            rounded-2xl

            shadow-2xl

            border
            border-[#db3884]/10

            w-[92%]
            sm:w-auto
            justify-between
          "
        >
          {/* YEARS */}

          <div className="text-center flex-1">
            <h3
              className="
                text-lg
                sm:text-xl
                md:text-2xl

                font-heading
                text-[#db3884]
              "
            >
              7+
            </h3>

            <p
              className="
                text-[8px]
                sm:text-[9px]
                md:text-[10px]

                tracking-[0.2em]
                uppercase

                text-[#2b0f1d]/70
              "
            >
              Years
            </p>
          </div>

          {/* PROJECTS */}

          <div className="text-center flex-1">
            <h3
              className="
                text-lg
                sm:text-xl
                md:text-2xl

                font-heading
                text-[#d6559d]
              "
            >
              250+
            </h3>

            <p
              className="
                text-[8px]
                sm:text-[9px]
                md:text-[10px]

                tracking-[0.2em]
                uppercase

                text-[#2b0f1d]/70
              "
            >
              Projects
            </p>
          </div>

          {/* SATISFACTION */}

          <div className="text-center flex-1">
            <h3
              className="
                text-lg
                sm:text-xl
                md:text-2xl

                font-heading
                text-[#d67eb3]
              "
            >
              95%
            </h3>

            <p
              className="
                text-[8px]
                sm:text-[9px]
                md:text-[10px]

                tracking-[0.2em]
                uppercase

                text-[#2b0f1d]/70
              "
            >
              Satisfaction
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}