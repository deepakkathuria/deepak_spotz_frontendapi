import React from "react";
import ScorePanel from "../../../../../components/scorePage/ScorePanel";
import NavBarSec from "../../../../../components/scorePage/NavBarSec";
import AudioBar from "../../../../../components/scores/AudioBar";
import NavBarTertiary from "../../../../../components/scores/NavBarTertiary";
import Link from "next/link";
import styles from "../../../../../components/scores/NavBarTertiary.module.css";
import ScoreCardLive from "@/components/scores/ScoreCardLive";
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
        {/* <NavBarTertiary activeTab="score-card-live" /> */}
        <div className="nav">
          <div className={styles.container}>
            <Link href={`cricket-series/${seriesIdInt}/${seriesName}`}>
              <p>Info</p>
            </Link>
            <Link
              href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-full-commentary`}
            >
              <p>Commentary</p>
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
              <p className={styles.active}>Manhattan</p>
            </Link>
          </div>
        </div>
        {/* <ScoreCardLive /> */}
        <h2>Manhattan coming soon...</h2>
      </div>
    </>
  );
};

export default page;
