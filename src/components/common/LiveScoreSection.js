"use client"
import React from "react";
import UpdatesSound from "./UpdatesSound";
import ScoreCardPanel from "./ScoreCardPanel";
import styles from "../../app/page.module.css";

const LiveScoreSection = () => {
  return (
    <>
      <div className={styles.updateSoundDiv}>
        <UpdatesSound />
      </div>
      <div className={styles.scoresDiv}>
        <ScoreCardPanel />
      </div>
    </>
  );
};

export default LiveScoreSection;
