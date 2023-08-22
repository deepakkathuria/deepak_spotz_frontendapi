"use client";
import React, { useState, useEffect } from "react";
import ScorePanel from "../../../../components/scorePage/ScorePanel";
import NavBarSec from "../../../../components/scorePage/NavBarSec";
import AudioBar from "../../../../components/scores/AudioBar";
// import NavBarTertiary from "../../../../components/scores/NavBarTertiary";
// import Link from "next/link";
import styles from "../../../../components/scores/NavBarTertiary.module.css";
import Teams from "../../../../components/scores/Teams";
import UpdatesSound from "../../../../components/common/UpdatesSound";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import Breadcrumb from "../../../../components/common/Breadcrumb";
import PostListBar from "../../../../components/common/PostListBar";
// import NavSec from "../../../../components/liveScore/NavSec";
NavSecScore;
import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;
import EventLd from "@/json-ld/EventLd";
import NavSecScore from "@/components/liveScore/NavSecScore";
import { Helmet } from "react-helmet";

const fetchMatchScoreCard = async (matchId) => {
  const res = await fetch(`${baseUrl}/matches/${matchId}/live?token=${key}`, {
    next: { revalidate: 2 },
  });
  const scoreCard = await res.json();
  return scoreCard;
};

const fetchMatchInfo = async (matchId) => {
  // console.log(matchId, "matchID");
  const res = await fetch(`${baseUrl}/matches/${matchId}/info?token=${key}`, {
    next: { revalidate: 2 },
  });
  const matchInfo = await res.json();
  // console.log(matchInfo, "matchInfo");
  return matchInfo;
};

const fetchPlayingSquad = async (matchId) => {
  const res = await fetch(`${baseUrl}/matches/${matchId}/squads?token=${key}`, {
    next: { revalidate: 2 },
  });
  const data = await res.json();
  return data;
};

const Page = ({ params }) => {
  // const { "series-id": seriesId } = params;
  // const seriesIdInt = parseInt(seriesId, 10);
  const { "series-name": seriesName } = params;
  const seriesIdInt = seriesName.split("-")[seriesName.split("-").length - 1];

  const [scoreCard, setScoreCard] = useState(null);
  const [matchInfo, setMatchInfo] = useState(null);
  const [playingSquad, setPlayingSquad] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedScoreCard = await fetchMatchScoreCard(seriesIdInt);
        const fetchedMatchInfo = await fetchMatchInfo(seriesIdInt);
        const fetchedPlayingSquad = await fetchPlayingSquad(seriesIdInt);

        setScoreCard(fetchedScoreCard);
        setMatchInfo(fetchedMatchInfo);
        setPlayingSquad(fetchedPlayingSquad);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    const intervalId = setInterval(fetchData, 10000); // Poll every 10 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [seriesIdInt]);

  // const matchInfo = await fetchMatchInfo(seriesIdInt);
  // const data = matchInfo.response;
  // const scoreCard = await fetchMatchScoreCard(seriesIdInt);

  // const playingSquad = await fetchPlayingSquad(seriesIdInt);
  // console.log("playingSquad", playingSquad);

  // const { "series-name": seriesName } = params;

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
      name: `TEAMS`,
      url: `/live-cricket-scores/${seriesName}/teams`,
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{matchInfo?.response?.competition.title ?? "SportzWiki"}</title>
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
            // item: `${site_url}${breadcrumbs[3]?.url}`,
          },
          // {
          //   position: 5,
          //   name: breadcrumbs[4]?.name,
          //   item: `${site_url}${breadcrumbs[4]?.url}`,
          // },
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
      <div className={styles.containerMainLiveScore}>
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
            {/* <NavBarTertiary activeTab="teams" /> */}
            <div className="nav">
              <NavSecScore active="teams" seriesName={seriesName} />
            </div>
            <Teams
              data={playingSquad}
              nameTeamA={matchInfo?.response?.teama?.name ?? ""}
              nameTeamB={matchInfo?.response?.teamb?.name ?? ""}
            />
          </div>
          {/* <div className={styles.containerRight}>
            <PostListBar category="cricket" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
