// components/contact/ContactSection.jsx

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#fff7fb] px-6 md:px-16 py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#db3884]/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#ef91bc]/10 blur-[120px] rounded-full"></div>

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#db3884_1px,transparent_1px),linear-gradient(to_bottom,#db3884_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* LABEL */}
            <div className="flex items-center gap-4 mb-6">

              <div className="w-10 h-[1px] bg-[#db3884]"></div>

              <span className="text-[11px] tracking-[0.3em] uppercase text-[#db3884]">
                Get In Touch
              </span>
            </div>

            {/* HEADING */}
            <h2 className="text-[clamp(3rem,6vw,5rem)] leading-[1] font-serif font-light text-[#2b1120] mb-8">

              Let&apos;s{" "}

              <span className="italic text-[#db3884]">
                Talk
              </span>
            </h2>

            {/* TEXT */}
            <p className="text-[#6d4d5d] text-base md:text-lg leading-[2] max-w-[550px]">
              Every beautiful interior begins with a conversation.
              Share your ideas, vision, and dream space with us —
              and let Pinkroof Interior transform it into something timeless.
            </p>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-5 mt-10">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-[#db3884]/10 flex items-center justify-center">
                  📞
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#db3884] mb-1">
                    Phone
                  </p>

                  <p className="text-[#2b1120]">
                    +91 85639 80030
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-[#db3884]/10 flex items-center justify-center">
                  ✉️
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#db3884] mb-1">
                    Email
                  </p>

                  <p className="text-[#2b1120]">
                    contact.pinkroof@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 bg-[#db3884]/10 flex items-center justify-center">
                  📍
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#db3884] mb-1">
                    Location
                  </p>

                  <p className="text-[#2b1120]">
                    Lucknow, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[420px] bg-white/70 backdrop-blur-xl border border-[#db3884]/10 p-10 shadow-2xl">

              {/* SMALL LABEL */}
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#db3884] mb-5">
                Start Your Project
              </p>

              {/* TITLE */}
              <h3 className="text-3xl font-serif font-light text-[#2b1120] leading-tight mb-6">

                Ready To Create Your{" "}

                <span className="italic text-[#db3884]">
                  Dream Space?
                </span>
              </h3>

              {/* TEXT */}
              <p className="text-[#6d4d5d] leading-[1.9] mb-8">
                From luxury homes to premium commercial interiors,
                we craft elegant experiences tailored to your lifestyle.
              </p>

              {/* BUTTON */}
             {/* BUTTON */}
<a
  href="https://wa.me/918563980030"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full"
>
  <button className="w-full py-4 bg-[#db3884] text-white uppercase tracking-[0.25em] text-xs hover:bg-[#d6559d] transition duration-500 shadow-[0_0_30px_rgba(219,56,132,0.25)]">
    Schedule Consultation
  </button>
</a>

              {/* DECORATIVE ICON */}
              <div className="absolute top-6 right-6 text-[#db3884]/10 text-7xl font-serif">
                ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}