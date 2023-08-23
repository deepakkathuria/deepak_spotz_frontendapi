"use client";
import React, { useState, useEffect } from "react";
import ScorePanel from "../../../components/scorePage/ScorePanel";
import NavBarSec from "../../../components/scorePage/NavBarSec";
import AudioBar from "../../../components/scores/AudioBar";
import NavBarTertiary from "../../../components/scores/NavBarTertiary";
import InfoTable from "../../../components/scores/InfoTable";
import Link from "next/link";
import styles from "../../../components/scores/NavBarTertiary.module.css";
import UpdatesSound from "../../../components/common/UpdatesSound";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import Breadcrumb from "../../../components/common/Breadcrumb";
import PostListBar from "../../../components/common/PostListBar";
// import NavSec from "@/components/liveScore/NavSec";
import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
import EventLd from "@/json-ld/EventLd";
import NavSecScore from "@/components/liveScore/NavSecScore";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;
import { Helmet } from "react-helmet";
import HeaderBox from "@/components/common/HeaderBox";
import FaqLive from "@/components/common/FaqLive";
// import type { Metadata } from 'next'

// const header1 = "Live Cricket Scores & Updates";
// const description =
//   "Stay tuned to our live cricket score page for real-time updates, ball-by-ball commentary, and comprehensive match insights. Whether its international tests, ODIs, T20s, or domestic league matches, we've got you covered with the latest scores and match highlights. Don't miss a single moment of the action!";

const fetchMatchInfo = async (matchId) => {
  const res = await fetch(`${baseUrl}/matches/${matchId}/info?token=${key}`, {
    next: { revalidate: 2 },
  });
  const matchInfo = await res.json();
  return matchInfo;
};

const fetchMatchScoreCard = async (matchId) => {
  const res = await fetch(`${baseUrl}/matches/${matchId}/live?token=${key}`, {
    next: { revalidate: 2 },
  });
  const scoreCard = await res.json();
  return scoreCard;
};

// export const metadata = {
//   title: "...",
//   description: "...",
// };

// export async function generateMetadata({ params }) {
//   const { "series-name": seriesName } = params;
//   const seriesIdInt = seriesName.split("-")[seriesName.split("-").length - 1];

//   const matchInfo = await fetchMatchInfo(seriesIdInt);
//   const data = matchInfo.response;
//   console.log(data,"dadadadadadadadadadadadadadadadadadadadadadad");
//   return {
//     title: data?.competition.title ?? "",
//     description: data?.competition.title ?? "",
//   };
// }

