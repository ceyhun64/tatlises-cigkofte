import Image from "next/image";
import { Flame, Leaf, Clock } from "lucide-react";

const menuItems = [
  {
    image: "/5.webp",
    badge: "EN POPÜLER",
    badgeColor: "bg-brand-red text-white",
    title: "Mega Çiğköfte Dürüm",
    description: "Sarımsak, limon ve özel baharatlarla hazırlanan imzamız. Bol malzemeli mega boy.",
    tags: ["Acılı / Acısız", "Büyük Boy"],
    icon: Flame,
    iconColor: "text-brand-red",
  },
  {
    image: "/11.webp",
    badge: "KLASİK",
    badgeColor: "bg-gray-800 text-white",
    title: "Tatlıses Dürüm",
    description: "İnce lavaş içinde taze çiğköfte, yeşillik ve domates. Her lokmada gerçek lezzet.",
    tags: ["Küçük / Büyük", "Klasik Tat"],
    icon: Leaf,
    iconColor: "text-gray-600",
  },
  {
    image: "/7.webp",
    badge: "TABAK",
    badgeColor: "bg-gray-600 text-white",
    title: "Çiğköfte Tabak",
    description: "Bol çiğköfte, taze nane, marul ve limon dilimleriyle hazırlanan doyurucu tabak.",
    tags: ["Acısız Mevcut", "Doyurucu"],
    icon: Leaf,
    iconColor: "text-gray-600",
  },
  {
    image: "/6.webp",
    badge: "SET MENÜ",
    badgeColor: "bg-gray-700 text-white",
    title: "Çiğköfte + İçecek Set",
    description: "Dürüm çiğköfte ve seçtiğiniz içecekle ekonomik set menü. Öğleden akşama geçerli.",
    tags: ["Pepsi / Ayran", "Ekonomik"],
    icon: Clock,
    iconColor: "text-gray-600",
  },
  {
    image: "/9.webp",
    badge: "ÖZEL SUNUM",
    badgeColor: "bg-brand-red-dark text-white",
    title: "Çiğköfte Şiş",
    description: "Şiş üzerinde özel sunumla hazırlanan, görsel ve lezzet açısından eşsiz deneyim.",
    tags: ["Garnitür Dahil", "Özel Sunum"],
    icon: Flame,
    iconColor: "text-brand-red",
  },
  {
    image: "/8.webp",
    badge: "KOMBO",
    badgeColor: "bg-gray-500 text-white",
    title: "Dürüm + Ayran Kombo",
    description: "Lezzetli dürüm çiğköfteniz yanında serinletici ayranla tam uyum.",
    tags: ["Soğuk Servis", "İdeal Öğün"],
    icon: Leaf,
    iconColor: "text-gray-600",
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-red text-xs font-bold tracking-widest uppercase border-b-2 border-brand-red pb-1 mb-4">Menümüz</span>
          <h2 className="font-display font-black text-gray-900 mb-3" style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>
            Lezzetlerimizi Keşfedin
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Taze ve doğal malzemelerle her gün özenle hazırlanan eşsiz tatlarımız
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white overflow-hidden card-hover animate-fade-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-0 left-0">
                    <span className={`text-[10px] font-black px-3 py-1.5 tracking-wider ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display font-bold text-gray-900 text-lg leading-tight">{item.title}</h3>
                    <Icon size={17} className={`${item.iconColor} shrink-0 mt-0.5 ml-2`} />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[11px] bg-gray-100 text-gray-600 px-2.5 py-1 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="tel:05447900446" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-bold px-8 py-4 shadow-lg hover:shadow-xl transition-all text-sm">
            Sipariş Vermek İçin Arayın
          </a>
        </div>
      </div>
    </section>
  );
}
