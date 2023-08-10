import React from "react";
import styles from "./teamOverview.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import ScoreCardPanel from "../../../../components/common/ScoreCardPanel";
import NewsSection from "../../../../components/common/NewsSection";
import NavBarSec from "@/components/scorePage/NavBarSec";

const page = () => {
  const currentCountry = "india";
  return (
    <>
      <div className={styles.container}>
        <NavBarSec active="teams" />
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <div className="tertiaryNav">
          <TeamCountryNav active="overview" currentCountry={currentCountry} />
        </div>
        <div className={styles.matchesPanel}>
          <p className={styles.scoreCardHeading}>India Matches</p>
          <ScoreCardPanel display={false} />
        </div>
        <div className={styles.newsSection}>
          <NewsSection name="TRENDING NEWS" id="3" slug="cricket" />
        </div>
      </div>
    </>
  );
};

export default page;
