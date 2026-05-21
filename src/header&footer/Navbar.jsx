import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../img/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              ? "bg-white/70 backdrop-blur-2xl border-b border-[#ef91bc]/20 shadow-[0_10px_30px_rgba(219,56,132,0.08)] py-3"
              : "bg-[#fffafd]/60 backdrop-blur-xl py-4"
          }
        `}
      >
        {/* GLOW */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#db3884]/5 via-[#d6559d]/5 to-[#ef91bc]/5"></div>

        <div className="max-w-[1480px] mx-auto flex items-center justify-between px-6 md:px-12 relative z-10">
          
          {/* LOGO */}

          <Link to="/" className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.03 }}
              src={logo}
              alt="logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}

          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    relative
                    text-[13px]
                    uppercase
                    tracking-[0.18em]
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
              px-7
              py-3
              bg-gradient-to-r
              from-[#db3884]
              via-[#d6559d]
              to-[#d67eb3]
              text-white
              text-[11px]
              uppercase
              tracking-[0.18em]
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
              md:hidden
              flex
              flex-col
              gap-[5px]
              relative
              z-50
            "
          >
            <span className="w-7 h-[2px] bg-[#db3884]"></span>

            <span className="w-7 h-[2px] bg-[#d6559d]"></span>

            <span className="w-7 h-[2px] bg-[#ef91bc]"></span>
          </button>
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
              gap-10
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
                top-6
                right-8
                text-[#db3884]
                text-5xl
                z-50
              "
            >
              ×
            </motion.button>

            {/* MOBILE LINKS */}

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
                    text-3xl
                    uppercase
                    tracking-[0.2em]
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
                mt-6
                px-10
                py-4
                bg-gradient-to-r
                from-[#db3884]
                via-[#d6559d]
                to-[#d67eb3]
                text-white
                uppercase
                tracking-[0.18em]
                text-[11px]
                shadow-[0_15px_35px_rgba(219,56,132,0.22)]
              "
            >
              Consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR SPACE */}

      <div className="h-[9px]"></div>
    </>
  );
}