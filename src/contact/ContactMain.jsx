export default function ContactMain() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20 bg-[#FDFBF7]">
      
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">

        {/* LEFT SIDE */}
        <div>

          {/* LABEL */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#C8A96E]" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C8A96E]">
              Reach Us
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light text-[#1C1C1A] mb-6 font-[Cormorant_Garamond] leading-tight">
            We're{" "}
            <em className="text-[#C8A96E] italic not-italic font-normal">
              Here
            </em>{" "}
            for You
          </h2>

          <div className="w-10 h-[1px] bg-[#D6C9B8] mb-6 md:mb-8"></div>

          {/* INFO */}
          <div className="space-y-6 md:space-y-8 text-sm sm:text-base">

            <div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] mb-1">
                Email
              </div>
              <p className="text-[#1C1C1A] break-all">
                hello@elarainteriors.in
              </p>
            </div>

            <div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] mb-1">
                Phone
              </div>
              <p className="text-[#1C1C1A]">+91 98765 43210</p>
            </div>

            <div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] mb-1">
                Mumbai Studio
              </div>
              <p className="text-[#1C1C1A] leading-relaxed">
                12A, Carter Road <br />
                Bandra West, Mumbai 400 050
              </p>
            </div>

            <div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] mb-1">
                Delhi Studio
              </div>
              <p className="text-[#1C1C1A] leading-relaxed">
                B-47, Hauz Khas Village <br />
                New Delhi 110 016
              </p>
            </div>

            <div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C8A96E] mb-1">
                Office Hours
              </div>
              <p className="text-[#1C1C1A] leading-relaxed">
                Monday – Saturday <br />
                9:30 AM – 6:30 PM IST
              </p>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-8 md:mt-10">
            {["in", "ig", "pi"].map((s, i) => (
              <div
                key={i}
                className="w-8 h-8 sm:w-9 sm:h-9 border border-[#C8A96E]/30 flex items-center justify-center text-xs sm:text-sm text-[#9B8F82] hover:text-[#C8A96E] hover:border-[#C8A96E] transition"
              >
                {s}
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#F7F4EE] p-6 sm:p-8 md:p-10 lg:p-12">

          <h3 className="text-xl sm:text-2xl font-light mb-2 font-[Cormorant_Garamond]">
            Start Your Project
          </h3>

          <p className="text-xs sm:text-sm text-[#9B8F82] mb-6 sm:mb-8">
            Fill in the form and we'll be in touch within one business day.
          </p>

          {/* NAME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input className="input" placeholder="First Name" />
            <input className="input" placeholder="Last Name" />
          </div>

          <input className="input mb-4" placeholder="Email Address" />
          <input className="input mb-4" placeholder="Phone Number" />

          {/* SELECT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <select className="input">
              <option>Residential Design</option>
              <option>Commercial Design</option>
              <option>Hospitality Design</option>
              <option>Renovation</option>
              <option>Space Planning</option>
              <option>Consultation Only</option>
            </select>

            <select className="input">
              <option>Under ₹5 Lakhs</option>
              <option>₹5 – 15 Lakhs</option>
              <option>₹15 – 50 Lakhs</option>
              <option>₹50 Lakhs – 1 Cr</option>
              <option>Over ₹1 Crore</option>
            </select>
          </div>

          <textarea
            className="input mb-4 min-h-[120px]"
            placeholder="Tell us about your project..."
          />

          <button className="w-full py-3 sm:py-4 bg-[#1C1C1A] text-white text-[10px] sm:text-xs tracking-[0.15em] uppercase hover:bg-[#C8A96E] transition">
            Send Message →
          </button>

          <p className="text-[10px] sm:text-xs text-[#9B8F82] text-center mt-3">
            We respect your privacy and will never share your details.
          </p>

        </div>

      </div>
    </section>
  );
}