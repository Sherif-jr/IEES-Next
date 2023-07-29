import React from "react";
import Link from "next/link";
import OutlineGrayButton from "../UI/Buttons/outline-gray-button";
import styles from "./HomeServiceCard.module.css";
import LottiePlayer from "../UI/LottiePlayer";
import FadeSlide from "../motion/FadeSlide";

export default function HomeServiceCard({
  linkTo,
  title,
  content,
  lottiSrc,
  index,
}) {
  return (
    <FadeSlide
      distance="sm"
      duration={0.3}
      delay={index % 2 !== 0 ? 0.3 : 0}
      // whileHover={{ translteY: 7 }}
      className={styles.wrapper}
    >
      <div className={`${styles.homeServicesCard} ${styles.homeCard}`}>
        <div className={styles.playerContainer}>
          <LottiePlayer
            src={lottiSrc}
            loop
            hover
            speed="1"
            autoplay
            background="transparent"
            className={styles.lottie}
          ></LottiePlayer>
        </div>
        <h3 className={styles.titleText}>
          {title}
          <br></br>
        </h3>
        <p className={styles.bodyText}>{content}</p>
        <div className={styles.ButtonContainer}>
          <Link href={linkTo}>
            <OutlineGrayButton button="read more"></OutlineGrayButton>
          </Link>
        </div>
      </div>
    </FadeSlide>
  );
}
