import React from "react";
import styles from "./NavBarTertiary.module.css";
import InfoTable from "./InfoTable";
import Commentary from "../scorePage/Commentary";
import LiveBlog from "./LiveBlog";
import ScoreCardLive from "./ScoreCardLive";
import Teams from "./Teams";

const NavBarTertiary = (props) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.active}>Info</p>
        <p>Commentary</p>
        <p>Live Blog</p>
        <p>Scorecard</p>
        <p>Teams</p>
        <p>Videos</p>
        <p>News</p>
        <p>Photos</p>
        <p>Wagon Wheel</p>
        <p>Manhattan</p>
      </div>

      <div className={styles.containerDetails}>
        {props.activeTab === "commentary" ? <Commentary /> : null}
        {props.activeTab === "live" ? <InfoTable /> : null}
        {props.activeTab === "live-blog" ? <LiveBlog /> : null}
        {props.activeTab === "score-card-live" ? <ScoreCardLive /> : null}
        {props.activeTab === "teams" ? <Teams /> : null}
      </div>
    </>
  );
};

export default NavBarTertiary;
