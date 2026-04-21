import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ Active class logic
  const linkClass = ({ isActive }) =>
    `text-[12px] tracking-[0.12em] uppercase transition relative
     ${isActive ? "text-pink-500" : "text-black hover:text-pink-500"}`;

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-5 
      bg-gradient-to-r from-white via-pink-100 to-pink-200 
      backdrop-blur-md border-b border-pink-200">

        {/* LOGO */}
        <Link
          to="/"
          className="text-[20px] font-light tracking-[0.15em] text-black font-serif"
        >
          Pink Roof <span className="text-pink-500">Interiors</span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-9">

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
  className="hidden md:inline-block text-[11px] tracking-[0.1em] uppercase px-5 py-2 
  border border-black text-black hover:bg-black hover:text-white transition"
>
  Consultation
</a>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-[5px]"
        >
          <span className="w-6 h-[1.5px] bg-black"></span>
          <span className="w-6 h-[1.5px] bg-black"></span>
          <span className="w-6 h-[1.5px] bg-black"></span>
        </button>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[200] flex flex-col items-center justify-center gap-10 transition 
        bg-gradient-to-br from-white via-pink-100 to-pink-300 ${
          open ? "flex" : "hidden"
        }`}
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-8 text-2xl text-black"
        >
          ✕
        </button>

        {/* LINKS */}
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