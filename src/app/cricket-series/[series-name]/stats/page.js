import UpdatesSound from "../../../../components/common/UpdatesSound";
import React from "react";
import styles from "./stats.module.css";
import StatsSelectionBox from "../../../../components/testing/StatsSelectionBox";
import StatsSelectOptions from "../../../../components/testing/StatsSelectOptions";
import StatsTeamTable from "../../../../components/testing/StatsTeamTable";
import StatsNav from "@/components/series/StatsNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
// import OrganisationLd from "@/json-ld/OrganisationLd";

const page = ({ params }) => {
  const { "series-name": seriesName } = params;
  return (
    <>
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <NavBarSec active="series" />
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          <p>Sri Lanka Tour of india 2022</p>
        </div>
        <div className={styles.tertiaryNav}>
          <StatsNav active="stats" seriesName={seriesName} />
        </div>

        {/* <div className={styles.mainContent}>
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
        </div> */}
      </div>
    </>
  );
};

export default page;
