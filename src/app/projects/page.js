import styles from "./projects.module.css";
import ProjectCard from "@/components/UI/Cards/ProjectCard";
import { getAllProjects } from "@/libs/firebase";
export default async function projects() {
  const projects = await getAllProjects();
  console.log(projects[0].data);
  return (
    <>
      <div className={styles.projectsHero}>
        <div className={styles.projectsContainer}>
          <p className={styles.heroText}>Your vision will become a reality </p>
        </div>
      </div>
      <section
        id="projects-section"
        className={`${styles.projectsSection} min-h-screen`}
      >
        <div className={styles.cardsContainer}>
          <h2 className={`${styles.sectionTitle} HeadingOne animate-gradient`}>
            <span>PROJECTS</span>
            <br></br>
          </h2>
          <div className="w-[80%] flex-wrap flex flex-col justify-center gap-8 m-12 lg:m-14">
            {projects.map((project) => (
              <ProjectCard key={project.id} projectData={project.data} />
            ))}
            {/* <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[0]} />
            <ProjectCard project={projects[0]} /> */}
          </div>
        </div>
      </section>
    </>
  );
}