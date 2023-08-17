// "use client"
import React from "react";
import UpdatesSound from "../../components/common/UpdatesSound";
import NavBarSec from "../../components/scorePage/NavBarSec";
import TeamsPageNav from "../../components/teams/TeamsPageNav";
import TeamsTable from "../../components/teams/TeamsTable";
import styles from "./cricketTeamHome.module.css";
import Breadcrumb from "@/components/common/Breadcrumb";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import { BreadcrumbJsonLd } from "next-seo";
import OrganisationLd from "@/json-ld/OrganisationLd";
// const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const fetchTeamList = async () => {
  const res = await fetch(
    `${base_url}/teams/?token=${token}&page=30&type=country&sex=male&per_page=50`
  );
  const data = await res.json();
  return data;
};

const page = async () => {
  const teams = await fetchTeamList();
  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `CRICKET TEAM`,
      url: "/cricket-team",
    },
    // {
    //   name: `${seriesName.toUpperCase().slice(0,40)}...`,
    //   url: `/cricket-series/${seriesName}`,
    // },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "HOME",
            item: "sportzwiki.com",
          },
          {
            position: 2,
            name: breadcrumbs[1]?.name,
            item: `${site_url}${breadcrumbs[1]?.url}`,
          },
          // {
          //   position: 3,
          //   name: breadcrumbs[2]?.name,
          //   item: `${site_url}${breadcrumbs[2]?.url}`,
          // },
          // {
          //   position: 4,
          //   name: breadcrumbs[3]?.name,
          //   item: `${site_url}${breadcrumbs[3]?.url}`,
          // },
        ]}
      />
      <OrganisationLd />
      <div className={styles.container}>
        <NavBarSec active="teams" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div
          style={{ marginTop: "2rem", marginLeft: "1rem", marginRight: "1rem" }}
          className="audio"
        >
          <UpdatesSound />
        </div>
        {/* <div style={{ marginTop: "2rem" }} className="nav">
          <TeamsPageNav active="main" />
        </div> */}
        <div style={{ marginTop: "2rem" }} className="table">
          <TeamsTable name="Country List" data={teams?.response?.items} />
          {/* <TeamsTable /> */}
        </div>
      </div>
    </>
  );
};

export default page;
