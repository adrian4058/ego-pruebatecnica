import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "challenge.egodesign.dev",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
