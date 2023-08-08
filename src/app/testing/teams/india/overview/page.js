import React from "react";
import styles from "./overview.module.css";
import UpdatesSound from "@/components/common/UpdatesSound";
import TeamCountryNav from "@/components/teams/TeamCountryNav";
import ScoreCardPanel from "@/components/common/ScoreCardPanel";
import NewsSection from "@/components/common/NewsSection";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="updateBox">
          <UpdatesSound />
        </div>
        <div className="tertiaryNav">
          <TeamCountryNav />
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
