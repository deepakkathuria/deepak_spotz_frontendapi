import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import React from "react";
import styles from "./teamNews.module.css";
import NewsSection from "../../../../components/common/NewsSection";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
// const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchTeamInfoById = async (teamId) => {
  const res = await fetch(`${base_url}/teams/${teamId}?token=${token}`);
  const team = await res.json();
  return team;
};

export async function generateMetadata({ params }) {
  // read route params then fetch data
  const { teamName } = params;
  const teamId = teamName?.split("-")[1];
  const data = await fetchTeamInfoById(teamId);

  // return an object
  return {
    title: `${data?.response?.title} Cricket News - SportzWiki`,
    description: `Get full cricket team News of ${data?.response?.title} on SportzWiki.`,
  };
}

const page = async ({ params }) => {
  const { teamName } = params;
  const teamId = teamName?.split("-")[1];
  const currentCountry = "india";

  // const { teamName } = params;
  // const teamId = teamName?.split("-")[1];
  const data = await fetchTeamInfoById(teamId);

  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Cricket Team`,
      url: "/cricket-team",
    },
    {
      name: `${data?.response?.title}`,
      url: `/cricket-team/${teamName}`,
    },
    {
      name: `News`,
      // url: `/cricket-team/${teamName}/news`,
    },
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
          {
            position: 3,
            name: breadcrumbs[2]?.name,
            item: `${site_url}${breadcrumbs[2]?.url}`,
          },
          {
            position: 4,
            name: breadcrumbs[3]?.name,
            item: `${site_url}${breadcrumbs[3]?.url}`,
          },
        ]}
      />
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        {/* soundUpdatesDiv */}
        <NavBarSec active="teams" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <h1
          style={{ marginTop: "1rem" }}
        >{`${data?.response?.title} Cricket Team News`}</h1>
        <div className="nav">
          <TeamCountryNav active="news" currentCountry={teamName} />
        </div>
        <div className="news">
          <NewsSection name="" id="3" slug="cricket" />
          <NewsSection name="" id="3" slug="cricket" />
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
