import React from "react";
import styles from "./Teams.module.css";

const Teams = (props) => {
  console.log(props.data.response.teama.squads, "fsjdbhfhsbd");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.teamA}>India</div>
          <div className={styles.teamB}>Sri Lanka</div>
        </div>
        <div className={styles.contentMain}>
          <div className={styles.playerTeamA}>
            {props?.data?.response?.teama?.squads?.map((entry, index) => {
              return (
                <div key={index} className={styles.player}>
                  <div className={styles.photo}></div>
                  <div className={styles.nameRole}>
                    <div className={styles.name}>{entry?.name ?? "-"}</div>
                    <div className={styles.role}>{entry?.role ?? "-"}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* teamB */}
          <div className={styles.playerTeamB}>
            {props?.data?.response?.teamb?.squads?.map((entry, index) => {
              return (
                <div key={index} className={styles.player}>
                  <div className={styles.photo}></div>
                  <div className={styles.nameRole}>
                    <div className={styles.name}>{entry?.name ?? "-"}</div>
                    <div className={styles.role}>{entry?.role ?? "-"}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
