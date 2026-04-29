import { ShieldCheck, Clock, MapPin } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: ShieldCheck, text: "%100 Doğal İçerik" },
  { icon: Clock,       text: "Paket Servis Mevcut" },
  { icon: MapPin,      text: "Yamaçtepe Mah., Onikişubat" },
];

const menuItems = [
  {
    image: "/5.webp",
    badge: "EN POPÜLER",
    badgeClass: "bg-red-50 text-brand-red",
    title: "Mega Çiğköfte Dürüm",
    description:
      "Sarımsak, limon ve özel baharatlarla hazırlanan imzamız. Bol malzemeli mega boy dürüm seçeneğiyle servis edilir.",
    note: "Acılı / Acısız seçeneği",
  },
  {
    image: "/11.webp",
    badge: "KLASİK",
    badgeClass: "bg-amber-50 text-brand-gold",
    title: "Tatlıses Dürüm",
    description:
      "İnce lavaş içinde taze çiğköfte, yeşillik ve domates. Her lokmada gerçek lezzet.",
    note: "Küçük / Büyük boy",
  },
  {
    image: "/7.webp",
    badge: "TABAK",
    badgeClass: "bg-orange-50 text-orange-700",
    title: "Çiğköfte Tabak",
    description:
      "Bol miktarda çiğköfte, taze nane, marul ve limon dilimleriyle hazırlanan doyurucu tabak seçeneği.",
    note: "Acısız seçenek mevcut",
  },
  {
    image: "/6.webp",
    badge: "SET MENÜ",
    badgeClass: "bg-blue-50 text-blue-700",
    title: "Çiğköfte + İçecek Set",
    description:
      "Dürüm çiğköfte ve seçtiğiniz içecekle ekonomik set menü. Öğleden akşama kadar geçerlidir.",
    note: "Pepsi / Ayran seçeneği",
  },
  {
    image: "/9.webp",
    badge: "ÖZEL",
    badgeClass: "bg-purple-50 text-purple-700",
    title: "Çiğköfte Şiş",
    description:
      "Şiş üzerinde özel sunumla hazırlanan, görsel ve lezzet açısından hem göze hem damağa hitap eden özel servis.",
    note: "Garnitür ile birlikte",
  },
  {
    image: "/8.webp",
    badge: "DÜRÜM + AYRAN",
    badgeClass: "bg-green-50 text-green-700",
    title: "Dürüm + Ayran Kombo",
    description:
      "Lezzetli dürüm çiğköfteniz yanında serinletici ayranla tam bir uyum. Öğün atlamayanlar için ideal.",
    note: "Soğuk servis",
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
