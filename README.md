# Tatlıses Çiğköfte – Onikişubat Şubesi

Tek sayfalık (single-page) Next.js tanıtım websitesi. Tatlıses Çiğköfte'nin **Onikişubat / Kahramanmaraş** yetkili franchise şubesi için hazırlanmıştır. Site; şube menüsünü, marka hikayesini, müşteri yorumlarını, fotoğraf galerisini ve iletişim bilgilerini tek bir açılış sayfasında (`app/page.tsx`) sunar.

> package.json içindeki proje adı: `tatlises-onikissubat`.

## Overview

Bu proje statik/vitrin niteliğinde bir **frontend** sitesidir. `app/` dizininde herhangi bir `api/**/route.ts` dosyası bulunmadığı doğrulanmıştır — yani sunucu tarafında çalışan bir API katmanı, veritabanı bağlantısı veya kimlik doğrulama akışı yoktur. Sayfa; sabit (hard-coded) içerik dizileriyle (menü ürünleri, yorumlar, istatistikler vb.) React bileşenlerinden oluşturulur.

## Features (Doğrulanmış)

Aşağıdaki liste `app/page.tsx` ve ilgili bileşen dosyaları okunarak doğrulanmıştır:

- **Duyuru şeridi** (`components/AnnouncementBar.tsx`) — kayan (marquee) metinle "Günlük Taze Üretim", "%100 Doğal İçerik" gibi vurgular ve ana siteye (`tatlisescigkofte.com`) bağlantı.
- **Sticky navigasyon çubuğu** (`components/Navbar.tsx`) — scroll'a göre gölge efekti, mobilde açılır/kapanır hamburger menü, doğrudan arama bağlantısı (`tel:`).
- **Hero bölümü** (`components/Hero.tsx`) — arka plan görseli, İbrahim Tatlıses'e ait "Yemediğimi yedirmem" alıntısı, "Hemen Ara" ve "Menüyü Keşfet" CTA butonları.
- **İstatistik çubuğu** (`components/StatsBar.tsx`) — sabit değerlerle kuruluş yılı (1990), şube sayısı (500+), doğal içerik oranı (%100) ve "Günlük" taze üretim vurgusu.
- **Menü bölümü** (`components/Menu.tsx`) — 6 adet sabit menü kalemi (Mega Çiğköfte Dürüm, Tatlıses Dürüm, Çiğköfte Tabak, Set Menü, Çiğköfte Şiş, Dürüm + Ayran Kombo), her biri görsel, rozet ve etiketlerle.
- **"Neden Biz?" bölümü** (`components/WhyUs.tsx`) — 6 maddelik sabit içerik (hijyen, doğallık, hız, müşteri odaklılık, çalışma saatleri, yetkili franchise vurgusu).
- **Hakkımızda bölümü** (`components/About.tsx`) — marka tarihi (1990, İbrahim Tatlıses), franchise bilgilendirmesi ve marka sitesine dış bağlantı.
- **Müşteri yorumları** (`components/Testimonials.tsx`) — 4 adet sabit (kod içinde tanımlı, dinamik/CMS kaynaklı değil) örnek yorum.
- **Fotoğraf galerisi** (`components/Gallery.tsx`) — `public/` klasöründeki 6 ürün görselinden oluşan ızgara galeri.
- **İletişim bölümü** (`components/Contact.tsx`) — telefon, adres, çalışma saatleri kartları ve Google Maps bağlantısı (harita gömülü değildir, sadece dış bağlantı ve statik bir yer tutucu kutu vardır).
- **Footer** (`components/Footer.tsx`) — marka logosu, sayfa içi bağlantılar, iletişim bilgileri, telif hakkı satırı.
- **Özel 404 sayfası** (`app/not-found.tsx`) — "Sayfa Bulunamadı" mesajı ve ana sayfaya dönüş bağlantısı.
- **Google Fonts entegrasyonu** — `next/font/google` ile Fraunces (başlık/serif) ve Outfit (gövde/sans) fontları (`app/layout.tsx`).
- **SEO metadata** — `app/layout.tsx` içinde Türkçe başlık, açıklama, anahtar kelimeler ve OpenGraph verileri tanımlı.

### Doğrulanan ama kullanılmayan/eksik kalan noktalar

- `components/FranchiseBanner.tsx` dosyası projede mevcuttur ancak **hiçbir sayfada import edilmemektedir** (kod içinde ölü/kullanılmayan bileşen). Kullanmak isterseniz `app/page.tsx` içine manuel olarak eklemeniz gerekir.
- `components/ui/` klasöründe tam bir shadcn/ui bileşen kütüphanesi (yaklaşık 50 bileşen: dialog, sidebar, calendar, chart, carousel, command vb.) hazır bulunur, fakat mevcut sayfa bölümlerinin (`Hero`, `Menu`, `About` vb.) **hiçbiri bu bileşenleri kullanmamaktadır** — bu bileşenler yalnızca birbirlerini import eder, ileride kullanılmak üzere iskelet halinde durur.
- `next.config.ts` içinde `images.remotePatterns` ile `www.tatlisescigkofte.com` uzak görsel kaynağına izin verilmiştir, fakat mevcut kod tabanında hiçbir bileşen bu uzak host'tan görsel çekmemektedir — tüm görseller `public/` klasöründen yerel olarak servis edilir.

