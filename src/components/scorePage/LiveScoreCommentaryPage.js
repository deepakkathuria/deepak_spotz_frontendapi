"use client";
import NavBarSec from "./NavBarSec";
import ScorePanel from "./ScorePanel";
import AudioBar from "../scores/AudioBar";
import React, { useState, useEffect } from "react";
import CommentaryBox from "./Commentary/CommentaryBox";
import styles from "../scores/NavBarTertiary.module.css";
import UpdatesSound from "../common/UpdatesSound";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import Breadcrumb from "../common/Breadcrumb";
import NavSecScore from "../liveScore/NavSecScore";
import slugify from "slugify";

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

const fetchMatchCommentary = async (matchId, inning) => {
  const res = await fetch(
    `${baseUrl}/matches/${matchId}/innings/${inning}/commentary?token=${key}`,
    { cache: "no-store" }
  );
  const commentary = res.json();
  return commentary;
};

// const fetchMatchInfo = async (matchId) => {
//   const res = await fetch(`${baseUrl}matches/${matchId}`, {
//     next: { revalidate: 2 },
//   });
//   const matchInfo = await res.json();
//   return matchInfo;
// };
// export async function generateMetadata({ params }) {
//   // const { slug } = params;
//   const { "series-name": seriesName } = params;
//   const seriesIdInt = seriesName.split("-")[seriesName.split("-").length - 1];

//   // const post = await fetchPostBySlug(slug);
//   const matchInfo = await fetchMatchInfo(seriesIdInt);
//   const data = matchInfo.response;
//   // const scoreCard = await fetchMatchScoreCard(seriesIdInt);

//   return {
//     title: data?.competition.title ?? "-",
//     description: data?.competition.title ?? "-",
//   };
// }

