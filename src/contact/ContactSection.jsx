export default function ContactSection() {
  return (
    <section className="bg-[#1C1C1A] px-16 py-24 border-t border-[#C8A96E]/30">
      
      <div className="grid grid-cols-2 items-center gap-20">

        {/* LEFT CONTENT */}
        <div>

          {/* LABEL */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#C8A96E]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#C8A96E]">
              Get In Touch
            </span>
          </div>

          {/* HEADING */}
          <h2 className="text-[clamp(3rem,5vw,5rem)] font-serif font-light text-[#F7F4EE] leading-tight mb-6">
            Let&apos;s{" "}
            <em className="text-[#C8A96E] italic not-italic font-normal">
              Talk
            </em>
          </h2>

          {/* TEXT */}
          <p className="text-[#9B8F82] max-w-[500px] leading-[1.9] text-[15px]">
            Every great project begins with a conversation. We'd love to hear
            about your space and how we might help.
          </p>

        </div>

        {/* RIGHT ICON BOX */}
        <div className="flex justify-end">

          <div className="w-[140px] h-[140px] border border-[#C8A96E]/20 rounded-xl flex items-center justify-center relative overflow-hidden">

            {/* subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96E]/10 to-transparent"></div>

            {/* ICON (SVG MAIL) */}
            <svg
              className="w-14 h-14 text-[#C8A96E]/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v12H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>

          </div>

        </div>

      </div>

    </section>
  );
}