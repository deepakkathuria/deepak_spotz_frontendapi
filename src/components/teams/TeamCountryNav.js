import React from "react";
import styles from "./TeamCountryNav.module.css";

const TeamCountryNav = () => {
  return (
    <>
      <div className={styles.TeamCountryNav}>
        <ul className={styles.TeamCountryNavUl}>
          <li className={`${styles.TeamCountryNavLi} ${styles.active}`}>
            About
          </li>
          <li className={styles.TeamCountryNavLi}>Overview</li>
          <li className={styles.TeamCountryNavLi}>Schedule & Results</li>
          <li className={styles.TeamCountryNavLi}>News</li>
          <li className={styles.TeamCountryNavLi}>Stats</li>
          <li className={styles.TeamCountryNavLi}>Squads</li>
          <li className={styles.TeamCountryNavLi}>Videos</li>
          <li className={styles.TeamCountryNavLi}>Photos</li>
        </ul>
      </div>
    </>
  );
};

export default TeamCountryNav;
