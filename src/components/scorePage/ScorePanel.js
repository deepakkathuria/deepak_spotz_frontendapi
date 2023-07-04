import React from "react";
import styles from "./ScorePanel.module.css";
import Image from "next/image";

const ScorePanel = () => {
  return (
    <>
      <div className={styles.scorePanelContainer}>
        <div className={styles.liveIC}>Live</div>
        <div className={styles.countryDetails}>
          <div className={styles.country}>
            <div className={styles.nameLogo}>
              <div className={styles.logo}>
                <Image
                  src="https://thumbs.dreamstime.com/b/india-paper-flag-patriotic-background-national-138241478.jpg"
                  alt="country name"
                  width={18}
                  height={12}
                  priority
                />
              </div>
              <div className={styles.name}>India</div>
            </div>
            <div className={styles.scoreOver}>
              <span>(18.3 over)</span>156
            </div>
          </div>

          <div className={styles.country}>
            <div className={styles.nameLogo}>
              <div className={styles.logo}>
                <Image
                  src="https://thumbs.dreamstime.com/b/india-paper-flag-patriotic-background-national-138241478.jpg"
                  alt="country name"
                  width={18}
                  height={12}
                  priority
                />
              </div>
              <div className={styles.name}>SriLanka</div>
            </div>
            <div className={styles.scoreOver}>yet to bat</div>
          </div>
        </div>
        <div className={styles.matchPrediction}>
          <p>SL Women need 157 runs in 120 balls to win</p>
        </div>
        <div className={styles.battingStats}>
          <table className={styles.StatsTable}>
            <thead className={styles.StatsTableHead}>
              <tr className={styles.tableHead}>
                <th className={`${styles.tableHead} ${styles.tablePlay}`}>
                  Batting
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  R
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  B
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  4s
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  6s
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  SR
                </th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              <tr className={styles.tableRow}>
                <td className={`${styles.tableDataBody} ${styles.playerName}`}>
                  Gaurav Tanwar
                </td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
              </tr>

              <tr className={styles.tableRow}>
                <td className={`${styles.tableDataBody} ${styles.playerName}`}>
                  Gaurav Tanwar
                </td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.bowlingStats}>
          <table className={styles.StatsTable}>
            <thead className={styles.StatsTableHead}>
              <tr className={styles.tableHead}>
                <th className={`${styles.tableHead} ${styles.tablePlay}`}>
                  Bowling
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  O
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  M
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  R
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  W
                </th>
                <th className={`${styles.tableHead} ${styles.tableMetric}`}>
                  ECO
                </th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              <tr className={styles.tableRow}>
                <td className={`${styles.tableDataBody} ${styles.playerName}`}>
                  Gaurav Tanwar
                </td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
              </tr>

              <tr className={styles.tableRow}>
                <td className={`${styles.tableDataBody} ${styles.playerName}`}>
                  Gaurav Tanwar
                </td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
                <td className={styles.tableDataBody}>1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.tossResult}>
          <p>India won the toss, (bowling first)</p>
        </div>
      </div>
    </>
  );
};

export default ScorePanel;
