import { ShieldCheck, Clock, MapPin } from "lucide-react";

const features = [
  { icon: ShieldCheck, text: "%100 Doğal İçerik" },
  { icon: Clock,       text: "Paket Servis Mevcut" },
  { icon: MapPin,      text: "Yamaçtepe Mah., Onikişubat" },
];

const menuItems = [
  {
    emoji: "🌯",
    badge: "EN POPÜLER",
    badgeColor: "bg-red-50 text-brand-red",
    bg: "from-brand-red-dark to-brand-red-light",
    title: "Çiğköfte",
    description:
      "Sarımsak, limon ve özel baharatlarla hazırlanan imzamız. Dürüm veya tabak seçeneğiyle servis edilir.",
    note: "Acılı / Acısız seçeneği",
  },
  {
    emoji: "🫓",
    badge: "FIRINDA",
    badgeColor: "bg-amber-50 text-brand-gold",
    bg: "from-[#7A3A10] to-[#B85A25]",
    title: "Tatlıses Pide",
    description:
      "Taş fırında pişirilen el yapımı pidelerimiz. Kıymalı, kaşarlı ve karışık çeşitler mevcuttur.",
    note: "Çeşitli dolgu seçenekleri",
  },
  {
    emoji: "🥙",
    badge: "GELENEKSEL",
    badgeColor: "bg-orange-50 text-orange-700",
    bg: "from-[#6B2D10] to-[#A04515]",
    title: "Lahmacun",
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
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-red/8 hover:shadow-md transition-shadow"
              >
                {/* Image area */}
                <div
                  className={`bg-gradient-to-br ${item.bg} h-36 flex items-center justify-center text-6xl`}
                >
                  {item.emoji}
                </div>
                {/* Content */}
                <div className="p-5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
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
