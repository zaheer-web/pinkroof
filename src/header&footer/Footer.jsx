import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-pink-100 to-pink-300 text-black">

      {/* TOP */}
      <div className="px-6 md:px-16 py-16 grid md:grid-cols-4 gap-10">

        {/* LEFT BRAND */}
        <div>
          <h2 className="font-serif text-2xl mb-4">
            Pink Roof<span className="text-pink-500">.</span>
          </h2>

          <p className="text-sm leading-relaxed mb-6 text-gray-700">
            Pink Roof Interiors creates modern and functional spaces that reflect 
            your style and purpose.
          </p>

          {/* SOCIAL (NO LIBRARY) */}
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white transition">
              IG
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white transition">
              FB
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-black hover:bg-black hover:text-white transition">
              WA
            </a>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-xs uppercase mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>Salon Interiors</li>
            <li>Residential Design</li>
            <li>Commercial Spaces</li>
            <li>Renovation</li>
          </ul>
        </div>

        {/* NAV LINKS */}
        <div>
          <h4 className="text-xs uppercase mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-700">
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
          <h4 className="text-xs uppercase mb-6">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>India</li>
            <li>pinkroofinteriors@gmail.com</li>
            <li>+91 8563980030</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-pink-200 px-6 md:px-16 py-6 flex justify-between text-xs text-gray-600">
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