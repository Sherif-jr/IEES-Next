import MainSection from "@/components/Services/Sections/MainSection";
import OtherServicesSection from "@/components/Services/Sections/OtherServicesSection";
import Section from "@/components/Services/Sections/Section";
import { getService, getAllServicesCards } from "@/libs/firebase";

export function generateStaticParams() {
  return [
    "project-management",
    "maintenance-management",
    "energy-management",
    "design-management",
  ];
}
export async function generateMetadata({ params }) {
  const title =
    params.service
      .split("-")
      .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
      .join(" ") + " - IEES";
  return {
    title,
    description:
      "We provide you the best in market engineering services. No more headaches or delays. Our services are tailored for your needs. Pay only for what you need and expand even more at any time.",
  };
}
export default async function service({ params }) {
  const [service, servicesCards] = await Promise.all([
    getService(params.service),
    getAllServicesCards(params.service),
  ]);

  return (
    <>
      <MainSection
        firstSectionId="first-stage"
        mainSection={service.mainSection}
        pageId={params.service}
      />
      {service.stages.map((stage, i) => (
        <Section
          key={i}
          stage={stage}
          index={i + 1}
          id={i === 0 ? "first-stage" : undefined}
        />
      ))}
      <OtherServicesSection cardsData={servicesCards} />
    </>
  );
}
