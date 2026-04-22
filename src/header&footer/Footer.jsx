import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#FEFEFD] via-[#FBE6E5] to-[#f8dede] text-black">

      {/* TOP */}
      <div className="px-6 md:px-16 py-16 grid md:grid-cols-4 gap-10">

        {/* LEFT BRAND */}
        <div>
          <h2 className="font-heading text-2xl mb-4">
            Pink Roof<span className="text-[#b88b8b]">.</span>
          </h2>

          <p className="text-sm leading-relaxed mb-6 text-black/70">
            Pink Roof Interiors creates modern and functional spaces that reflect 
            your style and purpose.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4">

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-[#FEFEFD] transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-[#FEFEFD] transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/918563980030"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-[#FEFEFD] transition"
            >
              <FaWhatsapp />
            </a>

          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-xs uppercase mb-6 tracking-widest">Services</h4>
          <ul className="space-y-3 text-sm text-black/70">
            <li>Salon Interiors</li>
            <li>Residential Design</li>
            <li>Commercial Spaces</li>
            <li>Renovation</li>
          </ul>
        </div>

        {/* NAV LINKS */}
        <div>
          <h4 className="text-xs uppercase mb-6 tracking-widest">Quick Links</h4>
          <ul className="space-y-3 text-sm text-black/70">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/process">Process</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xs uppercase mb-6 tracking-widest">Contact</h4>
          <ul className="space-y-3 text-sm text-black/70">
            <li>India</li>
            <li>pinkroofinteriors@gmail.com</li>
            <li>+91 8563980030</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-black/10 px-6 md:px-16 py-6 flex justify-between text-xs text-black/60">
        <p>© 2026 Pink Roof Interiors</p>
        <div className="flex gap-4">
          <span>Privacy</span>
          <span>·</span>
          <span>Terms</span>
        </div>
      </div>

    </footer>
  );
}