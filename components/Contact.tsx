import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const cards = [
  {
    icon: Phone,
    label: "Telefon",
    content: (
      <a
        href="tel:05447900446"
        className="font-display text-lg font-bold text-brand-red-dark hover:text-brand-red transition-colors"
      >
        0544 790 04 46
      </a>
    ),
  },
  {
    icon: MapPin,
    label: "Adres",
    content: (
      <p className="text-sm font-semibold text-brand-brown leading-relaxed">
        Yamaçtepe Mah. 93001 Sk. No:85/B
        <br />
        Onikişubat / Kahramanmaraş
      </p>
    ),
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    content: (
      <p className="text-sm font-semibold text-brand-brown leading-relaxed">
        Pazartesi – Cumartesi
        <br />
        09:00 – 22:00
        <br />
        <span className="text-brand-brown-light">Pazar: 10:00 – 21:00</span>
      </p>
    ),
  },
];

export default function Contact() {
  const mapsUrl =
    "https://maps.google.com/?q=Yamaçtepe+Mahallesi+93001+Sokak+No+85+B+Onikişubat+Kahramanmaraş";

  return (
    <section id="contact" className="py-16 px-4 bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block w-12 h-1 bg-brand-gold rounded mb-4" />
          <h2 className="font-display text-4xl font-bold text-brand-red-dark mb-2">
            Bize Ulaşın
          </h2>
          <p className="text-brand-brown-light text-sm">
            Siparişleriniz ve bilgi için
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {cards.map(({ icon: Icon, label, content }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-7 text-center shadow-sm border border-brand-red/7 hover:shadow-md transition-shadow"
            >
              <div className="w-13 h-13 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-red to-brand-red-light flex items-center justify-center"
                style={{ width: 52, height: 52 }}>
                <Icon size={22} color="white" strokeWidth={2} />
              </div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-brand-brown-light mb-2">
                {label}
              </p>
              {content}
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-red/7">
          <div className="bg-gradient-to-br from-[#e8dfd0] to-[#d4c9b8] h-48 flex flex-col items-center justify-center gap-3">
            <MapPin size={36} color="#8B1A1A" strokeWidth={1.5} />
            <p className="text-sm font-semibold text-brand-brown">
              Yamaçtepe Mah. 93001 Sk. No:85/B, Onikişubat
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
            >
              Google Harita'da Aç
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
