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

const fetchLiveMatches = async (dateRange) => {
  // const res = await fetch(`${baseUrl}/matches/?status=2&token=${token}`);
  const res = await fetch(
    `${baseUrl}/matches/?status=2&token=${token}&date=${dateRange}`
  );
  const data = await res.json();
  return data;
};

const page = async () => {
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
      name: `COMPLETED`,
      url: "/live-cricket-scores/completed",
    },
  ];

  // Get current date
  const today = new Date();

  // Get yesterday's date
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Format dates as strings in YYYY-MM-DD format
  const formattedToday = formatDate(today);
  const formattedYesterday = formatDate(yesterday);

  // Concatenate dates in the desired format
  const dateRange = `${formattedYesterday}_${formattedToday}`;

  // console.log(dateRange, "dateRangeeeeeeeeeeeeeeeee");

  // Function to format date as YYYY-MM-DD
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const matches = await fetchLiveMatches(dateRange);
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
            <li className={`${styles.navLi} ${styles.active}`}>
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
                  <p>{match?.title.slice(0, 40)}</p>
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
                  // type="Completed"
                  status={match?.status}
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
