import React from "react";
import styles from "../LiveCricketScores.module.css";
import NavBarSec from "../../../components/scorePage/NavBarSec";
import UpdatesSound from "../../../components/common/UpdatesSound";
import ScoreCard from "../../../components/common/ScoreCard";
import Breadcrumb from "../../../components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "../../../components/common/FaqLive";
// const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-11, so we add 1
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const formattedDate = `${getCurrentDate()}_${getCurrentDate()}`;

const fetchLiveMatches = async () => {
  const res = await fetch(
    `${baseUrl}/matches/?token=${token}&date=${formattedDate}&per_page=50`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export const metadata = {
  title: "Live Cricket Score | Ball By Ball Commentary",
  description:
    "Get live cricket scores, match schedules, ball by ball commentary of Upcoming and Ongoing International & Domaestic Cricket match, latest news & many more.",
  alternates: {
    canonical: `${site_url}/live-cricket-scores/schedule`,
  },
  robots: `index, follow`,
};

const page = async () => {
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Live Cricket Scroes`,
      url: "/live-cricket-scores",
    },
    {
      name: `Schedule`,
      // url: "/live-cricket-scores",
    },
  ];
  const matches = await fetchLiveMatches();
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
        ]}
      />
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <div className="navSec">
          <NavBarSec active="live" />
        </div>
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <h1 style={{ marginTop: "1rem"}}>
          Cricket Match Schedule
        </h1>
        <div className="nav">
          <ul className={styles.navUl}>
            <li className={`${styles.navLi} ${styles.active}`}>
              <a href="/live-cricket-scores/schedule">Schedule</a>
            </li>
            <li className={`${styles.navLi}`}>
              <a href="/live-cricket-scores">Live</a>
            </li>
            <li className={styles.navLi}>
              <a href="/live-cricket-scores/completed">Completed</a>
            </li>
            <li className={styles.navLi}>
              <a href="/live-cricket-scores/upcoming">Upcoming</a>
            </li>
          </ul>
        </div>

        <div className={styles.scoreCardWithSeriesName}>
          {matches?.response?.items?.map((match, index) => {
            return (
              <div key={index} className={styles.seriesCard}>
                <div className={styles.name}>
                  <p>{match?.title.slice(0, 30)}</p>
                </div>
                <ScoreCard
                  key={index}
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
