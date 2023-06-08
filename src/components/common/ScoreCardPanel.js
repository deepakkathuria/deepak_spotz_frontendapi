import React from "react";
import ScoreCard from "./ScoreCard";
import styles from "../styles/ScoreCardPanel.module.css";

const ScoreCardPanel = () => {
  return (
    <>
      <div className={styles.scoreCardPanelContainer}>
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
      </div>
    </>
  );
};

export default ScoreCardPanel;
