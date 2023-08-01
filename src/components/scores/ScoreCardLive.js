import React from "react";
import styles from "./ScoreCardLive.module.css";
import TeamSelector from "./TeamSelector";
import PlayerScoreStats from "./PlayerScoreStats";

const ScoreCardLive = (props) => {
  return (
    <>
      {/* <TeamSelector /> */}
      <PlayerScoreStats data={props?.data} />
    </>
  );
};

export default ScoreCardLive;
