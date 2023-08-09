import React from "react";
import styles from "./playerStats.module.css";
import UpdatesSound from "@/components/common/UpdatesSound";
import PlayersNav from "@/components/testing/players/PlayersNav";
import PlayerInfoTable from "@/components/testing/players/PlayerInfoTable";
import StatsTable from "@/components/testing/players/StatsTable";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <div className={styles.dataMain}>
          <div className={styles.bannerNav}>
            <div className={styles.banner}></div>
            <div className={styles.nav}>
              <PlayersNav />
            </div>
          </div>
          <div className={styles.details}>
            <PlayerInfoTable />
          </div>

          <div className={styles.table}>
            <StatsTable />
            <StatsTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
