import Link from "next/link";
import OutlineBlackButton from "../UI/Buttons/outline-black-button";
import styles from "./HomeProjectCard.module.css";

const HomeProjectCard = ({
  className,
  companyName,
  projectName,
  summary,
  bgLink,
}) => {
  return (
    <div
      className={`${styles.CardWTempBackground} ${styles.projectsCard} ${className}`}
      style={{
        backgroundImage: `linear-gradient(
      90deg,
      rgba(44, 62, 80, 0.32) 1%,
      rgba(0, 93, 99, 0.45) 100%
    ),
    url("${
      bgLink ||
      "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxzY2hvb2x8ZW58MHx8fHwxNjcxMzY1MDcz&ixlib=rb-4.0.3&h=500"
    }")`,
      }}
    >
      <div className={styles.empty}></div>
      <div className={styles.textWrapper}>
        <p className={styles.companyName}>
          {(companyName && companyName !== "" && companyName) || " "}
        </p>

        <h3 className={styles.projectName}>{projectName}</h3>
        <p className="text-white text-sm ">
          {summary && summary.length > 150
            ? summary.substring(0, 200) + "..."
            : summary}
        </p>
        {/* <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.w100}>
                <span className={styles.w100}>{service1Provided}</span>
                <br></br>
              </span>
            </li>
            <li className={styles.listItem}>
              <span>{service2Provided}</span>
            </li>
          </ul>
        </div> */}
        <Link href="/projects">
          <OutlineBlackButton
            button="Explore"
            className={`${styles.btn} mt-3`}
          />
        </Link>
      </div>
    </div>
  );
};
export default HomeProjectCard;
