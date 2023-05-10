import React from "react";
import styles from "../styles/ButtonTab.module.css";

const ButtonTab = (props) => {
  return (
    <>
      <button
        className={`${props.selected ? styles.selected : ""} ${styles.button}`}
      >
        {props.title}
      </button>
    </>
  );
};

export default ButtonTab;
