import Link from "next/link";
import Image from "next/image";
import topWave from "public/Assets/home/top.svg";
import bottomWave from "public/Assets/home/bottom.svg";
import whiteWaves from "public/Assets/home/waves-white.svg";
import IconListItemLight from "@/components/UI/icon-list-item-light";
import styles from "./EnergySection.module.css";
import LottiePlayer from "@/components/UI/LottiePlayer";

export default function EnergySection({ content, animatedImage }) {
  return (
    <section className={`${styles.container} ${styles.energySection}`}>
      <div className={styles.energyContainer}>
        <div className={styles.energyTextContainer}>
          <div className={styles.energyTextInner}>
            <p className={styles.energyCaption}>The Added Unique Feature</p>
            <h2 className={`${styles.energyTitle} HeadingTwo`}>
              ENERGY MANAGEMENT
            </h2>
            <p className={styles.energyBodyText}>{content}​</p>
            <IconListItemLight text="Money Saving"></IconListItemLight>
            <IconListItemLight text="Energy Efficiency and Security"></IconListItemLight>
            <IconListItemLight text="End-user training on efficient operating methodologies"></IconListItemLight>
            <div className={styles.energyControls}>
              <div className={styles.energyControlsInner}>
                <Link
                  href="/services/energy-management"
                  className={styles.energyButton}
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <LottiePlayer
          src="https://assets7.lottiefiles.com/packages/lf20_ulfrygzw.json"
          loop
          speed="1.25"
          autoplay
          background="transparent"
          className={styles.animatedImage}
        ></LottiePlayer>
      </div>
      <Image alt="image" src={bottomWave} className={`waves bottomWave`} />
      <Image
        alt="image"
        src={whiteWaves}
        className={`waves ${styles.whiteWaves}`}
      />
      <Image alt="image" src={topWave} className={`waves topWave`} />
    </section>
  );
}
