import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-[14px] tracking-[0.12em] uppercase transition relative
     ${
       isActive
         ? "text-pink-500"
         : scrolled
         ? "text-black hover:text-pink-500"
         : "text-white hover:text-pink-300"
     }`;

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-5 transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-pink-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* 🔥 LOGO ONLY */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="h-12 md:h-14 md:pl-5 w-auto object-contain transition"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {["/", "/about", "/process", "/services", "/portfolio", "/contact"].map((path, i) => {
            const labels = ["Home", "About", "Process", "Services", "Portfolio", "Contact"];
            return (
              <li key={i}>
                <NavLink to={path} className={linkClass}>
                  {({ isActive }) => (
                    <span className="relative">
                      {labels[i]}
                      {isActive && (
                        <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-pink-500"></span>
                      )}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/918563980030"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-block text-[12px] tracking-[0.1em] uppercase px-5 py-2 border transition
          ${
            scrolled
              ? "border-black text-black hover:bg-black hover:text-white"
              : "border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Consultation
        </a>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-[5px]"
        >
          <span className={`w-6 h-[1.5px] ${scrolled ? "bg-black" : "bg-white"}`}></span>
          <span className={`w-6 h-[1.5px] ${scrolled ? "bg-black" : "bg-white"}`}></span>
          <span className={`w-6 h-[1.5px] ${scrolled ? "bg-black" : "bg-white"}`}></span>
        </button>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-10 transition 
        bg-gradient-to-br from-white via-pink-100 to-pink-300 ${
          open ? "flex" : "hidden"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-8 text-2xl text-black"
        >
          ✕
        </button>

        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/process", label: "Process" },
          { to: "/services", label: "Services" },
          { to: "/portfolio", label: "Portfolio" },
          { to: "/contact", label: "Contact" },
        ].map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `text-3xl font-serif font-light transition ${
                isActive ? "text-pink-500" : "text-black"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}