## Screenshots

Ayrı bir `screenshots/` klasörü veya ekran görüntüsü dosyası bulunmamaktadır; bu nedenle bu bölüm eklenmemiştir. Sitede kullanılan gerçek ürün/mekân görselleri `public/1.webp` – `public/14.webp` ve `public/logo.png` dosyalarıdır (bkz. Folder Structure).

## Technology Stack

`package.json` içinde doğrulanmıştır:

- **Framework:** Next.js 16.2.4 (App Router)
- **UI Kütüphanesi:** React 19.2.4 / React DOM 19.2.4
- **Dil:** TypeScript 5 (strict mode aktif, bkz. `tsconfig.json`)
- **Stil:** Tailwind CSS v4 (`@tailwindcss/postcss`), `tw-animate-css`
- **Bileşen Sistemi:** shadcn/ui (`shadcn` CLI paketi, `components.json` — style: `radix-nova`, baseColor: `neutral`), `radix-ui`, `@base-ui/react`
- **İkonlar:** `lucide-react`
- **Diğer UI yardımcıları:** `class-variance-authority`, `clsx`, `tailwind-merge`, `cmdk`, `embla-carousel-react`, `date-fns`, `react-day-picker`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`, `input-otp`, `next-themes`
- **Font:** `next/font/google` üzerinden Fraunces ve Outfit

Bir backend/API katmanı, ORM (ör. Prisma) veya veritabanı bağımlılığı **tespit edilmemiştir**.

## Architecture

- Next.js **App Router** kullanılır (`app/layout.tsx`, `app/page.tsx`).
- Tek route mevcuttur: kök sayfa (`/`). `app/api/**/route.ts` deseninde herhangi bir dosya bulunmadığından proje **saf bir frontend/statik vitrin sitesidir** — sunucu tarafı API endpoint'i yoktur.
- Sayfa, tek bir `<main>` içinde art arda dizilmiş bağımsız bölüm bileşenlerinden (`components/*.tsx`) oluşur (bkz. `app/page.tsx`).
- Bölüm bileşenlerinin içerikleri (menü kalemleri, yorumlar, istatistikler, "neden biz" maddeleri) bileşen dosyalarının içine gömülü sabit (hard-coded) JavaScript dizileridir; harici bir CMS veya veri kaynağı kullanılmaz.
- `lib/utils.ts` içindeki `cn()` yardımcı fonksiyonu (`clsx` + `tailwind-merge`), shadcn bileşenlerinin standart className birleştirme deseni için kullanılır.
- `hooks/use-mobile.ts` içindeki `useIsMobile()` hook'u, `window.matchMedia` ile 768px altı ekranları tespit eder (shadcn `sidebar` bileşeni için hazırlanmış olup site içeriğinde doğrudan kullanıldığı tespit edilmemiştir).

## Folder Structure

```
├── app/
│   ├── favicon.ico
│   ├── globals.css        # Tailwind v4 @theme, marka renkleri, animasyon keyframe'leri
│   ├── layout.tsx         # Kök layout, fontlar, SEO metadata
│   ├── not-found.tsx      # Özel 404 sayfası
│   └── page.tsx           # Tek route: tüm bölümleri birleştiren ana sayfa
├── components/
│   ├── About.tsx
│   ├── AnnouncementBar.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── FranchiseBanner.tsx   # Mevcut ama hiçbir yerde kullanılmıyor
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── Menu.tsx
│   ├── Navbar.tsx
│   ├── StatsBar.tsx
│   ├── Testimonials.tsx
│   ├── WhyUs.tsx
│   └── ui/                # shadcn/ui bileşen kütüphanesi (~50 dosya, sayfa içeriğinde kullanılmıyor)
├── hooks/
│   └── use-mobile.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── 1.webp – 14.webp   # Ürün/mekân görselleri
│   └── logo.png           # Marka logosu
├── components.json         # shadcn CLI yapılandırması
├── next.config.ts          # next/image remotePatterns yapılandırması
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Installation

```bash
npm install
```

Node.js ve npm sürüm gereksinimi `package.json` içinde belirtilmemiştir. Geliştirme bu ortamda Node.js v22.15.0 / npm 11.17.0 ile doğrulanmıştır.

## Environment Variables

Proje kök dizininde `.env`, `.env.local` veya `.env.example` dosyası **bulunmamaktadır** ve kod tabanında `process.env` kullanımı tespit edilmemiştir. Bu proje için ortam değişkeni gerekmez.

## Available Scripts

`package.json` içinde tanımlı script'ler (her biri doğrulanmıştır):

| Script | Komut | Açıklama |
|---|---|---|
| `npm run dev` | `next dev` | Geliştirme sunucusunu başlatır (hot reload). |
| `npm run build` | `next build` | Üretim için optimize edilmiş build oluşturur. |
| `npm run start` | `next start` | Önceden `build` alınmış üretim sürümünü çalıştırır. |
| `npm run lint` | `next lint` | **Doğrulanmış sorun:** Kurulu Next.js 16.2.4 CLI'sinde `lint` adında bir alt komut artık mevcut değildir (`next --help` çıktısında listelenmez) ve proje bağımlılıklarında `eslint`/`eslint-config-next` paketleri de bulunmamaktadır. Bu script çalıştırıldığında Next.js CLI, `lint` ifadesini bir dizin argümanı olarak yorumlar ve `Invalid project directory provided, no such directory: .../lint` hatasıyla başarısız olur. Script package.json'da tanımlıdır ancak şu an **işlevsel değildir**. Bkz. Troubleshooting.

## Development

```bash
npm run dev
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde çalışır (Next.js varsayılanı; `package.json` içinde port özelleştirmesi yoktur).

## Build

```bash
npm run build
npm run start
```

## Deployment

Depoda `vercel.json` veya herhangi bir CI/CD workflow dosyası (`.github/workflows/*`) bulunmadığından, dağıtım (deployment) hedefi/süreci doğrulanamamıştır. Proje standart bir Next.js uygulaması olduğundan Vercel, Node.js destekleyen herhangi bir sunucu (`npm run build && npm run start`) veya Next.js'in desteklediği diğer platformlarda çalıştırılabilir; ancak bu projeye özel bir yapılandırma tespit edilmemiştir.

## Configuration

- **`next.config.ts`** — `images.remotePatterns` ile yalnızca `https://www.tatlisescigkofte.com/wp-content/uploads/**` yoluna izin verir (kodda şu an kullanılmıyor, bkz. Features). Dosyadaki yorum satırına göre Turbopack yerine webpack tercih edilmesi gerektiği not düşülmüş (`@tailwindcss/postcss` ile Turbopack'te panic hatası yaşandığı belirtiliyor) ancak bu tercihi zorlayan bir CLI bayrağı/ayarı dosyada tanımlı değildir.
- **`components.json`** — shadcn CLI yapılandırması: style `radix-nova`, baseColor `neutral`, ikon kütüphanesi `lucide`, RTL kapalı, alias'lar (`@/components`, `@/lib`, `@/hooks` vb.).
- **`tsconfig.json`** — `strict: true`, path alias `@/*` → proje kökü, hedef `ES2017`.
- **Şubeye özel bilgiler** (adres, telefon, çalışma saatleri) kod içine gömülüdür ve güncellenmek istenirse şu dosyalarda elle değiştirilmesi gerekir:
  - `components/Hero.tsx` → telefon numarası (`tel:` bağlantısı)
  - `components/Navbar.tsx` → telefon numarası
  - `components/Contact.tsx` → adres, telefon, çalışma saatleri, Google Maps sorgu bağlantısı
  - `components/Footer.tsx` → şube adı, telefon, adres
  - `app/layout.tsx` → SEO metadata (başlık, açıklama, anahtar kelimeler)

## Troubleshooting

- **`npm run lint` hata veriyor / çalışmıyor:** Bu beklenen bir durumdur — kurulu Next.js sürümünde `next lint` komutu kaldırılmıştır ve proje `eslint` bağımlılığı içermez. Lint kullanmak isterseniz projeye `eslint` ve `eslint-config-next` paketlerini elle eklemeniz ve bir ESLint yapılandırma dosyası (`eslint.config.mjs`) oluşturmanız gerekir.
- **Turbopack ile derleme sırasında panic/çökme:** `next.config.ts` dosyasındaki yorum satırına göre `@tailwindcss/postcss` ile Turbopack arasında bilinen bir uyumsuzluk bildirilmiştir. Sorun yaşarsanız `next dev --turbo` yerine varsayılan (webpack tabanlı) `next dev` komutunu kullanın.
- **Görseller yüklenmiyor:** Uzak bir görsel eklerseniz, `next/image` yalnızca `next.config.ts` içindeki `remotePatterns` listesinde tanımlı host'lardan (şu an yalnızca `www.tatlisescigkofte.com`) görsel yüklemeye izin verir. Farklı bir kaynaktan görsel eklemeden önce bu listeyi güncelleyin.
- **Telefon/adres bilgileri güncel değil:** Bu bilgiler statik olarak bileşen dosyalarına gömülüdür; bkz. Configuration bölümündeki dosya listesi.

## License

Depoda bir `LICENSE` dosyası bulunmadığından lisans bilgisi doğrulanamamıştır.
