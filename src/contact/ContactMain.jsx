export default function ContactMain() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100 px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-24">

      {/* BG EFFECTS */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-300/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-fuchsia-300/20 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="pt-4">

          {/* TAG */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-pink-100 border border-pink-200 mb-6">
            <div className="w-2 h-2 bg-pink-500 animate-pulse" />

            <span className="text-[11px] tracking-[0.2em] uppercase text-pink-600 font-medium">
              Contact Us
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold text-gray-900 mb-6">
            Let’s Build
            <span className="block text-pink-500">
              Something Beautiful
            </span>
          </h2>

          {/* DESC */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mb-10">
            We’d love to hear about your ideas, projects, and vision.
            Fill out the form and our team will connect with you shortly.
          </p>

          {/* INFO CARDS */}
          <div className="space-y-4">

            {[
              {
                title: "Phone",
                value: "+91 85639 80030",
              },
              {
                title: "Email",
                value: "contact.pinkroof@gmail.com",
              },
              {
                title: "Website",
                value: "www.pinkroof.in",
                link: "https://www.pinkroof.in",
              },
              {
                title: "Instagram",
                value: "@id.rukhsar_fatima_rizvi",
                link: "https://www.instagram.com/id.rukhsar_fatima_rizvi",
              },
              {
                title: "Location",
                value: "Based in India",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-xl border border-pink-100 p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >

                <p className="text-xs uppercase tracking-[0.2em] text-pink-500 mb-2">
                  {item.title}
                </p>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 leading-relaxed text-sm sm:text-base group-hover:text-pink-600 transition break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-800 leading-relaxed text-sm sm:text-base group-hover:text-pink-600 transition">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* SOCIAL BUTTONS */}
         
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative">

          {/* GLOW */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-fuchsia-400 blur opacity-20" />

          {/* FORM BOX */}
          <div className="relative bg-white/80 backdrop-blur-2xl border border-white shadow-2xl p-6 sm:p-8 md:p-10">

            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Send a Message
              </h3>

              <p className="text-gray-500 text-sm sm:text-base">
                Share your details and we’ll get back within 24 hours.
              </p>
            </div>

            {/* INPUTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

              <input
                type="text"
                placeholder="First Name"
                className="inputStyle"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="inputStyle"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="inputStyle mb-4"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="inputStyle mb-4"
            />

            {/* SELECTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

              <select className="inputStyle">
                <option>Interior Design</option>
                <option>Branding</option>
                <option>Web Design</option>
                <option>Consultation</option>
              </select>

              <select className="inputStyle">
                <option>Budget Range</option>
                <option>₹10k - ₹50k</option>
                <option>₹50k - ₹1L</option>
                <option>₹1L+</option>
              </select>
            </div>

            {/* MESSAGE */}
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="inputStyle mb-6 resize-none"
            />

            {/* BUTTON */}
            <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold tracking-wide hover:scale-[1.02] hover:shadow-2xl transition-all duration-300">
              Send Message →
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              We respect your privacy and never share your details.
            </p>
          </div>
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style jsx>{`
        .inputStyle {
          width: 100%;
          padding: 14px 18px;
          border: 1px solid #fbcfe8;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          outline: none;
          transition: all 0.3s ease;
          font-size: 14px;
          color: #111827;
        }

        .inputStyle:focus {
          border-color: #ec4899;
          box-shadow: 0 0 0 4px rgba(236,72,153,0.15);
          background: white;
        }

        select.inputStyle {
          appearance: none;
        }
      `}</style>
    </section>
  );
}