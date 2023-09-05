import React from "react";
import styles from "./schedule.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import ScoreCard from "../../../../components/common/ScoreCard";
import StatsNav from "@/components/series/StatsNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;

const fetchUpcomingMatches = async (matchId) => {
  const res = await fetch(
    `${baseUrl}/competitions/${matchId}/matches/?token=${key}&per_page=50&&paged=1`,
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
  const matches = await fetchUpcomingMatches(seriesIdInt);

  // return an object
  return {
    title: `${matches?.response?.items[0]?.competition?.title} Matches - SportzWiki`,
    description: `Check full updates of ${matches?.response?.items[0]?.competition?.title} , full coverage, ball by ball comentary only on SportzWiki.`,
  };
}

const page = async ({ params }) => {
  const { "series-name": seriesName } = params;
  // console.log(seriesName, "seriesNameeeeeeeeeeeeeeeeeeee");
  const seriesIdInt = parseInt(
    seriesName.split("-")[seriesName.split("-").length - 1]
  );
  const matches = await fetchUpcomingMatches(seriesIdInt);
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
      name: `Matches`,
      // url: `/cricket-series/${seriesName}/matches`,
    },
  ];
  // console.log(matches.response.items,'matchesssssssssssssss');
  return (
    <>
      {/* <OrganisationLd /> */}
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
            item: `${site_url}${breadcrumbs[1]?.url}`,
          },
          {
            position: 4,
            name: breadcrumbs[3]?.name,
            item: `${site_url}${breadcrumbs[3]?.url}`,
          },
        ]}
      />
      <div className={styles.container}>
        <NavBarSec active="series" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <h1 style={{ marginTop: "1rem" }}>
          {matches?.response?.items[0]?.competition?.title || "Cricket Series"}{" "}
          Schedule and Results
        </h1>
        <div className={styles.seriesOverviewTitle}>
          {/* <p>Sri Lanka Tour of india 2022</p> */}
        </div>
        <div className={styles.tertiaryNav}>
          <StatsNav active="schedule" seriesName={seriesName} />
        </div>
        <div className={styles.schedule}>
          {matches?.response?.items?.map((match, index) => {
            return (
              <div key={index} className={styles.cardsWithDate}>
                <p className={styles.date}>{match?.competition?.datestart}</p>
                <ScoreCard
                  matchID={match?.match_id}
                  title={match?.short_title ? match.short_title : "no title"}
                  teamAName={match?.teama.name ? match?.teama.name : "NA"}
                  teamBName={match?.teamb.name}
                  teamAScores={match?.teama.scores}
                  teamBScores={match?.teamb.scores}
                  teamAOvers={match?.teama.overs}
                  teamBOvers={match?.teamb.overs}
                  teamALogo={match?.teama.logo_url}
                  teamBLogo={match?.teamb.logo_url}
                  matchScoreDetails={
                    match?.status_note
                      ? match.status_note
                      : "no status information"
                  }
                  status={match?.status}
                />
              </div>
            );
          })}
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
