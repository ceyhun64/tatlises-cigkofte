import { Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-red-dark via-brand-red to-[#A02020] min-h-[520px] flex items-center justify-center text-center px-4 py-16 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-gold/10 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-brand-gold/8 pointer-events-none" />

      <div className="relative z-10 max-w-xl">
        {/* Badge */}
        <span className="inline-block bg-brand-gold/20 border border-brand-gold-light/60 text-brand-gold-light text-[11px] font-bold tracking-[2px] uppercase px-5 py-1.5 rounded-full mb-6">
          Kahramanmaraş · Onikişubat
        </span>

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-6xl font-black text-white leading-tight mb-4">
          Tatlıses<br />
          <span className="text-brand-gold-light italic">Çiğköfte</span>
        </h1>

        {/* Sub-text */}
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 font-light max-w-sm mx-auto">
          Türkiye'nin en sevilen çiğköfte markası<br />Kahramanmaraş'ta hizmetinizde
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:05447900446"
            className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-red-dark font-bold text-sm px-7 py-3.5 rounded-full transition-colors shadow-lg"
          >
            <Phone size={15} />
            0544 790 04 46
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-full border border-white/30 transition-colors"
          >
            Menüyü Gör
            <ChevronDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
