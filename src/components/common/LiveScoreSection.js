// "use client";
import React from "react";
import UpdatesSound from "./UpdatesSound";
import ScoreCardPanel from "./ScoreCardPanel";
import styles from "../../app/page.module.css";
// import dynamic from "next/dynamic";
import CardSlider from "../home/CardSlider";

const LiveScoreSection = () => {
  return (
    <>
      <div className={styles.updateSoundDiv}>
        
      </div>
      <div className={styles.scoresDiv}>
        <ScoreCardPanel display ={true} />
        
      </div>
    </>
  );
};

export default LiveScoreSection;
// export default dynamic(() => Promise.resolve(LiveScoreSection, { ssr: false }));
