import { ShieldCheck, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: ShieldCheck, text: "%100 Doğal İçerik" },
  { icon: Clock,       text: "Paket Servis Mevcut" },
  { icon: MapPin,      text: "Yamaçtepe Mah., Onikişubat" },
];

const menuItems = [
  {
    image: "https://www.tatlisescigkofte.com/wp-content/uploads/2023/08/ozel-cig-kofte-1024x682.jpg",
    badge: "EN POPÜLER",
    badgeClass: "bg-red-50 text-brand-red",
    title: "Tatlıses Çiğ Köfte",
    description:
      "Sarımsak, limon ve özel baharatlarla hazırlanan imzamız. Dürüm veya tabak seçeneğiyle servis edilir.",
    note: "Acılı / Acısız seçeneği",
  },
  {
    image: "https://www.tatlisescigkofte.com/wp-content/uploads/2023/08/pide-1-1-1024x683.jpg",
    badge: "FIRINDA",
    badgeClass: "bg-amber-50 text-brand-gold",
    title: "Tatlıses Pide",
    description:
      "Taş fırında pişirilen el yapımı pidelerimiz. Kıymalı, kaşarlı ve karışık çeşitler mevcuttur.",
    note: "Çeşitli dolgu seçenekleri",
  },
  {
    image: "https://www.tatlisescigkofte.com/wp-content/uploads/2023/08/lahmacun-10-1024x683.jpg",
    badge: "GELENEKSEL",
    badgeClass: "bg-orange-50 text-orange-700",
    title: "Tatlıses Lahmacun",
    description:
      "İnce hamur üzerinde özel kıyma harmanı. Taze sebze ve limonla servis edilir.",
    note: "İnce & çıtır hamur",
  },
];

export default function Menu() {
  return (
    <>
      {/* Features bar */}
      <div className="bg-brand-gold py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-brand-red-dark">
              <Icon size={16} strokeWidth={2.5} />
              <span className="text-xs font-bold">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu section */}
      <section id="menu" className="py-16 px-4 bg-brand-cream">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-block w-12 h-1 bg-brand-gold rounded mb-4" />
            <h2 className="font-display text-4xl font-bold text-brand-red-dark mb-3">
              Lezzetlerimiz
            </h2>
            <p className="text-brand-brown-light text-sm max-w-sm mx-auto leading-relaxed">
              Taze ve doğal malzemelerle hazırlanan eşsiz tatlarımızla sizi bekliyoruz
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-red/10 hover:shadow-md transition-shadow"
              >
                {/* Product image */}
                <div className="h-44 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Content */}
                <div className="p-5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.badgeClass}`}>
                    {item.badge}
                  </span>
                  <h3 className="font-display text-xl font-bold text-brand-red-dark mt-2.5 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-brown-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-brand-cream-dark flex items-center justify-between">
                    <span className="text-[11px] text-brand-brown-light">{item.note}</span>
                    <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
