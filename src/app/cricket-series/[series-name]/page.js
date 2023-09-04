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
// import OrganisationLd from "@/json-ld/OrganisationLd";
const baseUrl = process.env.ENTITY_URL;
const key = process.env.ENTITY_TOKEN;
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;

const fetchSeriesMatches = async (seriesId) => {
  const res = await fetch(
    `${baseUrl}/competitions/${seriesId}/matches/?token=${key}&per_page=50&&paged=1`,
    { next: { revalidate: 30 } }
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params then fetch data
  const { "series-name": seriesName } = params;
  const seriesIdInt = parseInt(
    seriesName.split("-")[seriesName.split("-").length - 1]
  );

  const seriesMatches = await fetchSeriesMatches(seriesIdInt);

  // return an object
  return {
    title: seriesMatches?.response?.items[0]?.competition?.title,
    description: `Check full updates of ${seriesMatches?.response?.items[0]?.competition?.title}, full coverage, ball by ball comentary only on SportzWiki.`,
  };
}

const page = async ({ params }) => {
  const { "series-name": seriesName } = params;
  // console.log(seriesName, "seriesNameeeeeeeeeeeeeeeeeeee");
  const seriesIdInt = parseInt(
    seriesName.split("-")[seriesName.split("-").length - 1]
  );

  const seriesMatches = await fetchSeriesMatches(seriesIdInt);
  // console.log(seriesMatches.response.items[0].competition.title,'seriesIdsrhdfbgjhvsjh')

  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Cricket Series`,
      url: "/cricket-series",
    },
    {
      name: `${seriesName}`,
      // url: `/cricket-series/${seriesName}`,
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
        ]}
      />
      {/* <OrganisationLd /> */}
      <div className={`${styles.container} ${styles.seriesOverview}`}>
        <NavBarSec active="series" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <h1 style={{ marginTop: "1rem" }}>
          {seriesMatches?.response?.items[0]?.competition?.title ||
            "Cricket Series"}
        </h1>
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
          <NewsSection name="LATEST NEWS" id="2" slug="cricket" />
        </div>
        <div style={{ marginTop: "2rem" }} className="header">
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
        <FaqLive />
      </div>
    </>
  );
};

export default page;
