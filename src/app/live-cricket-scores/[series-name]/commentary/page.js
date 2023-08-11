import NavBarSec from "../../../../components/scorePage/NavBarSec";
import ScorePanel from "../../../../components/scorePage/ScorePanel";
import AudioBar from "../../../../components/scores/AudioBar";
import NavBarTertiary from "../../../../components/scores/NavBarTertiary";
import React from "react";
import CommentaryBox from "../../../../components/scorePage/Commentary/CommentaryBox";
import styles from "../../../../components/scores/NavBarTertiary.module.css";
import Link from "next/link";
// import Commentary from "@/components/scorePage/Commentary";
import UpdatesSound from "../../../../components/common/UpdatesSound";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import Breadcrumb from "../../../../components/common/Breadcrumb";
import PostListBar from "../../../../components/common/PostListBar";
import NavSec from "../../../../components/liveScore/NavSec";

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

const fetchMatchCommentary = async (matchId) => {
  const res = await fetch(
    `${baseUrl}/matches/${matchId}/innings/1/commentary?token=${key}`,
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

const page = async ({ params }) => {
  const { "series-name": seriesName } = params;
  const seriesIdInt = seriesName.split("-")[seriesName.split("-").length - 1];

  const matchInfo = await fetchMatchInfo(seriesIdInt);
  const data = matchInfo.response;
  const scoreCard = await fetchMatchScoreCard(seriesIdInt);

  const commentaryInfo = await fetchMatchCommentary(seriesIdInt);
  const commentaryList = commentaryInfo?.response?.commentaries.reverse();

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
      name: `CRICKET FULL COMMENTARY`,
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
                  ? scoreCard.response.batsmen[0]?.name ?? ""
                  : ""
              }
              batsB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1]?.name ?? ""
                  : ""
              }
              batsman_idA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0]?.batsman_id ?? ""
                  : ""
              }
              batsman_idB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1]?.batsman_id ?? ""
                  : ""
              }
              runsA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0]?.runs ?? ""
                  : ""
              }
              runsB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1]?.runs ?? ""
                  : ""
              }
              balls_facedA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0]?.balls_faced ?? ""
                  : ""
              }
              balls_facedB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1]?.balls_faced ?? ""
                  : ""
              }
              foursA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0]?.fours ?? ""
                  : ""
              }
              foursB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1]?.fours ?? ""
                  : ""
              }
              sixesA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0]?.sixes ?? ""
                  : ""
              }
              sixesB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1]?.sixes ?? ""
                  : ""
              }
              strike_rateA={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 0
                  ? scoreCard.response.batsmen[0]?.strike_rate ?? ""
                  : ""
              }
              strike_rateB={
                scoreCard?.response?.batsmen &&
                scoreCard.response.batsmen.length > 1
                  ? scoreCard.response.batsmen[1]?.strike_rate ?? ""
                  : ""
              }
              // bowlers data
              bowlerNameA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0]?.name ?? ""
                  : ""
              }
              bowlerNameB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1]?.name ?? ""
                  : ""
              }
              bowlerIdA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0]?.bowler_id ?? ""
                  : ""
              }
              bowlerIdB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1]?.bowler_id ?? ""
                  : ""
              }
              bowlerOversA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0]?.overs ?? ""
                  : ""
              }
              bowlerOversB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1]?.overs ?? ""
                  : ""
              }
              bowlerRunsConcededA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0]?.runs_conceded ?? ""
                  : ""
              }
              bowlerRunsConcededB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1]?.runs_conceded ?? ""
                  : ""
              }
              bowlerWicketsA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0]?.wickets ?? ""
                  : ""
              }
              bowlerWicketsB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1]?.wickets ?? ""
                  : ""
              }
              bowlerMaidensA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0]?.maidens ?? ""
                  : ""
              }
              bowlerMaidensB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1]?.maidens ?? ""
                  : ""
              }
              bowlerEconA={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 0
                  ? scoreCard.response.bowlers[0]?.econ ?? ""
                  : ""
              }
              bowlerEconB={
                scoreCard?.response?.bowlers &&
                scoreCard.response.bowlers.length > 1
                  ? scoreCard.response.bowlers[1]?.econ ?? ""
                  : ""
              }
            />
            <AudioBar />
            {/* <NavBarTertiary activeTab="commentary" /> */}
            <div className="nav">
              <NavSec active="commentary" seriesName={seriesName} />
            </div>

            <div className="commentaries">
              <div className={styles.commentaryStatBox}>
                <div className={styles.overScore}>
                  <div className={styles.overRuns}>
                    <div className={styles.over}>
                      Over {data?.teama?.scores ?? ""}
                    </div>
                    {/* <div className={styles.runs}>18 runs</div> */}
                  </div>
                  <div className={styles.score}>
                    <div className={styles.outOfRuns}>
                      {data?.teama?.name ?? ""}: {data?.teama?.scores ?? ""}
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
                            ? scoreCard.response.batsmen[0]?.name ?? ""
                            : ""}
                        </div>
                        <div className="playerScore">
                          {scoreCard?.response?.batsmen &&
                          scoreCard.response.batsmen.length > 0
                            ? scoreCard.response.batsmen[0]?.runs ?? ""
                            : ""}
                          (12)
                        </div>
                      </div>
                    </div>
                    <div className={styles.player2}>
                      <div className={styles.playerBatting2}>
                        <div className={styles.playerName}>
                          {scoreCard?.response?.batsmen &&
                          scoreCard.response.batsmen.length > 0
                            ? scoreCard.response.batsmen[1]?.name ?? ""
                            : ""}
                        </div>
                        <div className={styles.playerScore}>
                          {scoreCard?.response?.batsmen &&
                          scoreCard.response.batsmen.length > 0
                            ? scoreCard.response.batsmen[1]?.runs ?? ""
                            : ""}
                          (12)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playerBowling}>
                    <div className={styles.playerBowling1}>
                      <div className={styles.playerName}>
                        {scoreCard?.response?.bowlers &&
                        scoreCard.response.bowlers.length > 0
                          ? scoreCard.response.bowlers[0]?.name ?? ""
                          : ""}
                      </div>
                      <div className={styles.playerScore}>
                        {scoreCard?.response?.bowlers &&
                        scoreCard.response.bowlers.length > 0
                          ? scoreCard.response.bowlers[0]?.runs_conceded ?? ""
                          : ""}
                      </div>
                    </div>
                    <div className={styles.playerBowling2}>
                      {/* <div className="playerBowling"> */}
                      <div className={styles.playerName}>
                        {scoreCard?.response?.bowlers &&
                        scoreCard.response.bowlers.length > 0
                          ? scoreCard.response.bowlers[1]?.name ?? ""
                          : ""}
                      </div>
                      <div className={styles.playerScore}>
                        {scoreCard?.response?.bowlers &&
                        scoreCard.response.bowlers.length > 0
                          ? scoreCard.response.bowlers[1]?.runs_conceded ?? ""
                          : ""}
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="commentaryList">
                {commentaryList?.map((commentary, index) => {
                  // const last5Runs = commentaryList
                  //   .slice(Math.max(index - 4, 0), index + 1)
                  //   .map((c) => c.run ?? 0);

                  return (
                    <CommentaryBox
                      key={index}
                      text={
                        commentary?.commentary ? commentary.commentary : "-"
                      }
                      over={commentary?.over ? commentary.over : "-"}
                      ball={commentary?.ball ? commentary.ball : "-"}
                      run={commentary?.run ? commentary.run : "0"}
                      // last5Runs={last5Runs}
                      eventType={commentary?.event || ""}
                      runsInOver={
                        commentary?.event === "overend"
                          ? (commentary?.bats[0]?.runs || 0) +
                            (commentary?.bats[1]?.runs || 0)
                          : ""
                      }
                      // runsInOver={
                      //   commentary?.event === "overend"
                      //     ? commentary?.bats[0]?.runs || ""
                      //     : ""
                      // }
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
          </div>
          <div className={styles.containerRight}>
            <PostListBar category="cricket" />
          </div>
          {/* <Commentary /> */}
        </div>
      </div>
    </>
  );
};

export default page;
