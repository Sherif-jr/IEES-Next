import React from "react";

import PropTypes from "prop-types";

import styles from "./outline-black-button.module.css";

const OutlineBlackButton = (props) => {
  return (
    <div className={`${styles.buttonContainer} ${props.className} `}>
      <button className={`${styles.button} `}>{props.button}</button>
    </div>
  );
};

OutlineBlackButton.propTypes = {
  button: PropTypes.string,
  className: PropTypes.string,
};

export default OutlineBlackButton;
