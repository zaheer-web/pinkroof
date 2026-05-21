import { Link, useLocation } from "react-router-dom";

import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import {
  House,
  Grid2x2,
  MessageCircle,
  Image,
  Phone,
} from "lucide-react";

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
      label: "Chat",
      path: "/contact",
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
          from-[#FEFEFD]
          via-[#FBE6E5]
          to-[#f8dede]
          text-black
        "
      >
        {/* GLOW */}

        <div
          className="
            absolute
            top-0
            right-0
            w-[300px]
            h-[300px]
            bg-pink-200/30
            blur-[120px]
            rounded-full
          "
        ></div>

        <div
          className="
            absolute
            bottom-0
            left-0
            w-[300px]
            h-[300px]
            bg-pink-300/20
            blur-[120px]
            rounded-full
          "
        ></div>

        {/* TOP */}

        <div
          className="
            relative
            z-10
            px-6
            md:px-16
            py-16
            grid
            md:grid-cols-4
            gap-10
          "
        >
          {/* LEFT BRAND */}

          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="logo"
                className="h-10 w-auto"
              />

              <h2
                className="
                  font-heading
                  text-2xl
                "
              >
                Pink Roof
                <span className="text-[#b88b8b]">
                  .
                </span>
              </h2>
            </div>

            <p
              className="
                text-sm
                leading-relaxed
                mb-6
                text-black/70
              "
            >
              Pink Roof Interiors creates modern and
              functional spaces that reflect your style
              and purpose.
            </p>

            {/* SOCIAL */}

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/interiorpinkroof/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  border
                  border-black
                  transition-all
                  duration-300
                  hover:bg-[#FBE6E5]
                  hover:scale-110
                  hover:shadow-md
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/918563980030"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  border
                  border-black
                  transition-all
                  duration-300
                  hover:bg-[#FBE6E5]
                  hover:scale-110
                  hover:shadow-md
                "
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* SERVICES */}

          <div>
            <h4
              className="
                text-xs
                uppercase
                mb-6
                tracking-widest
              "
            >
              Services
            </h4>

            <ul className="space-y-3 text-sm text-black/70">
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
                  <span
                    className="
                      relative
                      inline-block
                      transition
                      group-hover:text-black
                    "
                  >
                    {item}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-1
                        w-0
                        h-[1px]
                        bg-black
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    ></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h4
              className="
                text-xs
                uppercase
                mb-6
                tracking-widest
              "
            >
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-black/70">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/process", label: "Process" },
                { to: "/services", label: "Services" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/contact", label: "Contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className="
                      group
                      relative
                      inline-block
                      transition
                      hover:text-black
                    "
                  >
                    {item.label}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-1
                        w-0
                        h-[1px]
                        bg-black
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h4
              className="
                text-xs
                uppercase
                mb-6
                tracking-widest
              "
            >
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-black/70">
              {[
                "India",
                "pinkroofinteriors@gmail.com",
                "+91 8563980030",
              ].map((item, i) => (
                <li
                  key={i}
                  className="group cursor-pointer"
                >
                  <span
                    className="
                      relative
                      inline-block
                      transition
                      group-hover:text-black
                    "
                  >
                    {item}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-1
                        w-0
                        h-[1px]
                        bg-black
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    ></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            border-t
            border-black/10
            px-6
            md:px-16
            py-6
            flex
            justify-between
            text-xs
            text-black/60
            flex-wrap
            gap-3
          "
        >
          <p>© 2026 Pink Roof Interiors</p>

          <div className="flex gap-4">
            {["Privacy", "Terms"].map((item, i) => (
              <span
                key={i}
                className="
                  relative
                  group
                  cursor-pointer
                "
              >
                {item}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    w-0
                    h-[1px]
                    bg-black
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                ></span>
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
          border-[#ead3d3]
          bg-[#FEFEFD]/95
          backdrop-blur-2xl
          shadow-[0_-5px_30px_rgba(0,0,0,0.06)]
        "
      >
        {/* TOP SHINE */}

        <div
          className="
            absolute
            top-0
            left-0
            w-full
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-[#d6a5a5]
            to-transparent
          "
        ></div>

        {/* MENU */}

        <div className="grid grid-cols-5 h-[72px]">
          {navItems.map((item, index) => {
            const active =
              location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  transition-all
                  duration-300
                "
              >
                {/* ACTIVE BG */}

                <div
                  className={`
                    absolute
                    top-[7px]
                    w-[46px]
                    h-[46px]
                    transition-all
                    duration-300
                    
                    ${
                      active
                        ? "bg-[#FBE6E5] scale-100"
                        : "scale-0"
                    }
                  `}
                ></div>

                {/* ICON */}

                <div
                  className={`
                    relative
                    z-10
                    transition-all
                    duration-300
                    
                    ${
                      active
                        ? "text-[#b88b8b]"
                        : "text-black/65"
                    }
                  `}
                >
                  {item.icon}
                </div>

                {/* LABEL */}

                <span
                  className={`
                    relative
                    z-10
                    text-[10px]
                    transition-all
                    duration-300
                    
                    ${
                      active
                        ? "text-[#b88b8b] font-medium"
                        : "text-black/55"
                    }
                  `}
                >
                  {item.label}
                </span>

                {/* ACTIVE DOT */}

                <div
                  className={`
                    absolute
                    bottom-[6px]
                    w-1
                    h-1
                    rounded-full
                    bg-[#b88b8b]
                    transition-all
                    duration-300
                    
                    ${
                      active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
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