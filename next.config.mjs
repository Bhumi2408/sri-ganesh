/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export → `npm run build` writes the site to /out
  output: "export",
  // No image server in a static export; files in /public are already
  // pre-optimised WebP sized for display.
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
