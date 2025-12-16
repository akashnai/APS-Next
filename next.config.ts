import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  rewrites() {
    return [
      {
        source: "/admin",
        destination: "/keystatic",
      },
    ];
  },
};

export default nextConfig;
