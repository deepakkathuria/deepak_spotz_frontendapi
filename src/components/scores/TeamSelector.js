import React from "react";
import styles from "./TeamSelector.module.css";

const TeamSelector = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.teamA} ${styles.selected}`}>India</div>
        <div className={styles.teamB}>Sri Lanka</div>
      </div>
    </>
  );
};

export default TeamSelector;
