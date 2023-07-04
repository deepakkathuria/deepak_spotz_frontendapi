import React from "react";
import styles from "./ScoreCardLive.module.css";
import TeamSelector from "./TeamSelector";
import PlayerScoreStats from "./PlayerScoreStats";

const ScoreCardLive = () => {
  return (
    <>
      <TeamSelector />
      <PlayerScoreStats />
    </>
  );
};

export default ScoreCardLive;
