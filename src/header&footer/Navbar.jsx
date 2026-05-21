import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-[#FBE6E5]/95 backdrop-blur-xl shadow-md border-b border-[#d7b1b1] py-3"
            : "bg-[#FBE6E5]/90 backdrop-blur-lg py-4"
        }`}
      >
        <div className="max-w-[1480px] mx-auto flex items-center justify-between px-6 md:px-12">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
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
                    `relative text-[13px] uppercase tracking-[0.18em] font-medium transition-all duration-300
                    ${
                      isActive
                        ? "text-[#b88b8b]"
                        : "text-black hover:text-[#b88b8b]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative group pb-2">
                      {item.label}

                      {/* ACTIVE LINE */}
                      <span
                        className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-[#b88b8b] transition-all duration-300
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <a
            href="https://wa.me/918563980030"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center
            px-6 py-3 
            bg-[#b88b8b] text-white
            text-[12px] uppercase tracking-[0.15em]
            hover:bg-[#a67878] transition-all duration-300
            shadow-lg"
          >
            Consultation
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-[5px]"
          >
            <span className="w-6 h-[2px] bg-black rounded-full"></span>
            <span className="w-6 h-[2px] bg-black rounded-full"></span>
            <span className="w-6 h-[2px] bg-black rounded-full"></span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] bg-[#FBE6E5] flex flex-col items-center justify-center gap-10 transition-all duration-500
        ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-8 text-black text-4xl"
        >
          ×
        </button>

        {/* MOBILE LINKS */}
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-3xl uppercase tracking-[0.2em] transition-all duration-300
              ${
                isActive
                  ? "text-[#b88b8b]"
                  : "text-black hover:text-[#b88b8b]"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}

        {/* MOBILE BUTTON */}
        <a
          href="https://wa.me/918563980030"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-8 py-4 rounded-full bg-[#b88b8b] text-white uppercase tracking-[0.15em]"
        >
          Consultation
        </a>
      </div>

      {/* SPACE FOR FIXED NAVBAR */}
      <div className="h-[9px]"></div>
    </>
  );
}