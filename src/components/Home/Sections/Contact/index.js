import Link from "next/link";
import Image from "next/image";
import topWave from "public/Assets/home/top.svg";
import bottomWave from "public/Assets/home/bottom.svg";
import contactImage from "public/Assets/home/contact-image.png";
import pattern from "public/Assets/home/IEES-Pattern.svg";
import OutlineBlackButton from "@/components/UI/Buttons/outline-black-button";
import styles from "./ContactSection.module.css";
export default function ContactSection() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInner}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>
              <span className={styles.title2}>Our mission is </span>
              <span> </span>
              <span>your comfort</span>
              <br></br>
            </h3>
            <p className={styles.bodyTitle}>
              <span>
                Our specialized team of engineers and employees can make your
                dreams a reality. With our premium set of services, you will no
                longer need to worry about a thing. Everything will go the way
                you planned.
              </span>
              <br></br>
              <span>
                No more inefficient projects, time delays, boring meetings, or
                overwhelming details.
              </span>
              <br></br>
              <span>Relax and leave all the hard work to us.</span>
            </p>
            <div className={styles.button}>
              <Link href="/contact">
                <OutlineBlackButton
                  button="Contact Us"
                  rootClassName="outline-black-button-root-class-name"
                ></OutlineBlackButton>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.imgsContainer}>
          <Image alt="" src={contactImage} className={styles.contactImage} />
        </div>
      </div>
      <Image
        alt=""
        src={bottomWave}
        className={`${styles.waves} ${styles.bottomWave}`}
      />
      <Image alt="image" src={pattern} className={styles.pattern} />
      <Image
        alt=""
        src={topWave}
        className={`${styles.waves} ${styles.topWave}`}
      />
    </section>
  );
}
