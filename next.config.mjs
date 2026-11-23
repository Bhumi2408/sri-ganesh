import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

const WWW = { type: "host", value: "www.shriganeshpolymer.in" };

/** @type {(phase: string) => import('next').NextConfig} */
export default function nextConfig(phase) {
  return {
    // Files in /public are already pre-optimised WebP sized for display.
    images: { unoptimized: true },
    trailingSlash: true,
    // `npm run dev` gets its own folder, so `npm run build` can run while the
    // dev server is up (on Windows the dev server locks .next/trace → EPERM).
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
    async redirects() {
      return [
        // canonical host is non-www — pages keep their trailing slash, files (logo.webp…) do not
        ...[
          ["/", "/"],
          ["/:path+/", "/:path+/"],
          ["/:path+", "/:path+"],
        ].map(([source, to]) => ({ source, has: [WWW], destination: `https://shriganeshpolymer.in${to}`, permanent: true })),
        // old PC product URL
        { source: "/products/pc/", destination: "/products/pc-granules-manufacturer/", permanent: true },
      ];
    },
  };
}
