import React from "react";
import styles from "../LiveCricketScores.module.css";
import NavBarSec from "../../../components/scorePage/NavBarSec";
import UpdatesSound from "../../../components/common/UpdatesSound";
import ScoreCard from "../../../components/common/ScoreCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import OrganisationLd from "@/json-ld/OrganisationLd";
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
import { BreadcrumbJsonLd } from "next-seo";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const fetchLiveMatches = async () => {
  const res = await fetch(`${baseUrl}/matches/?status=1&token=${token}`);
  const data = await res.json();
  return data;
};

const page = async () => {
  const matches = await fetchLiveMatches();
  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `LIVE CRICKET SCORES`,
      url: "/live-cricket-scores",
    },
    {
      name: `UPCOMING`,
      url: "/live-cricket-scores/upcoming",
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
      <OrganisationLd />
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
        <div className={styles.nav}>
          <ul className={styles.navUl}>
            <li className={`${styles.navLi}`}>
              <a href="/live-cricket-scores">Live</a>
            </li>
            <li className={styles.navLi}>
              <a href="/live-cricket-scores/completed">Completed</a>
            </li>
            <li className={`${styles.navLi} ${styles.active}`}>
              <a href="/live-cricket-scores/upcoming">Upcoming</a>
            </li>
          </ul>
        </div>

        <div className={styles.scoreCardWithSeriesName}>
          {matches?.response?.items?.map((match, index) => {
            // console.log(match, "matchhhhhhhhhhhhhhhhhhhh");
            return (
              <div key={index} className={styles.seriesCard}>
                <div className={styles.name}>
                  <p>{match?.title}</p>
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
                      ? match?.status_note
                      : `Match starts on - ${match?.competition.datestart}`
                  }
                  type="Upcoming"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
