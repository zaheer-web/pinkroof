export default function PageHero() {
  return (
    <section className="pt-[160px] px-16 pb-20 bg-[var(--charcoal)] relative overflow-hidden">
      
      <div className="max-w-[700px]">
        <div className="text-[var(--gold)] uppercase tracking-[0.25em] text-xs flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[var(--gold)]"></span>
          Our Portfolio
        </div>

        <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-light text-[var(--cream)] mt-3 leading-tight font-serif">
          Work We're <em className="text-[var(--gold)]">Proud</em> Of
        </h1>

        <p className="text-[var(--taupe)] mt-6 max-w-[500px] leading-relaxed">
          Each project is a story — of discovery, collaboration...
        </p>
      </div>

      <div className="absolute right-16 top-1/2 -translate-y-1/2 text-[12rem] text-[rgba(200,169,110,0.06)] font-serif">
        P
      </div>

    </section>
  );
}