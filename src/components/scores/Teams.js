import React from "react";
import styles from "./Teams.module.css";
import Link from "next/link";
import slugify from "slugify";

const Teams = (props) => {
  console.log(props.data.response.teama.squads, "fsjdbhfhsbd");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.teamA}>{props?.nameTeamA || "Team A"}</div>
          <div className={styles.teamB}>{props?.nameTeamB || "Team B"}</div>
        </div>
        <div className={styles.contentMain}>
          <div className={styles.playerTeamA}>
            {props?.data?.response?.teama?.squads?.map((entry, index) => {
              return (
                <Link
                  key={index}
                  href={`/cricketers/${slugify(props?.nameTeamA, {
                    remove: /[*+~.()'"!:@]/g,
                  }).toLowerCase()}/${slugify(entry?.name, {
                    remove: /[*+~.()'"!:@]/g,
                  }).toLowerCase()}-${entry?.player_id}`}
                >
                  <div className={styles.player}>
                    <div className={styles.photo}></div>
                    <div className={styles.nameRole}>
                      <div className={styles.name}>{entry?.name ?? "-"}</div>
                      <div className={styles.role}>{entry?.role ?? "-"}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* teamB */}
          <div className={styles.playerTeamB}>
            {props?.data?.response?.teamb?.squads?.map((entry, index) => {
              return (
                <Link
                  key={index}
                  href={`/cricketers/${slugify(props?.nameTeamB, {
                    remove: /[*+~.()'"!:@]/g,
                  }).toLowerCase()}/${slugify(entry?.name, {
                    remove: /[*+~.()'"!:@]/g,
                  }).toLowerCase()}-${entry?.player_id}`}
                >
                  <div className={styles.player}>
                    <div className={styles.photo}></div>
                    <div className={styles.nameRole}>
                      <div className={styles.name}>{entry?.name ?? "-"}</div>
                      <div className={styles.role}>{entry?.role ?? "-"}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
