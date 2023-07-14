import React from "react";
import ScorePanel from "../../../../components/scorePage/ScorePanel";
import NavBarSec from "../../../../components/scorePage/NavBarSec";
import AudioBar from "../../../../components/scores/AudioBar";
import NavBarTertiary from "../../../../components/scores/NavBarTertiary";
import InfoTable from "@/components/scores/InfoTable";
import Link from "next/link";
import styles from "../../../../components/scores/NavBarTertiary.module.css";
import UpdatesSound from "@/components/common/UpdatesSound";

const page = ({ params }) => {
  // const {`series-id`} = params
  const { "series-id": seriesId } = params;
  const seriesIdInt = parseInt(seriesId, 10);

  const { "series-name": seriesName } = params;
  // const { 'series-id': seriesId } = params;

  // console.log(seriesName, "iddddd", typeof seriesName);
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <div style={{ marginTop: "2rem" }} className={styles.soundUpdateDiv}>
          <UpdatesSound />
        </div>
        <ScorePanel />
        <AudioBar />
        <div className="nav">
          <div className={styles.container}>
            <Link href={`cricket-series/${seriesIdInt}/${seriesName}`}>
              <p className={styles.active}>Info</p>
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
              <p>Manhattan</p>
            </Link>
          </div>
        </div>
        {/* <NavBarTertiary
        activeTab="live" // seriesId={seriesIdInt}
        seriesTitle={seriesName}
        /> */}
        <InfoTable />
      </div>
    </>
  );
};

export default page;
