import React from "react";
import styles from "./teamStats.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import StatsSelectOptions from "../../../../components/testing/StatsSelectOptions";
import StatsSelectionBox from "../../../../components/testing/StatsSelectionBox";
import StatsTeamTable from "../../../../components/testing/StatsTeamTable";
import NavBarSec from "@/components/scorePage/NavBarSec";
import OrganisationLd from "@/json-ld/OrganisationLd";

const page = () => {
  const currentCountry = "india";
  return (
    <>
      <OrganisationLd />
      <div className={styles.container}>
        <NavBarSec active="teams" />
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav active="stats" currentCountry={currentCountry} />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.selectionBox}>
            <StatsSelectionBox />
            <StatsSelectionBox />
          </div>
          <div className="tableBox">
            <div className={styles.options}>
              <StatsSelectOptions />
              <StatsSelectOptions />
            </div>
            <StatsTeamTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
