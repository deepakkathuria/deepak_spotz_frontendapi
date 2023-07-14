import React from "react";
import styles from "./NavSeries.module.css";

const NavSeries = () => {
  return (
    <>
      <ul className={styles.navSeriesUL}>
        <li className={`${styles.NavSeriesLi} ${styles.active}`}>
          Current Series
        </li>
        <li className={styles.NavSeriesLi}>Recent Series</li>
        <li className={styles.NavSeriesLi}>Upcoming Series</li>
      </ul>
    </>
  );
};

export default NavSeries;
