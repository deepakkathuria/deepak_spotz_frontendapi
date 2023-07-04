import React from "react";
import styles from "./InfoTable.module.css";

const InfoTable = () => {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.title}>Match</div>
        <div className={styles.details}>2nd T20</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>Series</div>
        <div className={styles.details}>England Tour of India 2023</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>Player of the match</div>
        <div className={styles.details}>-</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>Date</div>
        <div className={styles.details}>May 09, 2022</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>Time</div>
        <div className={styles.details}>7:30 PM</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>Venue</div>
        <div className={styles.details}>Dubai</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>Stadium</div>
        <div className={styles.details}>Dubai International Stadium</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>City</div>
        <div className={styles.details}>Dubai, UAE</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>End</div>
        <div className={styles.details}>Dubai Emirates End</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>Hosts to</div>
        <div className={styles.details}>United arab Emirates</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>Empire</div>
        <div className={styles.details}>Mr. Unknown</div>
      </div>

      <div className={styles.row}>
        <div className={styles.title}>Referee</div>
        <div className={styles.details}>Mr. Anonymous</div>
      </div>
    </>
  );
};

export default InfoTable;
