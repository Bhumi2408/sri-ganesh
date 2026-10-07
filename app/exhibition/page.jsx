import PageHeader from "@/components/PageHeader";
import ExhibitionPage from "@/components/ExhibitionPage";

export const metadata = {
  title: "Exhibition",
  description:
    "Shri Ganesh Polymer at industry exhibitions — booth photos and videos showcasing our PC, ABS and PBT granules.",
};

export default function Exhibition() {
  return (
    <>
      <PageHeader
        crumb="Exhibition"
        eyebrow="Events & Exhibitions"
        title="Meet us on the"
        accent="show floor."
        subtitle="Booth photos and videos from the exhibitions where we showcase our engineering polymers."
      />
      <ExhibitionPage />
    </>
  );
}
