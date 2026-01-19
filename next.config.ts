import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <- abilita l’export statico
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
