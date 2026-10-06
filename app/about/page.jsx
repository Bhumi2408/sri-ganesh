import PageHeader from "@/components/PageHeader";
import AboutPage from "@/components/AboutPage";

export const metadata = {
  title: "About Us",
  description:
    "Shri Ganesh Polymer is an ISO 9001 & 14001 certified manufacturer of PC, ABS and PBT engineering polymer granules based in Delhi.",
};

export default function About() {
  return (
    <>
      <PageHeader
        crumb="About"
        eyebrow="Who We Are"
        title="Engineering polymers,"
        accent="made with care."
        subtitle="Modern machinery, a nationwide distribution network and a focus on quality — supplying PC, ABS and PBT granules to manufacturers across India."
      />
      <AboutPage />
    </>
  );
}
