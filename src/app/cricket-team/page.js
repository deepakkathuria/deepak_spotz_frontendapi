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
// import OrganisationLd from "@/json-ld/OrganisationLd";
import FaqLive from "@/components/common/FaqLive";
// const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;

const fetchTeamList = async () => {
  const res = await fetch(
    // `${base_url}/teams/?token=${token}&type=country&sex=male&per_page=50`
    // http://localhost:4001/teams/?type=country&sex=male
    `http://localhost:4003/teams/?type=country&sex=male`
  );
  const data = await res.json();
  console.log(data,"dddddddddddddddddddddddddddddddddddddddddddddd")

  return data;
};

export const metadata = {
  title: "Cricket Team List | International, Domestic & Women",
  description:
    "Get full Team List of International, Doemstic, Women & Other Cricket Team on SportzWiki.",
};

const page = async () => {
  const teams = await fetchTeamList();
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Cricket Teams`,
      // url: "/cricket-team",
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
            name: "Home",
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
      {/* <OrganisationLd /> */}
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
        <h1 style={{ marginTop: "1rem" }}>Cricket Teams</h1>
        {/* <div style={{ marginTop: "2rem" }} className="nav">
          <TeamsPageNav active="main" />
        </div> */}
        <div style={{ marginTop: "2rem" }} className="table">
          <TeamsTable name="Country List" data={teams} />
          {/* <TeamsTable name="Country List" data={teams?.response?.items} /> */}

          {/* <TeamsTable /> */}
        </div>
        {/* <div style={{ marginTop: "2rem" }} className="header">
          <h2 style={{ fontSize: "1.4rem" }}>SportzWiki Media</h2>
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
            It is an honour to introduce—Sportzwiki – sports is life, is one of
            the leading online sports mediums across the globe. The digital
            platform over the years has grabbed the attention of an audience
            worldwide.From the cricketing ground to the badminton court—the
            dedicated team at Sportzwiki has been always on the lookout to
            provide insights, pre and post-match stuff and plenty with 24/7
            window.
          </p>
        </div>
        <FaqLive /> */}
      </div>
    </>
  );
};

export default page;
