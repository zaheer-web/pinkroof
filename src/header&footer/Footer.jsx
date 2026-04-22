import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../img/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#FEFEFD] via-[#FBE6E5] to-[#f8dede] text-black">

      {/* TOP */}
      <div className="px-6 md:px-16 py-16 grid md:grid-cols-4 gap-10">

        {/* LEFT BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <h2 className="font-heading text-2xl">
              Pink Roof<span className="text-[#b88b8b]">.</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed mb-6 text-black/70">
            Pink Roof Interiors creates modern and functional spaces that reflect 
            your style and purpose.
          </p>

          {/* 🔥 SOCIAL (UPDATED) */}
          <div className="flex gap-4">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/interiorpinkroof/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-black 
              rounded-full transition-all duration-300
              hover:bg-[#FBE6E5] hover:scale-110 hover:shadow-md"
            >
              <FaInstagram />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/918563980030"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-black 
              rounded-full transition-all duration-300
              hover:bg-[#FBE6E5] hover:scale-110 hover:shadow-md"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-xs uppercase mb-6 tracking-widest">Services</h4>
          <ul className="space-y-3 text-sm text-black/70">
            {["Salon Interiors", "Residential Design", "Commercial Spaces", "Renovation"].map((item, i) => (
              <li key={i} className="group cursor-pointer">
                <span className="relative inline-block transition group-hover:text-black">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* NAV LINKS */}
        <div>
          <h4 className="text-xs uppercase mb-6 tracking-widest">Quick Links</h4>
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
                <Link to={item.to} className="group relative inline-block transition hover:text-black">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xs uppercase mb-6 tracking-widest">Contact</h4>
          <ul className="space-y-3 text-sm text-black/70">
            {["India", "pinkroofinteriors@gmail.com", "+91 8563980030"].map((item, i) => (
              <li key={i} className="group cursor-pointer">
                <span className="relative inline-block transition group-hover:text-black">
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-black/10 px-6 md:px-16 py-6 flex justify-between text-xs text-black/60 flex-wrap gap-3">

        <p>© 2026 Pink Roof Interiors</p>

        <div className="flex gap-4">
          {["Privacy", "Terms"].map((item, i) => (
            <span key={i} className="relative group cursor-pointer">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </span>
          ))}
        </div>

      </div>

    </footer>
  );
}