import React from "react";
import styles from "./StatsSelectionBox.module.css";

const StatsSelectionBox = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.typeHeading}>Batting</div>
        <div className={`${styles.typeOption} ${styles.active}`}>Most Runs</div>
        <div className={styles.typeOption}>Most Wickets</div>
        <div className={styles.typeOption}>Most fours</div>
      </div>
    </>
  );
};

export default StatsSelectionBox;
