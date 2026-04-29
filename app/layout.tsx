import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tatlıses Çiğköfte – Onikişubat / Kahramanmaraş",
  description:
    "Tatlıses Çiğköfte Onikişubat franchise şubesi. Taze, doğal ve lezzetli çiğköfte, pide ve lahmacun. Yamaçtepe Mah. 93001 Sk. No:85/B Onikişubat / Kahramanmaraş",
  keywords: ["çiğköfte", "tatlıses", "kahramanmaraş", "onikişubat", "lahmacun", "pide"],
  openGraph: {
    title: "Tatlıses Çiğköfte – Onikişubat Şubesi",
    description: "Türkiye'nin en sevilen çiğköfte markası Kahramanmaraş'ta hizmetinizde.",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://www.tatlisescigkofte.com/wp-content/uploads/2023/02/tatlises-logo-2.png",
        width: 400,
        height: 134,
        alt: "Tatlıses Çiğköfte",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
