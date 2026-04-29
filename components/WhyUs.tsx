import { ShieldCheck, Leaf, Zap, Heart, Clock, Award } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Hijyenik Ortam",     desc: "Ana marka standartlarında hazırlanan ürünler, sertifikalı mutfak ortamı.", color: "text-brand-red" },
  { icon: Leaf,        title: "%100 Doğal",          desc: "Katkısız, doğal baharatlar ve günlük taze tedarik edilen malzemeler.",   color: "text-brand-red" },
  { icon: Zap,         title: "Hızlı Servis",        desc: "Siparişiniz dakikalar içinde hazır. Paket servis ile kapınıza kadar.",   color: "text-brand-red" },
  { icon: Heart,       title: "Müşteri Odaklı",      desc: "Her müşteri özel. Acılı veya acısız, porsiyon tercihlerinize göre.",     color: "text-brand-red" },
  { icon: Clock,       title: "Her Gün Açık",        desc: "Hafta içi 09:00–22:00, Pazar 10:00–21:00 saatleri arasında hizmet.",   color: "text-brand-red" },
  { icon: Award,       title: "Yetkili Franchise",   desc: "Tatlıses Gıda'nın resmi yetkili şubesi. Aynı kalite, aynı standart.",   color: "text-brand-red" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-red text-xs font-bold tracking-widest uppercase border-b-2 border-brand-red pb-1 mb-4">Neden Biz?</span>
          <h2 className="font-display font-black text-gray-900 mb-3" style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>
            Farkımız Nedir?
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            30 yılı aşkın deneyim ve sevgiyle yapılan lezzetleri sizinle buluşturuyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="bg-white p-8 hover:bg-red-50/50 transition-colors duration-300 animate-fade-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <Icon size={24} className={`${r.color} mb-4`} strokeWidth={1.8} />
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
