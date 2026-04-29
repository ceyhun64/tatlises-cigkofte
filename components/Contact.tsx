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
      <p className="text-sm font-semibold text-gray-700 leading-relaxed">
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
      <p className="text-sm font-semibold text-gray-700 leading-relaxed">
        Pazartesi – Cumartesi
        <br />
        09:00 – 22:00
        <br />
        <span className="text-gray-400">Pazar: 10:00 – 21:00</span>
      </p>
    ),
  },
];

export default function Contact() {
  const mapsUrl =
    "https://maps.google.com/?q=Yamaçtepe+Mahallesi+93001+Sokak+No+85+B+Onikişubat+Kahramanmaraş";

  return (
    <section id="contact" className="py-16 px-4 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-block w-12 h-0.5 bg-brand-red mb-4" />
          <h2 className="font-display text-4xl font-bold text-brand-red-dark mb-2">
            Bize Ulaşın
          </h2>
          <p className="text-gray-500 text-sm">
            Siparişleriniz ve bilgi için
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {cards.map(({ icon: Icon, label, content }) => (
            <div
              key={label}
              className="bg-white p-7 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div
                className="mx-auto mb-4 bg-brand-red flex items-center justify-center"
                style={{ width: 52, height: 52 }}
              >
                <Icon size={22} color="white" strokeWidth={2} />
              </div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-2">
                {label}
              </p>
              {content}
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="bg-white overflow-hidden shadow-sm border border-gray-200">
          <div className="bg-gray-50 h-48 flex flex-col items-center justify-center gap-3">
            <MapPin size={36} color="#c0392b" strokeWidth={1.5} />
            <p className="text-sm font-semibold text-gray-700">
              Yamaçtepe Mah. 93001 Sk. No:85/B, Onikişubat
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white text-xs font-bold px-5 py-2.5 transition-colors"
            >
              Google Harita&apos;da Aç
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
