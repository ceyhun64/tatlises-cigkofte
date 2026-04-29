import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayşe K.",
    location: "Onikişubat",
    rating: 5,
    text: "Lezzeti inanılmaz! Her gittiğimde aynı kalite. Mega dürüm favorim oldu.",
    date: "Ocak 2025",
  },
  {
    name: "Mehmet A.",
    location: "Kahramanmaraş",
    rating: 5,
    text: "Personel çok güler yüzlü, sipariş hızlı hazırlandı. Kesinlikle tavsiye ederim.",
    date: "Şubat 2025",
  },
  {
    name: "Fatma S.",
    location: "Onikişubat",
    rating: 5,
    text: "Çiğköfte sevenler mutlaka gelmeli. Taze malzeme ve nefis baharatlar.",
    date: "Mart 2025",
  },
  {
    name: "Ali R.",
    location: "Dulkadiroğlu",
    rating: 5,
    text: "Ailem ve arkadaşlarımla her hafta geliyoruz. Fiyat/kalite dengesi mükemmel.",
    date: "Nisan 2025",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-red text-xs font-bold tracking-widest uppercase border-b-2 border-brand-red pb-1 mb-4">Yorumlar</span>
          <h2 className="font-display font-black text-gray-900 mb-3" style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">Her gün yüzlerce mutlu müşteri kapımızdan ayrılıyor</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="bg-white p-6 card-hover animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <Quote size={20} className="text-brand-red/20 mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-brand-red fill-brand-red" />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
                <span className="text-gray-300 text-[10px]">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
