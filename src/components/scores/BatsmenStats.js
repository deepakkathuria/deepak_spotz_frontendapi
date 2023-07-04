import React from "react";
import styles from "./BatsmenStats.module.css";

const BatsmenStats = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tableHead}>
          <div className={styles.batter}>Batter</div>
          <div className={styles.otherDetails}>
            <div>R</div>
            <div>B</div>
            <div>4s</div>
            <div>6s</div>
            <div>SR</div>
          </div>
        </div>
        <div className={styles.tableBody}>
          <div className={styles.nameDetails}>
            <div className={styles.name}>Mithali Raj</div>
            <div className={styles.misc}>b vrinda singh</div>
          </div>
          <div className={styles.otherDetails}>
            <div>12</div>
            <div>15</div>
            <div>2</div>
            <div>0</div>
            <div>80.00</div>
          </div>
        </div>

        <div className={styles.tableBody}>
          <div className={styles.nameDetails}>
            <div className={styles.name}>Mithali Raj</div>
            <div className={styles.misc}>b vrinda singh</div>
          </div>
          <div className={styles.otherDetails}>
            <div>12</div>
            <div>15</div>
            <div>2</div>
            <div>0</div>
            <div>80.00</div>
          </div>
        </div>

        <div className={styles.tableBody}>
          <div className={styles.nameDetails}>
            <div className={styles.name}>Mithali Raj</div>
            <div className={styles.misc}>b vrinda singh</div>
          </div>
          <div className={styles.otherDetails}>
            <div>12</div>
            <div>15</div>
            <div>2</div>
            <div>0</div>
            <div>80.00</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatsmenStats;
