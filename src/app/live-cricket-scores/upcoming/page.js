import React from "react";
import styles from "../LiveCricketScores.module.css";
import NavBarSec from "../../../components/scorePage/NavBarSec";
import UpdatesSound from "../../../components/common/UpdatesSound";
import ScoreCard from "../../../components/common/ScoreCard";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;

const fetchLiveMatches = async () => {
  const res = await fetch(`${baseUrl}/matches/?status=1&token=${token}`, {
    next: { revalidate: 30 },
  });
  const data = await res.json();
  return data;
};

export const metadata = {
  title:
    "Cricket Live Score - Upcoming International, Domestic ODI, Test & T20 Series",
  description:
    "View Cricket Score of upcoming International, domestic and T20 Series on SportzWiki.",
  alternates: {
    canonical: `https://${site_url}/live-cricket-scores/upcoming/`,
  },
  robots: `index, follow`,
};

const page = async () => {
  const matches = await fetchLiveMatches();
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Live Cricket Scores`,
      url: "/live-cricket-scores",
    },
    {
      name: `Upcoming Matches`,
      // url: "/live-cricket-scores/upcoming",
    },
  ];
  // console.log(matches, "matchesssssssss");
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
          // {
          //   position: 4,
          //   name: breadcrumbs[3]?.name,
          //   item: `${site_url}${breadcrumbs[3]?.url}`,
          // },
          // {
          //   position: 5,
          //   name: breadcrumbs[4]?.name,
          //   item: `${site_url}${breadcrumbs[4]?.url}`,
          // },
        ]}
      />
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <div className={styles.navSec}>
          <NavBarSec active="live" />
        </div>
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <h1 style={{ marginTop: "1rem" }}>Upcoming Matches</h1>
        <div className={styles.nav}>
          <ul className={styles.navUl}>
            <li className={`${styles.navLi}`}>
              <a href="/live-cricket-scores/schedule/">All</a>
            </li>
            <li className={`${styles.navLi}`}>
              <a href="/live-cricket-scores/">Live</a>
            </li>
            <li className={styles.navLi}>
              <a href="/live-cricket-scores/completed/">Completed</a>
            </li>
            <li className={`${styles.navLi} ${styles.active}`}>
              <a href="/live-cricket-scores/upcoming/">Upcoming</a>
            </li>
          </ul>
        </div>

        <div className={styles.scoreCardWithSeriesName}>
          {matches?.response?.items?.map((match, index) => {
            // console.log(match, "matchhhhhhhhhhhhhhhhhhhh");
            return (
              <div key={index} className={styles.seriesCard}>
                <div className={styles.name}>
                  <p>{match?.competition?.abbr || "Live Score"}</p>
                </div>
                <ScoreCard
                  key={index}
                  matchID={match?.match_id}
                  title={match?.short_title ? match.short_title : "no title"}
                  subtitle={match?.subtitle ? match?.subtitle : null}
                  comp_abbr={
                    match?.competition.abbr ? match?.competition.abbr : null
                  }
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
                      ? match?.status_note
                      : `Match starts on - ${match?.competition.datestart}`
                  }
                  // type="Upcoming"
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
