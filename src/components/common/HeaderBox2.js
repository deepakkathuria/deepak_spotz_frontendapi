import React from "react";
import styles from "../styles/HeaderBox.module.css";

const HeaderBox2 = ({header, content}) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>{header}</h1>
        <p className={styles.p}>
          {content}
        </p>
      </div>
    </>
  );
};

export default HeaderBox2;
