import React from "react";
import styles from "./navBarSec.module.css";
import Link from "next/link";

const NavBarSec = () => {
  return (
    <>
      <div className={styles.secondaryNavBar}>
        <ul>
          <li className={styles.highlighted}>Cricket</li>
          <li>
            <Link href={"/sports/cricket"}>Home</Link>
          </li>
          <li className={styles.selected}>Live Scores</li>
          <li>Series</li>
          <li>
            <Link href={"/cricket-team"}>Teams</Link>
          </li>
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
