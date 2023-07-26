import UpdatesSound from "@/components/common/UpdatesSound";
import React from "react";
import styles from "./seriesOverview.module.css";
import ScoreBoard from "@/components/scorePage/Commentary/ScoreBoard";
import LiveScoreSection from "@/components/common/LiveScoreSection";
import ScoreCardPanel from "@/components/common/ScoreCardPanel";
import NewsSection from "@/components/common/NewsSection";

const page = () => {
  return (
    <>
      <div className={`container ${styles.seriesOverview}`}>
        <UpdatesSound />
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
        <div className={styles.matchesList}>
          <ScoreCardPanel display={false} />
        </div>
        <div className={styles.news}>
          {/* <p>NEWS</p> */}
          <NewsSection name="NEWS" id="3" slug="cricket" />
        </div>
      </div>
    </>
  );
};

export default page;
