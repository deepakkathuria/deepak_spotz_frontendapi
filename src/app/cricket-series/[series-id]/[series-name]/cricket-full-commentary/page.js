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

const page = ({ params }) => {
  const { "series-id": seriesId } = params;
  const seriesIdInt = parseInt(seriesId, 10);

  const { "series-name": seriesName } = params;
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <div style={{ marginTop: "2rem" }} className={styles.soundUpdateDiv}>
          <UpdatesSound />
        </div>
        <ScorePanel />
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
        {/* <Commentary /> */}
      </div>
    </>
  );
};

export default page;
