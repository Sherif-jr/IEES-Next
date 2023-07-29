import React from "react";
import Link from "next/link";
import OutlineGrayButton from "../UI/Buttons/outline-gray-button";
import Card from "../UI/Cards/Card";
import styles from "./HomeCard.module.css";
import HeaderGreenButton from "../UI/Buttons/header-green-button";
import { HomeCardInnerFade } from "../motion/HomeCardMotion";

const HomeCard = ({ title, subTitle, paragraph }) => {
  return (
    <Card className={styles.heroCard}>
      <HomeCardInnerFade>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={`${styles.title2} HeadingOne`}>{subTitle}</h1>
        <span className={styles.bodyText}>{paragraph}</span>
        <div className={styles.controls}>
          <div className={styles.controlsInner}>
            <Link href="/contact">
              <HeaderGreenButton button="Contact Us" />
            </Link>
          </div>
          <Link href="/#services">
            <OutlineGrayButton button="read more"></OutlineGrayButton>
          </Link>
        </div>
      </HomeCardInnerFade>
    </Card>
  );
};

export default HomeCard;
