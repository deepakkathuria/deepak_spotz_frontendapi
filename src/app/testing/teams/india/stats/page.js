import React from "react";
import styles from "./stats.module.css";
import UpdatesSound from "@/components/common/UpdatesSound";
import TeamCountryNav from "@/components/teams/TeamCountryNav";
import StatsSelectOptions from "@/components/testing/StatsSelectOptions";
import StatsSelectionBox from "@/components/testing/StatsSelectionBox";
import StatsTeamTable from "@/components/testing/StatsTeamTable";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="soundBox">
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav />
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
