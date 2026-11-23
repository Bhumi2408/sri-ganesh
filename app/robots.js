export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.shriganeshpolymer.in/sitemap.xml",
    host: "https://www.shriganeshpolymer.in",
  };
}
