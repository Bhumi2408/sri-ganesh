import PageHeader from "@/components/PageHeader";
import ProductsPage from "@/components/ProductsPage";

export const metadata = {
  title: "Products",
  description:
    "PC, ABS and PBT engineering polymer granules — FR and extrusion grades, glass-filled PBT and custom colours for electrical, lighting and automotive parts.",
};

export default function Products() {
  return (
    <>
      <PageHeader
        crumb="Products"
        eyebrow="Our Products"
        title="PC, ABS & PBT"
        accent="granules."
        subtitle="Three core engineering polymers, compounded in-house and tested batch by batch — in custom colours and grades for your moulding needs."
      />
      <ProductsPage />
    </>
  );
}
