import React from "react";
import styles from "./PlayerInfoTable.module.css";

const PlayerInfoTable = () => {
  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.left}>
          <div className={styles.item}>
            <div className={styles.title}>Full Name</div>
            <div className={styles.value}>Gaurav Tanwar</div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>Full Name</div>
            <div className={styles.value}>Gaurav Tanwar</div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>Full Name</div>
            <div className={styles.value}>Gaurav Tanwar</div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.item}>
            <div className={styles.title}>Full Name</div>
            <div className={styles.value}>Gaurav Tanwar</div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>Full Name</div>
            <div className={styles.value}>Gaurav Tanwar</div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>Full Name</div>
            <div className={styles.value}>Gaurav Tanwar</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerInfoTable;
