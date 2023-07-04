import React from "react";
// import ScoreCard from "@/components/common/ScoreCard";
import styles from "./scoreboard.module.css";

const ScoreBoard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.over}>
            Over 20 <span> 18 runs</span>
          </div>
          <div className={styles.score}>
            India : 156/10 <span> CRR: 7.32</span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.battingTeam}>
            <div className={styles.battingPlayer1}>
              <div className="name">Virat Kohli</div>
              <div className="score">19(38)</div>
            </div>
            <div className={styles.battingPlayer2}>
              <div className="name">Faf du Plasis</div>
              <div className="score">9(16)</div>
            </div>
          </div>
          <div className={styles.bowlingTeam}>
            <div className={styles.bowlingPlayer1}>
              <div className="player">Arshdeep Singh</div>
              <div className="score">0-0-0-1</div>
            </div>
            <div className={styles.bowlingPlayer2}>
              <div className="player">Ravindra S Jadeja</div>
              <div className="score">0-0-0-0</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
