import React from "react";
import styles from "./LiveScoreNav.module.css";

const liveScoreNav = () => {
  return (
    <>
      <div className={styles.liveScoreNavContainer}>
        <ul className={styles.liveScoreNavUl}>
          <li className={`${styles.liveScoreNavLi} ${styles.active}`}>
            Live(10)
          </li>
          <li className={styles.liveScoreNavLi}>Completed</li>
          <li className={styles.liveScoreNavLi}>Upcoming</li>
        </ul>
        <p style={{ marginLeft: "1rem" }}>{`{`}</p>
        <ul className={styles.liveScoreNavUl}>
          <li className={`${styles.liveScoreNavLi} ${styles.active}`}>All</li>
          <li className={styles.liveScoreNavLi}>International</li>
          <li className={styles.liveScoreNavLi}>League</li>
          <li className={styles.liveScoreNavLi}>Domestic</li>
        </ul>
        <p>{`}`}</p>
      </div>
    </>
  );
};

export default liveScoreNav;
