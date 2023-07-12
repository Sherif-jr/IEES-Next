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
      />
      {service.stages.map((stage, i) => (
        <Section
          key={i}
          stage={stage}
          index={i + 1}
          id={i === 1 ? "first-stage" : undefined}
        />
      ))}
      <OtherServicesSection cardsData={servicesCards} />
    </>
  );
}
