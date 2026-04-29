import { Store, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const highlights = [
  "1990 yılında İbrahim Tatlıses tarafından kuruldu",
  "Tüm Türkiye'de 500'den fazla yetkili şube",
  "Her ürün aynı fabrika standartlarında üretilir",
  "Günlük taze hammadde ile üretim yapılır",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <span className="inline-block text-brand-red text-xs font-bold tracking-widest uppercase border-b-2 border-brand-red pb-1 mb-5">Hakkımızda</span>
          <h2 className="font-display font-black text-gray-900 mb-5 leading-tight" style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>
            Neden <em className="italic text-brand-red">Tatlıses?</em>
          </h2>

          <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 mb-6">
            <Store size={17} className="text-brand-red shrink-0 mt-0.5" />
            <div>
              <p className="text-brand-red text-xs font-bold uppercase tracking-wider mb-1">Yetkili Franchise Şubesi</p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Bu işyeri, Tatlıses Gıda tarafından yetkilendirilmiş bağımsız bir franchise şubesidir.
                Tüm ürünler ana markanın standart ve kalitesinde üretilmektedir.
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            1990 yılında İbrahim Tatlıses tarafından kurulan Tatlıses Şirketler Grubu, yüzlerce şubeyle
            Türkiye&apos;nin dört bir yanına yayılmıştır. Onikişubat franchise şubemizde aynı fabrika
            standardında günlük taze ürünler sunuyoruz.
          </p>

          <ul className="space-y-2.5 mb-7">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className="text-brand-red shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{h}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://www.tatlisescigkofte.com/hakkimizda/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-red font-bold text-sm hover:gap-3 transition-all"
          >
            Marka hakkında daha fazla bilgi <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2 animate-fade-up delay-200">
          <div className="relative overflow-hidden h-48">
            <Image src="/4.webp" alt="Mutlu müşterilerimiz" fill sizes="25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative overflow-hidden h-48">
            <Image src="/12.webp" alt="Tatlıses çiğköfte tabak" fill sizes="25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="col-span-2 relative overflow-hidden h-60">
            <Image src="/13.webp" alt="Tatlıses şiş çiğköfte" fill sizes="50vw" className="object-cover object-center hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-red-deeper/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex p-4">
              {[
                { v: "1990", l: "Kuruluş" },
                { v: "%100", l: "Doğal" },
                { v: "Her Gün", l: "Taze" },
                { v: "Yetkili", l: "Şube" },
              ].map((s) => (
                <div key={s.l} className="flex-1 text-center">
                  <p className="font-display font-black text-white text-base leading-none">{s.v}</p>
                  <p className="text-white/60 text-[9px] mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
