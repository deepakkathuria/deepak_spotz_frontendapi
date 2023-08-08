import React from "react";
import UpdatesSound from "../../components/common/UpdatesSound";
import NavBarSec from "../../components/scorePage/NavBarSec";
import TeamsPageNav from "../../components/teams/TeamsPageNav";
import TeamsTable from "../../components/teams/TeamsTable";
import styles from "./cricketTeamHome.module.css";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <NavBarSec />
        <div
          style={{ marginTop: "2rem", marginLeft: "1rem", marginRight: "1rem" }}
          className="audio"
        >
          <UpdatesSound />
        </div>
        <div style={{ marginTop: "2rem" }} className="nav">
          <TeamsPageNav active="main" />
        </div>
        <div style={{ marginTop: "2rem" }} className="table">
          <TeamsTable />
          <TeamsTable />
        </div>
      </div>
    </>
  );
};

export default page;
