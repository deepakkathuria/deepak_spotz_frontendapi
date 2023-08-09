import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import React from "react";
import styles from "./teamNews.module.css";
import NewsSection from "../../../../components/common/NewsSection";
import NavBarSec from "@/components/scorePage/NavBarSec";

const page = ({ params }) => {
  const { teamName } = params;
  const teamId = teamName?.split("-")[1];
  const currentCountry = "india";
  return (
    <>
      <div className={styles.container}>
        {/* soundUpdatesDiv */}
        <NavBarSec />
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav active="news" currentCountry={teamName} />
        </div>
        <div className="news">
          <NewsSection name="" id="3" slug="cricket" />
          <NewsSection name="" id="3" slug="cricket" />
        </div>
      </div>
    </>
  );
};

export default page;
