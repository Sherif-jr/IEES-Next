import React from "react";
import styles from "./outline-gray-button.module.css";

export default function OutlineGrayButton(props) {
  return (
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.button}>
        {props.button}
      </button>
    </div>
  );
}
