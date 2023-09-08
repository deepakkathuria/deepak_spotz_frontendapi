import React from "react";
import styles from "./navBarSec.module.css";
import Link from "next/link";

const NavBarSec = (props) => {
  return (
    <>
      <div className={styles.secondaryNavBar}>
        <ul>
          <li className={styles.highlighted}>Cricket</li>
          <li className={props?.active === "home" ? `${styles.selected}` : ""}>
            <Link href={"/sports/cricket"}>Home</Link>
          </li>
          <li className={props?.active === "live" ? `${styles.selected}` : ""}>
            <Link href={"/live-cricket-scores"}>Live Scores</Link>
          </li>
          <li className={props?.active === "schedule" ? `${styles.selected}` : ""}>
            <Link href={"/live-cricket-scores/schedule"}>Schedule</Link>
          </li>
          <li
            className={props?.active === "series" ? `${styles.selected}` : ""}
          >
            <Link href={"/cricket-series"}>Series</Link>
          </li>
          <li className={props?.active === "teams" ? `${styles.selected}` : ""}>
            <Link href={"/cricket-team"}>Teams</Link>
          </li>
          <li
            className={props?.active === "players" ? `${styles.selected}` : ""}
          >
            <a href={"/cricketers/"}>Players</a>
          </li>
          <li className={props?.active === "news" ? `${styles.selected}` : ""}>
            <Link href={"/cricket"}>News</Link>
          </li>
          {/* <li className={props?.active === "ipl" ? `${styles.selected}` : ""}>
            IPL
          </li> */}
          {/* <li
            className={props?.active === "videos" ? `${styles.selected}` : ""}
          >
            Videos
          </li> */}
          {/* <li
            className={props?.active === "ranking" ? `${styles.selected}` : ""}
          >
            Ranking
          </li> */}
          {/* <li
            className={props?.active === "fantasy" ? `${styles.selected}` : ""}
          >
            Fantasy Tips
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default NavBarSec;
