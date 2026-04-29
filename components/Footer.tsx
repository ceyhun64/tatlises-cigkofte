import Image from "next/image";
import { Store, Phone, MapPin, Globe } from "lucide-react";

const navLinks = [
  { href: "#menu", label: "Menü" },
  { href: "#why-us", label: "Neden Biz?" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#contact", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-gray-300 relative overflow-hidden">
      {/* Üst Kırmızı Şerit Dekorasyonu */}
      <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand / Logo Bölümü */}
        <div className="md:col-span-5 space-y-6">
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Tatlıses Çiğköfte"
              width={180}
              height={60}
              className="h-12 w-auto object-contain brightness-110"
              unoptimized
            />
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10  w-fit">
              <Store size={12} className="text-red-500" />
              <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-400">
                Onikişubat Franchise Şubesi
              </span>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            Geleneksel lezzeti modern standartlarla buluşturuyoruz. Bu işletme
            Tatlıses Gıda&apos;nın yetkili şubesi olarak hijyen ve kalite
            esaslarına uygun hizmet vermektedir.
          </p>

          <div className="flex items-center gap-3">
            {[
              {
                icon: Globe,
                href: "https://www.tatlisescigkofte.com",
                label: "Web",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10  border border-white/5 bg-white/5 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <Icon
                  size={18}
                  className="text-gray-500 group-hover:text-white transition-colors"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Hızlı Linkler */}
        <div className="md:col-span-3">
          <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-red-600"></span>
            Sayfalar
          </h4>
          <ul className="grid grid-cols-1 gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-gray-500 hover:text-red-500 text-[15px] transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-[1px] bg-red-500 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100"></span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim Detayları */}
        <div className="md:col-span-4">
          <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-red-600"></span>
            İletişim
          </h4>
          <div className="space-y-5">
            <a
              href="tel:05447900446"
              className="group flex items-center gap-4 p-3  border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
            >
              <div className="w-10 h-10  bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                <Phone
                  size={18}
                  className="text-red-500 group-hover:text-white"
                />
              </div>
              <div>
                <p className="text-[10px] text-gray-600 uppercase font-bold">
                  Bizi Arayın
                </p>
                <p className="text-white font-medium">0544 790 04 46</p>
              </div>
            </a>

            <div className="flex gap-4 p-3">
              <div className="w-10 h-10  bg-red-600/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-red-500" />
              </div>
              <div>
                <p className="text-[10px] text-gray-600 uppercase font-bold mb-1">
                  Adres
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Yamaçtepe Mah. 93001 Sk.
                  <br />
                  No:85/B, Onikişubat / K.Maraş
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Bilgi Çubuğu */}
      <div className="border-t border-white/5 bg-black/20 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-400">Tatlıses Çiğköfte</span> – Tüm
            hakları saklıdır.
          </p>
          <div className="flex items-center gap-4">
            <span className="h-1 w-1  bg-red-600"></span>
            <p className="text-gray-700 text-[11px] font-medium uppercase tracking-tighter">
              Bağımsız Franchise İşletmesi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
