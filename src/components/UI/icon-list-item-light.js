import React from "react";

import PropTypes from "prop-types";

import styles from "./icon-list-item-light.module.css";

const IconListItemLight = (props) => {
  return (
    <div className={`${styles.iconWrapper} ${props.ClassName} `}>
      <div className={styles.IconWrapperInner}>
        <svg viewBox="0 0 1024 1024" className={styles.icon}>
          <path
            d="M896 0h-768c-70.4 0-128 57.6-128 128v768c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-768c0-70.4-57.6-128-128-128zM448 794.51l-237.254-237.256 90.51-90.508 146.744 146.744 306.746-306.746 90.508 90.51-397.254 397.256z"
            className=""
          ></path>
        </svg>
        <p className={styles.iconText}>{props.text}</p>
      </div>
    </div>
  );
};

IconListItemLight.propTypes = {
  ClassName: PropTypes.string,
  text: PropTypes.string,
};

export default IconListItemLight;
