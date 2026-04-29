const stats = [
  { value: "1990",    label: "Kuruluş Yılı",  suffix: "" },
  { value: "500",     label: "Şube Sayısı",    suffix: "+" },
  { value: "100",     label: "Doğal İçerik",   suffix: "%" },
  { value: "Günlük",  label: "Taze Üretim",    suffix: "" },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-red py-5 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center py-3 px-4">
            <span className="font-display font-black text-2xl md:text-3xl text-white leading-none">
              {s.value}<span className="text-white/60">{s.suffix}</span>
            </span>
            <span className="text-white/55 text-xs mt-1 font-medium tracking-wide">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
