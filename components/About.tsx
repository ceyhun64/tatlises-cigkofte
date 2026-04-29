const stats = [
  { value: "%100", label: "Doğal" },
  { value: "Her Gün", label: "Taze Hazır" },
  { value: "Hızlı", label: "Paket Servis" },
  { value: "Uygun", label: "Fiyatlar" },
];

export default function About() {
  return (
    <section id="about" className="bg-brand-red-dark py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <div className="inline-block w-10 h-0.5 bg-brand-gold-light mb-5" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Neden{" "}
            <span className="text-brand-gold-light italic">Tatlıses?</span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Tatlıses Çiğköfte, yılların deneyimi ve kalitesiyle Türkiye'nin
            dört bir yanında hizmet vermektedir. Onikişubat şubemizde de aynı
            özeni ve kaliteyi sizlere sunuyoruz.
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            Her gün taze hazırlanan ürünlerimiz, hijyenik ortamda ve
            gülümsemeyle sizlere ulaştırılıyor. Müşteri memnuniyeti bizim için
            her şeyden önemlidir.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3.5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/8 border border-white/12 rounded-xl p-5 text-center"
            >
              <p className="font-display text-2xl font-black text-brand-gold-light">
                {s.value}
              </p>
              <p className="text-white/55 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
