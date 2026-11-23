import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {(phase: string) => import('next').NextConfig} */
export default function nextConfig(phase) {
  return {
    images: { unoptimized: true },

    trailingSlash: true,

    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",

    async redirects() {
      return [
        {
          source: "/products/pc/",
          destination: "/products/pc-granules-manufacturer/",
          permanent: true,
        },
      ];
    },
  };
}
