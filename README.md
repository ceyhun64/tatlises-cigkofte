# Tatlıses Çiğköfte – Onikişubat Şubesi

Tatlıses Çiğköfte'nin **Onikişubat / Kahramanmaraş** franchise şubesi için Next.js websitesi.

## Kurulum

```bash
npm install
npm run dev
```

## Özellikler

- Resmi Tatlıses logosu (tatlisescigkofte.com'dan çekilir)
- Resmi ürün görselleri (Çiğköfte, Pide, Lahmacun)
- İbrahim Tatlıses imza sözü: *"Yemediğimi yedirmem"*
- Şubeye özel bilgiler: adres, telefon, çalışma saatleri
- Mobil uyumlu responsive tasarım

## Şube Bilgileri

- **Adres:** Yamaçtepe Mah. 93001 Sk. No:85/B, Onikişubat / Kahramanmaraş
- **Telefon:** 0544 790 04 46
- **Çalışma Saatleri:** Pzt–Cmt 09:00–22:00 / Pazar 10:00–21:00

## Değiştirilecek Bilgiler

Şubeye özel bilgileri güncellemek için:
- `components/Hero.tsx` → telefon, rozet
- `components/Navbar.tsx` → telefon
- `components/Contact.tsx` → adres, telefon, çalışma saatleri
- `components/Footer.tsx` → şube adı
