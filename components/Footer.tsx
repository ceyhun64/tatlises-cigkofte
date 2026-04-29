import Image from "next/image";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tatlisescigkoftemerkez" },
  { label: "Facebook",  href: "https://www.facebook.com/tatlisesgida" },
  { label: "TikTok",    href: "https://www.tiktok.com/@tatlisesgida" },
  { label: "Ana Site",  href: "https://www.tatlisescigkofte.com" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-brown py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        {/* Official logo */}
        <Image
          src="https://www.tatlisescigkofte.com/wp-content/uploads/2023/02/tatlises-logo-2.png"
          alt="Tatlıses Çiğköfte"
          width={140}
          height={48}
          className="h-12 w-auto object-contain opacity-90"
          unoptimized
        />

        {/* Branch label */}
        <p className="text-white/40 text-[10px] uppercase tracking-widest -mt-3">
          Onikişubat Franchise Şubesi
        </p>

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

        {/* Copyright */}
        <p className="text-white/25 text-[11px] text-center leading-relaxed">
          © {new Date().getFullYear()} Tatlıses Çiğköfte – Onikişubat / Kahramanmaraş
          <br />
          Franchise şubesidir. Tüm hakları Tatlıses Gıda'ya aittir.
        </p>
      </div>
    </footer>
  );
}
