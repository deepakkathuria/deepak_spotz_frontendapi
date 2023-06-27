import React from "react";
import styles from "./ScorePanel.module.css";

const ScorePanel = () => {
  return (
    <>
      <div className={styles.scorePanelContainer}>
        <div className={styles.liveIC}>Live</div>
        <div className={styles.countryDetails}>
          <div className={styles.country}>
            <div className={styles.nameLogo}>India</div>
            <div className={styles.scoreOver}>
              <span>(18.3 over)</span>156
            </div>
          </div>

          <div className={styles.country}>
            <div className={styles.nameLogo}>Sri Lanka</div>
            <div className={styles.scoreOver}>yet to bat</div>
          </div>
        </div>
        <div className={styles.matchPrediction}>
          <p>SL Women need 157 runs in 120 balls to win</p>
        </div>
        <div className={styles.battingStats}>
          <table>
            <th>
              <td>Batting</td>
              <td>R</td>
              <td>B</td>
              <td>4s</td>
              <td>6s</td>
              <td>SR</td>
            </th>
            <tr>
              <td>Poonam Yadav</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>100.00</td>
            </tr>
            <tr>
              <td>Poonam Yadav</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>100.00</td>
            </tr>
            <tr>
              <td>Poonam Yadav</td>
              <td>1</td>
              <td>1</td>
              <td>0</td>
              <td>0</td>
              <td>100.00</td>
            </tr>
          </table>
        </div>
        <div className={styles.bowlingStats}></div>
      </div>
    </>
  );
};

export default ScorePanel;
