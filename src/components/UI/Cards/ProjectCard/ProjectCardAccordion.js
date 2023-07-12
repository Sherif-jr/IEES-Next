import { Accordion, AccordionTab } from "primereact/accordion";
import ProjectCardCarousel from "./ProjectCardCarousel";

function ProjectAccordion({ projectName, summary, details, imgsLinks }) {
  return (
    <Accordion activeIndex={2} className="w-[98%]">
      <AccordionTab
        headerClassName=""
        header="Summary"
        disabled={Boolean(!summary)}
      >
        <p className="m-0">{summary}</p>
      </AccordionTab>
      <AccordionTab header="Details" disabled={Boolean(!details)}>
        <p className="m-0">{details}</p>
      </AccordionTab>
      <AccordionTab
        header="Gallery"
        pt={{ content: { style: { padding: 0 } } }}
        disabled={Boolean(!imgsLinks)}
      >
        <ProjectCardCarousel imgsLinks={imgsLinks} projectName={projectName} />
      </AccordionTab>
    </Accordion>
  );
}

export default ProjectAccordion;
