import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**", // Optional, specifies the image path pattern
      },
      {
        protocol: "https",
        hostname: "bumble.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
