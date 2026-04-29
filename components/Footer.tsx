import Image from "next/image";
import { Store } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tatlisescigkoftemerkez",
  },
  { label: "Facebook", href: "https://www.facebook.com/tatlisesgida" },
  { label: "TikTok", href: "https://www.tiktok.com/@tatlisesgida" },
  { label: "Ana Site", href: "https://www.tatlisescigkofte.com" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-red-dark py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Official logo */}
        <Image
          src="/logo.png"
          alt="Tatlıses Çiğköfte"
          width={140}
          height={48}
          className="h-12 w-auto object-contain opacity-90"
          unoptimized
        />

        {/* Franchise label */}
        <div className="flex items-center gap-2 -mt-3">
          <Store size={11} className="text-white/60" />
          <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
            ONİKİŞUBAT Franchise Şubesi
          </p>
        </div>

        {/* Social / nav links */}
        <div className="flex flex-wrap justify-center gap-5">
          {socialLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/45 hover:text-white/70 text-xs transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-white/10" />

        {/* Copyright + Franchise Disclaimer */}
        <div className="text-center">
          <p className="text-white/30 text-[11px] leading-relaxed mb-2">
            © {new Date().getFullYear()} Tatlıses Çiğköfte – Onikişubat /
            Kahramanmaraş
          </p>
          <p className="text-white/20 text-[10px] leading-relaxed max-w-sm mx-auto">
            Bu işyeri Tatlıses Gıda&apos;nın yetkili franchise şubesidir ve
            bağımsız olarak işletilmektedir. Tüm marka hakları Tatlıses
            Gıda&apos;ya aittir.
          </p>
        </div>
      </div>
    </footer>
  );
}
