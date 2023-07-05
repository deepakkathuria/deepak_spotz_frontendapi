import React from "react";
import styles from "./Teams.module.css";

const Teams = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.teamA}>India</div>
          <div className={styles.teamB}>Sri Lanka</div>
        </div>
        <div className={styles.contentMain}>
          <div className={styles.playerTeamA}>
            <div className={styles.player}>
              <div className={styles.photo}>.</div>
              <div className={styles.nameRole}>
                <div className={styles.name}>Mithali Raj</div>
                <div className={styles.role}>Right Handed Bat</div>
              </div>
            </div>

            <div className={styles.player}>
              <div className={styles.photo}>.</div>
              <div className={styles.nameRole}>
                <div className={styles.name}>Mithali Raj</div>
                <div className={styles.role}>Right Handed Bat</div>
              </div>
            </div>

            <div className={styles.player}>
              <div className={styles.photo}>.</div>
              <div className={styles.nameRole}>
                <div className={styles.name}>Mithali Raj</div>
                <div className={styles.role}>Right Handed Bat</div>
              </div>
            </div>
          </div>
          <div className={styles.playerTeamB}>
            <div className={styles.player}>
              <div className={styles.photo}>.</div>
              <div className={styles.nameRole}>
                <div className={styles.name}>Mithali Raj</div>
                <div className={styles.role}>Right Handed Bat</div>
              </div>
            </div>

            <div className={styles.player}>
              <div className={styles.photo}>.</div>
              <div className={styles.nameRole}>
                <div className={styles.name}>Mithali Raj</div>
                <div className={styles.role}>Right Handed Bat</div>
              </div>
            </div>

            <div className={styles.player}>
              <div className={styles.photo}>.</div>
              <div className={styles.nameRole}>
                <div className={styles.name}>Mithali Raj</div>
                <div className={styles.role}>Right Handed Bat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
