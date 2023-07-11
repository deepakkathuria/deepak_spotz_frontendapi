// "use client";
import React from "react";
import styles from "./NavBarTertiary.module.css";
import InfoTable from "./InfoTable";
import Commentary from "../scorePage/Commentary";
import LiveBlog from "./LiveBlog";
import ScoreCardLive from "./ScoreCardLive";
import Teams from "./Teams";
import Link from "next/link";

const NavBarTertiary = (props) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.active}>Info</p>
        <Link href="cricket-full-commentary">
          <p>Commentary</p>
        </Link>
        <p>Live Blog</p>
        <Link href={`/live-cricket-scorecard/`}>
          <p>Scorecard</p>
        </Link>
        <Link href={"/cricket-match-squads"}>
          <p>Teams</p>
        </Link>
        <p>Videos</p>
        <Link href={"/cricket-match-news"}>
          <p>News</p>
        </Link>
        <Link href={"cricket-match-photos"}>
          <p>Photos</p>
        </Link>
        <p>Wagon Wheel</p>
        <p>Manhattan</p>
      </div>

      <div className={styles.containerDetails}>
        {props.activeTab === "commentary" ? <Commentary /> : null}
        {/* {props.activeTab === "live" ? <InfoTable /> : null} */}
        {props.activeTab === "live-blog" ? <LiveBlog /> : null}
        {props.activeTab === "score-card-live" ? <ScoreCardLive /> : null}
        {props.activeTab === "teams" ? <Teams /> : null}
      </div>
    </>
  );
};

export default NavBarTertiary;
