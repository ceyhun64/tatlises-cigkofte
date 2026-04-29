import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tatlıses Çiğköfte – Onikişubat Franchise Şubesi | Kahramanmaraş",
  description:
    "Tatlıses Çiğköfte Onikişubat yetkili franchise şubesi. Günlük taze, %100 doğal çiğköfte. Kahramanmaraş'ın en sevilen lezzet durağı.",
  keywords: ["çiğköfte", "tatlıses", "kahramanmaraş", "onikişubat", "franchise"],
  openGraph: {
    title: "Tatlıses Çiğköfte – Onikişubat",
    description: "Tatlıses Çiğköfte'nin Onikişubat yetkili franchise şubesi.",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/logo.png", width: 400, height: 134, alt: "Tatlıses Çiğköfte" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
