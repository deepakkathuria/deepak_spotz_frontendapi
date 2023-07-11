import NavBarSec from "../../../../../components/scorePage/NavBarSec";
import ScorePanel from "../../../../../components/scorePage/ScorePanel";
import AudioBar from "../../../../../components/scores/AudioBar";
import NavBarTertiary from "../../../../../components/scores/NavBarTertiary";
import React from "react";
import CommentaryBox from "../../../../../components/scorePage/Commentary/CommentaryBox";
import styles from "../../../../../components/scores/NavBarTertiary.module.css";
import Link from "next/link";
import Commentary from "@/components/scorePage/Commentary";

const page = ({ params }) => {
  const { "series-id": seriesId } = params;
  const seriesIdInt = parseInt(seriesId, 10);

  const { "series-name": seriesName } = params;
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
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
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
        </div>
        {/* <Commentary /> */}
      </div>
    </>
  );
};

export default page;
