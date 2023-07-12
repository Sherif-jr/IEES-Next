import React from "react";
import HomeProjectCard from "../../HomeProjectCard";
import styles from "./ProjectsSection.module.css";

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
      <div className={styles.CardsContainer}>
        {sortedProjects.map((project) => (
          <HomeProjectCard
            key={project.id}
            projectName={project.data.name}
            companyName={project.data.company}
            summary={project.data.summary}
            bgLink={project.data.imgsLinks[0]}
          />
        ))}
        
        {/* <HomeProjectCard
          projectName="Universities of Canada"
          service1Provided="Building “C” MEP Systems"
          service2Provided="Main Electrical Network"
        />
        <HomeProjectCard
          companyName="EGYGAB for Education Development"
          projectName="Egyptian Language School, Shorouk Project"
          service1Provided="MEP design"
          service2Provided="Project Management"
        />
        <HomeProjectCard
          companyName="Katameya Company for developing Education"
          projectName="Egyptian Language School New Cairo"
          service1Provided="Maintenance Management"
          service2Provided="Maintenance Supervision"
        />
        <HomeProjectCard
          companyName="6th October Company for developing Education"
          projectName="Egyptian Language School 6th October"
          service1Provided="Maintenance Management"
          service2Provided="Maintenance Supervision"
        />
        <HomeProjectCard
          companyName="Alexandria Company for developing Education"
          projectName="Egyptian Language School Alexandria"
          service1Provided="Maintenance Management"
          service2Provided="Maintenance Supervision"
        />
        <HomeProjectCard
          companyName="Alexandria Company for developing Education"
          projectName="Egyptian Language School Alexandria"
          service1Provided="Maintenance Management"
          service2Provided="Maintenance Supervision"
        />
        <HomeProjectCard
          companyName="Alexandria Company for developing Education"
          projectName="Egyptian Language School Alexandria"
          service1Provided="Maintenance Management"
          service2Provided="Maintenance Supervision"
        />
        <HomeProjectCard
          companyName="Alexandria Company for developing Education"
          projectName="Egyptian Language School Alexandria"
          service1Provided="Maintenance Management"
          service2Provided="Maintenance Supervision"
        /> */}
      </div>
    </section>
  );
}
