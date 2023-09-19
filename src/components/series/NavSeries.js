import React from "react";
import styles from "./NavSeries.module.css";
import Link from "next/link";

const NavSeries = (props) => {
  return (
    <>
      <ul className={styles.navSeriesUL}>
        <li
          className={
            props?.active === "live"
              ? `${styles.NavSeriesLi} ${styles.active}`
              : `${styles.NavSeriesLi}`
          }
        >
          <Link href={"/cricket-series/"}>Current Series</Link>
        </li>
        <li
          className={
            props?.active === "recent"
              ? `${styles.NavSeriesLi} ${styles.active}`
              : `${styles.NavSeriesLi}`
          }
        >
          <Link href={"/cricket-series/recent/"}>Recent Series</Link>
        </li>
        <li
          className={
            props?.active === "upcoming"
              ? `${styles.NavSeriesLi} ${styles.active}`
              : `${styles.NavSeriesLi}`
          }
        >
          <Link href={"/cricket-series/upcoming/"}>Upcoming Series</Link>
        </li>
      </ul>
    </>
  );
};

export default NavSeries;
