// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold">Sayfa Bulunamadı</h2>
      <p className="text-gray-500">Aradığınız lezzet burada değil.</p>
      <Link href="/" className="mt-4 text-red-600 underline">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}