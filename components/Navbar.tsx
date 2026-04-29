"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#menu",      label: "Menü" },
    { href: "#why-us",    label: "Neden Biz?" },
    { href: "#about",     label: "Hakkımızda" },
    { href: "#contact",   label: "İletişim" },
  ];

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b transition-shadow duration-300 ${scrolled ? "shadow-md border-gray-200" : "border-gray-200 shadow-sm"}`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Tatlıses Çiğköfte" width={130} height={44} className="h-9 w-auto object-contain" unoptimized />
          <div className="hidden sm:block border-l border-gray-200 pl-3">
            <p className="text-brand-red text-[9px] uppercase tracking-widest leading-tight font-bold">Franchise Şubesi</p>
            <p className="text-gray-400 text-[9px] uppercase tracking-widest leading-tight">Onikişubat · Kahramanmaraş</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-600 hover:text-brand-red text-sm font-medium px-3 py-2 hover:bg-red-50 transition-all">
              {l.label}
            </a>
          ))}
          <a href="tel:05447900446" className="ml-3 flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-semibold text-sm px-4 py-2 transition-all">
            <Phone size={13} /> Ara: 0544 790 04 46
          </a>
        </div>

        <button className="md:hidden text-gray-700 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-gray-700 text-sm font-medium py-3 px-3 hover:bg-red-50 hover:text-brand-red transition-all">
              {l.label}
            </a>
          ))}
          <a href="tel:05447900446" className="flex items-center gap-2 bg-brand-red text-white font-bold text-sm px-4 py-3 justify-center mt-2">
            <Phone size={14} /> 0544 790 04 46
          </a>
        </div>
      )}
    </nav>
  );
}
