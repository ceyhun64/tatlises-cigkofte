import { Store, ExternalLink } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-red text-white py-2.5 px-4 overflow-hidden relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <Store size={12} className="text-white/70" />
          <span className="text-[11px] font-semibold tracking-wider uppercase text-white/70">
            Yetkili Franchise Şubesi
          </span>
        </div>
        <div className="flex-1 overflow-hidden hidden sm:block">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[
              "Günlük Taze Üretim",
              "%100 Doğal İçerik",
              "Hızlı Paket Servis",
              "Yüzlerce Mutlu Müşteri",
              "Günlük Taze Üretim",
              "%100 Doğal İçerik",
              "Hızlı Paket Servis",
              "Yüzlerce Mutlu Müşteri",
            ].map((t, i) => (
              <span key={i} className="text-[11px] text-white/60 mr-12">{t}</span>
            ))}
          </div>
        </div>
        <a
          href="https://www.tatlisescigkofte.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-white/80 text-[11px] font-bold hover:text-white transition-colors shrink-0 underline underline-offset-2"
        >
          Merkez site <ExternalLink size={10} />
        </a>
      </div>
    </div>
  );
}
