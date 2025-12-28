import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/keystatic",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
