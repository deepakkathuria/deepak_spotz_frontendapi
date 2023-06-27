import React from "react";
import styles from "./navBarSec.module.css";

const NavBarSec = () => {
  return (
    <>
      <div className={styles.secondaryNavBar}>
        <ul>
          <li>Cricket</li>
          <li>Home</li>
          <li className={styles.selected}>Live Scores</li>
          <li>Series</li>
          <li>Teams</li>
          <li>Players</li>
          <li>News</li>
          <li>IPL</li>
          <li>Videos</li>
          <li>Ranking</li>
          <li>Fantasy Tips</li>
        </ul>
      </div>
    </>
  );
};

export default NavBarSec;
