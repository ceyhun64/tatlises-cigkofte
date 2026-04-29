const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tatlisescigkoftemerkez" },
  { label: "Facebook",  href: "https://www.facebook.com/tatlisesgida" },
  { label: "TikTok",    href: "https://www.tiktok.com/@tatlisesgida" },
  { label: "Ana Site",  href: "https://www.tatlisescigkofte.com" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-brown py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center font-display font-black text-base text-brand-red-dark select-none">
            T
          </div>
          <div>
            <p className="font-display font-bold text-white text-sm leading-tight">
              Tatlıses Çiğköfte
            </p>
            <p className="text-white/40 text-[10px] uppercase tracking-widest">
              Onikişubat Şubesi
            </p>
          </div>
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

        {/* Copyright */}
        <p className="text-white/25 text-[11px] text-center leading-relaxed">
          © {new Date().getFullYear()} Tatlıses Çiğköfte – Onikişubat / Kahramanmaraş
          <br />
          Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
