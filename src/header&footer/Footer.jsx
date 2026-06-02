import { Link, useLocation } from "react-router-dom";

import {
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  House,
  Grid2x2,
  MessageCircle,
  Image,
  Phone,
} from "lucide-react";

import { motion } from "framer-motion";

import logo from "../img/logo.png";

export default function Footer() {
  const location = useLocation();

  // MOBILE NAV

  const navItems = [
    {
      icon: <House size={20} strokeWidth={1.8} />,
      label: "Home",
      path: "/",
    },

    {
      icon: <Grid2x2 size={20} strokeWidth={1.8} />,
      label: "Services",
      path: "/services",
    },

    {
      icon: <MessageCircle size={20} strokeWidth={1.8} />,
      label: "About",
      path: "/about",
    },

    {
      icon: <Image size={20} strokeWidth={1.8} />,
      label: "Gallery",
      path: "/portfolio",
    },

    {
      icon: <Phone size={20} strokeWidth={1.8} />,
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* DESKTOP FOOTER */}

      <footer
        className="
          hidden
          md:block
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#fffafd]
          via-[#fff1f8]
          to-[#fdebf4]
          text-[#2a0f1f]
        "
      >
        {/* GLOW */}

        <div className="pointer-events-none absolute top-0 right-0 w-[320px] h-[320px] bg-[#ef91bc]/20 blur-[120px] rounded-full"></div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#d67eb3]/20 blur-[120px] rounded-full"></div>

        {/* GRID */}

        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#db3884_1px,transparent_1px),linear-gradient(to_bottom,#db3884_1px,transparent_1px)] [background-size:60px_60px]"></div>

        {/* TOP */}

        <div className="relative z-10 px-6 md:px-16 py-16 grid md:grid-cols-4 gap-10">

          {/* BRAND */}

          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-auto"
              />

              <h2 className="font-heading text-2xl text-[#2a0f1f]">
                Pink Roof
                <span className="text-[#db3884]">.</span>
              </h2>
            </div>

            <p className="text-sm leading-relaxed mb-6 text-[#5f4150]">
              Pink Roof Interiors creates modern and
              functional spaces that reflect your style
              and purpose.
            </p>

            {/* SOCIAL */}

            <div className="flex gap-4">

              {/* INSTAGRAM */}

              <motion.a
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                href="https://www.instagram.com/id.rukhsar_fatima_rizvi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  border
                  border-[#ef91bc]
                  text-[#db3884]
                  bg-white/70
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-[#db3884]
                  hover:text-white
                  shadow-lg
                "
              >
                <FaInstagram />
              </motion.a>

              {/* WHATSAPP */}

              <motion.a
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                href="https://wa.me/918563980030"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  border
                  border-[#ef91bc]
                  text-[#db3884]
                  bg-white/70
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-[#db3884]
                  hover:text-white
                  shadow-lg
                "
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </div>

          {/* SERVICES */}

          <div>
            <h4 className="text-xs uppercase mb-6 tracking-[3px] text-[#db3884]">
              Services
            </h4>

            <ul className="space-y-4 text-sm text-[#5f4150]">
              {[
                "Salon Interiors",
                "Residential Design",
                "Commercial Spaces",
                "Renovation",
              ].map((item, i) => (
                <li
                  key={i}
                  className="group cursor-pointer"
                >
                  <span className="relative inline-block transition-all duration-300 group-hover:text-[#db3884]">
                    {item}

                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#db3884] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h4 className="text-xs uppercase mb-6 tracking-[3px] text-[#db3884]">
              Quick Links
            </h4>

            <ul className="space-y-4 text-sm text-[#5f4150]">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/contact", label: "Contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className="group relative inline-block transition-all duration-300 hover:text-[#db3884]"
                  >
                    {item.label}

                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#db3884] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h4 className="text-xs uppercase mb-6 tracking-[3px] text-[#db3884]">
              Contact
            </h4>

            <div className="space-y-5 text-sm text-[#5f4150]">

              {/* PHONE */}

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#db3884]" />

                <a
                  href="tel:+918563980030"
                  className="hover:text-[#db3884] transition"
                >
                  +91 85639 80030
                </a>
              </div>

              {/* EMAIL */}

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#db3884]" />

                <a
                  href="mailto:contact.pinkroof@gmail.com"
                  className="hover:text-[#db3884] transition"
                >
                  contact.pinkroof@gmail.com
                </a>
              </div>

              {/* WEBSITE */}

              

              {/* LOCATION */}

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#db3884]" />

                <p>Based in India</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="relative z-10 border-t border-[#ef91bc]/20 px-6 md:px-16 py-6 flex justify-between text-xs text-[#5f4150] flex-wrap gap-3">
          <p>© 2026 Pink Roof Interiors</p>

          <div className="flex gap-5">
            {["Privacy", "Terms"].map((item, i) => (
              <span
                key={i}
                className="relative group cursor-pointer hover:text-[#db3884] transition-all"
              >
                {item}

                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#db3884] transition-all duration-300 group-hover:w-full"></span>
              </span>
            ))}
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM MENU */}

      <div
        className="
          md:hidden
          fixed
          bottom-0
          left-0
          w-full
          z-[999]
          border-t
          border-[#ef91bc]/20
          bg-white/80
          backdrop-blur-2xl
          shadow-[0_-10px_30px_rgba(219,56,132,0.08)]
        "
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#db3884] to-transparent"></div>

        <div className="grid grid-cols-5 h-[74px]">
          {navItems.map((item, index) => {
            const active =
              location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className="relative flex flex-col items-center justify-center gap-1 transition-all duration-300"
              >
                <div
                  className={`
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                    w-[42px]
                    h-[42px]
                    transition-all
                    duration-300

                    ${
                      active
                        ? "text-[#db3884]"
                        : "text-[#5f4150]"
                    }
                  `}
                >
                  {item.icon}
                </div>

                <span
                  className={`
                    relative
                    z-10
                    text-[10px]
                    transition-all
                    duration-300

                    ${
                      active
                        ? "text-[#db3884] font-medium"
                        : "text-[#5f4150]"
                    }
                  `}
                >
                  {item.label}
                </span>

                <div
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2
                    h-[2px]
                    bg-[#db3884]
                    transition-all
                    duration-300

                    ${
                      active
                        ? "w-8 opacity-100"
                        : "w-0 opacity-0"
                    }
                  `}
                ></div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}