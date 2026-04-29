import { Phone, MapPin, Clock, ExternalLink, Globe } from "lucide-react";

export default function Contact() {
  const mapsUrl = "https://maps.google.com/?q=Yamaçtepe+Mahallesi+93001+Sokak+No+85+B+Onikişubat+Kahramanmaraş";

  return (
    <section id="contact" className="py-20 px-4 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-red text-xs font-bold tracking-widest uppercase border-b-2 border-brand-red pb-1 mb-4">İletişim</span>
          <h2 className="font-display font-black text-gray-900 mb-3" style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>
            Bize Ulaşın
          </h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">Sipariş, bilgi ve rezervasyon için bizimle iletişime geçin</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200 mb-2">
          {/* Phone */}
          <div className="bg-brand-red p-8 flex flex-col items-center text-center card-hover">
            <div className="border border-white/30 w-14 h-14 flex items-center justify-center mb-4">
              <Phone size={24} className="text-white" />
            </div>
            <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-2">Telefon</p>
            <a href="tel:05447900446" className="font-display font-bold text-2xl text-white hover:text-white/80 transition-colors">
              0544 790 04 46
            </a>
            <p className="text-white/50 text-xs mt-1">Sipariş ve bilgi için arayın</p>
          </div>

          {/* Address */}
          <div className="bg-white p-8 flex flex-col items-center text-center card-hover">
            <div className="bg-red-50 border border-red-100 w-14 h-14 flex items-center justify-center mb-4">
              <MapPin size={24} className="text-brand-red" />
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-2">Adres</p>
            <p className="font-display font-bold text-gray-900 text-base leading-snug">
              Yamaçtepe Mah. 93001 Sk. No:85/B
            </p>
            <p className="text-gray-500 text-sm mt-1">Onikişubat / Kahramanmaraş</p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-brand-red text-xs font-semibold hover:underline">
              Haritada Gör <ExternalLink size={11} />
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white p-8 flex flex-col items-center text-center card-hover">
            <div className="bg-red-50 border border-red-100 w-14 h-14 flex items-center justify-center mb-4">
              <Clock size={24} className="text-brand-red" />
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-3">Çalışma Saatleri</p>
            <div className="space-y-1.5 w-full max-w-[160px]">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">Pzt – Cmt</span>
                <span className="text-gray-900 font-bold">09:00 – 22:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">Pazar</span>
                <span className="text-gray-900 font-bold">10:00 – 21:00</span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500" />
              <span className="text-green-600 text-xs font-semibold">Şu an açık</span>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="border border-gray-200 bg-gray-50 h-52 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
          <MapPin size={40} className="text-brand-red" strokeWidth={1.5} />
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-800">Yamaçtepe Mah. 93001 Sk. No:85/B</p>
            <p className="text-gray-400 text-xs mt-0.5">Onikişubat / Kahramanmaraş</p>
          </div>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white text-xs font-bold px-5 py-2.5 transition-all shadow-md">
            Google Maps&apos;te Aç <ExternalLink size={12} />
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            { icon: Globe,     label: "Ana Site",  href: "https://www.tatlisescigkofte.com" },
          ].map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gray-200 text-gray-600 hover:text-brand-red hover:border-brand-red text-sm font-medium px-5 py-2.5 transition-all">
              <Icon size={14} /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
