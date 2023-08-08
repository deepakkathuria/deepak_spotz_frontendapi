import UpdatesSound from "@/components/common/UpdatesSound";
import React from "react";
import styles from "./seriesSquads.module.css";
import Teams from "@/components/scores/Teams";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="updateBox">
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          <p>Sri Lanka Tour of india 2022</p>
        </div>
        <div className={styles.tertiaryNav}>
          <ul className={styles.tertiaryNavUl}>
            <li className={`${styles.tertiaryNavLi} ${styles.active}`}>
              Overview
            </li>
            <li className={styles.tertiaryNavLi}>Schedule & Results</li>
            <li className={styles.tertiaryNavLi}>News</li>
            <li className={styles.tertiaryNavLi}>Stats</li>
            <li className={styles.tertiaryNavLi}>Squads</li>
            <li className={styles.tertiaryNavLi}>Venues</li>
            <li className={styles.tertiaryNavLi}>Videos</li>
            <li className={styles.tertiaryNavLi}>Photos</li>
          </ul>
        </div>
        <div className="squad">
          {/* <Teams data={playingSquad} /> */}
          {/* <Teams /> */}
        </div>
      </div>
    </>
  );
};

export default page;
