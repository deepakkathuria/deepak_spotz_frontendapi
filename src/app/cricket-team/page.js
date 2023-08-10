// "use client"
import React from "react";
import UpdatesSound from "../../components/common/UpdatesSound";
import NavBarSec from "../../components/scorePage/NavBarSec";
import TeamsPageNav from "../../components/teams/TeamsPageNav";
import TeamsTable from "../../components/teams/TeamsTable";
import styles from "./cricketTeamHome.module.css";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchTeamList = async () => {
  const res = await fetch(
    `${base_url}/teams/?token=${token}&page=30&type=country&sex=male&per_page=50`
  );
  const data = await res.json();
  return data;
};

const page = async () => {
  const teams = await fetchTeamList();

  return (
    <>
      <div className={styles.container}>
        <NavBarSec active='teams' />
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
          <TeamsTable name="Country List" data={teams?.response?.items} />
          {/* <TeamsTable /> */}
        </div>
      </div>
    </>
  );
};

export default page;
