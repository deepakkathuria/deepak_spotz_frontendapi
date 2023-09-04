import React from "react";
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
// import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;
import EventLd from "@/json-ld/EventLd";
import NavSecScore from "@/components/liveScore/NavSecScore";
import HeaderBox from "@/components/common/HeaderBox";
import FaqLive from "@/components/common/FaqLive";

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

export async function generateMetadata({ params }) {
  // read route params then fetch data
  const { "series-name": seriesName } = params;
  const seriesIdInt = seriesName.split("-")[seriesName.split("-").length - 1];
  const info = await fetchMatchInfo(seriesIdInt);
  console.log(info?.response?.title);

  // return an object
  return {
    title: `Catch Full Team Details of ${
      info?.response?.short_title || info?.response?.short_title
    }  | SportzWiki.com`,
    description: `Check full Team ${
      info?.response?.short_title || info?.response?.short_title
    }, Cricket Match with live Cricket score, ball by ball commentary updates on SportzWiki.`,
  };
}

const page = async ({ params }) => {
  // const { "series-id": seriesId } = params;
  // const seriesIdInt = parseInt(seriesId, 10);
  const { "series-name": seriesName } = params;
  const seriesIdInt = seriesName.split("-")[seriesName.split("-").length - 1];

  const matchInfo = await fetchMatchInfo(seriesIdInt);
  const data = matchInfo.response;
  const scoreCard = await fetchMatchScoreCard(seriesIdInt);

  const playingSquad = await fetchPlayingSquad(seriesIdInt);
  // console.log("playingSquad", playingSquad);

  // const { "series-name": seriesName } = params;

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
      name: `${matchInfo?.response?.teama?.name} vs ${matchInfo?.response?.teamb?.name}`,
      url: `/live-cricket-scores/${seriesName}`,
    },
    {
      name: `Teams`,
      // url: `/live-cricket-scores/${seriesName}/teams`,
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
            // item: `${site_url}${breadcrumbs[3]?.url}`,
          },
          // {
          //   position: 5,
          //   name: breadcrumbs[4]?.name,
          //   item: `${site_url}${breadcrumbs[4]?.url}`,
          // },
        ]}
      />
      {/* <OrganisationLd /> */}
      <EventLd
        eventName={data?.competition?.title ?? ""}
        startDate={data?.date_start_ist}
        endDate={data?.date_end_ist}
        venue={data?.venue?.name}
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
            <div className={styles.heading1}>
              <h1>
                {matchInfo?.response?.teama?.name} vs{" "}
                {matchInfo?.response?.teamb?.name} Team
              </h1>
            </div>
            <ScorePanel
              teamIdA={data?.teama?.team_id ?? ""}
              teamIdB={data?.teamb?.team_id ?? ""}
              logoTeamA={data?.teama?.logo_url ?? ""}
              logoTeamB={data?.teamb?.logo_url ?? ""}
              nameTeamA={data?.teama?.name ?? ""}
              nameTeamB={data?.teamb?.name ?? ""}
              overTeamA={data?.teama?.overs ?? ""}
              overTeamB={data?.teamb?.overs ?? ""}
              scoreTeamA={data?.teama?.scores ?? ""}
              scoreTeamB={data?.teamb?.scores ?? ""}
              currentStatus={data?.status_note ?? ""}
              // ************************************
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
              nameTeamA={data?.teama?.name ?? ""}
              nameTeamB={data?.teamb?.name ?? ""}
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

export default page;
