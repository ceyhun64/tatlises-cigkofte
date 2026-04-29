"use client";

import { useState } from "react";
import { Phone, Menu, X, Store } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#menu", label: "Menü" },
    { href: "#about", label: "Hakkımızda" },
    { href: "#contact", label: "İletişim" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-red-dark shadow-lg">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Tatlıses Çiğköfte"
            width={130}
            height={44}
            className="h-10 w-auto object-contain"
            unoptimized
          />
          <div className="hidden sm:block border-l border-white/20 pl-3">
            <p className="text-brand-gold-light text-[9px] uppercase tracking-widest leading-tight font-bold flex items-center gap-1">
              <Store size={9} />
              Franchise Şubesi
            </p>
            <p className="text-white/50 text-[9px] uppercase tracking-widest leading-tight">
              Onikişubat · Kahramanmaraş
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white text-sm font-semibold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:05447900446"
            className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-red-dark font-bold text-sm px-4 py-2 rounded-full transition-colors"
          >
            <Phone size={14} />
            0544 790 04 46
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-red-dark border-t border-white/10 px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 text-sm font-semibold py-2 border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:05447900446"
            className="flex items-center gap-2 bg-brand-gold text-brand-red-dark font-bold text-sm px-4 py-3 rounded-full justify-center mt-1"
          >
            <Phone size={14} />
            0544 790 04 46
          </a>
        </div>
      )}
    </nav>
  );
}
