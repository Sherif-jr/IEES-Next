import PropTypes from "prop-types";

import styles from "./header-green-button.module.css";

const HeaderGreenButton = (props) => {
  return (
    <div
      className={`${styles.container} ${props.className && props.className} `}
    >
      <button className={styles.button}>{props.button}</button>
    </div>
  );
};

export default HeaderGreenButton;
