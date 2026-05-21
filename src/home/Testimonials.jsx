import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: "Bhupendra Sahi",
      tag: "GM, Hotel Ranbirs",
      text: `Rukhsar delivered an exceptional transformation for our hotel.
Her creativity, attention to detail, and professionalism made the process smooth.
The space now feels luxurious, functional, and perfectly aligned with our brand.`,
    },

    {
      name: "Er. Swapnil",
      tag: "Café Owner",
      text: `She perfectly captured our café vibe — cozy, fresh, and vibrant.
The design exceeded expectations and customers love the greenery and lighting.`,
    },

    {
      name: "Alka Singh",
      tag: "Healthcare Project",
      text: `कम समय में शानदार काम — साफ, सुंदर और पूरी तरह उपयोगी डिजाइन।
हर कोना काम का है और मरीजों के लिए सुविधाजनक है।`,
    },

    {
      name: "Shambhavi Agarwal",
      tag: "Residential Client",
      text: `My living room transformation was beyond expectations.
Elegant, warm, and beautifully balanced — a space I truly love.`,
    },

    {
      name: "Abu Lais",
      tag: "Salon Owner, Toni & Guy",
      text: `From an old structure to Asia’s biggest Toni & Guy salon —
Rukhsar created a calm, soulful space.

Her Wabi-Sabi design turned flaws into beauty.
A vibe clients truly love.`,
    },
  ];

  // MOBILE DETECT

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // AUTO SLIDE

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      className="
        relative
        overflow-hidden
        px-5
        md:px-16
        py-20
        md:py-28
        bg-gradient-to-br
        from-[#fffafd]
        via-[#fff1f8]
        to-[#fdebf4]
      "
    >
      {/* BLUR EFFECTS */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#ef91bc]/20
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#d67eb3]/20
          blur-[100px]
        "
      />

      {/* HEADER */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-16"
      >
        {/* TOP LABEL */}

        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-[1px] bg-[#db3884]"></div>

          <p
            className="
              text-[10px]
              uppercase
              tracking-[4px]
              text-[#db3884]
            "
          >
            Client Feedback
          </p>

          <div className="w-8 h-[1px] bg-[#db3884]"></div>
        </div>

        {/* TITLE */}

        <h2
          className="
            font-heading
            text-4xl
            md:text-6xl
            text-[#2a0f1f]
            leading-none
          "
        >
          Client{" "}

          <span className="italic text-[#db3884]">
            Testimonials
          </span>
        </h2>
      </motion.div>

      {/* SLIDER */}

      <div className="relative z-10 overflow-hidden max-w-7xl mx-auto pb-4">
        <motion.div
          animate={{
            x: `-${index * (isMobile ? 100 : 33.33)}%`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex"
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
              }}
              className="
                w-full
                md:w-1/3
                flex-shrink-0
                px-3
              "
            >
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  h-full
                  min-h-[320px]
                  bg-white/75
                  backdrop-blur-xl
                  border
                  border-[#ef91bc]/30
                  p-6
                  md:p-8
                  shadow-[0_15px_40px_rgba(219,56,132,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_20px_50px_rgba(219,56,132,0.18)]
                "
              >
                {/* HOVER GLOW */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#fffafd]
                    via-[#fff1f8]
                    to-[#fdebf4]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                ></div>

                {/* QUOTE ICON */}

                <div
                  className="
                    absolute
                    top-5
                    right-5
                    text-6xl
                    text-[#db3884]/10
                    font-serif
                  "
                >
                  ”
                </div>

                {/* CONTENT */}

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* AVATAR */}

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="
                        w-14
                        h-14
                        flex
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-[#db3884]
                        to-[#d6559d]
                        text-white
                        text-sm
                        font-medium
                        mb-5
                        shadow-lg
                      "
                    >
                      {item.name.slice(0, 2)}
                    </motion.div>

                    {/* STARS */}

                    <div
                      className="
                        text-[#db3884]
                        mb-4
                        tracking-[3px]
                        text-sm
                      "
                    >
                      ★★★★★
                    </div>

                    {/* TEXT */}

                    <p
                      className="
                        text-[15px]
                        leading-relaxed
                        text-[#4b2d3d]
                        mb-8
                      "
                    >
                      “{item.text}”
                    </p>
                  </div>

                  {/* USER */}

                  <div className="border-t border-[#ef91bc]/30 pt-4">
                    <h4
                      className="
                        text-[16px]
                        font-semibold
                        text-[#2a0f1f]
                        mb-1
                      "
                    >
                      {item.name}
                    </h4>

                    <p
                      className="
                        text-[12px]
                        uppercase
                        tracking-[2px]
                        text-[#db3884]/70
                      "
                    >
                      {item.tag}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* DOTS */}

      <div className="relative z-10 flex justify-center mt-10 gap-3">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIndex(i)}
            className={`
              transition-all
              duration-500

              ${
                index === i
                  ? "w-10 h-[10px] bg-[#db3884]"
                  : "w-[10px] h-[10px] bg-[#db3884]/25 hover:bg-[#db3884]/50"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}