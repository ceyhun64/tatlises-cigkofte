import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack yerine webpack kullan (daha stabil)
  // Turbopack'te @tailwindcss/postcss ile panic hatası oluşuyor
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tatlisescigkofte.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
