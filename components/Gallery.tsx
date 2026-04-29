import Image from "next/image";

const photos = [
  { src: "/5.webp",  alt: "Mega Dürüm" },
  { src: "/11.webp", alt: "Tatlıses Dürüm" },
  { src: "/7.webp",  alt: "Tabak" },
  { src: "/6.webp",  alt: "Set Menü" },
  { src: "/9.webp",  alt: "Şiş" },
  { src: "/8.webp",  alt: "Kombo" },
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-brand-red text-xs font-bold tracking-widest uppercase border-b-2 border-brand-red pb-1 mb-4">Galeri</span>
          <h2 className="font-display font-black text-gray-900" style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>
            Fotoğraflarımız
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {photos.map((p, idx) => (
            <div
              key={p.src}
              className={`relative overflow-hidden animate-scale-in ${idx === 0 ? "row-span-2 min-h-[400px]" : "h-48"}`}
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
