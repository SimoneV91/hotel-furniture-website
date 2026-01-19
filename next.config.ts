import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hotel-furniture-website", // nome del repo
  assetPrefix: "/hotel-furniture-website/", // fa puntare i CSS/JS correttamente
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
