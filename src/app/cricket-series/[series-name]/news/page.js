import React from "react";
import styles from "./news.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import NewsSection from "../../../../components/common/NewsSection";
import StatsNav from "@/components/series/StatsNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
// const base_url = process.env.NEXT_PUBLIC_BASE_URL;
// const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const fetchSeriesMatches = async (seriesId) => {
  const res = await fetch(
    `${baseUrl}/competitions/${seriesId}/matches/?token=${key}&per_page=1&&paged=1`,
    { next: { revalidate: 30 } }
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params then fetch data
  const { "series-name": seriesName } = params;
  // const seriesNameOnly = seriesName.split("-");
  // console.log(seriesNameOnly);
  const seriesIdInt = parseInt(
    seriesName.split("-")[seriesName.split("-").length - 1]
  );

  const seriesMatches = await fetchSeriesMatches(seriesIdInt);

  // return an object
  return {
    title: `${seriesMatches?.response?.items[0]?.competition?.title} News - SportzWiki`,
    description: `Check full updates of ${seriesMatches?.response?.items[0]?.competition?.title}, full coverage, ball by ball comentary only on SportzWiki.`,
  };
}

const page = async ({ params }) => {
  const { "series-name": seriesName } = params;
  const seriesIdInt = parseInt(
    seriesName.split("-")[seriesName.split("-").length - 1]
  );

  const seriesMatches = await fetchSeriesMatches(seriesIdInt);

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
      url: `/cricket-series/${seriesName}`,
    },
    {
      name: `News`,
      // url: `/cricket-series/${seriesName}/news`,
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
        <div className="nav">
          <NavBarSec active="series" />
        </div>
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <h1
          style={{ marginTop: "1rem" }}
        >{`${seriesMatches?.response?.items[0]?.competition?.title} News`}</h1>
        <div className={styles.seriesOverviewTitle}>
          {/* <p>Sri Lanka Tour of india 2022</p> */}
        </div>
        <div className={styles.tertiaryNav}>
          <StatsNav active="news" seriesName={seriesName} />
        </div>
        <NewsSection name="" id="2" slug="cricket" />
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
