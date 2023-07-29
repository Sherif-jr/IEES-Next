import React from "react";
import HomeProjectCard from "../../HomeProjectCard";
import styles from "./ProjectsSection.module.css";
import MotionContainer from "@/components/motion/MotionContainer";

export default function ProjectsSection({ projects }) {
  const sortedProjects = projects.sort(
    (a, b) => a.data.settings.order - b.data.settings.order
  );

  return (
    <section className={styles.projectsContainer}>
      <h2 className={`HeadingOne animate-gradient`}>
        <span>PROJECTS</span>
        <br></br>
      </h2>
      <span className={styles.captionWrapper}>
        <span className={styles.caption}>
          Successful cases we&apos;ve done documented with details and
          photographs. You can contact us for more details if you want.
        </span>
        <br></br>
      </span>
      <MotionContainer staggerChildren={0.5} className={styles.CardsContainer}>
        {sortedProjects.slice(0, 5).map((project) => (
          <HomeProjectCard
            key={project.id}
            projectName={project.data.name}
            companyName={project.data.company}
            summary={project.data.summary}
            bgLink={project.data.imgsLinks[0]}
          />
        ))}
      </MotionContainer>
    </section>
  );
}
