import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {(phase: string) => import('next').NextConfig} */
export default function nextConfig(phase) {
  return {
    // Static HTML export → `npm run build` writes the site to /out
    output: "export",
    // No image server in a static export; files in /public are already
    // pre-optimised WebP sized for display.
    images: { unoptimized: true },
    trailingSlash: true,
    // `npm run dev` gets its own folder, so `npm run build` can run while the
    // dev server is up (on Windows the dev server locks .next/trace → EPERM).
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  };
}
