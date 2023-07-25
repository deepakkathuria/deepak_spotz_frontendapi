import React from "react";
import styles from "./ScorePanel.module.css";
import Image from "next/image";

const ScorePanel = (props) => {
  console.log('ScoreA:', props.scoreTeamA)
  console.log('ScoreB:', props.scoreTeamB)
  console.log('overA:', props.overTeamA)
  console.log('overB:', props.overTeamB)
  return (
    <>
      <div className={styles.scorePanelContainer}>
        <div className={styles.liveIC}>Live</div>
        <div className={styles.countryDetails}>
          <div className={styles.country}>
            <div className={styles.nameLogo}>
              <div className={styles.logo}>
                <Image
                  src={props?.logoTeamA}
                  alt={props?.nameTeamA}
                  width={18}
                  height={12}
                  priority
                />
              </div>
              <div className={styles.name}>{props?.nameTeamA}</div>
            </div>
            <div className={styles.scoreOver}>
              <span>({props?.overTeamA} over)</span>
              {props?.scoreTeamA}
            </div>
          </div>

          <div className={styles.country}>
            <div className={styles.nameLogo}>
              <div className={styles.logo}>
                <Image
                  src={props?.logoTeamB}
                  alt={props?.nameTeamB}
                  width={18}
                  height={12}
                  priority
                />
              </div>
              <div className={styles.name}>{props?.nameTeamB}</div>
            </div>
            <div className={styles.scoreOver}>
              <span>({props?.overTeamB} over)</span>
              {props?.scoreTeamB}
            </div>
          </div>
        </div>
        <div className={styles.matchPrediction}>
          <p>{props?.currentStatus}</p>
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
