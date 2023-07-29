"use client";
import { useRef, useState } from "react";
import Card from "../Card";
import _JSXStyle from "styled-jsx/style";
import styles from "./ProjectCard.module.css";
import ProjectAccordion from "./ProjectCardAccordion";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import FadeSlide from "@/components/motion/FadeSlide";

export default function ProjectCard({ projectData }) {
  const detailsDiv = useRef();
  console.log(projectData);
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeSlide
      distance={50}
      duration={0.3}
      disableFade
      className={styles.project}
    >
      <Card
        className={`${styles.card} h-[400px] lg:h-[350px] z-[1] flex items-center text-center justify-center group`}
      >
        <Image
          className={`${styles.overlay}`}
          src={
            projectData.imgsLinks && projectData.imgsLinks.length > 0
              ? projectData.imgsLinks[0]
              : "https://res.cloudinary.com/dhdonsil5/image/upload/v1671186833/IEES/Img/projects/1.UofCanada/UoC01_lc2dun.jpg"
          }
          alt=""
          fill
        />
        <div
          className={`object-cover absolute w-full h-full top-0 left-0 transition duration-150 bg-gradient-to-t from-[#2c3e5052] to-[#005d6373] group-hover:bg-[#00000087] z-[-1]`}
        />

        <div
          className={`flex flex-col items-center gap-4 w-full md:p-8 text-white`}
        >
          <h3 className="font-bold text-xl lg:text-3xl uppercase leading-snug">
            {projectData.name}
          </h3>
          <h4 className="font-extralight text-base lg:text-xl uppercase leading-snug">
            {projectData.company}
          </h4>
          <p className="font-light break-all text-sm lg:text-base leading-snug w-full lg:w-4/5 text-start">
            {projectData.summary.length > 200
              ? projectData.summary.substring(0, 200) + "..."
              : projectData.summary}
          </p>
          <div className="w-full h-[50px] md:h-[70px] flex items-center justify-center">
            <button
              className="border-white text-white outline-none p-3 border rounded-3xl text-sm font-bold uppercase hover:bg-white hover:text-[#005d63] transition-all duration-300"
              onClick={(e) => {
                setExpanded((prev) => !prev);
              }}
            >
              {expanded ? "Hide Details" : "Show Details"}
            </button>
          </div>
        </div>
      </Card>
      <CSSTransition
        in={expanded}
        nodeRef={detailsDiv}
        timeout={300}
        classNames="slide"
        unmountOnExit
      >
        <div
          ref={detailsDiv}
          className="{}relative bg-slate-50 p-6 rounded-b-2xl shadow -mt-3"
        >
          <ProjectAccordion
            projectName={projectData.name}
            details={projectData.details}
            summary={projectData.summary}
            imgsLinks={projectData.imgsLinks}
          />
        </div>
      </CSSTransition>
    </FadeSlide>
  );
}
