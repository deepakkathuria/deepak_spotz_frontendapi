import UpdatesSound from "@/components/common/UpdatesSound";
import React from "react";
import styles from "./seriesOverview.module.css";
// import ScoreBoard from "@/components/scorePage/Commentary/ScoreBoard";
// import LiveScoreSection from "@/components/common/LiveScoreSection";
// import ScoreCardPanel from "../../../components/common/ScoreCardPanel";
import NewsSection from "../../../components/common/NewsSection";
import ScoreCardPanelReusable from "@/components/common/ScoreCardPanelReuable";
import StatsNav from "@/components/series/StatsNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
import OrganisationLd from "@/json-ld/OrganisationLd";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import { BreadcrumbJsonLd } from "next-seo";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const fetchSeriesMatches = async (seriesId) => {
  const res = await fetch(
    `${baseUrl}/competitions/${seriesId}/matches/?token=${key}&per_page=50&&paged=1`,
    { next: { revalidate: 30 } }
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const { "series-name": seriesName } = params;
  // console.log(seriesName, "seriesNameeeeeeeeeeeeeeeeeeee");
  const seriesIdInt = parseInt(
    seriesName.split("-")[seriesName.split("-").length - 1]
  );

  const seriesMatches = await fetchSeriesMatches(seriesIdInt);

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
        ]}
      />
      <OrganisationLd />
      <div className={`${styles.container} ${styles.seriesOverview}`}>
        <NavBarSec active="series" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          {/* <p>{seriesName}</p> */}
        </div>
        <div className={styles.tertiaryNav}>
          <StatsNav active="overview" seriesName={seriesName} />
        </div>
        <div className={styles.matchesList}>
          <ScoreCardPanelReusable data={seriesMatches} display={false} />
        </div>
        <div className={styles.news}>
          {/* <p>NEWS</p> */}
          <NewsSection name="NEWS" id="3" slug="cricket" />
        </div>
      </div>
    </>
  );
};

export default page;
