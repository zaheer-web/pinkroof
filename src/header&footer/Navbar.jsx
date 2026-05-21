import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../img/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SCROLL EFFECT

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOCK BODY SCROLL

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/process", label: "Process" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR */}

      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500

          ${
            scrolled
              ? `
                bg-white/70
                backdrop-blur-2xl
                border-b
                border-[#ef91bc]/20
                shadow-[0_10px_30px_rgba(219,56,132,0.08)]
                py-2
              `
              : `
                bg-[#fffafd]/60
                backdrop-blur-xl
                py-3
              `
          }
        `}
      >
        {/* GLOW */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#db3884]/5 via-[#d6559d]/5 to-[#ef91bc]/5"></div>

        {/* CONTAINER */}

        <div
          className="
            max-w-[1480px]
            mx-auto
            flex
            items-center
            justify-between
            px-4
            sm:px-6
            md:px-10
            lg:px-12
            relative
            z-10
          "
        >
          {/* LOGO */}

          <Link to="/" className="flex items-center flex-shrink-0">
            <motion.img
              whileHover={{ scale: 1.03 }}
              src={logo}
              alt="logo"
              className="
                h-10
                sm:h-11
                md:h-14
                w-auto
                object-contain
              "
            />
          </Link>

          {/* DESKTOP MENU */}

          <ul
            className="
              hidden
              lg:flex
              items-center
              gap-6
              xl:gap-10
            "
          >
            {navItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    relative
                    text-[12px]
                    xl:text-[13px]
                    uppercase
                    tracking-[0.16em]
                    font-medium
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "text-[#db3884]"
                        : "text-[#2a0f1f] hover:text-[#db3884]"
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <span className="relative group pb-2">
                      {item.label}

                      {/* ACTIVE LINE */}

                      <span
                        className={`
                          absolute
                          left-0
                          bottom-0
                          h-[2px]
                          bg-gradient-to-r
                          from-[#db3884]
                          via-[#d6559d]
                          to-[#ef91bc]
                          transition-all
                          duration-500

                          ${
                            isActive
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }
                        `}
                      ></span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">
            {/* CTA BUTTON */}

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="https://wa.me/918563980030"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden
                md:inline-flex

                items-center
                justify-center

                relative
                overflow-hidden

                px-5
                lg:px-7

                py-2.5
                lg:py-3

               

                bg-gradient-to-r
                from-[#db3884]
                via-[#d6559d]
                to-[#d67eb3]

                text-white
                text-[10px]
                lg:text-[11px]

                uppercase
                tracking-[0.16em]

                transition-all
                duration-500

                shadow-[0_15px_35px_rgba(219,56,132,0.22)]
              "
            >
              {/* SHINE */}

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
                  hover:translate-x-[120%]
                "
              ></span>

              <span className="relative z-10">
                Consultation
              </span>
            </motion.a>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setOpen(true)}
              className="
                lg:hidden

                flex
                flex-col
                justify-center
                gap-[5px]

                relative
                z-50

                w-10
                h-10
              "
            >
              <span className="w-7 h-[2px] bg-[#db3884] rounded-full"></span>

              <span className="w-7 h-[2px] bg-[#d6559d] rounded-full"></span>

              <span className="w-7 h-[2px] bg-[#ef91bc] rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]

              bg-gradient-to-br
              from-[#fffafd]
              via-[#fff1f8]
              to-[#fdebf4]

              flex
              flex-col
              items-center
              justify-center

              px-6
              text-center

              overflow-hidden
            "
          >
            {/* BG GLOW */}

            <div className="absolute top-0 left-0 h-[280px] w-[280px] rounded-full bg-[#ef91bc]/20 blur-[120px]"></div>

            <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-[#d67eb3]/20 blur-[120px]"></div>

            {/* CLOSE BUTTON */}

            <motion.button
              whileHover={{ rotate: 90 }}
              onClick={() => setOpen(false)}
              className="
                absolute
                top-5
                right-5
                sm:top-6
                sm:right-8

                text-[#db3884]

                text-4xl
                sm:text-5xl

                z-50
              "
            >
              ×
            </motion.button>

            {/* MOBILE LINKS */}

            <div className="flex flex-col items-center gap-7 sm:gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `
                      text-2xl
                      sm:text-3xl

                      uppercase
                      tracking-[0.18em]

                      transition-all
                      duration-300

                      relative

                      ${
                        isActive
                          ? "text-[#db3884]"
                          : "text-[#2a0f1f] hover:text-[#db3884]"
                      }
                    `
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* MOBILE BUTTON */}

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="https://wa.me/918563980030"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10

                px-8
                sm:px-10

                py-3
                sm:py-4

             

                bg-gradient-to-r
                from-[#db3884]
                via-[#d6559d]
                to-[#d67eb3]

                text-white

                uppercase
                tracking-[0.16em]

                text-[10px]
                sm:text-[11px]

                shadow-[0_15px_35px_rgba(219,56,132,0.22)]
              "
            >
              Consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR SPACE */}

      <div className="h-[5px] sm:h-[2px] md:h-[0px]"></div>
    </>
  );
}