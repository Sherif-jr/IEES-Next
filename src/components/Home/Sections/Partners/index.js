import { Satisfy } from "next/font/google";
import PartnerCarousel from "../../PartnerCarousel";
import styles from "./PartnersSection.module.css";
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});
export default function PartnersSection({ partnersImgs }) {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.titleContainer}>
        <h2 className={`${styles.title} animate-gradient`}>
          <span>Partners</span>
          <br></br>
        </h2>
        <span className={styles.captionContainer}>
          <span className={`${styles.caption} ${satisfy.className}`}>
            of success
          </span>
          <br></br>
        </span>
      </div>
      <div className={styles.partnersImagesContainer}>
        <PartnerCarousel partnersImgs={partnersImgs} />
      </div>
    </section>
  );
}
