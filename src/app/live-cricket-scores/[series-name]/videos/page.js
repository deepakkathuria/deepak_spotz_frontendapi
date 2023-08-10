import React from "react";
import ScorePanel from "../../../../components/scorePage/ScorePanel";
import NavBarSec from "../../../../components/scorePage/NavBarSec";
import AudioBar from "../../../../components/scores/AudioBar";
import NavBarTertiary from "../../../../components/scores/NavBarTertiary";
import Link from "next/link";
import styles from "../../../../components/scores/NavBarTertiary.module.css";
import ScoreCardLive from "../../../../components/scores/ScoreCardLive";
import UpdatesSound from "../../../../components/common/UpdatesSound";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import Breadcrumb from "../../../../components/common/Breadcrumb";
import PostListBar from "../../../../components/common/PostListBar";

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

const page = async ({ params }) => {
  // const { "series-id": seriesId } = params;
  // const seriesIdInt = parseInt(seriesId, 10);
  const { "series-name": seriesName } = params;
  const seriesIdInt = seriesName.split("-")[seriesName.split("-").length - 1];

  const matchInfo = await fetchMatchInfo(seriesIdInt);
  const data = matchInfo.response;
  const scoreCard = await fetchMatchScoreCard(seriesIdInt);

  // const { "series-name": seriesName } = params;
  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `CRICKET SERIES`,
      url: "/",
    },
    {
      name: `${seriesName}`.toUpperCase(),
      url: "/",
    },
    {
      name: `CRICKET MATCH VIDEOS`,
      url: "/",
    },
  ];
  return (
    <>
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
            {/* <NavBarTertiary activeTab="score-card-live" /> */}
            <div className="nav">
              <div className={styles.container}>
                <Link href={`/live-cricket-scores/${seriesName}`}>
                  <p>Info</p>
                </Link>
                <Link href={`/live-cricket-scores/${seriesName}/commentary`}>
                  <p>Commentary</p>
                </Link>
                <Link href={`/live-cricket-scores/${seriesName}/live-blog`}>
                  <p>Live Blog</p>
                </Link>
                <Link
                  href={`/live-cricket-scores/${seriesName}/full-scorecard/`}
                >
                  <p>Scorecard</p>
                </Link>
                <Link href={`/live-cricket-scores/${seriesName}/squads`}>
                  <p>Teams</p>
                </Link>
                <Link href={`/live-cricket-scores/${seriesName}/videos`}>
                  <p className={styles.active}>Videos</p>
                </Link>
                <Link href={`/live-cricket-scores/${seriesName}/news`}>
                  <p>News</p>
                </Link>
                <Link href={`/live-cricket-scores/${seriesName}/photos`}>
                  <p>Photos</p>
                </Link>

                <Link href={`/live-cricket-scores/${seriesName}/match-wheel`}>
                  <p>Wagon Wheel</p>
                </Link>

                <Link href={`/live-cricket-scores/${seriesName}/manhattan`}>
                  <p>Manhattan</p>
                </Link>
              </div>
            </div>
            {/* <ScoreCardLive /> */}
            <h2>Match videos coming soon...</h2>
          </div>
          <div className={styles.containerRight}>
            <PostListBar category="cricket" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
