import UpdatesSound from "@/components/common/UpdatesSound";
import React from "react";
import styles from "./seriesSquads.module.css";
import Teams from "@/components/scores/Teams";
import StatsNav from "@/components/series/StatsNav";
import NavBarSec from "@/components/scorePage/NavBarSec";

const page = ({ params }) => {
  const { "series-name": seriesName } = params;
  return (
    <>
      <div className={styles.container}>
        <NavBarSec active="series" />
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          <p>Sri Lanka Tour of india 2022</p>
        </div>
        <div className={styles.tertiaryNav}>
          <seriesName active="squads" seriesName={seriesName} />
        </div>
        <div className="nav">
          <StatsNav seriesName={seriesName} active="squads" />
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
