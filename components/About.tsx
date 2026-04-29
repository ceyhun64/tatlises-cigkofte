import { Store } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "1990", label: "Marka Kuruluş Yılı" },
  { value: "%100", label: "Doğal İçerik" },
  { value: "Her Gün", label: "Taze Hazır" },
  { value: "Yetkili", label: "Franchise Şubesi" },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 px-4 border-t border-gray-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <div className="inline-block w-10 h-0.5 bg-brand-red mb-5" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-red-dark mb-5 leading-tight">
            Neden{" "}
            <span className="text-brand-red italic">Tatlıses?</span>
          </h2>

          {/* Franchise Notice */}
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 mb-5">
            <Store size={18} className="text-brand-red shrink-0 mt-0.5" />
            <div>
              <p className="text-brand-red text-xs font-bold uppercase tracking-wider mb-1">
                Yetkili Franchise Şubesi
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Bu işyeri, Tatlıses Gıda tarafından yetkilendirilmiş bağımsız bir franchise şubesidir.
                Tüm ürünler ana markanın standart ve kalitesinde üretilmektedir.
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            1990 yılında İbrahim Tatlıses tarafından kurulan Tatlıses Şirketler
            Grubu, Tatlıses Gıda çatısı altında Türkiye&apos;nin dört bir yanında
            yüzlerce şubeyle hizmet vermektedir.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Onikişubat franchise şubemizde de aynı fabrika standardında, günlük taze
            üretilen çiğköfte lezzetlerini sizlere sunuyoruz.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Hijyenik ortamda, gülümsemeyle hazırlanan ürünlerimiz; müşteri
            memnuniyetini her şeyin önünde tutan anlayışımızla kapınıza kadar
            ulaşıyor.
          </p>

          <a
            href="https://www.tatlisescigkofte.com/hakkimizda/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-7 text-brand-red text-sm font-bold hover:underline"
          >
            Marka hakkında daha fazla bilgi →
          </a>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative overflow-hidden h-50">
            <Image src="/4.webp" alt="Mutlu müşterilerimiz" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="relative overflow-hidden h-50">
            <Image src="/12.webp" alt="Tatlıses çiğköfte tabak" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="col-span-2 relative overflow-hidden h-64">
            <Image src="/13.webp" alt="Tatlıses şiş çiğköfte" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-brand-red-dark/40" />
            <div className="absolute inset-0 flex items-end p-3">
              {stats.map((s) => (
                <div key={s.label} className="flex-1 text-center">
                  <p className="font-display text-lg font-black text-white leading-none">{s.value}</p>
                  <p className="text-white/70 text-[9px] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