const Page = ({ params }) => {
  const { "series-name": seriesName } = params;
  const seriesIdInt = seriesName.split("-")[seriesName.split("-").length - 1];
  // console.log(seriesIdInt, "seriesseriesseriesseriesseries");
  //   console.log(seriesIdInt, "seriesIdInt", seriesName);
  const [scoreCard, setScoreCard] = useState(null);
  const [matchInfo, setMatchInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedScoreCard = await fetchMatchScoreCard(seriesIdInt);
        const fetchedMatchInfo = await fetchMatchInfo(seriesIdInt);

        setScoreCard(fetchedScoreCard);
        setMatchInfo(fetchedMatchInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    const intervalId = setInterval(fetchData, 10000); // Poll every 10 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [seriesIdInt]);

  // console.log(
  //   matchInfo?.response.teama,
  //   "matchInfomatchInfomatchInfomatchInfomatchInfo"
  // );

  // const matchInfo = await fetchMatchInfo(seriesIdInt);
  // const data = matchInfo.response;
  // const scoreCard = await fetchMatchScoreCard(seriesIdInt);

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
      name: `${seriesName}`.toUpperCase(),
      url: `/live-cricket-scores/${seriesName}`,
    },
    {
      name: `LIVE CRICKET SCORECARD`,
      url: `/live-cricket-scores/${seriesName}`,
    },
  ];
  // console.log(matchInfo, "matchInfonsjdkbvkbdvj");

  // console.log(seriesName, "iddddd", typeof seriesName);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{matchInfo?.response?.competition.title ?? "SportzWiki"}</title>
        {/* <description>
          Latest Sports News: Get all latest sports news today on different
          sports, from Cricket, Football, Tennis, WWE, Esports, Badminton,
          Basketball, Boxing, F1, Hockey, Kabaddi &amp; Golf.
        </description> */}
      </Helmet>

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
          },
        ]}
      />
      <OrganisationLd />
      <EventLd
        eventName={matchInfo?.response?.competition.title ?? ""}
        startDate={matchInfo?.response?.date_start_ist}
        endDate={matchInfo?.response?.date_end_ist}
        venue={matchInfo?.response?.venue.name}
        url={`${site_url}${breadcrumbs[3]?.url}`}
      />
      <div
        className={styles.containerMainLiveScore}
        style={{ marginBottom: "4rem" }}
      >
        <NavBarSec active="live" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.scoreNews}>
          <div className="leftContainer">
            <div
              style={{ marginTop: "2rem" }}
              className={styles.soundUpdateDiv}
            >
              <UpdatesSound />
            </div>
            <div className={styles.heading1}>
              <h1>Live Cricket Scores & Updates</h1>
            </div>
            <ScorePanel
              logoTeamA={matchInfo?.response?.teama?.logo_url ?? ""}
              logoTeamB={matchInfo?.response?.teamb?.logo_url ?? ""}
              nameTeamA={matchInfo?.response?.teama?.name ?? ""}
              nameTeamB={matchInfo?.response?.teamb?.name ?? ""}
              overTeamA={matchInfo?.response?.teama?.overs ?? ""}
              overTeamB={matchInfo?.response?.teamb?.overs ?? ""}
              scoreTeamA={matchInfo?.response?.teama?.scores ?? ""}
              scoreTeamB={matchInfo?.response?.teamb?.scores ?? ""}
              currentStatus={matchInfo?.response?.status_note ?? ""}
              // ************************************
              batsA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0].name ?? ""
                  : ""
              }
              batsB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1].name ?? ""
                  : ""
              }
              batsman_idA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0].batsman_id ?? ""
                  : ""
              }
              batsman_idB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1].batsman_id ?? ""
                  : ""
              }
              runsA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0].runs ?? ""
                  : ""
              }
              runsB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1].runs ?? ""
                  : ""
              }
              balls_facedA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0].balls_faced ?? ""
                  : ""
              }
              balls_facedB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1].balls_faced ?? ""
                  : ""
              }
              foursA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0].fours ?? ""
                  : ""
              }
              foursB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1].fours ?? ""
                  : ""
              }
              sixesA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0].sixes ?? ""
                  : ""
              }
              sixesB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1].sixes ?? ""
                  : ""
              }
              strike_rateA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0].strike_rate ?? ""
                  : ""
              }
              strike_rateB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1].strike_rate ?? ""
                  : ""
              }
              // bowlers data
              bowlerNameA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0].name ?? ""
                  : ""
              }
              bowlerNameB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1].name ?? ""
                  : ""
              }
              bowlerIdA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0].bowler_id ?? ""
                  : ""
              }
              bowlerIdB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1].bowler_id ?? ""
                  : ""
              }
              bowlerOversA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0].overs ?? ""
                  : ""
              }
              bowlerOversB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1].overs ?? ""
                  : ""
              }
              bowlerRunsConcededA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0].runs_conceded ?? ""
                  : ""
              }
              bowlerRunsConcededB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1].runs_conceded ?? ""
                  : ""
              }
              bowlerWicketsA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0].wickets ?? ""
                  : ""
              }
              bowlerWicketsB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1].wickets ?? ""
                  : ""
              }
              bowlerMaidensA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0].maidens ?? ""
                  : ""
              }
              bowlerMaidensB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1].maidens ?? ""
                  : ""
              }
              bowlerEconA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0].econ ?? ""
                  : ""
              }
              bowlerEconB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1].econ ?? ""
                  : ""
              }
            />

            <AudioBar />
            <div className="nav">
              <NavSecScore active="info" seriesName={seriesName} />
            </div>

            <InfoTable
              matchFormat={`${matchInfo?.response?.competition.title ?? ""} ${
                matchInfo?.response?.format_str ?? ""
              }`}
              series={matchInfo?.response?.competition.title ?? ""}
              date={
                new Date(
                  matchInfo?.response?.date_start_ist
                ).toLocaleDateString() ?? ""
              }
              time={
                new Date(
                  matchInfo?.response?.date_end_ist
                ).toLocaleTimeString() ?? ""
              }
              venueName={matchInfo?.response?.venue.name ?? ""}
              venueCountry={matchInfo?.response?.venue.country ?? ""}
              stadium={matchInfo?.response?.venue.name ?? ""}
              venueLocation={matchInfo?.response?.venue.location ?? ""}
              umpires={matchInfo?.response?.umpires ?? ""}
              referee={matchInfo?.response?.referee ?? ""}
            />
            <div className={styles.headerBox}>
              <HeaderBox />
            </div>
            <div className={styles.faqs}>
              <FaqLive />
            </div>
          </div>
          {/* <div className={styles.containerRight}>
            <PostListBar category="cricket" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Page;
