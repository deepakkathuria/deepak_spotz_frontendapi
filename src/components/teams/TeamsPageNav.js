import React from "react";
import styles from "./TeamsPageNav.module.css";

const TeamsPageNav = () => {
  return (
    <>
      <ul className={styles.TeamsPageNavUl}>
        <li className={`${styles.TeamsPageNavLi} ${styles.active}`}>
          International
        </li>
        <li className={styles.TeamsPageNavLi}>T20 Leagues</li>
        <li className={styles.TeamsPageNavLi}>Domestic</li>
      </ul>
    </>
  );
};

export default TeamsPageNav;
