import styles from "./page.module.css";
import Image from "next/image";
import HomeCard from "@/components/Home/HomeCard";
import HomeServiceCard from "../components/Home/HomeServiceCard";
import EnergySection from "@/components/Home/Sections/Energy";
import ProjectsSection from "@/components/Home/Sections/Projects";
import ContactSection from "@/components/Home/Sections/Contact";
import PartnersSection from "@/components/Home/Sections/Partners";
import { getAllProjects, getAllServicesCards, getHome } from "@/libs/firebase";
import bottomWave from "public/Assets/home/bottom.svg";

export default async function Home() {
  const [home, serviceCards, projects] = await Promise.all([
    getHome(),
    getAllServicesCards(),
    getAllProjects(),
  ]);
  let energySec = serviceCards.filter((a) => a.name == "energy-management")[0];

  return (
    <>
      <main className={`${styles.homeHero} ${styles.container}`}>
        <div className={`${styles.heroContainer01} ${styles.container}`}>
          <HomeCard
            title={home.title}
            subTitle={home.subTitle}
            paragraph={home.paragraph}
          />
        </div>
      </main>
      <Image
        alt="image"
        src="https://firebasestorage.googleapis.com/v0/b/iees-co.appspot.com/o/homeBackground%2Fnuno-marques-0GbrjL3vZF4-unsplash.jpg?alt=media&token=0e65a926-821a-47eb-abf4-00d87d1aaeed"
        priority={true}
        className={styles.homeImage}
        layout="fill"
        objectFit="cover"
      />
      <Image alt="image" src={bottomWave} className={`waves bottomWave`} />
      {/* SERVICES */}
      <section id="services" className={styles.homeServices}>
        <h2 className={`${styles.homeText03} HeadingOne animate-gradient`}>
          <span>SERVICES</span>
          <br />
        </h2>
        <span className={styles.homeText06}>
          Whether you are a project owner, a contractor, or a consultant. You
          can rely on one or more of our services. An engineering back office,
          project manager, or a maintenance manager. we deliver the best in
          market solutions.
        </span>
        <div className={styles.homeServicesCards}>
          {serviceCards.map((service) => {
            return (
              <HomeServiceCard
                key={service.name}
                linkTo={`/services/${service.name}`}
                title={service.name}
                content={service.content.description}
                lottiSrc={service.content.animatedImage}
              />
            );
          })}
        </div>
      </section>

      {/* ENERGY MANAGEMENT */}
      <EnergySection
        content={energySec.content.description}
        animatedImage={energySec.content.animatedImage}
      />

      {/* PROJECTS */}
      <ProjectsSection projects={projects} />

      {/* contactUS */}
      <ContactSection />

      {/* PARTNERS */}
      <PartnersSection partnersImgs={home.partnersImgs} />
    </>
  );
}
