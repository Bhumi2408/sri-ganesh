import { products } from "@/lib/products";

export const dynamic = "force-static";

const SITE = "https://www.shriganeshpolymer.in";

// trailingSlash export → every page lives at "/path/"
export default function sitemap() {
  const paths = ["/", "/about/", "/products/", ...products.map((p) => `/products/${p.slug}/`), "/facility/", "/exhibition/", "/contact/"];
  const now = new Date();
  return paths.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: path === "/" ? 1 : path.startsWith("/products") ? 0.9 : 0.8,
  }));
}
