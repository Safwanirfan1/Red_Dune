import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* existing config options here */
  turbopack: {},
  webpack(config) {

    // Add support for .jfif files
    config.module.rules.push({
      test: /\.jfif$/,
      type: "asset/resource", // treats it like a static file
    });

    return config;
  },
};

export default nextConfig;