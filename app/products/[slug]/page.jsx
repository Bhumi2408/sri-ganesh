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
  if (p.seo) {
    return {
      title: { absolute: p.seo.title },
      description: p.seo.description,
      keywords: p.seo.keywords,
      alternates: { canonical: `/products/${p.slug}/` },
    };
  }
  return {
    alternates: { canonical: `/products/${p.slug}/` },
    title: `${p.code} Granules – ${p.name}`,
    description: `${p.desc} Used in ${p.apps}.`,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const faqs = p.content?.faqs;
  const faqSchema = faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\u003c") }}
        />
      )}
      <ProductDetail slug={slug} />
    </>
  );
}
