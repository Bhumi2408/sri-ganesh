export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://shriganeshpolymer.in/sitemap.xml",
    host: "https://shriganeshpolymer.in",
  };
}
