import React from "react";
import styles from "./playersNav.module.css";

const PlayersNav = () => {
  return (
    <>
      <ul className={styles.nav}>
        <li className={styles.active}>Overview</li>
        <li>Stats</li>
        <li>News</li>
        <li>Videos</li>
        <li>Photos</li>
      </ul>
    </>
  );
};

export default PlayersNav;
