import { Phone, ChevronDown, Store } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[580px] flex items-center justify-center text-center px-4 py-16 overflow-hidden">
      {/* Arka plan resmi - şube fotoğrafı */}
      <div className="absolute inset-0">
        <Image
          src="/1.webp"
          alt="Tatlıses Çiğköfte Onikişubat Şubesi"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Koyu kırmızı overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red-dark/90 via-brand-red/85 to-[#A02020]/80" />
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-brand-gold/10 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-brand-gold/8 pointer-events-none" />

      <div className="relative z-10 max-w-xl">
        {/* Official logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://www.tatlisescigkofte.com/wp-content/uploads/2023/02/tatlises-logo-2.png"
            alt="Tatlıses Çiğköfte"
            width={200}
            height={68}
            className="h-16 w-auto object-contain"
            unoptimized
          />
        </div>

        {/* Franchise Badge */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold-light/60 text-brand-gold-light text-[11px] font-bold tracking-[2px] uppercase px-5 py-1.5 rounded-full">
            <Store size={12} />
            Franchise Şubesi
          </span>
          <span className="inline-block bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold tracking-[1.5px] uppercase px-5 py-1.5 rounded-full">
            Kahramanmaraş · Onikişubat
          </span>
        </div>

        {/* Tagline */}
        <blockquote className="mb-4">
          <p className="font-display text-2xl md:text-3xl italic text-brand-gold-light leading-snug mb-2">
            &ldquo;Yemediğimi yedirmem&rdquo;
          </p>
          <cite className="text-white/50 text-xs not-italic tracking-widest uppercase">
            — İbrahim Tatlıses
          </cite>
        </blockquote>

        {/* Sub-text */}
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 font-light max-w-sm mx-auto">
          Türkiye&apos;nin en sevilen çiğköfte markasının<br />
          <span className="text-brand-gold-light font-semibold">yetkili franchise şubesi</span> olarak hizmetinizdeyiz
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
