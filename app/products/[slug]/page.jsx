import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { products, getProduct } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.code} Granules – ${p.name}`,
    description: `${p.desc} Used in ${p.apps}.`,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  if (!getProduct(slug)) notFound();
  return <ProductDetail slug={slug} />;
}
