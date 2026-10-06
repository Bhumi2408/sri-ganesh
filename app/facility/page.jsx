import PageHeader from "@/components/PageHeader";
import Facility from "@/components/Facility";

export const metadata = {
  title: "Facility",
  description:
    "Twin and single screw extrusion lines with an in-house polymer testing lab — 5000+ MT annual production capacity.",
};

export default function FacilityPage() {
  return (
    <>
      <PageHeader
        crumb="Facility"
        eyebrow="Manufacturing & Lab"
        title="Built for"
        accent="precision."
        subtitle="Twin and single screw extrusion lines backed by an in-house testing lab, so every batch meets specification."
      />
      <Facility />
    </>
  );
}
