import React from "react";
import styles from "./ScorePanel.module.css";
import Image from "next/image";

const ScorePanel = (props) => {
  // console.log('ScoreA:', props.scoreTeamA)
  // console.log('ScoreB:', props.scoreTeamB)
  // console.log('overA:', props.overTeamA)
  // console.log('overB:', props.overTeamB)
  // console.log(props.batsman_idA, "batssssssssss");
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
                  {props?.batsA ? props.batsA : "-"}
                </td>
                <td className={styles.tableDataBody}>{props?.runsA}</td>
                <td className={styles.tableDataBody}>{props.balls_facedA}</td>
                <td className={styles.tableDataBody}>{props.foursA}</td>
                <td className={styles.tableDataBody}>{props.sixesA}</td>
                <td className={styles.tableDataBody}>{props.strike_rateA}</td>
              </tr>

              <tr className={styles.tableRow}>
                <td className={`${styles.tableDataBody} ${styles.playerName}`}>
                  {props?.batsB ? props.batsB : "-"}
                </td>
                <td className={styles.tableDataBody}>{props?.runsB}</td>
                <td className={styles.tableDataBody}>{props.balls_facedB}</td>
                <td className={styles.tableDataBody}>{props.foursB}</td>
                <td className={styles.tableDataBody}>{props.sixesB}</td>
                <td className={styles.tableDataBody}>{props.strike_rateB}</td>
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
                  {props.bowlerNameA}
                </td>
                {/* <td className={styles.tableDataBody}>{props.bowlerIdA}</td> */}
                <td className={styles.tableDataBody}>{props.bowlerOversA}</td>
                <td className={styles.tableDataBody}>{props.bowlerMaidensA}</td>
                <td className={styles.tableDataBody}>{props.bowlerRunsConcededA}</td>
                <td className={styles.tableDataBody}>{props.bowlerWicketsA}</td>
                <td className={styles.tableDataBody}>{props.bowlerEconA}</td>
              </tr>

              <tr className={styles.tableRow}>
                <td className={`${styles.tableDataBody} ${styles.playerName}`}>
                  {props.bowlerNameB}
                </td>
                {/* <td className={styles.tableDataBody}>{props.bowlerIdB}</td> */}
                <td className={styles.tableDataBody}>{props.bowlerOversB}</td>
                <td className={styles.tableDataBody}>{props.bowlerMaidensB}</td>
                <td className={styles.tableDataBody}>{props.bowlerRunsConcededB}</td>
                <td className={styles.tableDataBody}>{props.bowlerWicketsB}</td>
                <td className={styles.tableDataBody}>{props.bowlerEconB}</td>
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
