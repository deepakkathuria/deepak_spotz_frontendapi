import NavBarSec from "../../../../../components/scorePage/NavBarSec";
import ScorePanel from "../../../../../components/scorePage/ScorePanel";
import AudioBar from "../../../../../components/scores/AudioBar";
import NavBarTertiary from "../../../../../components/scores/NavBarTertiary";
import React from "react";
import CommentaryBox from "../../../../../components/scorePage/Commentary/CommentaryBox";
import styles from "../../../../../components/scores/NavBarTertiary.module.css";
import Link from "next/link";
import Commentary from "@/components/scorePage/Commentary";
import UpdatesSound from "@/components/common/UpdatesSound";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
import Breadcrumb from "@/components/common/Breadcrumb";
import PostListBar from "@/components/common/PostListBar";

const fetchMatchInfo = async (matchId) => {
  const res = await fetch(`${baseUrl}matches/${matchId}`, {
    next: { revalidate: 2 },
  });
  const matchInfo = await res.json();
  return matchInfo;
};

const page = async ({ params }) => {
  const { "series-id": seriesId } = params;
  const seriesIdInt = parseInt(seriesId, 10);

  const { "series-name": seriesName } = params;
  const matchInfo = await fetchMatchInfo(seriesIdInt);
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
      <div className="container marginTop4">
        <NavBarSec />
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
              logoTeamA={matchInfo?.teama_logo_url ?? ""}
              logoTeamB={matchInfo?.teamb_logo_url ?? ""}
              nameTeamA={matchInfo?.teama_name ?? ""}
              nameTeamB={matchInfo?.teamb_name ?? ""}
              overTeamA={matchInfo?.teama_overs ?? ""}
              overTeamB={matchInfo?.teamb_overs ?? ""}
              scoreTeamA={matchInfo?.teama_scores ?? ""}
              scoreTeamB={matchInfo?.teamb_scores ?? ""}
              currentStatus={matchInfo?.status_note ?? ""}
            />
            <AudioBar />
            {/* <NavBarTertiary activeTab="commentary" /> */}
            <div className="nav">
              <div className={styles.container}>
                <Link href={`cricket-series/${seriesIdInt}/${seriesName}`}>
                  <p>Info</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-full-commentary`}
                >
                  <p className={styles.active}>Commentary</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/live-cricket-match-blog`}
                >
                  <p>Live Blog</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/live-cricket-scorecard/`}
                >
                  <p>Scorecard</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-squads`}
                >
                  <p>Teams</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-videos`}
                >
                  <p>Videos</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-news`}
                >
                  <p>News</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-photos`}
                >
                  <p>Photos</p>
                </Link>

                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-wagon`}
                >
                  <p>Wagon Wheel</p>
                </Link>

                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-manhattan`}
                >
                  <p>Manhattan</p>
                </Link>
              </div>
            </div>

            <div className="commentaries">
              <div className={styles.commentaryStatBox}>
                <div className={styles.overScore}>
                  <div className={styles.overRuns}>
                    <div className={styles.over}>Over 20</div>
                    <div className={styles.runs}>18 runs</div>
                  </div>
                  <div className={styles.score}>
                    <div className={styles.outOfRuns}>India:156/10</div>
                    <div className={styles.runRate}>CRR:7.32</div>
                  </div>
                </div>
                <div className={styles.playerBox}>
                  <div className={styles.playerBatting}>
                    <div className={styles.player1}>
                      <div className={styles.playerBatting1}>
                        <div className="playerName">Virat Kohli</div>
                        <div className="playerScore">19(12)</div>
                      </div>
                    </div>
                    <div className={styles.player2}>
                      <div className={styles.playerBatting2}>
                        <div className={styles.playerName}>Virat Kohli</div>
                        <div className={styles.playerScore}>19(12)</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.playerBowling}>
                    <div className={styles.playerBowling1}>
                      <div className={styles.playerName}>Arshdeep Singh</div>
                      <div className={styles.playerScore}>(4-0-35-2)</div>
                    </div>
                    <div className={styles.playerBowling2}>
                      {/* <div className="playerBowling"> */}
                      <div className={styles.playerName}>Arshdeep Singh</div>
                      <div className={styles.playerScore}>(4-2-33-2)</div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="commentaryList">
                <CommentaryBox />
                <CommentaryBox />
                <CommentaryBox />
                <CommentaryBox />
                <CommentaryBox />
                <CommentaryBox />
                <CommentaryBox />
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
