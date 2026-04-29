import { Phone, ChevronDown, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[660px] md:min-h-[760px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/1.webp" alt="Tatlıses Çiğköfte" fill sizes="100vw" className="object-cover object-center scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red-deeper/97 via-brand-red-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-20">
        <div className="max-w-2xl">
          <div className="animate-fade-up flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1 bg-white/10 border border-white/20 px-3 py-1.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={11} className="text-white fill-white" />)}
              <span className="text-white/80 text-[11px] ml-1 font-medium">Müşteriler tarafından sevildi</span>
            </div>
          </div>

          <h1 className="animate-fade-up delay-100 font-display font-black leading-none mb-4 text-white" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}>
            Gerçek Lezzet,
            <br />
            <em className="italic text-white/80">Her Lokmada.</em>
          </h1>

          <div className="animate-fade-up delay-200 border-l-2 border-white/40 pl-4 mb-6">
            <p className="font-display text-xl italic text-white/90 leading-snug">&ldquo;Yemediğimi yedirmem&rdquo;</p>
            <p className="text-white/45 text-xs mt-1 tracking-widest uppercase">— İbrahim Tatlıses</p>
          </div>

          <p className="animate-fade-up delay-300 text-white/70 text-lg leading-relaxed mb-8 max-w-md">
            Türkiye&apos;nin en sevilen çiğköfte markasının{" "}
            <span className="text-white font-semibold">Onikişubat yetkili franchise şubesi</span>{" "}
            olarak günlük taze ürünlerimizle hizmetinizdeyiz.
          </p>

          <div className="animate-fade-up delay-400 flex flex-wrap gap-3">
            <a href="tel:05447900446" className="flex items-center gap-2 bg-white text-brand-red-dark font-bold text-sm px-6 py-3.5 hover:bg-gray-100 transition-all shadow-lg">
              <Phone size={15} /> Hemen Ara
            </a>
            <a href="#menu" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm px-6 py-3.5 hover:bg-white/20 transition-all">
              Menüyü Keşfet <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      <a href="#menu" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors animate-float">
        <span className="text-[10px] tracking-widest uppercase">Aşağı Kaydır</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