const LiveScoreCommentaryPage = (props) => {
  const { seriesName } = props;
  const seriesIdInt = seriesName.split("-")[seriesName.split("-").length - 1];

  const [scoreCard, setScoreCard] = useState(null);
  const [matchInfo, setMatchInfo] = useState(null);
  const [commentary, setCommentary] = useState(null);
  const [inning, setInning] = useState(1);

  const handleTeamChange1 = () => {
    setInning(1);
  };
  const handleTeamChange2 = () => {
    setInning(2);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedScoreCard = await fetchMatchScoreCard(seriesIdInt);
        const fetchedMatchInfo = await fetchMatchInfo(seriesIdInt);
        const fetchedCommentaryInfo = await fetchMatchCommentary(
          seriesIdInt,
          inning
        );

        setScoreCard(fetchedScoreCard);
        setMatchInfo(fetchedMatchInfo);
        setCommentary(fetchedCommentaryInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    const intervalId = setInterval(fetchData, 10000); // Poll every 10 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [seriesIdInt, inning]);

  // console.log(
  //   commentary?.response?.commentaries,
  //   "scorecardscorecardscorecardscorecardscorecard"
  // );

  // const matchInfo = await fetchMatchInfo(seriesIdInt);
  // const data = matchInfo.response;
  // const scoreCard = await fetchMatchScoreCard(seriesIdInt);

  // const commentaryInfo = await fetchMatchCommentary(seriesIdInt);
  // const commentaryList = commentaryInfo?.response?.commentaries?.reverse();

  // console.log(
  //   matchInfo?.response?.competition?.title,
  //   "matchInfo?.responsematchInfo?.response"
  // );

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
      name: `${
        matchInfo?.response?.competition.title
          ? matchInfo?.response?.competition.title
          : ""
      }`,
      url: `/cricket-series/${slugify(
        matchInfo?.response?.competition?.title || "",
        {
          remove: /[*+~.()'"!:@]/g,
          lower: true,
        }
      )}-${matchInfo?.response?.competition?.cid}`,
    },
    {
      name: `${matchInfo?.response?.teama?.name} vs ${matchInfo?.response?.teamb?.name}`,
      url: `/live-cricket-scores/${seriesName}`,
    },
    {
      name: `Commentary`,
      // url: `/live-cricket-scores/${seriesName}/commentary`,
    },
  ];
  return (
    <>
      {/* <BreadcrumbJsonLd
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
      /> */}
      {/* <OrganisationLd /> */}
      {/* <EventLd
        eventName={matchInfo?.response?.competition.title ?? "-"}
        startDate={matchInfo?.response?.date_start_ist}
        endDate={matchInfo?.response?.date_end_ist}
        venue={matchInfo?.response?.venue.name}
        url={`${site_url}${breadcrumbs[3]?.url}`}
      /> */}
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{matchInfo?.response?.competition?.title ?? "SportzWiki"}</title>
      </Helmet> */}
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
                {matchInfo?.response?.teamb?.name} Live Commentary
              </h1>
            </div>
            <ScorePanel
              logoTeamA={matchInfo?.response?.teama?.logo_url ?? ""}
              logoTeamB={matchInfo?.response?.teamb?.logo_url ?? ""}
              nameTeamA={matchInfo?.response?.teama?.name ?? ""}
              nameTeamB={matchInfo?.response?.teamb?.name ?? ""}
              overTeamA={matchInfo?.response?.teama?.overs ?? "0.0"}
              overTeamB={matchInfo?.response?.teamb?.overs ?? "0.0"}
              scoreTeamA={matchInfo?.response?.teama?.scores ?? "Yet to bat"}
              scoreTeamB={matchInfo?.response?.teamb?.scores ?? "Yet to bat"}
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
            {/* <NavBarTertiary activeTab="commentary" /> */}
            <div className="nav">
              <NavSecScore active="commentary" seriesName={seriesName} />
            </div>

            <div className="commentaries">
              <div className={styles.commentaryStatBox}>
                <div className={styles.overScore}>
                  <div className={styles.overRuns}>
                    <div className={styles.over}>
                      Over {matchInfo?.response?.teama?.scores ?? "-"}
                    </div>
                    {/* <div className={styles.runs}>18 runs</div> */}
                  </div>
                  <div className={styles.score}>
                    <div className={styles.outOfRuns}>
                      {matchInfo?.response?.teama?.name ?? "-"}:{" "}
                      {matchInfo?.response?.teama?.scores ?? "-"}
                    </div>
                    {/* <div className={styles.runRate}>CRR:7.32</div> */}
                  </div>
                </div>
                <div className={styles.playerBox}>
                  <div className={styles.playerBatting}>
                    <div className={styles.player1}>
                      <div className={styles.playerBatting1}>
                        <div className="playerName">
                          {scoreCard?.response?.batsmen &&
                          scoreCard.response.batsmen.length > 0
                            ? scoreCard.response.batsmen[0]?.name ?? "-"
                            : "-"}
                        </div>
                        <div className="playerScore">
                          {scoreCard?.response?.batsmen &&
                          scoreCard.response.batsmen.length > 0
                            ? scoreCard.response.batsmen[0]?.runs ?? "-"
                            : "-"}
                          {/* (12) */}
                        </div>
                      </div>
                    </div>
                    <div className={styles.player2}>
                      <div className={styles.playerBatting2}>
                        <div className={styles.playerName}>
                          {scoreCard?.response?.batsmen &&
                          scoreCard.response.batsmen.length > 0
                            ? scoreCard.response.batsmen[1]?.name ?? "-"
                            : "-"}
                        </div>
                        <div className={styles.playerScore}>
                          {scoreCard?.response?.batsmen &&
                          scoreCard.response.batsmen.length > 0
                            ? scoreCard.response.batsmen[1]?.runs ?? "-"
                            : "-"}
                          {/* (12) */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playerBowling}>
                    <div className={styles.playerBowling1}>
                      <div className={styles.playerName}>
                        {scoreCard?.response?.bowlers &&
                        scoreCard.response.bowlers.length > 0
                          ? scoreCard.response.bowlers[0]?.name ?? "-"
                          : "-"}
                      </div>
                      <div className={styles.playerScore}>
                        {scoreCard?.response?.bowlers &&
                        scoreCard.response.bowlers.length > 0
                          ? scoreCard.response.bowlers[0]?.runs_conceded ?? "-"
                          : "-"}
                      </div>
                    </div>
                    <div className={styles.playerBowling2}>
                      <div className={styles.playerName}>
                        {scoreCard?.response?.bowlers &&
                        scoreCard.response.bowlers.length > 0
                          ? scoreCard.response.bowlers[1]?.name ?? "-"
                          : "-"}
                      </div>
                      <div className={styles.playerScore}>
                        {scoreCard?.response?.bowlers &&
                        scoreCard.response.bowlers.length > 0
                          ? scoreCard.response.bowlers[1]?.runs_conceded ?? "-"
                          : "-"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.teamSelector}>
                <div
                  onClick={() => handleTeamChange1()}
                  className={
                    inning === 2
                      ? `${styles.teamA}`
                      : ` ${styles.teamA} ${styles.active}`
                  }
                >
                  {matchInfo?.response?.teama?.name || "Team A"}
                </div>
                <div
                  onClick={() => handleTeamChange2()}
                  className={
                    inning === 1
                      ? `${styles.teamB}`
                      : ` ${styles.teamB} ${styles.active}`
                  }
                >
                  {matchInfo?.response?.teamb?.name || "Team B"}
                </div>
              </div>

              <div className={styles.commentaryList}>
                {commentary?.response?.commentaries
                  ?.reverse()
                  .map((commentary, index) => {
                    return (
                      <CommentaryBox
                        key={index}
                        text={
                          commentary?.commentary ? commentary.commentary : "-"
                        }
                        over={commentary?.over ? commentary.over : "0"}
                        ball={commentary?.ball ? commentary.ball : "0"}
                        run={commentary?.run ? commentary.run : "0"}
                        eventType={commentary?.event || "-"}
                        runsInOver={
                          commentary?.event === "overend"
                            ? (commentary?.bats[0]?.runs || 0) +
                              (commentary?.bats[1]?.runs || 0)
                            : null
                        }
                        howOut={
                          commentary?.event === "wicket"
                            ? commentary?.how_out || ""
                            : ""
                        }
                      />
                    );
                  })}
              </div>
            </div>
            {/* <div className={styles.headerBox}>
              <HeaderBox />
            </div>
            <div className={styles.faqs}>
              <FaqLive />
            </div> */}
          </div>
          {/* <div className={styles.containerRight}>
            <PostListBar category="cricket" />
          </div> */}
          {/* <Commentary /> */}
        </div>
      </div>
    </>
  );
};

export default LiveScoreCommentaryPage;
