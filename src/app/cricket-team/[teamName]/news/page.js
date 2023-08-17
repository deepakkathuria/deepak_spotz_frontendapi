import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import React from "react";
import styles from "./teamNews.module.css";
import NewsSection from "../../../../components/common/NewsSection";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const page = ({ params }) => {
  const { teamName } = params;
  const teamId = teamName?.split("-")[1];
  const currentCountry = "india";

  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `CRICKET TEAM`,
      url: "/cricket-team",
    },
    {
      name: `${teamName.toUpperCase().slice(0, 40)}...`,
      url: `/cricket-team/${teamName}`,
    },
    {
      name: `NEWS`,
      url: `/cricket-team/${teamName}/news`,
    },
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
      <OrganisationLd />
      <div className={styles.container}>
        {/* soundUpdatesDiv */}
        <NavBarSec active="teams" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav active="news" currentCountry={teamName} />
        </div>
        <div className="news">
          <NewsSection name="" id="3" slug="cricket" />
          <NewsSection name="" id="3" slug="cricket" />
        </div>
      </div>
    </>
  );
};

export default page;
