import React from "react";
import styles from "./news.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import NewsSection from "../../../../components/common/NewsSection";
import StatsNav from "@/components/series/StatsNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const page = ({ params }) => {
  const { "series-name": seriesName } = params;
  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `CRICKET SERIES`,
      url: "/cricket-series",
    },
    {
      name: `${seriesName.toUpperCase().slice(0, 40)}...`,
      url: `/cricket-series/${seriesName}`,
    },
    {
      name: `NEWS`,
      url: `/cricket-series/${seriesName}/news`,
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
        <div className="nav">
          <NavBarSec active="series" />
        </div>
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          <p>Sri Lanka Tour of india 2022</p>
        </div>
        <div className={styles.tertiaryNav}>
          <StatsNav active="news" seriesName={seriesName} />
        </div>
        <NewsSection name="" id="3" slug="cricket" />
      </div>
    </>
  );
};

export default page;
