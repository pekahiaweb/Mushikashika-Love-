import type { NextConfig } from "next";

// Next.js 16 — Turbopack is now the default bundler for `next dev`.
// If you use custom webpack plugins, audit them before upgrading.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
