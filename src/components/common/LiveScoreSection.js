"use client"
import React from "react";
import UpdatesSound from "./UpdatesSound";
import ScoreCardPanel from "./ScoreCardPanel";
import styles from "../../app/page.module.css";

const LiveScoreSection = () => {
  return (
    <>
      <div className={styles.updateSoundDiv} style={{ marginBottom: "2rem" }}>
        <UpdatesSound />
      </div>
      <div className="scoresDiv" style={{ marginBottom: "4rem" }}>
        <ScoreCardPanel />
      </div>
    </>
  );
};

export default LiveScoreSection;
