import React from "react";
import styles from "./StatsNav.module.css";
import Link from "next/link";

const StatsNav = (props) => {
  return (
    <>
      <ul className={styles.tertiaryNavUl}>
        <li
          className={
            props?.active === "overview"
              ? `${styles.tertiaryNavLi} ${styles.active}`
              : `${styles.tertiaryNavLi}`
          }
        >
          <Link href={`/cricket-series/${props?.seriesName}`}>Overview</Link>
        </li>
        <li
          className={
            props?.active === "schedule"
              ? `${styles.tertiaryNavLi} ${styles.active}`
              : `${styles.tertiaryNavLi}`
          }
        >
          <Link href={`/cricket-series/${props?.seriesName}/matches`}>
            Schedule & Results
          </Link>
        </li>
        <li
          className={
            props?.active === "news"
              ? `${styles.tertiaryNavLi} ${styles.active}`
              : `${styles.tertiaryNavLi}`
          }
        >
          <Link href={`/cricket-series/${props?.seriesName}/news`}>News</Link>
        </li>
        <li
          className={
            props?.active === "stats"
              ? `${styles.tertiaryNavLi} ${styles.active}`
              : `${styles.tertiaryNavLi}`
          }
        >
          <Link href={`/cricket-series/${props?.seriesName}/stats`}>Stats</Link>
        </li>
        <li
          className={
            props?.active === "squads"
              ? `${styles.tertiaryNavLi} ${styles.active}`
              : `${styles.tertiaryNavLi}`
          }
        >
          <Link href={`/cricket-series/${props?.seriesName}/squads`}>
            Squads
          </Link>
        </li>
        {/* <li
          className={
            props?.active === "venues"
              ? `${styles.tertiaryNavLi} ${styles.active}`
              : `${styles.tertiaryNavLi}`
          }
        >
          <Link href={`/cricket-series/${props?.seriesName}/venues`}>
            Venues
          </Link>
        </li> */}
        {/* <li
          className={
            props?.active === "videos"
              ? `${styles.tertiaryNavLi} ${styles.active}`
              : `${styles.tertiaryNavLi}`
          }
        >
          <Link href={`/cricket-series/${props?.seriesName}/videos`}>
            Videos
          </Link>
        </li> */}
        {/* <li
          className={
            props?.active === "photos"
              ? `${styles.tertiaryNavLi} ${styles.active}`
              : `${styles.tertiaryNavLi}`
          }
        >
          <Link href={`/cricket-series/${props?.seriesName}/photos`}>
            Photos
          </Link>
        </li> */}
      </ul>
    </>
  );
};

export default StatsNav;
