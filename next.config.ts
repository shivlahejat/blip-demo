import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  images: {
    unoptimized: false,
    domains: ["cdn.sanity.io"], 
  },
};

export default nextConfig;