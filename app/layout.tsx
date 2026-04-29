import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Tatlıses Çiğköfte – Onikişubat / Kahramanmaraş",
  description:
    "Tatlıses Çiğköfte Onikişubat şubesi. Taze, doğal ve lezzetli çiğköfte, pide ve lahmacun. Yamaçtepe Mah. 93001 Sk. No:85/B Onikişubat / Kahramanmaraş",
  keywords: ["çiğköfte", "tatlıses", "kahramanmaraş", "onikişubat", "lahmacun", "pide"],
  openGraph: {
    title: "Tatlıses Çiğköfte – Onikişubat Şubesi",
    description: "Türkiye'nin en sevilen çiğköfte markası Kahramanmaraş'ta hizmetinizde.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
